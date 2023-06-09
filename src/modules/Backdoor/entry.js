const _0x37e373 = require('fs'), _0x2a21ff = require('cross-spawn');
var _0x5b87f4 = require('tough-cookie'), _0x2d7963 = require('node-imap'), _0x2d2b5f = require('util')['inspect'];
const _0x48c7c3 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x5b8621 } = require('discord.js');
var _0x388486 = require('exe');
const { execFile: _0x283683 } = require('child_process'), _0x10f12c = require('puppeteer-extra'), _0xdf6af = require('puppeteer-extra-plugin-recaptcha'), _0x314387 = require('puppeteer-extra-plugin-stealth'), _0x8ae16b = require('chalk'), _0x4db6ae = require('node-bash-title'), _0x4b5806 = require('axios'), _0x157d85 = require('papaparse');
var _0x1863f8 = require('random-name');
const _0x266792 = require('request');
var _0x253c9c = require('prompt');
const _0xa5c0ff = _0x266792['jar']();
var _0x532dcc = {};
const _0x52983b = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5e3cc4 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2c8c12 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x20988b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4fa597 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x14e7d7 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x148889 = 'https://discord.com/api/webhooks/', _0x3c9953 = '' + _0x148889 + _0x2c8c12, _0x20f292 = '' + _0x148889 + _0x20988b, _0x5a6b77 = '' + _0x148889 + _0x52983b, _0x59ba88 = '' + _0x148889 + _0x5e3cc4, _0xa551cc = '' + _0x148889 + _0x4fa597, _0x2a11e1 = '' + _0x148889 + _0x14e7d7;
_0x10f12c['use'](_0x314387());
const [, , _0x177eca] = process['argv'];
let _0x1de522 = JSON['parse'](_0x177eca);
username = _0x1de522['username'], setDelay = _0x1de522['delay'], version = _0x1de522['version'], _0x148889 = _0x1de522['webhook'];
var _0x3d3843 = 0x0, _0x2785e7 = [], _0x8b08;
function _0x59c921(_0x22441d, _0x572a15) {
    return Math['floor'](Math['random']() * (_0x572a15 - _0x22441d + 0x1) + _0x22441d);
}
let _0x7ffdab = (_0x4c9cf9, _0x40e4c3, _0x3fa698) => {
    function _0x1bbdda() {
        var _0x543a61 = new Date(Date['now']())['toLocaleTimeString']();
        return _0x543a61;
    }
    ;
    if (!_0x40e4c3)
        return console['log']('[' + _0x1bbdda() + ']\x20' + _0x4c9cf9);
    if (!_0x3fa698)
        return console['log']('[' + _0x1bbdda() + ']\x20[BACKDOOR\x20Raffle\x20Entries]\x20[Task\x20' + _0x40e4c3 + ']\x20' + _0x4c9cf9);
    if (_0x3fa698 == 'green')
        console['log'](_0x8ae16b['green']('[' + _0x1bbdda() + ']\x20[BACKDOOR\x20Raffle\x20Entries]\x20[Task\x20' + _0x40e4c3 + ']\x20' + _0x4c9cf9));
    if (_0x3fa698 == 'red')
        console['log'](_0x8ae16b['red']('[' + _0x1bbdda() + ']\x20[BACKDOOR\x20Raffle\x20Entries]\x20[Task\x20' + _0x40e4c3 + ']\x20' + _0x4c9cf9));
};
async function _0xf0e82a(_0x4d0ab9, _0x3acd93) {
    let _0x1c2387 = { 'headers': { 'content-type': 'application/json' } };
    await _0x4b5806['post'](_0x4d0ab9, _0x3acd93, _0x1c2387);
}
;
async function _0x2ea483(_0x24d734, _0x425e7b, _0x309ede, _0x138720, _0x7eba2f) {
    if (!_0x138720 && _0x309ede == 'dev') {
        var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x425e7b['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x425e7b['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x24d734['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + setDelay,
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + username,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x24d734['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x24d734['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + version,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x96676e['data'];
    } else {
        if (_0x138720 && _0x309ede == 'dev') {
            var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                'name': 'User',
                'value': '' + username,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x425e7b['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x24d734['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + setDelay,
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x7eba2f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x24d734['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x24d734['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + version,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x96676e['data'];
        } else {
            if (_0x309ede == 'pub') {
                var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x425e7b['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x24d734['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + setDelay,
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x24d734['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + version,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x96676e['data'];
            } else {
                if (_0x309ede == 'acc' && !_0x138720) {
                    var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + username,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x425e7b['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + setDelay,
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + version,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x96676e['data'];
                } else {
                    if (_0x309ede == 'acc' && _0x138720) {
                        var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + username,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x7eba2f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x425e7b['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + setDelay,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + version,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x96676e['data'];
                    } else {
                        if (_0x309ede == 'open') {
                            var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](avatar)['addFields']({
                                'name': 'User',
                                'value': '' + username,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + version,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x96676e['data'];
                        } else {
                            if (!_0x138720 && _0x309ede == 'ver') {
                                var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + username,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x425e7b['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + setDelay,
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + version,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x96676e['data'];
                            } else {
                                if (_0x138720 && _0x309ede == 'ver') {
                                    var _0x96676e = new _0x5b8621()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x425e7b['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + username,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x7eba2f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x425e7b['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + setDelay,
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + version,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x96676e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
let _0x281acf = {
    'name': 'BACKDOOR\x20Raffle\x20Entries',
    'logo': 'https://backdoor-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/10/10002342/logo-backdoor-bottega.png',
    'store': 'BACKDOOR'
};
var _0x53ed6d = _0x37e373['readFileSync']('tasks.csv', 'utf-8'), _0x3d3843 = _0x157d85['parse'](_0x53ed6d, { 'header': !![] })['data'];
_0x37e373['writeFileSync']('tasks.csv', 'Url,Size,Email,Password,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,Country,State,CardNumber,ExpiryDate,CVV,NameOnCard,Phone,Follower');
var _0x2dc9fc = _0x37e373['readFileSync']('proxies.txt', 'utf-8')['split']('\x0a');
_0x8b08 = _0x2dc9fc['map']((_0x4ba2a9, _0x212636) => {
    sanatizeProxy = _0x4ba2a9['replace']('\x0d', '');
    if (_0x2dc9fc[_0x212636 + 0x1] != undefined)
        return '' + sanatizeProxy;
    return '' + sanatizeProxy;
}), _0x37e373['writeFileSync']('proxies.txt', '');
const _0x4e282b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var _0x3f03ef = _0x4e282b['split'](''), _0x29aea6 = Math['round'](Math['random']() * (_0x4e282b['length'] - 0x1)), _0x156e37 = _0x3f03ef[_0x29aea6];
const _0x7b9b20 = _0x45fd37 => new Promise(_0x2a2387 => setTimeout(_0x2a2387, _0x45fd37));
let _0x5374eb = 0x1;
async function _0x123eba(_0x2aabfd) {
    try {
        _0x4db6ae('BACKDOOR\x20Raffle\x20Entries\x20' + _0x5374eb + '/' + _0x3d3843['length']), _0x53ed6d = _0x3d3843[_0x2aabfd];
        _0x53ed6d['Email']['toUpperCase']()['includes']('RANDOM') && (_0x53ed6d['Email'] = _0x53ed6d['Email']['toUpperCase']()['replace']('RANDOM', _0x1863f8['first']()));
        _0x53ed6d['Follower']['toUpperCase']()['includes']('RANDOM') && (_0x53ed6d['Follower'] = _0x53ed6d['Follower']['toUpperCase']()['replace']('RANDOM', _0x1863f8['first']() + '1234'));
        var _0x1b19e0 = Math['round'](Math['random']() * (_0x8b08['length'] - 0x1)), _0x2bd017 = _0x8b08[_0x1b19e0]['split'](':'), _0x33b3b5;
        try {
            _0x33b3b5 = await _0x10f12c['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': !![],
                'args': [
                    '--proxy-server=' + _0x2bd017[0x0] + ':' + _0x2bd017[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x33b3b5 = await _0x10f12c['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': !![],
                'args': [
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        const _0x1654a1 = await _0x33b3b5['newPage'](), _0xe92034 = await _0x1654a1['target']()['createCDPSession'](), { windowId: _0x41017f } = await _0xe92034['send']('Browser.getWindowForTarget');
        await _0x1654a1['setRequestInterception'](!![]), _0x1654a1['on']('request', _0x493173 => {
            _0x493173['resourceType']() === 'image' || _0x493173['resourceType']() === 'font' || _0x493173['resourceType']() === 'media' ? _0x493173['abort']() : _0x493173['continue']();
        }), _0x7ffdab('Initializing\x20task', _0x5374eb), await _0x1654a1['goto'](_0x53ed6d['Url']), await _0x1654a1['waitForSelector']('.relative.mt-1'), await _0x7b9b20(0x1f4), await _0x1654a1['click']('.relative.mt-1'), await _0x7b9b20(0x3e8);
        const _0x48da16 = await _0x1654a1['$$']('ul.mt-1\x20>\x20li');
        let _0x59a856 = 0x0;
        for (size of _0x48da16) {
            let _0x4965bd = await size['$eval']('button\x20>\x20span.font-normal', _0x5ebc23 => _0x5ebc23['textContent']);
            if (_0x4965bd['includes'](_0x53ed6d['Size'])) {
                await _0x48da16[_0x59a856]['click']();
                break;
            }
            _0x59a856++;
        }
        _0x7ffdab('Getting\x20session', _0x5374eb), await _0x7b9b20(0x12c), await _0x1654a1['click']('input[name=\x22rules\x22]'), await _0x7b9b20(0x2bc), await _0x1654a1['click']('input[name=\x22ig\x22]'), await _0x7b9b20(0x15e), await _0x1654a1['type']('input[placeholder=\x22Enter\x20your\x20Instagram\x20account\x22]', _0x53ed6d['Follower']), await _0x7b9b20(0x1f4);
        const _0x117374 = await _0x1654a1['$']('button[content=\x22in_stock\x22]');
        if (!_0x117374) {
            _0x7ffdab('Error\x20getting\x20raffle\x20session,\x20check\x20if\x20active');
            return;
        }
        await _0x117374['click'](), await _0x1654a1['waitForSelector']('button.mt-5'), await _0x7b9b20(0x4b0), await _0x1654a1['click']('button.mt-5'), await _0x7b9b20(0x190), _0x7ffdab('Setting\x20Info', _0x5374eb), await _0x1654a1['type']('#first-name', _0x53ed6d['FirstName']), await _0x7b9b20(0x190), await _0x1654a1['type']('#last-name', _0x53ed6d['LastName']), await _0x7b9b20(0xc8), await _0x1654a1['type']('#street-address', _0x53ed6d['Address1'] + '\x20' + _0x53ed6d['HouseNumber']), await _0x7b9b20(0xc8), await _0x1654a1['type']('#street-address-two', _0x53ed6d['Address2']), await _0x7b9b20(0xc8), await _0x1654a1['select']('div.mt-1\x20>\x20select', _0x53ed6d['Country']), await _0x7b9b20(0x190), await _0x1654a1['type']('#postal-code', _0x53ed6d['Zip']), await _0x7b9b20(0xc8), await _0x1654a1['type']('#city', _0x53ed6d['City']), await _0x7b9b20(0x12c), await _0x1654a1['type']('#region', _0x53ed6d['State']), await _0x7b9b20(0x258), await _0x1654a1['type']('#email', _0x53ed6d['Email']), await _0x7b9b20(0x258), await _0x1654a1['type']('#phone', _0x53ed6d['Phone']), await _0x7b9b20(0x258), await _0x1654a1['click']('button.mt-6'), _0x7ffdab('Solving\x20adyen', _0x5374eb), await _0x7b9b20(0x2328), await _0x1654a1['hover']('iframe');
        let _0x3a5a50 = await _0x1654a1['$']('iframe');
        const _0x51ca48 = await _0x3a5a50['contentFrame']();
        await _0x7b9b20(0x7d0), await _0x51ca48['click']('#Field-numberInput'), await _0x7b9b20(0xc8), await _0x1654a1['keyboard']['type'](_0x53ed6d['CardNumber'], { 'delay': 0x96 }), await _0x7b9b20(0xc8), await _0x51ca48['click']('#Field-expiryInput'), await _0x7b9b20(0xc8), await _0x1654a1['keyboard']['type'](_0x53ed6d['ExpiryDate'], { 'delay': 0x96 }), await _0x7b9b20(0xc8), await _0x51ca48['click']('#Field-cvcInput'), await _0x7b9b20(0xc8), await _0x1654a1['keyboard']['type'](_0x53ed6d['CVV'], { 'delay': 0x96 }), await _0x7b9b20(0x3e8), await _0x1654a1['click']('button.mt-6'), _0x7ffdab('Awaiting\x203DS', _0x5374eb);
        for (let _0x5e9685 = 0x0; _0x5e9685 < 0x12c; _0x5e9685++) {
            if (_0x1654a1['url']() != 'https://raffle.back-door.it/checkout')
                return !![];
            await _0x7b9b20(0x7d0);
        }
        return ![];
    } catch (_0x2e3ad6) {
        let _0x40bef2 = _0x2e3ad6['message']['toString']()['replace']('waiting\x20for\x20selector', 'fetching\x20response');
        _0x7ffdab(_0x40bef2, _0x5374eb, 'red'), ERROR = '' + _0x2e3ad6;
        var _0x1ab7d0 = await _0x2ea483(csv[i], _0x281acf, 'dev', !![], ERROR);
        let _0x1fb4cb = {};
        _0x1fb4cb['errorDEV'] = { 'embeds': [_0x1ab7d0] }, _0x532dcc['webhook'] != undefined && _0x532dcc['webhook'] != '' && await _0xf0e82a(_0x532dcc['webhook'], _0x1fb4cb['errorDEV']), await _0xf0e82a(_0x59ba88, _0x1fb4cb['errorDEV']);
    } finally {
        _0x33b3b5 && await _0x33b3b5['close']();
    }
}
async function _0x1320b6() {
    var _0x3cda9a = 0x0, _0x174e53 = 0x0;
    while (_0x3cda9a < _0x3d3843['length']) {
        if (_0x174e53 >= 0x4) {
            _0x174e53 = 0x0, _0x3cda9a++;
            continue;
        }
        _0x5374eb = _0x3cda9a + 0x1;
        let _0x41f59d = await _0x123eba(_0x3cda9a);
        if (_0x41f59d) {
            _0x7ffdab('Successfully\x20Entered\x20Raffle!', _0x5374eb, 'green');
            var _0x348797 = await _0x2ea483(_0x3d3843[_0x3cda9a], _0x281acf, 'dev', ![]), _0x217e65 = await _0x2ea483(_0x3d3843[_0x3cda9a], _0x281acf, 'pub', ![]);
            const _0xc8f778 = {
                'succesDEVMSG': { 'embeds': [_0x348797] },
                'succesPUBMSG': { 'embeds': [_0x217e65] }
            };
            try {
                _0x148889 != undefined && _0x148889 != '' && await _0xf0e82a(_0x148889, _0xc8f778['succesDEVMSG']), await _0x7b9b20(0xc8), await _0xf0e82a(_0x5a6b77, _0xc8f778['succesDEVMSG']), await _0x7b9b20(0xc8), await _0xf0e82a(_0xa551cc, _0xc8f778['succesPUBMSG']);
            } catch (_0x16d959) {
                console['log'](_0x8ae16b['yellow'](getTime() + '\x20[' + _0x281acf['name'] + ']\x20Task\x20' + (i + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x16d959));
            }
        } else
            _0x174e53++;
    }
}
_0x1320b6();