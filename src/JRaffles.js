
// 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const fs = require("fs");
const time = `${new Date().toDateString()} ${new Date().getHours()} ${new Date().getMinutes()} ${new Date().getSeconds()}`
function redirectConsoleToFile(filename) {
    const stream = fs.createWriteStream(filename, { flags: 'a' });
    const oldLog = console.log;
    // const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);

    console.log = function () {
        const args = Array.prototype.slice.call(arguments);
        const logString = args.join(' ') + '\n';
        // const encryptedData = cipher.update(logString, 'utf8', 'hex');
        stream.write(logString);
        oldLog.apply(console, args);
    };
}

redirectConsoleToFile(`../logs/log ${time}`);

var jar = require("tough-cookie");
var Imap = require('node-imap'),
    inspect = require('util').inspect;
const simpleParser = require('mailparser').simpleParser;
const { EmbedBuilder } = require('discord.js');
var exeCute = require('exe');
const { execFile } = require('child_process');
const puppeteer = require("puppeteer-extra");
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const chalk = require('chalk');
const setTitle = require('node-bash-title');
const axios = require('axios');
const Papa = require('papaparse');
var random = require('random-name');
const request = require("request");
var prompt = require("prompt");
const j = request.jar();
var settings = {};
const succesWebH = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj';
const errorWebH = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy';
const openWebH = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6';
const accountWebH = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
const publicWebH = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
const verWebH = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var webhook = 'https://discord.com/api/webhooks/';
var openWH = `${webhook}${openWebH}`
var accountWH = `${webhook}${accountWebH}`
var succesWH = `${webhook}${succesWebH}`;
var errorWH = `${webhook}${errorWebH}`;
var publicWH = `${webhook}${publicWebH}`;
var verWH = `${webhook}${verWebH}`;




const package = JSON.parse(fs.readFileSync("../package.json", "utf-8"));
const version = package.version;

var currentFile;
var currentProxy;
var taskCSV;
var taskFiles;
var proxyFiles;
var licenseKey;
var username;
var avatar;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe'
let auth = false;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789"
var lettersArray = letters.split('');

const AutoGitUpdate = require('auto-git-update');


const config = {
    repository: 'https://github.com/Jarno97/JRafflesBot',
    branch: 'main',
    fromReleases: false,
    tempLocation: 'C:/temp/jraffles',
    ignoreFiles: ['settings.json',
        'proxies.txt', 'tasks/maha.csv', 'tasks/footshop.csv', 'tasks/afew.csv', 'tasks/oqium.csv', 'tasks/patta.csv', 'accounts/patta.csv', 'tasks/kickz.csv', 'accounts/kickz-verified.csv', 'accounts/kickz-unverified.csv']
}

const updater = new AutoGitUpdate(config);

async function loadSettings() {
    // const afewCSV = fs.readFileSync('../tasks/afew.csv', 'utf8');
    // afew = Papa.parse(afewCSV, { header: true }).data;
    // const mahaCSV = fs.readFileSync('../tasks/maha.csv', 'utf-8');
    // maha = Papa.parse(mahaCSV, { header: true }).data;
    // const footshopCSV = fs.readFileSync('../tasks/footshop.csv', 'utf-8');
    // footshop = Papa.parse(footshopCSV, { header: true }).data;
    // const bstnCSV = fs.readFileSync('../tasks/bstn.csv', 'utf-8');
    // bstn = Papa.parse(bstnCSV, { header: true }).data;
    // const kickzCSV = fs.readFileSync('../tasks/kickz.csv', 'utf-8');
    // kickz = Papa.parse(kickzCSV, { header: true }).data;
    // const oqiumCSV = fs.readFileSync('../tasks/oqium.csv', 'utf-8');
    // oqium = Papa.parse(oqiumCSV, { header: true }).data;
    // const bouncewearCSV = fs.readFileSync('../tasks/bouncewear.csv', 'utf-8');
    // bouncewear = Papa.parse(bouncewearCSV, { header: true }).data;
    // const pattaCSV = fs.readFileSync('../tasks/patta.csv', 'utf-8');
    // patta = Papa.parse(pattaCSV, { header: true }).data;

    proxyFiles = fs.readdirSync('../proxies');
    taskFiles = fs.readdirSync('../tasks');
    if (!fs.existsSync('../accounts/fenom.csv')) {
        fs.writeFileSync('../accounts/fenom.csv', 'Email,Password\n');
    }
    if (!fs.existsSync('../accounts/paypal.csv')) {
        fs.writeFileSync('../accounts/paypal.csv', 'Email,Password,Proxy\n');
    }
    if (!fs.existsSync('../accounts/bstn.csv')) {
        fs.writeFileSync('../accounts/bstn.csv', 'Email,Password\n');
    }
    if (!fs.existsSync('../accounts/eql.csv')) {
        fs.writeFileSync('../accounts/eql.csv', 'Email,Password,Phone\n');
    }
    if (!fs.existsSync('../failed-tasks.csv')) {
        fs.writeFileSync('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\n')
    }
    if (!fs.existsSync('../successful-tasks.csv')) {
        fs.writeFileSync('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\n')
    }
    settings = JSON.parse(fs.readFileSync("../settings.json", "utf-8"));
    if (!settings.delay) {
        settings.delay = 60;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (!settings.threads) {
        settings.threads = 1;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (!settings.masterMail) {
        settings.masterMail = 'yourmail@gmail.com';
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (!settings.masterPassword) {
        settings.masterPassword = 'read the guide on how to get an APP PASSWORD';
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (!settings.captchaKey) {
        settings.captchaKey = '';
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (!settings.useRandomProxy) {
        settings.useRandomProxy = true;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));
    }
    if (!settings.shuffleTasks) {
        settings.shuffleTasks = false;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));
    }
    if (!settings.webhook) {
        settings.webhook = '';
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (settings.delay <= 5000) {
        settings.delay = settings.delay * 1000;

    }
    if (settings.AfewDelay) {
        delete settings.AfewDelay;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (settings.MahaDelay) {
        delete settings.MahaDelay;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    if (settings.footshopDelay) {
        delete settings.footshopDelay;
        fs.writeFileSync("../settings.json", JSON.stringify(settings, null, 2));

    }
    settings.MahaDelay = settings.delay
    webhook = settings.webhook
    licenseKey = settings.licenseKey

}

let testValues;

let afewProducts = [];



let afewProduct;
const delay = time => new Promise(res => setTimeout(res, time));

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

async function getLicense(license) {
    return axios.get(`https://api.hyper.co/v4/licenses/${license}`,
        { headers: { Authorization: `Bearer ${API_KEY}` } })
        .then((response) => response.data)
        .catch(() => null);
};

async function checkLicense(license) {
    console.clear();
    if (license == 'AWGH-0N92-JE6S-HOHU') {
        console.log('Please paste your key here:');
        var licensePrompt = await prompt.get('License');
        if (licensePrompt.License == 'AWGH-0N92-JE6S-HOHU') {
            console.log('Error please use the key on the JRaffles dashboard');
            await delay(3000)
            return checkLicense(license);
        }
        license = licensePrompt.License;
        settings.licenseKey = license;
        licenseKey = license;
        fs.writeFileSync("../settings.json", JSON.stringify(settings));

    }
    console.log(`Checking license ${licenseKey}...`);
    await delay(800);
    const licenseData = await getLicense(license);
    username = JSON.stringify(licenseData.user.discord.username).substring(1).slice(0, -1);
    avatar = JSON.stringify(licenseData.user.discord.avatar).substring(1).slice(0, -1);
    // console.log(licenseData);
    // await delay(400000)
    if (!licenseData) return console.log('License not found');

    if (!licenseData.user) return console.log('License not bound')

    if (licenseData.status === 'active') {
        console.log('License is good to go!');
        return auth = true;
    } else {
        console.log('Could not find license..');
        return auth = false;
    }

}

async function getModule() {
    var taskModule = await prompt.get('Module');
    console.clear();
    return taskModule.Module;
};

async function getSetting() {
    var Setting = await prompt.get('Setting');
    console.clear();
    return Setting.Setting;
}

async function getTaskFile(currentFunction) {
    var sortedFiles = []
    for (file of taskFiles) {
        var ts = fs.readFileSync(`../tasks/${file}`, 'utf-8');
        tsParse = Papa.parse(ts, { header: true }).data;
        if (tsParse[0].Store == currentFunction.store) {
            sortedFiles.push(file);
        }
    }
    // console.log(sortedFiles);
    if (!sortedFiles.length == 0) {
        taskFiles = sortedFiles;
    }
    // console.clear();
    console.log(`Choose A File to Run \n`)
    for (var t = 0; t < taskFiles.length; t++) {
        console.log(` (${t}) ${taskFiles[t]}`)
    }
    console.log('')
    var taskFile = await prompt.get('Task');
    if (taskFile.Task > taskFiles.length - 1 || isNaN(taskFile.Task) == true) {
        console.log('Invalid selection');
        await delay(1000);
        return getTaskFile();
    }
    var task = fs.readFileSync(`../tasks/${taskFiles[taskFile.Task]}`, 'utf-8');
    taskCSV = Papa.parse(task, { header: true }).data;
    console.clear();
    console.log(`Running ${chalk.blue(taskFiles[taskFile.Task])}`);
    currentFile = taskFiles[taskFile.Task]
    return taskCSV
}

async function getProxyFile() {
    console.clear();
    console.log(`Choose Proxies to Use \n`)
    for (var t = 0; t < proxyFiles.length; t++) {
        console.log(` (${t}) ${proxyFiles[t]}`)
    }
    console.log('')
    var proxyFile = await prompt.get('Proxies');
    if (proxyFile.Proxies > proxyFiles.length - 1 || isNaN(proxyFile.Proxies) == true) {
        console.log('Invalid selection');
        await delay(1000);
        return getProxyFile();
    }
    var proxys = fs.readFileSync(`../proxies/${proxyFiles[proxyFile.Proxies]}`, 'utf-8').split('\n');
    let proxy = proxys.map((proxy, index) => {
        sanatizeProxy = proxy.replace("\r", "");
        if (proxys[index + 1] != undefined) {
            return `${sanatizeProxy}`;
        }
        return `${sanatizeProxy}`;
    });
    currentProxy = proxyFiles[proxyFile.Proxies];
    console.clear();
    return proxy;
}

async function getValue() {
    var Value = await prompt.get('Value');
    console.clear();
    return Value.Value;
}

async function getFunction(modules) {
    console.clear();
    console.log('What would you like to do? \n');
    for (var m = 0; m < modules.length; m++) {
        console.log(` (${m}) [${modules[m].name}]`)
    };
    console.log('')
    var Module = await prompt.get('Module');
    return Module.Module
}

async function getPassword() {
    var pw = await prompt.get('Password');
    console.clear();
    return pw.Password;
};

async function getLinks() {
    var agLinks = await prompt.get('Links');
    return agLinks.Links;
};

async function getAfewProduct() {
    console.log(`Choose a Raffle to enter: \n`);
    for (var p = 0; p < afewProducts.length; p++) {
        console.log(` (${p}) ${afewProducts[p]}`)
    };
    console.log();
    let AP = await prompt.get('Product');
    console.clear();
    return AP.Product;
};

function getTime() {
    var time = new Date(Date.now()).toLocaleTimeString();
    return time;
};

function getDay() {
    var day = new Date(Date.now()).toLocaleString();
    return day.replace(',', '')
}



async function sendWebhook(url, content) {
    let config = {
        headers: {
            'content-type': 'application/json',
        }
    }
    if (version != 'devkey') {
        await axios.post(url, content, config);
        return
    }
    return console.log('devkey settings enabled, not sending webhooks');
};

async function makeEmbed(csv, module, mode, isError, e) {
    if (!isError && mode == 'dev') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Successful Raffle Entry')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields({ name: 'Store', value: `${module.store}`, inline: true })
            .addFields({ name: 'Size', value: `${csv.Size}`, inline: true })
            .addFields({ name: 'Delay', value: `${settings.delay}`, inline: true })
            .addFields({ name: 'User', value: `${username}`, inline: true })
            .addFields({ name: 'URL', value: `${csv.Url}`, inline: true })
            .addFields({ name: 'Mail', value: `${csv.Email}`, inline: true })
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (isError && mode == 'dev') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Failed Raffle Entry')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Size', value: `${csv.Size}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .addFields({ name: 'ERROR', value: `${e}`, inline: true })
            .addFields({ name: 'URL', value: `${csv.Url}` })
            .addFields({ name: 'Mail', value: `${csv.Email}`, inline: true })

            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (mode == 'pub') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Succesful Raffle Entry')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Size', value: `${csv.Size}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .addFields({ name: 'URL', value: `||${csv.Url}||` })
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (mode == 'acc' && !isError) {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Account Generated')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (mode == 'acc' && isError) {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Account Generation Failed')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
                { name: 'Error', value: `${e}`, inline: true },
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (mode == 'open') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('User Opened JRaffles')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(avatar)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (!isError && mode == 'ver') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Successful Verification')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    } else if (isError && mode == 'ver') {
        var embed = new EmbedBuilder()
            .setColor(0xc0d6d6)
            .setTitle('Verification Failed')
            .setAuthor({ name: 'JRaffles', iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg', url: 'https://twitter.com/JRaffles_' })
            .setThumbnail(module.logo)
            .addFields(
                { name: 'User', value: `${username}`, inline: true },
                { name: 'Error', value: `${e}`, inline: true },
                { name: 'Store', value: `${module.store}`, inline: true },
                { name: 'Delay', value: `${settings.delay}`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: `JRaffles v${version}`, iconURL: 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg' });
        return embed.data
    }
}

async function jig(csv, i) {
    var addressArray = csv[i].Address1.split('');
    var address2Array = csv[i].Address2.split('');
    var mailSplit = csv[i].Email.split('@');
    for (var l = 0; l < addressArray.length; l++) {
        if (addressArray[l] == 'X') {
            var pos2 = Math.round(Math.random() * (letters.length - 1));
            addressArray[l] = lettersArray[pos2];
        }
    };
    for (var l = 0; l < address2Array.length; l++) {
        if (address2Array[l] == 'X') {
            var pos2 = Math.round(Math.random() * (letters.length - 1));
            address2Array[l] = lettersArray[pos2];
        }
    };
    if (csv[i].FirstName.toUpperCase() == 'RANDOM') {
        csv[i].FirstName = random.first();
    }
    if (csv[i].LastName.toUpperCase() == 'RANDOM') {
        csv[i].LastName = random.last();
    }
    if (mailSplit[0].toUpperCase() == 'RANDOM') {
        mailSplit[0] = `${random.first()}${random.last()}${randomIntFromInterval(1, 999)}@`;
    } else {
        mailSplit[0] = `${mailSplit[0]}@`
    }
    csv[i].Email = mailSplit.join('');
    csv[i].Address1 = addressArray.join('');
    csv[i].Address2 = address2Array.join('');
    if (csv[i].Phone == 'RANDOM') {
        csv[i].Phone = `0${randomIntFromInterval(100000000, 999999999)}`;
    }
    if (csv[i].Follower.toUpperCase() == 'RANDOM') {

        var randomNumbers = randomIntFromInterval(1, 9999);
        csv[i].Follower = `${random.first()}${random.last()}${randomNumbers} `
    }
    if (csv[i].HouseNumber.toUpperCase() == 'RANDOM') {
        csv[i].HouseNumber = randomIntFromInterval(1, 200);
    }
    if (csv[i].Address1.toUpperCase() == 'RANDOM') {
        var pos3 = Math.round(Math.random() * (letters.length - 1));
        var randomLetter = lettersArray[pos3];
        csv[i].Address1 = `${random.last()}straat`;
        if (csv[i].Zip == '') {
            csv[i].Postcode = `${randomIntFromInterval(1000, 9999)} ${randomLetter}${randomLetter}`;
            csv[i].Zip = csv[i].Postcode;

        }
        csv[i].HouseNumber = `${randomIntFromInterval(1, 200)}`
    }

    return
};

async function errorLog(csv, module) {
    fs.appendFileSync('../failed-tasks.csv', `${getDay()},${module.store},${module.name},${csv.Url},${csv.Size},${csv.Follower},${csv.FirstName},${csv.LastName},${csv.Address1},${csv.Address2},${csv.HouseNumber},${csv.Zip},${csv.City},${csv.State},${csv.Country},${csv.Phone},${csv.Email},${csv.Password},${csv.PaymentMethod},${csv.CardType},${csv.NameOnCard},${csv.CardNumber},${csv.ExpiryDate},${csv.CVV},${csv.IsBillingSame},,,,,,,,,,\n`);
}
async function successfulLog(csv, module) {
    fs.appendFileSync('../successful-tasks.csv', `${getDay()},${module.store},${module.name},${csv.Url},${csv.Size},${csv.Follower},${csv.FirstName},${csv.LastName},${csv.Address1},${csv.Address2},${csv.HouseNumber},${csv.Zip},${csv.City},${csv.State},${csv.Country},${csv.Phone},${csv.Email},${csv.Password},${csv.PaymentMethod},${csv.CardType},${csv.NameOnCard},${csv.CardNumber},${csv.ExpiryDate},${csv.CVV},${csv.IsBillingSame},,,,,,,,,,\n`);
}

function getProxy() {
    let splitProxies = proxyFile.split("\n");
    let proxy = splitProxies.map((proxy, index) => {
        sanatizeProxy = proxy.replace("\r", "");
        if (splitProxies[index + 1] != undefined) {
            return `${sanatizeProxy}`;
        }
        return `${sanatizeProxy}`;
    });
    return proxy;
};





// async function sevenFunction(currentFunction, seven, proxies) {
//     puppeteer.use(StealthPlugin());
//     puppeteer.use(RecaptchaPlugin({
//         provider: {
//             id: '2captcha',
//             token: `${settings.captchaKey}`
//         },
//         visualFeedback: true
//     }))
//     for (var i = 0; i < seven.length; i++) {
//         setTitle(`${currentFunction.name} Task ${i + 1} / ${seven.length} || File: ${currentFile} Proxies: ${currentProxy}`);
//         var embed = [
//             {
//                 "type": "rich",
//                 "title": `Succesful SevenStore Entry`,
//                 "description": "",
//                 "color": 0xc0d6d6,
//                 "fields": [
//                     {
//                         "name": `User`,
//                         "value": `${username}`
//                     },
//                     {
//                         "name": `Product`,
//                         "value": `${seven[i].Url}`
//                     },
//                     {
//                         "name": `Size`,
//                         "value": `${seven[i].Size}`
//                     },
//                     {
//                         "name": `Delay`,
//                         "value": `${settings.delay}`
//                     },
//                     {
//                         "name": `Version`,
//                         "value": `${settings.version}`
//                     }
//                 ]
//             }
//         ]
//         const msg = { embeds: embed };
//         await jig(seven, i);
//         if (seven[i].Email == '' || seven[i].Password == '' || seven[i].FirstName == '' || seven[i].LastName == '') {
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
//             continue;
//         }
//         if (seven[i].Password == '' || seven[i].Password == undefined) {
//             seven[i].Password = 'ErehsaWonRaj1!'
//         }
//         if (settings.useRandomProxy = false) {
//             var proxySplit = proxies[i].split(":");
//         } else {
//             var randomProxy = Math.round(Math.random() * (proxies.length - 1));
//             var proxySplit = proxies[randomProxy].split(":");
//         }
//         const browser = await puppeteer.launch({
//             headless: false,
//             args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--incognito', '--disable-web-security', '--disable-features=IsolateOrigins', ' --disable-site-isolation-trials',
//                 '--disable-setuid-sandbox'],
//         });
//         try {
//             const page = await browser.newPage();
//             await page.authenticate({
//                 username: `${proxySplit[2]}`,
//                 password: `${proxySplit[3]}`,
//             });
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
//             // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
//             await page.setRequestInterception(true);
//             page.on("request", (req) => {
//                 if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
//                     req.abort();
//                 } else {
//                     req.continue();
//                 }
//             });
//             // await page.minimize();
//             await page.setViewport({ width: 1280, height: 720 });
//             await page.goto(`${seven[i].Url}`, { waitUntil: "networkidle2", timeout: 120000 });
//             await page.waitForSelector('#btnPdpAtb')
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing size ${seven[i].Size}`);
//             const sizes = await page.$$eval('div.pointer.pdpsizeoption.f-12.f-color3', sizes => {
//                 return sizes.map(size => size.innerText)
//             })
//             const sizeButtons = await page.$$('div.pointer.pdpsizeoption.f-12.f-color3');
//             const sizeError = false;
//             if (seven[i].Size == 'RANDOM') {
//                 var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
//                 await sizeButtons[randomSize].click();
//             } else {
//                 for (var s = 0; s < sizes.length; s++) {
//                     if (sizes[s] != seven[i].Size) {
//                         continue;
//                     }
//                     try {
//                         await sizeButtons[s].click();
//                     } catch {
//                         console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Size Not Found`));
//                         sizeError = true;
//                     }
//                 }
//             }
//             if (sizeError) {
//                 continue;
//             }
//             await delay(1400);
//             await page.click('#btnPdpAtb');
//             await page.waitForSelector('.fa.fa-check-circle.f-color8.f-30.valign-middle-important');
//             await delay(1000);
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Checkout Session`);
//             await page.goto('https://www.sevenstore.com/login/?target=checkout');
//             await page.waitForSelector('#email');
//             await page.type('#email', seven[i].Email);
//             await delay(550);
//             // await page.click('#guest-submit');
//             await page.click('#guest-submit');
//             await delay(7000);
//             // await page.screenshot({ path: 'screen.png' })
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Information`);
//             await page.waitForSelector('#firstname');
//             await page.type('#firstname', seven[i].FirstName, 500);
//             await delay(400);
//             await page.waitForSelector('#surname');
//             await page.type('#surname', seven[i].LastName, 500);
//             await delay(400);
//             await page.waitForSelector('#mobile');
//             await page.type('#mobile', seven[i].Phone, 500);
//             await delay(400);
//             await page.click('#enterManualDiv');
//             await delay(1500);
//             await page.waitForSelector('#address1');
//             await page.type('#address1', `${seven[i].Address1} ${seven[i].HouseNumber}`, 550);
//             await delay(900);
//             await page.waitForSelector('#address2');
//             await page.type('#address2', `${seven[i].Address2}`, 550);
//             await delay(800);
//             const countries = await page.$$eval('#countryselect_view3 > option', sizes => {
//                 return sizes.map(size => size.value)
//             })
//             var country;
//             for (var c = 0; c < countries.length; c++) {
//                 if (countries[c].startsWith(`${seven[i].Country}`)) {
//                     country = countries[c]
//                     break;
//                 }
//                 continue
//             }
//             // console.log(country);
//             await page.select('#countryselect_view3', `${country}`)
//             await page.waitForSelector('#address4');
//             await page.type('#address4', `${seven[i].City}`, 500);
//             await delay(900);
//             await page.waitForSelector('#postcode');
//             await page.type('#postcode', `${seven[i].Zip}`, 500);
//             await delay(1200);
//             const url = await page.url();
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Submitting Entry`);
//             // console.log(url);
//             const session = url.split('?')[1];
//             const submit = await page.$('#co_address_submit');
//             await submit.evaluate(submit => submit.click());
//             await delay(5000);
//             await page.goto(`https://www.sevenstore.com/checkout/pay/?${session}`);
//             // await page.click('#co_address_submit');
//             // await page.click('#co_address_submit');
//             // await page.waitForSelector('#proceed-to-pay');
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Payment session`);
//             await page.waitForSelector('#paymentbuttons');
//             await delay(5000);
//             await page.click('#paymentbuttons > div');
//             await delay(450);
//             await page.waitForSelector('#card-number');
//             await page.waitForSelector('#card-number > div > iframe');

//             // await page.click('#card-number');
//             // console.log('waiting for iframe with form to be ready.');
//             // await page.waitForSelector('iframe');
//             // console.log('iframe is ready. Loading iframe content');

//             const elementHandle = await page.$(
//                 '#card-number > div > iframe',
//             );
//             const frame = await elementHandle.contentFrame();
//             await frame.waitForSelector('.InputContainer');
//             await frame.click('.InputContainer > input')
//             await delay(1400)
//             await page.type('#card-number', `${seven[i].CreditNumber}`);
//             await delay(250);
//             // await page.click('#card-expiry');
//             await page.type('#card-expiry', `${seven[i].ExpiryDate}`);
//             await delay(250);

//             // await page.click('#card-cvc');
//             await page.type('#card-cvc', `${seven[i].CVV}`);
//             // console.log('vatteeeee')
//             await delay(2000);
//             await page.click('#card-button');
//             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Awaiting 3DS`);

//             // await page.click('.f-15');
//             // await page.click('#paymentsection-paypal > a');
//             // await delay(7000);
//             // const paypalLink = await page.url();
//             // // console.log(paypalLink);
//             try {
//                 await page.waitForSelector('.btn-auxilliary.btn-sub.fullwidth', { timeout: 300000 });
//                 console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
//                 await sendWebhook(succesWH, msg);
//             } catch {
//                 console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : 3DS Failed`));
//                 embed[0].title = 'Failed Seven Entry';
//                 embed[0].description = `3DS Failed`;
//                 await sendWebhook(errorWH, msg);
//             }

//         } catch (e) {
//             console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
//             embed[0].title = 'Failed Seven Entry';
//             embed[0].description = `${e}`;
//             await sendWebhook(errorWH, msg);
//         } finally {
//             if (browser) {
//                 browser.close();
//             }
//             if (i + 1 == seven.length) {
//                 console.log(chalk.green(`Finished tasks, returning to Main Menu`))
//                 await delay(2000);
//                 break;
//             }
//             console.log(`Waiting for ${settings.AfewDelay} ms`);
//             await delay(settings.AfewDelay);
//         }
//     }
// }

// async function oqiumFunction(i, mode, currentFunction, oqium, proxies) {
//     var ERROR;
//     var data = {};
//     var embed = [];
//     var msg = {};
//     var sizeArray = [
//         '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
//     ]
//     if (!oqium) {
//         oqium = {

//         };
//     }
//     if (mode != 'ver') {
//         setTitle(`${currentFunction.name} Task ${i + 1} / ${oqium.length} || File: ${currentFile} Proxies: ${currentProxy}`);
//         await jig(oqium, i);
//         embed = [
//             {
//                 "type": "rich",
//                 "title": `Succesful OQIUM Entry`,
//                 "description": "",
//                 "color": 0xc0d6d6,
//                 "fields": [
//                     {
//                         "name": `User`,
//                         "value": `${username}`
//                     },
//                     {
//                         "name": `Size`,
//                         "value": `${oqium[i].Size}`
//                     },
//                     {
//                         "name": `Delay`,
//                         "value": `${settings.delay}`
//                     },
//                     {
//                         "name": `Version`,
//                         "value": `${version}`
//                     }
//                 ]
//             }
//         ]
//         msg = { embeds: embed };


//         data = currentFunction.data;

//         if (mode == 'exp') {
//             data.data.attributes.email = `${oqium[i].FirstName}${oqium[i].LastName}${settings.catchall}`;
//         } else {
//             data.data.attributes.email = `${oqium[i].Email}`;
//         }
//         if (oqium[i].Size == 'RANDOM') {

//         }

//         data.data.attributes.properties.$first_name = `${oqium[i].FirstName}`;
//         data.data.attributes.properties.$last_name = `${oqium[i].LastName}`;
//         data.data.attributes.properties.$address1 = `${oqium[i].Address1} ${oqium[i].Address2} ${oqium[i].HouseNumber}`;
//         data.data.attributes.properties.$zip = `${oqium[i].Zip}`;
//         data.data.attributes.properties.$city = `${oqium[i].City}`;
//         data.data.attributes.properties.$country = `${oqium[i].Country}`;
//         data.data.attributes.properties.Size = `${oqium[i].Size}`;
//         data.data.attributes.properties.$phone_number = `${oqium[i].Phone}`;
//         data.data.attributes.properties['Instagram Account'] = `${oqium[i].Follower}`;
//     }

//     if (settings.useRandomProxy = false) {
//         var proxySplit = proxies[i].split(":");
//     } else {
//         var randomProxy = Math.round(Math.random() * (proxies.length - 1));
//         var proxySplit = proxies[randomProxy].split(":");
//     }



//     var options = {
//         jar: j,
//         followAllRedirects: true,
//         method: 'POST',
//         url: currentFunction.url,
//         headers: currentFunction.headers,
//         body: JSON.stringify(data),
//         proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
//     };
//     if (mode != 'ver') {
//         options.url = currentFunction.url
//         options.headers = currentFunction.headers
//     }
//     if (mode == 'ver') {
//         options.method = 'GET';
//     }
//     return new Promise(function (resolve, reject) {
//         callback = async (err, res, body) => {
//             if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
//                 if (mode != 'ver') {
//                     var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
//                     var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
//                     const EMBEDS =
//                     {
//                         succesDEVMSG: { embeds: [succesDEV] },
//                         succesPUBMSG: { embeds: [succesPUB] }
//                     };

//                     if (settings.webhook != undefined && settings.webhook != '') {
//                         try {

//                             await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
//                         } catch {

//                         }
//                     }
//                     await delay(200);
//                     await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
//                     await delay(200);
//                     try {

//                         await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
//                     } catch {

//                     }
//                     successfulLog(oqium[i], currentFunction);
//                 }

//                 resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
//             } else {
//                 if (mode != 'ver') {
//                     var ERROR = `${err}`;
//                     var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
//                     var EMBEDS = {}
//                     EMBEDS.errorDEV = { embeds: [errorDEV] }
//                     errorLog(oqium[i], currentFunction)

//                     if (settings.webhook != undefined && settings.webhook != '') {
//                         await sendWebhook(settings.webhook, EMBEDS.errorDEV);
//                     }
//                     await sendWebhook(errorWH, EMBEDS.errorDEV);

//                 }
//                 reject(console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`));
//             }
//         }
//         try {
//             if (mode != 'ver') {
//                 console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
//             }
//             request(options, callback);
//         } catch (err) {
//             console.log(`${getTime()} Task ${i + 1}: ${err}`);
//         }
//     });
// };



async function paypalFunction(currentFunction, proxies) {
    if (retry != 'yes') {
        var retry = '';
        var t = 0;

    }
    async function choosePaypal() {
        var accountFile = fs.readFileSync(`../accounts/paypal.csv`, 'utf-8');
        let accounts = Papa.parse(accountFile, { header: true }).data;
        console.log('Choose a Paypal to use:\n');
        for (var i = 0; i < accounts.length; i++) {
            console.log(`(${i}) ${accounts[i].Email}`);
        }
        console.log(`\n(${accounts.length}) ${chalk.cyan('Add a new account')}`);
        let choice = await prompt.get('Option');
        // console.log(choice.Option);
        // console.log(accounts[choice.Option]);
        if (choice.Option < accounts.length) {
            // await delay(10000)
            return accounts[choice.Option];
        }
        console.clear();
        console.log("Adding a new account\nEnter your paypal's email:\n");
        let acc = {};
        let Email = await prompt.get('Email');
        acc.Email = Email.Email;
        var randomProxy = Math.round(Math.random() * (proxies.length - 1));
        acc.Proxy = proxies[randomProxy];
        console.clear();
        console.log("Enter your paypal's password:\n");
        let Password = await prompt.get('Password');
        acc.Password = Password.Password;
        fs.appendFileSync('../accounts/paypal.csv', `\n${acc.Email},${acc.Password},${acc.Proxy}`);
        return acc;

    }
    let paypalAccount = await choosePaypal();
    // console.log(paypalAccount);
    var links = [];
    // await delay(10000)
    // console.log(`Found ${links.length} Links in Mailbox`)
    console.clear();
    console.log('How many links would you like to verify on this paypal?')
    let messagePrompt = await prompt.get('Amount');
    let MAX_MESSAGES_TO_FETCH = messagePrompt.Amount;
    async function getMails() {
        let numMessagesProcessed = 0;
        var imap = new Imap({
            user: settings.masterMail,
            password: settings.masterPassword,
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            autotls: 'always'
        });

        function openInbox(cb) {
            imap.openBox('INBOX', false, cb);
        }

        imap.once('ready', function () {
            openInbox(function (err, box) {
                console.clear()
                console.log('Looking For Links')
                if (err) throw err;
                imap.seq.search(['UNSEEN', ['SUBJECT', 'PayPal']], function (err, results) {
                    if (!results || !results.length) {
                        console.log(`${getTime()} [${currentFunction}] No mails found`);

                        imap.end();

                    } else {

                        results = results.slice(0, MAX_MESSAGES_TO_FETCH);
                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                        f.on('message', function (msg, seqno) {
                            // console.log('Message #%d', seqno);
                            // if (numMessagesProcessed >= MAX_MESSAGES_TO_FETCH) {
                            //     // Stop processing messages after the first 5 have been processed
                            //     f.emit('end');
                            //     return;
                            // }
                            var prefix = '(#' + seqno + ') ';
                            msg.on('body', function (stream, info) {
                                simpleParser(stream, (err, mail) => {
                                    if (mail.subject == 'PayPal Konto bestätigen' || mail.subject == 'Confirm your PayPal account') {
                                        mes = mail.text.split('[')[2]
                                        var link = mes.split(']')[0];
                                        links.push(link)


                                    }
                                    // console.log(mail.html.split('\n'));
                                    // mes = mail.text.split('[')[2]
                                    // link = mes.split(']')[0];
                                    // console.log(link);
                                });
                                // imap.seq.setFlags(seqno, 'SEEN')


                            });
                            // msg.once('attributes', function (attrs) {
                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                            // });
                            msg.once('end', function () {
                                // console.log(prefix + 'Finished');
                                numMessagesProcessed++;

                            });
                        });
                        f.once('error', function (err) {
                            console.log('Fetch error: ' + err);
                        });
                        f.once('end', function () {
                            // console.log('Done fetching all messages!');
                            imap.end();
                        });

                    }
                })
            });
        });



        imap.once('error', function (err) {
            console.log(chalk.red(err.message))
            console.log('Read the guide on how to setup your mailbox')
        });

        imap.once('end', async function () {


            // console.log('Connection ended');
        });

        imap.connect();
    }

    try {
        getMails();
        await delay(4000);
        console.log(`Found ${links.length} Links in Mailbox`)

    } catch {
        console.log(`Searching mailbox failed, please read the guide on how to setup..`)
        await delay(4000);
    }


    var loginCookies;
    setTitle(`${currentFunction}`);
    // puppeteer.use(StealthPlugin());
    // if (settings.useRandomProxy = false) {
    //     var proxySplit = proxies[i].split(":");
    // } else {
    //     var randomProxy = Math.round(Math.random() * (proxies.length - 1));
    //     var proxySplit = proxies[randomProxy].split(":");
    // }
    var proxySplit = paypalAccount.Proxy.split(":");
    var browser;
    try {
        browser = await puppeteer.launch({
            userDataDir: `sessions/${paypalAccount.Email}`,
            executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
            headless: false,
            args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
        });

    } catch {
        browser = await puppeteer.launch({
            userDataDir: `sessions/${paypalAccount.Email}`,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            headless: false,
            args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
        });
    }
    try {
        console.log(`${getTime()} [${currentFunction}] Getting Session`);
        // const newCookies = JSON.parse(fs.readFileSync('sessions/log.json'))

        const page = await browser.newPage();
        await page.authenticate({
            username: `${proxySplit[2]}`,
            password: `${proxySplit[3]}`,
        });
        // await page.setCookie(...newCookies);
        await page.setViewport({ width: 560, height: 720 });
        await page.goto('https://www.paypal.com/signin');
        try {
            console.log(`${getTime()} [${currentFunction}] Logging in to your Paypal account..`);
            await page.waitForSelector('#email');
            let value = await page.$eval('#email', el => el.getAttribute('value'));
            if (value == '') {
                await page.type('#email', paypalAccount.Email);
                await delay(467);
                let pw = await page.$('#splitPassword');
                if (pw) {
                    await page.click('#btnNext');
                    await delay(2600);
                }
                await page.type('#password', paypalAccount.Password);
                await delay(860);
                await page.click('#btnLogin');

            } else {
                await page.type('#password', paypalAccount.Password);
                await delay(860);
                await page.click('#btnLogin');

            }

            await page.waitForSelector('#reactContainer__balance', { timeout: 300000 });
            console.log(`${getTime()} [${currentFunction}] Successfully logged in`);

            await delay(10000);

            // loginCookies = await page.cookies();
            // fs.writeFileSync('sessions/log.json', `${JSON.stringify(loginCookies)}`);

        } catch (e) {
            throw new Error(`Login session expired ${e}`)
        }
        for (var i = 0; i < links.length; i++) {
            console.log(`${getTime()} [${currentFunction}] Task ${i + 1} : Starting Verification`);

            setTitle(`${currentFunction} Task ${i + 1} / ${links.length}`);
            const newPage = await browser.newPage();
            // await newPage.setCookie(...newCookies);
            await newPage.goto(`${links[i]}`, { waitUntil: 'networkidle2' });
            await delay(3000);
            try {
                const challenge = await newPage.$('#challenge-heading');
                if (challenge) {
                    console.log(`${getTime()} [${currentFunction}] Task ${i + 1} : ${chalk.yellow('2FA Required')}`);
                    await newPage.waitForSelector('.CheckoutButton_buttonWrapper_2VloF', { timeout: 300000 })
                    // await newPage.goto(`${links[i]}`);

                }
                // console.log('after network')

                // console.log('after waitfor')
                await delay(40000);
                await newPage.waitForSelector('#payment-submit-btn')
                await newPage.$eval('#payment-submit-btn', button => button.click())
                await newPage.click('#payment-submit-btn');
                try {
                    await newPage.waitForSelector('img[alt="AFEW STORE"]');
                    await delay(1500);
                    console.log(chalk.green(`${getTime()} [${currentFunction}] Task ${i + 1} : Link Verified`));


                } catch (e) {
                    retry = 'yes'
                    throw new Error(`Payment Rejected: ${e.message}`)
                } finally {
                    if (retry == 'yes' && t != 2) {
                        console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                        i = i - 1;
                        t = t + 1;
                        continue;
                    }
                    if (retry == 'yes' && t >= 2) {
                        errorLog(csv[i], currentFunction)
                        retry = 'no';
                        t = 0;
                    }
                    await newPage.close();
                    await delay(18000)
                }
            } catch (e) {
                console.log(chalk.red(`${getTime()} [${currentFunction}] Task ${i + 1} : ${e}`));

            }

        }

    } catch (e) {
        console.log(chalk.red(`${e}`))
    } finally {
        await browser.close();
        // return menu();
    }

}






const modules = [
    {
        name: '4ELEMENTOS',
        modules: [
            {
                name: '4ELEMENTOS Raffle Entries',
                store: '4ELEMENTOS',
                logo: 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                function: async function (currentFunction, csv, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < csv.length; i++) {
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var ERROR;
                        try {
                            await jig(csv, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        var sizeArray = [
                            '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
                        ]
                        var randomSize = Math.round(Math.random() * (sizeArray.length - 1));
                        if (
                            csv[i].Size == 'RANDOM'
                        ) {
                            csv[i].Size = sizeArray[randomSize]
                        }
                        var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                        var proxySplit = proxies[randomProxy].split(":");
                        var browser;
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);

                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            await page.setRequestInterception(true);

                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto(csv[i].Url, { waitUntil: 'networkidle2' });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Entry`);

                            await page.waitForSelector('#accept-all-gdpr');
                            await page.click('#accept-all-gdpr');
                            await page.waitForSelector('#raffles-product');
                            await delay(1000);
                            await page.$eval('#raffles-product', btn => btn.click());
                            await delay(5000)
                            await page.waitForSelector(`.fancybox-inner > iframe`)
                            var elementHandle = await page.$(
                                '.fancybox-inner > iframe',
                            );
                            var frame = await elementHandle.contentFrame();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking Information`);

                            await frame.waitForSelector('input[name="sm-form-email"]');
                            await delay(500);
                            await frame.type('input[name="sm-form-email"]', csv[i].Email);
                            await delay(200);
                            await frame.type('input[name="sm-form-name"]', `${csv[i].FirstName} ${csv[i].LastName}`);
                            await delay(200);
                            await frame.type('input[name="sm-form-street"]', `${csv[i].Address1} ${csv[i].HouseNumber} ${csv[i].Address2}`);
                            await delay(200);
                            await frame.type('input[name="sm-form-city"]', csv[i].City);
                            await delay(200);
                            await frame.type('input[name="sm-form-province"]', csv[i].State);
                            await delay(200);
                            await frame.type('input[name="sm-form-zip"]', csv[i].Zip);
                            await delay(200);
                            await frame.type('input[name="sm-form-country"]', csv[i].Country);
                            await delay(200);
                            await frame.type('input[name="sm-form-phone"]', csv[i].Phone);
                            await delay(200);
                            await frame.type('input[name="sm-cst.instagram_user"]', csv[i].Follower);
                            await delay(200);
                            await frame.type('input[name="sm-cst.size"]', csv[i].Size);
                            await delay(500);
                            await frame.click('.icheckbox_simple-custom.icheckbox--CONSENT');
                            await delay(500);
                            await frame.click('.icheckbox_simple-custom');
                            await delay(500);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Request`);

                            await frame.$eval('form', f => f.submit());


                            console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                            retry = '';
                            var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                            var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] },
                                succesPUBMSG: { embeds: [succesPUB] }
                            };
                            try {
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                }
                                await delay(200);
                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                await delay(200);
                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                            } catch (e) {
                                console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

                            }



                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`
                            var errorDEV = await makeEmbed(csv[i], currentFunction, 'dev', true, ERROR);
                            var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                            var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] },
                                succesPUBMSG: { embeds: [succesPUB] }
                            };
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            if (e != 'Error sending entry. Check if duplicate, or proxies.') {

                                retry = 'yes';
                            }
                        } finally {
                            browser.close();
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5) `));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(csv[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            },
            {
                name: '4ELEMENTOS Link Verification',
                store: '4ELEMENTOS',
                logo: 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                function: async function (currentFunction, proxies) {
                    var links = [];
                    // console.log(`Found ${links.length} Links in Mailbox`)
                    async function getMails() {
                        var imap = new Imap({
                            user: settings.masterMail,
                            password: settings.masterPassword,
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            autotls: 'always'
                        });

                        function openInbox(cb) {
                            imap.openBox('INBOX', false, cb);
                        }

                        imap.once('ready', function () {
                            openInbox(function (err, box) {
                                console.clear()
                                console.log('Looking For Links')
                                if (err) throw err;
                                imap.seq.search(['UNSEEN'], function (err, results) {
                                    if (!results || !results.length) {
                                        console.log(`${getTime()} [${currentFunction.name}] No mails found`);

                                        imap.end();

                                    } else {
                                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                        f.on('message', function (msg, seqno) {
                                            // console.log('Message #%d', seqno);
                                            var prefix = '(#' + seqno + ') ';
                                            msg.on('body', function (stream, info) {
                                                simpleParser(stream, (err, mail) => {
                                                    if (mail.subject == 'Confirm your subscription to the Raffle || Confirma tu suscripción al Raffle') {

                                                        var msgSplit = mail.html.split('\n')
                                                        for (var i = 0; i < msgSplit.length; i++) {
                                                            if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                                var linklong = msgSplit[i].split('href="')
                                                                var l = linklong[1].split('"')[0]
                                                                links.push(l)
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    // console.log(mail.html.split('\n'));
                                                    // mes = mail.text.split('[')[2]
                                                    // link = mes.split(']')[0];
                                                    // console.log(link);
                                                });
                                                // imap.seq.setFlags(seqno, 'SEEN')


                                            });
                                            // msg.once('attributes', function (attrs) {
                                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                            // });
                                            msg.once('end', function () {
                                                // console.log(prefix + 'Finished');


                                            });
                                        });
                                        f.once('error', function (err) {
                                            console.log('Fetch error: ' + err);
                                        });
                                        f.once('end', function () {
                                            // console.log('Done fetching all messages!');
                                            imap.end();
                                        });
                                    }
                                })
                            });
                        });



                        imap.once('error', function (err) {
                            console.log(chalk.red(err.message))
                            console.log('Read the guide on how to setup your mailbox')
                        });

                        imap.once('end', async function () {


                            // console.log('Connection ended');
                        });

                        imap.connect();
                    }
                    async function verify(currentFunction, links, proxies) {
                        for (var i = 0; i < links.length; i++) {
                            async function verifyFunction(i, mode, currentFunction, oqium, proxies) {

                                var ERROR;
                                var data = {};
                                var embed = [];
                                var msg = {};
                                var sizeArray = [
                                    '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
                                ]
                                var randomSize = Math.round(Math.random() * (sizeArray.length - 1));
                                if (
                                    oqium[i].Size == 'RANDOM'
                                ) {
                                    oqium[i].Size = sizeArray[randomSize]
                                }
                                if (!oqium) {
                                    oqium = {

                                    };
                                }


                                if (settings.useRandomProxy = false) {
                                    var proxySplit = proxies[i].split(":");
                                } else {
                                    var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                    var proxySplit = proxies[randomProxy].split(":");
                                }



                                var options = {
                                    jar: j,
                                    followAllRedirects: true,
                                    method: 'POST',
                                    url: currentFunction.url,
                                    headers: currentFunction.headers,
                                    body: JSON.stringify(data),
                                    proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                                };
                                if (mode != 'ver') {
                                    options.url = currentFunction.url
                                    options.headers = currentFunction.headers
                                }
                                if (mode == 'ver') {
                                    options.method = 'GET';
                                    options.url = oqium[i]
                                }
                                return new Promise(function (resolve, reject) {
                                    callback = async (err, res, body) => {
                                        if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
                                            if (mode != 'ver') {
                                                var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
                                                var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
                                                const EMBEDS =
                                                {
                                                    succesDEVMSG: { embeds: [succesDEV] },
                                                    succesPUBMSG: { embeds: [succesPUB] }
                                                };

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    try {

                                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                                    } catch {

                                                    }
                                                }
                                                await delay(200);
                                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                                await delay(200);
                                                try {

                                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                                } catch {

                                                }
                                                successfulLog(oqium[i], currentFunction);
                                            }

                                            resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
                                        } else {
                                            if (mode != 'ver') {
                                                var ERROR = `${err}`;
                                                var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
                                                var EMBEDS = {}
                                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                                errorLog(oqium[i], currentFunction)

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                                }
                                                await sendWebhook(errorWH, EMBEDS.errorDEV);

                                            }
                                            reject(console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`)));
                                        }
                                    }
                                    try {
                                        if (mode != 'ver') {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
                                        } else {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Fetching Response`)

                                        }
                                        request(options, callback);
                                    } catch (err) {
                                        console.log(`${getTime()} Task ${i + 1}: ${err}`);
                                    }
                                });
                            };
                            try {
                                await verifyFunction(i, 'ver', currentFunction, links, proxies);
                                console.log(`${getTime()} [${currentFunction.name}] Sleeping for ${settings.delay} ms`);
                                await delay(settings.delay);

                            } catch (e) {

                            }
                        }
                    }
                    try {
                        getMails();
                        await delay(4000);
                        console.log(`Found ${links.length} Links in Mailbox`)

                    } catch {
                        console.log(`Searching mailbox failed, please read the guide on how to setup..`)
                    }

                    await verify(currentFunction, links, proxies);

                }
            }
        ]
    },
    {
        name: 'AFEW Store',
        modules: [
            {
                name: 'AFEW Raffle Entries',
                store: 'AFEW',
                logo: 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
                function: async function (currentFunction, afew, proxies) {
                    for (var i = 0; i < afew.length; i++) {
                        settings.AfewDelay = settings.delay;
                        var ERROR;
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var url = afew[i].Url
                        var task = afew[i]
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${afew.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(afew, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        async function checkDuplicate(csv) {
                            const successFile = fs.readFileSync('../successful-tasks.csv', 'utf8');
                            const success = Papa.parse(successFile, { header: true }).data
                            // console.log(success)
                            let duplicate = false
                            for (var task of success) {
                                if (task.Url == csv.Url && task.Email == csv.Email) {
                                    duplicate = true;
                                    break;
                                }
                            }
                            return duplicate;

                        }
                        if (await checkDuplicate(afew[i]) == true) {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task Already Entered, Going to Next Task`);
                            continue;
                        }
                        var succesDEV = await makeEmbed(afew[i], currentFunction, 'dev', false);
                        var succesPUB = await makeEmbed(afew[i], currentFunction, 'pub', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] },
                            succesPUBMSG: { embeds: [succesPUB] }
                        };
                        if (afew[i].Email == '' || afew[i].FirstName == '' || afew[i].LastName == '' || afew[i].Country == '' || afew[i].Size == '' || afew[i].Address1 == '' || afew[i].Zip == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }
                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }


                        try {
                            var sizes = JSON.parse(fs.readFileSync("sizes.json", "utf-8"));
                            var url = afew[i].Url;
                            var EU = afew[i].Size;
                            var PID_Link;
                            async function checkVariant() {
                                // var data = new FormData();
                                // var handler = new htmlparser.DefaultHandler(function (error, dom) {
                                //     if (error) {
                                //         console.log(error);
                                //     }
                                //     else {

                                //     }
                                // });
                                // var parser = new htmlparser.Parser(handler);

                                var cookieJar = new jar.CookieJar();
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);

                                var variant;
                                let request1 = {
                                    method: 'GET',
                                    cookieJar: cookieJar,
                                    headers: {
                                        'Connection': 'keep-alive',
                                        'Pragma': 'no-cache',
                                        'Cache-Control': 'no-cache',
                                        'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                                        'sec-ch-ua-mobile': '?0',
                                        'DNT': '1',
                                        'Upgrade-Insecure-Requests': '1',
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                        'cookies': '',
                                        'Sec-Fetch-Site': 'none',
                                        'Sec-Fetch-Mode': 'navigate',
                                        'Sec-Fetch-User': '?1',
                                        'Sec-Fetch-Dest': 'document',
                                        'Accept-Language': 'en-US,en;q=0.9'
                                    },
                                    proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                                }
                                let raffleLink = url.replace("de.afew-store.com", "en.afew-store.com").replace("en.afew-store.com", "raffles.afew-store.com");
                                let jsonLink = raffleLink + '.json'
                                // console.log(sizes);

                                let GetResp = await axios(jsonLink);
                                // console.log(GetResp)
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Variants`);


                                let sizeObject = GetResp.data.product.variants;
                                if (EU != 'RANDOM') {

                                    if (sizeObject[1].option1.includes('W')) {
                                        const size = sizes.women.find(s => s.EUsize === EU);
                                        if (size) {
                                            EU = size.size
                                        }

                                    }
                                    else if (sizeObject[1].option1.includes('Y')) {
                                        const size = sizes.GS.find(s => s.EUsize === EU);
                                        if (size) {
                                            EU = size.size
                                        }

                                    }
                                    else {
                                        const size = sizes.men.find(s => s.EUsize === EU);
                                        if (size) {
                                            EU = size.size
                                        }
                                    }
                                    for (var size of sizeObject) {
                                        if (size.option1 == EU) {
                                            variant = size.id;
                                        }
                                    }
                                } else {
                                    var randomSize = Math.round(Math.random() * (sizeObject.length - 1));
                                    variant = sizeObject[randomSize].id;

                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Adding to Cart`);


                                addToCart = await axios(`https://raffles.afew-store.com/cart/${variant}:1`);
                                // console.log(addToCart.request.res.responseUrl);
                                PID_Link = addToCart.request.res.responseUrl


                            }
                            try {

                                await checkVariant();
                            } catch (e) {
                                if (e.message.includes('TUNN')) {
                                    throw new Error('Proxy Connection Error')

                                }
                                throw new Error(`Proxy Error: ${e}`)
                            }
                            const page = await browser.newPage();
                            await page.setDefaultNavigationTimeout(120000);
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            // console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            // console.log(PID_Link)
                            try {
                                await page.goto(PID_Link, { waituntil: 'networkidle0' });

                            } catch {
                                throw new Error('Connection Error')
                            }
                            // await delay(7000)
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Submitting Information`);
                            try {
                                await page.waitForSelector('#checkout_email');

                            } catch {
                                throw new Error('Proxy Error')
                            }

                            await page.type('#checkout_email', `${afew[i].Email}`);
                            await delay(800);
                            await page.type('#checkout_attributes_instagram', `${afew[i].Follower}`);
                            await delay(800);
                            await page.select('#checkout_shipping_address_country', `${afew[i].Country}`);
                            await page.waitForTimeout(600);
                            await page.type("#checkout_shipping_address_first_name", `${afew[i].FirstName}`);
                            await page.waitForTimeout(800);
                            await page.type("#checkout_shipping_address_last_name", `${afew[i].LastName}`);
                            await page.waitForTimeout(700);
                            await page.type("#checkout_shipping_address_address1", `${afew[i].Address1} ${afew[i].HouseNumber}`);
                            await page.waitForTimeout(700);
                            await page.type("#checkout_shipping_address_address2", `${afew[i].Address2}`);
                            await page.waitForTimeout(700);

                            await page.type("#checkout_shipping_address_zip", `${afew[i].Zip}`)

                            await page.waitForTimeout(700);
                            await page.type("#checkout_shipping_address_city", `${afew[i].City}`);
                            await page.waitForTimeout(700);
                            if (afew[i].State != "") {
                                try {

                                    const states = JSON.parse(fs.readFileSync('States.json', 'utf8'))
                                    // console.log(states.length);
                                    await delay(500)
                                    // var x;
                                    // let stateSplit = afew[i].State.split(' ')[0]
                                    // console.log(states)
                                    if (afew[i].State.length > 2) {

                                        for (let s of states) {


                                            if (s.Province == afew[i].State) {
                                                await page.select('#checkout_shipping_address_province', s.Code)

                                                break;
                                            }
                                        }
                                    } else {
                                        await page.select('#checkout_shipping_address_province', afew[i].State.toUpperCase())
                                    }
                                } catch {

                                }

                            }
                            await delay(500);
                            // await page.keyboard.press('Enter');
                            // const state = await page.$x(`//option[text()="${afew[i].State}"]`);
                            // await state[0].click();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Shipping`);
                            await delay(400)
                            page.evaluate(() => {
                                const element = document.querySelector("#continue_button")
                                for (var e = 0; e < 5; e++) {
                                    if (element) {
                                        element.click();
                                        element.click();
                                        break;
                                    } else {
                                        delay(4000)
                                    }
                                }
                            });

                            await page.waitForTimeout(2500);
                            try {

                                await page.waitForSelector('form[data-shipping-method-form="true"]');
                                await page.$eval('form[data-shipping-method-form="true"]', f => f.submit())

                            } catch {

                                throw new Error('Proxy Error')
                            }
                            // page.evaluate(() => {
                            //     const element = document.querySelector("#continue_button")
                            //     for (var e = 0; e < 5; e++) {
                            //         if (element) {
                            //             element.click();
                            //             break;
                            //         } else {
                            //             delay(4000)
                            //         }
                            //     }
                            // });
                            await page.waitForTimeout(2000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Finishing Entry`);
                            try {

                                await page.waitForSelector('div[data-payment-subform="required"]', { timeout: 100000 });

                            } catch {
                                throw new Error('Proxy Error')
                            }
                            await delay(1000);
                            await page.$eval('body > div.content > div > div > main > div.step > div > form', f => f.submit())
                            await delay(1000);
                            try {

                                await page.waitForSelector('div[data-last-step="true"]', { timeout: 100000 });

                            } catch {
                                throw new Error('Proxy Error')
                            }
                            await page.$eval('body > div.content > div > div > main > div.step > form', f => f.submit())
                            // page.evaluate(() => {
                            //     const element = document.querySelector("#continue_button")
                            //     for (var e = 0; e < 5; e++) {
                            //         if (element) {
                            //             element.click();
                            //             break;
                            //         } else {
                            //             delay(4000)
                            //         }
                            //     }
                            // });
                            // await page.waitForTimeout(2500);
                            // await page.waitForSelector(".section.section--billing-address");
                            // await page.evaluate(() => {
                            //     const element = document.querySelector("#continue_button")
                            //     for (var e = 0; e < 5; e++) {
                            //         if (element) {
                            //             element.click();
                            //             break;
                            //         } else {
                            //             delay(4000)
                            //         }
                            //     }
                            // });
                            try {
                                await page.waitForSelector(`div[data-step="thank_you"]`)
                                retry = 'no';
                                successfulLog(afew[i], currentFunction);
                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    try {

                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    } catch {

                                    }
                                }
                                await delay(200);
                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                await delay(200);
                                try {

                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                } catch {

                                }
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                            } catch (e) {
                                throw new Error('Connection Error Fetching Response')
                            }

                        } catch (e) {
                            if (e.message.includes('selector')) {
                                e = 'Connection Error'
                            }
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`;
                            var errorDEV = await makeEmbed(afew[i], currentFunction, 'dev', true, ERROR);
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);

                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();

                            }
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(afew[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            if (i + 1 == afew.length) {
                                await delay(2000);
                                break;
                            }
                            console.log(`Waiting for ${settings.AfewDelay} ms`);
                            await delay(settings.AfewDelay);
                        }
                    }
                }
            }
        ]
    },
    {
        name: 'BSTN',
        modules: [
            {
                name: 'BSTN Account Generator',
                store: 'BSTN',
                logo: 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                function: async function (currentFunction, bstn, proxies) {
                    var opium = bstn;
                    var tasks = 0;
                    for (var i = 0; i < bstn.length; i++) {
                        maxTasks = Number(settings.threads);

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                            // console.log(`waiting`)
                        }
                        async function bstnFunction(currentFunction, bstn, proxies, i, t) {
                            tasks++;
                            puppeteer.use(StealthPlugin());
                            puppeteer.use(RecaptchaPlugin({
                                provider: {
                                    id: '2captcha',
                                    token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                                },
                                visualFeedback: true
                            }))


                            var ERROR;
                            try {
                                await jig(bstn, i);

                            } catch {
                                retry = 'no';
                                throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                            }
                            setTitle(`${currentFunction.name} Task ${i + 1} / ${bstn.length} || File: ${currentFile} Proxies: ${currentProxy}`);

                            var succesDEV = await makeEmbed(bstn[i], currentFunction, 'acc', false);


                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] }
                            };
                            const url = `https://www.bstn.com/eu_en/customer/account/create/`
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                            var browser
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });
                            }
                            try {
                                const page = await browser.newPage();
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                                await page.setRequestInterception(true);
                                page.on("request", (req) => {
                                    if (req.resourceType() === "image") {
                                        req.abort();
                                    } else {
                                        req.continue();
                                    }
                                });
                                try {
                                    await page.goto(`${url}`);
                                    await page.waitForSelector('button[class="cf2Lf6"]');

                                } catch {
                                    retry = 'yes'
                                    throw new Error('Proxy Error')
                                }
                                await page.click('button[class="cf2Lf6"]');
                                // await page.waitForSelector('a.action.create.primary.social-login');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Passing Cloudflare`);
                                // await delay(2000);
                                // await page.click('a.action.create.primary.social-login');
                                await delay(2000);
                                // await page.click('button.button.dashboard-actions-toolbar__item');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking Credentials`);
                                await delay(400);
                                await page.waitForSelector('#firstname')
                                await page.focus('#firstname');
                                await page.keyboard.down('Control');
                                await page.keyboard.press('A');
                                await delay(200);
                                await page.keyboard.up('Control');
                                await page.keyboard.press('Backspace');
                                await page.type('#firstname', bstn[i].FirstName, { delay: 240 });
                                await delay(400);
                                await page.focus('#lastname');
                                await page.keyboard.down('Control');
                                await page.keyboard.press('A');
                                await delay(200);
                                await page.keyboard.up('Control');
                                await page.keyboard.press('Backspace');
                                await page.type('#lastname', bstn[i].LastName, { delay: 230 });
                                await delay(400);
                                await page.focus('#email_address');
                                await page.keyboard.down('Control');
                                await page.keyboard.press('A');
                                await delay(200);
                                await page.keyboard.up('Control');
                                await page.keyboard.press('Backspace');
                                await page.type('#email_address', bstn[i].Email, { delay: 290 });
                                await delay(400);
                                await page.type('#password', bstn[i].Password, { delay: 130 });
                                await delay(500);
                                await page.type('#password-confirmation', bstn[i].Password, { delay: 124 });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Request`);
                                await delay(700)
                                await page.$eval('#form-validate', form => form.submit());
                                // await page.click('#bt-social-create');
                                // await page.click('#bt-social-create');
                                await delay(5000);
                                const mailError = await page.$('#email_address-error');
                                if (mailError) {
                                    throw new Error('Invalid Email');
                                }
                                const passwordError = await page.$('#password-error');
                                if (passwordError) {
                                    throw new Error('Invalid Password');
                                }
                                await page.waitForSelector('div.mesg-success');
                                retry = 'no';

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${bstn[i].Email} Generated`));
                                fs.appendFileSync('../accounts/bstn.csv', `\n${bstn[i].Email},${bstn[i].Password}`);
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                } catch {
                                }
                                await sendWebhook(accountWH, EMBEDS.succesDEVMSG);
                                let task = bstn[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                                console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : After your all tasks are finished, run 'BSTN Account Verifier'`));

                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(bstn[i], currentFunction, 'acc', true, ERROR);
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                                retry = 'yes';
                            } finally {
                                if (browser)
                                    browser.close();
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t + 1} / 5)`));
                                    tasks--;
                                    t = t + 1;
                                    return bstnFunction(currentFunction, bstn, proxies, i, t);
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(bstn[i], currentFunction)
                                    retry = 'no';
                                    t = 0;
                                }
                                tasks--;
                                console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                                await delay(settings.delay);
                            }

                        }
                        bstnFunction(currentFunction, opium, proxies, i, 0);
                        await delay(400);
                    }
                }
            },
            {
                name: 'BSTN Account Verifier',
                store: 'BSTN',
                logo: 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                function: async function (currentFunction, proxies) {
                    var done = false
                    var links = [];
                    var tasks = 0;
                    // console.log(`Found ${links.length} Links in Mailbox`)
                    async function getMails() {
                        var imap = new Imap({
                            user: settings.masterMail,
                            password: settings.masterPassword,
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            autotls: 'always'
                        });

                        function openInbox(cb) {
                            imap.openBox('INBOX', false, cb);
                        }

                        imap.once('ready', function () {
                            openInbox(function (err, box) {
                                console.clear()
                                console.log('Looking For Links')
                                if (err) throw err;
                                imap.seq.search(['UNSEEN', ['SUBJECT', 'Please confirm your BSTN Store account']], function (err, results) {
                                    if (!results || !results.length) {
                                        console.log(`${getTime()} [${currentFunction.name}] No mails found`);

                                        imap.end();

                                    } else {

                                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                        f.on('message', function (msg, seqno) {
                                            // console.log('Message #%d', seqno);
                                            var prefix = '(#' + seqno + ') ';
                                            msg.on('body', function (stream, info) {
                                                simpleParser(stream, (err, mail) => {
                                                    // console.log(mail.text)
                                                    var bstnSplit = mail.text.split('customer/account/confirm/')[1];
                                                    var bstnLink = bstnSplit.split(']')[0];
                                                    // var msgSplit = mail.html.split('\n')
                                                    links.push(`https://www.bstn.com/eu_en/customer/account/confirm/${bstnLink}`)
                                                    // console.log(bstnLink)
                                                    // for (var i = 0; i < msgSplit.length; i++) {
                                                    //     if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                    //         var linklong = msgSplit[i].split('href="')
                                                    //         var l = linklong[1].split('"')[0]
                                                    //         links.push(l)
                                                    //         break;
                                                    //     }
                                                    // }

                                                    // console.log(mail.html.split('\n'));
                                                    // mes = mail.text.split('[')[2]
                                                    // link = mes.split(']')[0];
                                                    // console.log(link);
                                                });
                                                // imap.seq.setFlags(seqno, 'SEEN')


                                            });
                                            // msg.once('attributes', function (attrs) {
                                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                            // });
                                            msg.once('end', function () {
                                                // console.log(prefix + 'Finished');


                                            });
                                        });
                                        f.once('error', function (err) {
                                            console.log('Fetch error: ' + err);
                                            done = true;
                                        });
                                        f.once('end', function () {
                                            // console.log('Done fetching all messages!');
                                            imap.end();
                                            done = true;
                                        });

                                    }
                                })
                            });
                        });



                        imap.once('error', function (err) {
                            console.log(chalk.red(err.message))
                            console.log('Read the guide on how to setup your mailbox')
                            done = true

                        });

                        imap.once('end', async function () {
                            done = true;

                            // console.log('Connection ended');
                        });

                        imap.connect();
                    }

                    try {
                        getMails();
                        while (!done) {
                            await delay(4000);
                        }
                        console.log(`Found ${links.length} Links in Mailbox`)

                    } catch {
                        console.log(`Searching mailbox failed, please read the guide on how to setup..`)
                        await delay(2000);
                    }
                    for (var i = 0; i < links.length; i++) {
                        maxTasks = Number(settings.threads);

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                            // console.log(`waiting`)
                        }
                        async function verify(currentFunction, links, proxies, i, t) {
                            tasks++;
                            puppeteer.use(StealthPlugin());

                            if (retry != 'yes') {
                                var retry = '';
                                var t = 0;

                            }
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                            var browser
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });
                            }
                            try {
                                const page = await browser.newPage();
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Verification`);
                                await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                                await page.setRequestInterception(true);
                                page.on("request", (req) => {
                                    if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                        req.abort();
                                    } else {
                                        req.continue();
                                    }
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                try {
                                    await page.goto(links[i]);

                                } catch (e) {
                                    retry = 'yes'
                                    throw new Error(`'Connection Error' ${e}`)
                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Passing Cloudflare`);
                                await page.waitForTimeout(3000);
                                try {
                                    await page.waitForSelector('.account-nav');
                                    retry = 'no';

                                    console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Verification Successful`));
                                    var succesDEV = await makeEmbed(null, currentFunction, 'ver', false);
                                    const EMBEDS =
                                    {
                                        succesDEVMSG: { embeds: [succesDEV] }
                                    };
                                    await sendWebhook(verWH, EMBEDS.succesDEVMSG)
                                } catch {
                                    retry = 'no';
                                    throw new Error('Link Already Verified, skipping..');
                                }

                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                var ERROR = e
                                var errorDEV = await makeEmbed(null, currentFunction, 'ver', true, ERROR);
                                const EMBEDS =
                                {
                                    errorDEVMSG: { embeds: [errorDEV] }
                                };
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEVMSG);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEVMSG);

                            } finally {
                                browser.close();
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));

                                    tasks--;
                                    t = t + 1;
                                    return verify(currentFunction, links, proxies, i, t);
                                }
                                if (retry == 'yes' && t >= 5) {
                                    retry = 'no';
                                    t = 0;
                                }

                                tasks--;
                                console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                                await delay(settings.delay);
                            }

                        }
                        if (i == links.length - 1) {
                            await verify(currentFunction, links, proxies, i, 0);
                            return
                        }
                        verify(currentFunction, links, proxies, i, 0);
                        await delay(300);
                    }

                }
            },
            {
                name: 'BSTN Raffle Entries',
                store: 'BSTN',
                logo: 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                function: async function (currentFunction, bstn, proxies) {
                    var tasks = 0;
                    var opium = bstn;
                    for (var i = 0; i < bstn.length; i++) {
                        maxTasks = Number(settings.threads);

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                            // console.log(`waiting`)
                        }
                        let dupli = false
                        async function bstnFunction(currentFunction, bstn, proxies, i, t) {
                            tasks++;
                            puppeteer.use(StealthPlugin());
                            puppeteer.use(RecaptchaPlugin({
                                provider: {
                                    id: '2captcha',
                                    token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                                },
                                visualFeedback: true
                            }))

                            var ERROR;
                            var task = bstn[i]
                            try {
                                await jig(bstn, i);

                            } catch {
                                retry = 'no';
                                throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                            }
                            async function checkDuplicate(csv) {
                                const successFile = fs.readFileSync('../successful-tasks.csv', 'utf8');
                                const success = Papa.parse(successFile, { header: true }).data
                                // console.log(success)
                                let duplicate = false
                                for (var task of success) {
                                    if (task.Url == csv.Url && task.Email == csv.Email) {
                                        duplicate = true;
                                        break;
                                    }
                                }
                                return duplicate;

                            }


                            // console.log(bstn[i]);
                            setTitle(`${currentFunction.name} Task ${i + 1} / ${bstn.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                            var browser
                            let skip = false;
                            let retry = 'no'
                            try {
                                if (await checkDuplicate(bstn[i]) == true) {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task Already Entered, Going to Next Task`);
                                    skip = true;
                                    dupli = true;
                                    return;
                                }
                                try {
                                    browser = await puppeteer.launch({
                                        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                        headless: false,
                                        args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                    });

                                } catch {
                                    browser = await puppeteer.launch({
                                        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                        headless: false,
                                        args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                    });
                                }
                                const page = await browser.newPage();
                                const session = await page.target().createCDPSession();
                                const { windowId } = await session.send('Browser.getWindowForTarget');
                                await page.setViewport({
                                    width: 1281,
                                    height: 720
                                })
                                var cookies = [

                                    // {
                                    //     "name": "_clck",
                                    //     "value": "xtouvh|1|ezs|0",
                                    //     "domain": ".bstn.com",
                                    //     "path": "/",
                                    //     "expires": 1678875046,
                                    //     "httpOnly": false,
                                    //     "secure": false
                                    // },

                                    // {
                                    //     "name": "__CK__WG__",
                                    //     "value": "13357_180687_16644396748543_07b98b8291",
                                    //     "domain": ".bstn.com",
                                    //     "path": "/",
                                    //     "expires": 1695926334,
                                    //     "httpOnly": false,
                                    //     "secure": true
                                    // },
                                    {
                                        "name": "cf_clearance",
                                        "value": "uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160",
                                        "domain": ".bstn.com",
                                        "path": "/",
                                        "expires": 1707818183.331533,
                                        "httpOnly": true,
                                        "secure": true
                                    },

                                    // {
                                    //     "name": "__cf_bm",
                                    //     "value": "pwWzgVvtLzaTNvIMj3DC9sE_WuHpjGvuyQjaYMuleXE-1676282182-0-AdxWk6WFQ55ptQ0tlFGaMOJCBDYjB/iC+LyMwhAN1ckjYU+iq8Y0Mt0Lk6bQuK5GOYEGlhMABQVfFt9FNHhWQxUIZPr9cojVl3qcP4vQirNd",
                                    //     "domain": ".bstn.com",
                                    //     "path": "/",
                                    //     "expires": 1676283983.920654,
                                    //     "httpOnly": true,
                                    //     "secure": true
                                    // }
                                ]
                                // await page.setCookie(cookies[0]);
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                // await page.setExtraHTTPHeaders({
                                //     'Accept-Language': 'en'
                                // });
                                // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36');
                                // await page.setJavaScriptEnabled(true);
                                // await page.setRequestInterception(true);
                                // page.on("request", (req) => {
                                //     if (req.resourceType() === "image") {
                                //         req.abort();
                                //     } else {
                                //         req.continue();
                                //     }
                                // });
                                await page.goto(`${bstn[i].Url}`, { waitUntil: 'networkidle2' });
                                // console.log('solving');
                                // // await page.solveRecaptchas();
                                // console.log('solved');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Cloudflare`);
                                await delay(5000);
                                var cf = await page.$('#turnstile-wrapper');
                                if (cf) {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Handling Challenge`);
                                    await delay(10000);
                                    const challengeButton = await page.$('#turnstile-wrapper');
                                    if (challengeButton) {
                                        try {

                                            await challengeButton.click();
                                        } catch {
                                            throw new Error('Empty Turnstile Challenge')
                                        }
                                    }
                                    try {
                                        await page.waitForSelector('input[name="firstname"]', { timeout: 40000 });

                                    } catch {
                                        var challengeButton2 = await page.$('#turnstile-wrapper');
                                        if (challengeButton2) {

                                            try {

                                                await challengeButton2.click();
                                            } catch {
                                                throw new Error('Empty Turnstile Challenge')
                                            }
                                        }
                                    }
                                    // await frame.click('#challenge-stage > div > label > input');

                                }
                                try {

                                    await page.waitForSelector('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked by Cloudflare')
                                }
                                await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'minimized' } });

                                await delay(5000)
                                await page.waitForSelector('.nonLoggedSpecific_nonLogged__SCu0L > .Button_secondary__XJln1.Button_button__Bq8yb');
                                await page.focus('.nonLoggedSpecific_nonLogged__SCu0L > .Button_secondary__XJln1.Button_button__Bq8yb');
                                await delay(500)
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Logging in`);
                                await page.$eval('.nonLoggedSpecific_nonLogged__SCu0L > .Button_secondary__XJln1.Button_button__Bq8yb', check => check.click())

                                await page.click('.nonLoggedSpecific_nonLogged__SCu0L > .Button_secondary__XJln1.Button_button__Bq8yb');
                                await page.click('.nonLoggedSpecific_nonLogged__SCu0L > .Button_secondary__XJln1.Button_button__Bq8yb');
                                await delay(2000);
                                // await page.waitForNetworkIdle();
                                await page.waitForSelector('#email-login')
                                await page.type('#email-login', `${bstn[i].Email.toLowerCase()}`, { delay: 230 })
                                await delay(3500)
                                await page.waitForSelector('#password')
                                await page.type('#password', `${bstn[i].Password}`, { delay: 230 });
                                await delay(5500)
                                try {
                                    // await page.$eval('.login_Login___vz4G > form', check => check.submit())
                                    await page.$eval('.login_accountInfo__FCIxY > button[type="submit"]', check => check.click())

                                    // await page.click('.login_accountInfo__FCIxY > button[type="submit"]');
                                } catch {

                                }
                                try {

                                    await page.waitForSelector('.swatchOptions_sizeTiles__Lizc2');


                                } catch (e) {

                                }
                                await delay(1000);
                                const duplicateEntry = await page.$('.enteredDraw_container__2KmQ_');
                                if (duplicateEntry) {
                                    console.log('Duplicate entry, skipping');
                                    return;
                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing Size ${bstn[i].Size}`)
                                try {
                                    if (bstn[i].Size != 'RANDOM') {
                                        var size = bstn[i].Size.replace('.', ',');
                                        // console.log(size)
                                        const sizeButtons = await page.$x(`//div[contains(text(), '${size}')]`);
                                        await sizeButtons[0].click();
                                    } else {
                                        const sizeButtons = await page.$$(`div.swatchTile_tile__IRH9Q`);
                                        var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
                                        await sizeButtons[randomSize].click();

                                    }

                                } catch (e) {
                                    // console.log(e)
                                    throw new Error('Softblocked, Rotating proxy')
                                }
                                await delay(500);
                                const addy = await page.$('.addressList_addressItem__LE2PB');
                                if (addy && bstn[i].Mode != 'NEW') {

                                } else {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Address`)

                                    await page.click('div.product_shipping__zEfqd > div > div.legend_legend__sQIiF > div.legend_header__iHZIh > div > button');
                                    await delay(1500);
                                    await page.waitForSelector('#firstname')
                                    await page.type('#firstname', `${bstn[i].FirstName}`);
                                    await delay(500);
                                    await page.waitForSelector('#firstname')
                                    await page.type('#lastname', `${bstn[i].LastName}`);
                                    await delay(500);
                                    await page.waitForSelector('#firstname')
                                    await page.type('#street', `${bstn[i].Address1}`);
                                    await delay(500);
                                    await page.waitForSelector('#firstname')
                                    await page.type('#houseNumber', `${bstn[i].HouseNumber} ${bstn[i].Address2}`);
                                    await delay(500);
                                    await page.waitForSelector('#firstname')
                                    await page.select('#country_code', `${bstn[i].Country}`);
                                    await delay(500);
                                    await page.type('#postcode', `${bstn[i].Zip}`);
                                    await delay(500);
                                    await page.type('#city', `${bstn[i].City}`);
                                    await delay(500);
                                    await page.type('#telephone', `${bstn[i].Phone}`);
                                    await delay(500);
                                    await page.click('.addressModal_submit__dOiL4 > button[type="submit"]');

                                }
                                await delay(2500);
                                try {
                                    await page.type('#instagram_name', `${bstn[i].Follower}`);
                                    await page.click('.note_groupBtn__WLDwH > button')
                                } catch {

                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Finishing Entry`)

                                await delay(1500);
                                try {

                                    await page.click('.checkBox_boxHolder__wLGVe');
                                } catch {

                                }
                                await delay(1500);
                                await page.$eval('.termConditions_TC__hll9k > button', btn => btn.click());
                                // await page.click('.termConditions_TC__hll9k > button');
                                await delay(5000);
                                try {
                                    await page.waitForSelector('.success_msg__2HjJY');

                                } catch {
                                    await page.reload({ waitUntil: 'networkidle2' });
                                    if (bstn[i].Size != 'RANDOM') {
                                        var size = bstn[i].Size.replace('.', ',');
                                        const sizeButtons = await page.$x(`//div[contains(text(), ${size})]`);
                                        await sizeButtons[0].click();
                                    } else {
                                        const sizeButtons = await page.$$(`div.swatchTile_tile__IRH9Q`);
                                        var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
                                        await sizeButtons[randomSize].click();

                                    }
                                    await delay(1500);
                                    try {
                                        await page.hover('#instagram_name')
                                        await page.type('#instagram_name', `${bstn[i].Follower}`);
                                        await page.click('.note_groupBtn__WLDwH > button')
                                    } catch {

                                    }
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`)
                                    try {
                                        await page.hover('.checkBox_boxHolder__wLGVe')
                                        await delay(1500);
                                        await page.click('.checkBox_boxHolder__wLGVe');

                                    } catch {

                                    }
                                    await delay(5500);
                                    await page.$eval('.termConditions_TC__hll9k > button', btn => btn.click());
                                    // await page.click('.termConditions_TC__hll9k > button');
                                    await delay(5000);
                                    await page.waitForSelector('.success_msg__2HjJY');
                                }
                                retry = 'no';
                                successfulLog(bstn[i], currentFunction);
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {
                                    // console.log(e.message)
                                }
                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                var succesDEV = await makeEmbed(bstn[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(bstn[i], currentFunction, 'pub', false);

                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                let task = bstn[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                    await delay(200);
                                    await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                    await delay(200);
                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                } catch (e) {
                                    console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

                                }


                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                retry = 'yes';
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(bstn[i], currentFunction, 'dev', true, ERROR);
                                var succesDEV = await makeEmbed(bstn[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(bstn[i], currentFunction, 'pub', false);

                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                            } finally {
                                if (browser) {

                                    browser.close();
                                }
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));

                                    t = t + 1;
                                    tasks--;

                                    return bstnFunction(currentFunction, bstn, proxies, i, t);
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(bstn[i], currentFunction)

                                }
                                if (!skip) {
                                    console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                                    await delay(settings.delay);

                                }
                                tasks--;
                            }

                        }
                        bstnFunction(currentFunction, opium, proxies, i, 0);


                        await delay(2000);

                    }

                }
            },
            {
                name: 'BSTN Win Checker',
                store: 'BSTN',
                logo: 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                function: async function (currentFunction, proxies) {
                    var tasks = 0;
                    var bstn;
                    try {
                        const accsFile = fs.readFileSync('../accounts/bstn.csv', 'utf-8');
                        bstn = Papa.parse(accsFile, { header: true }).data;
                    }
                    catch (e) {
                        throw new Error('Error reading accounts/bstn.csv')
                    }
                    for (var i = 0; i < bstn.length; i++) {
                        maxTasks = Number(settings.threads);

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                            // console.log(`waiting`)
                        }
                        async function checkWins(currentFunction, proxies, bstn, i, t) {
                            tasks++;
                            puppeteer.use(StealthPlugin());
                            puppeteer.use(RecaptchaPlugin({
                                provider: {
                                    id: '2captcha',
                                    token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                                },
                                visualFeedback: true
                            }))


                            if (retry != 'yes') {
                                var retry = '';
                                var t = 0;

                            }
                            var ERROR;

                            setTitle(`${currentFunction.name} Task ${i + 1} / ${bstn.length} || File: ${currentFile} Proxies: ${currentProxy}`);

                            var succesDEV = await makeEmbed(bstn[i], currentFunction, 'acc', false);


                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] }
                            };
                            const url = `https://www.bstn.com/eu_en/customer/account/create/`
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");

                            var browser
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });
                            }
                            try {
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking ${bstn[i].Email}`);
                                const page = await browser.newPage();
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                                await page.setRequestInterception(true);
                                page.on("request", (req) => {
                                    if (req.resourceType() === "image") {
                                        req.abort();
                                    } else {
                                        req.continue();
                                    }
                                });
                                try {
                                    await page.goto(`https://www.bstn.com/eu_en/raffle/customer/`, { waitUntil: 'networkidle2' });
                                    await page.waitForSelector('button[class="cf2Lf6"]');

                                } catch {
                                    retry = 'yes'
                                    throw new Error('Connection Error')
                                }
                                await page.click('button[class="cf2Lf6"]');
                                // await page.waitForSelector('a.action.create.primary.social-login');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Passing Cloudflare`);
                                // await delay(2000);
                                // await page.click('a.action.create.primary.social-login');
                                await delay(1000);
                                await page.type('#email', bstn[i].Email);
                                await delay(500)
                                await page.type('#pass', bstn[i].Password);
                                await delay(500)
                                await page.$eval('#login-form', f => f.submit())
                                // await page.click('button.button.dashboard-actions-toolbar__item');
                                try {
                                    await page.waitForSelector('.product-items')
                                } catch {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : No Entries Found`);
                                    return;

                                }
                                await delay(400);
                                // const results = await page.evaluate(() => {
                                //     return (Array.from(document.querySelector('.product-items > .product-item').children));
                                // })
                                const titles = await page.evaluate(() => {
                                    const tds = Array.from(document.querySelectorAll('.product-item-photo > img'))
                                    return tds.map(td => td.alt)
                                });
                                const sizes = await page.evaluate(() => {
                                    const tds = Array.from(document.querySelectorAll('.tooltip.wrapper.product-item-tooltip.first-xs'))
                                    return tds.map(td => td.innerHTML)
                                });

                                const wins = await page.$$('.raffle-winner');
                                // console.log(wins.length)
                                if (wins.length < 1) {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : No Wins Found`);
                                    retry = 'no'
                                    return;
                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${wins.length} Wins Found!`);
                                for (var w = 0; w < wins.length; w++) {
                                    console.log(chalk.green(titles[w] + sizes[w].replace('                                    ', '')));

                                }
                                // await page.click('#bt-social-create');
                                // await page.click('#bt-social-create');

                                // await delay(500000);




                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(bstn[i], currentFunction, 'acc', true, ERROR);
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                                retry = 'yes';
                            } finally {
                                if (browser)
                                    browser.close();
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                    tasks--;
                                    t = t + 1;
                                    return checkWins(currentFunction, proxies, bstn, i, t);
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(bstn[i], currentFunction)
                                    retry = 'no';
                                    t = 0;
                                }
                                console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                                await delay(settings.delay);
                                tasks--;
                            }

                        }
                        checkWins(currentFunction, proxies, bstn, i, 0);
                        await delay(350);
                    }
                }
            },
        ]
    },
    {
        name: 'EQL',
        modules: [
            {
                name: 'EQL Raffle Entries',
                store: 'EQL',
                logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qfc09zbor8py2zfmsdr2',
                function: async function (currentFunction, csv, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < csv.length; i++) {
                        var ERROR;
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(csv, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        async function checkDuplicate(csv) {
                            const successFile = fs.readFileSync('../successful-tasks.csv', 'utf8');
                            const success = Papa.parse(successFile, { header: true }).data
                            // console.log(success)
                            let duplicate = false
                            for (var task of success) {
                                if (task.Url == csv.Url && task.Email == csv.Email) {
                                    duplicate = true;
                                    break;
                                }
                            }
                            return duplicate;

                        }
                        if (await checkDuplicate(csv[i]) == true) {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task Already Entered, Going to Next Task`);
                            continue;
                        }
                        var registered = false;
                        const accsFile = fs.readFileSync('../accounts/eql.csv', 'utf8');
                        var accs = Papa.parse(accsFile, { header: true }).data;
                        for (var acc of accs) {
                            if (acc.Email == csv[i].Email) {
                                // console.log(acc);
                                registered = true;
                            }
                        }
                        if (registered == false) {
                            var url
                            if (csv[i].Url.endsWith('/')) {
                                url = `${csv[i].Url}register`
                                if (retry != 'yes') {
                                    var retry = '';
                                    var t = 0;

                                }

                            } else {
                                url = `${csv[i].Url}/register`
                                if (retry != 'yes') {
                                    var retry = '';
                                    var t = 0;

                                }
                            }


                            if (csv[i].Email == '' || csv[i].FirstName == '' || csv[i].LastName == '') {
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                                continue;
                            }
                            if (csv[i].Password == '') {
                                csv[i].Password = 'JRaffles23!'
                            }
                            if (settings.useRandomProxy = false) {
                                var proxySplit = proxies[i].split(":");
                            } else {
                                var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                var proxySplit = proxies[randomProxy].split(":");
                            }
                            var browser;
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: !false,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: !false,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });
                            }
                            try {
                                const page = await browser.newPage();
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                                await page.setRequestInterception(true);
                                page.on("request", (req) => {
                                    if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                        req.abort();
                                    } else {
                                        req.continue();
                                    }
                                });
                                try {
                                    await page.goto(`${url}`);

                                } catch {
                                    throw new Error('Connection Error')
                                }

                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Setting Credentials`);
                                await delay(1000);
                                await page.waitForSelector('#email');
                                await page.click('div[data-testid="field-productVariantID"]');
                                await delay(1000);
                                try {
                                    if (csv[i].Url.includes('en-GB')) {
                                        // console.log(Number(csv[i].Size) + 1)
                                        await page.click(`li[data-value="UK ${csv[i].Size} / US ${Number(csv[i].Size) + 1}"]`);
                                    } else {

                                        await page.click(`li[data-value="EU ${csv[i].Size}"]`);
                                    }

                                } catch {
                                    throw new Error(`Error fetching ${csv[i].Size}`)
                                }
                                await delay(1700)
                                // await page.select('#customer_salutation', 'mr');

                                await page.type('#email', `${csv[i].Email}`);
                                await delay(850);
                                await page.waitForSelector('#password');
                                await page.type('#password', `${csv[i].Password}`);
                                await delay(850);
                                await page.type('#phone', `${csv[i].Phone}`);
                                await delay(850);
                                const title = await page.$('#title > label');
                                await delay(300);
                                if (title) {
                                    await title.click();
                                }
                                await page.type('#firstName', `${csv[i].FirstName}`);
                                await delay(850);
                                await page.type('#lastName', `${csv[i].LastName}`);
                                await delay(850);
                                if (csv[i].Url.includes('footlocker.de')) {
                                    await page.type('#birthdate', `${randomIntFromInterval(10, 28)}.${randomIntFromInterval(10, 12)}.${randomIntFromInterval(1990, 2003)}`);

                                } else {

                                    await page.type('#birthdate', `${randomIntFromInterval(10, 28)}-${randomIntFromInterval(10, 12)}-${randomIntFromInterval(1990, 2003)}`);
                                }
                                await delay(850);
                                // await page.$eval('form', form => form.submit());
                                await page.click('.MuiBox-root.css-79elbk > button');
                                try {
                                    if (!csv[i].Url.includes('en-GB')) {

                                        await page.waitForSelector('#stateAutocomplete');
                                    }

                                } catch {
                                    throw new Error('Connection Error fetching shipping')
                                }
                                await delay(500);




                                // console.log(data);
                                await delay(1500);
                                if (!url.includes('footlocker')) {
                                    try {
                                        await page.click('#country');
                                        const country = await page.$(`li[data-value="${csv[i].Country}"]`);
                                        await country.click();
                                        await country.click();

                                    } catch {
                                        throw new Error('Country. Please use exact data in csv. (Case sensitive)')
                                    }

                                }
                                await delay(1000)
                                if (!csv[i].Url.includes('en-GB')) {
                                    await page.click('#stateAutocomplete');
                                    await delay(500);
                                    try {
                                        const state = await page.$x(`//li[text()="${csv[i].State}"]`);
                                        await state[0].click();

                                    } catch {
                                        throw new Error('State / Province not found. Please use exact data in csv. (Case sensitive)')
                                    }

                                }


                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Setting Address`);

                                // console.log(data);
                                // await page.$$eval()
                                await delay(1000)
                                // await page.click(`li[data-value="${csv[i].State}"]`);
                                // await page.keyboard.press('Enter');
                                await delay(500);
                                await page.type('#address1', `${csv[i].Address1} ${csv[i].HouseNumber}`);
                                await delay(500);
                                await page.type('#address2', `${csv[i].Address2}`);
                                await delay(500);
                                await page.type('#city', `${csv[i].City}`);
                                await delay(500);
                                await page.type('#postcode', `${csv[i].Zip}`);
                                await delay(1000);
                                await page.click('.MuiBox-root.css-79elbk > button');
                                await delay(1000)
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Adyen`);
                                const adyen = await page.$('span[data-cse="encryptedCardNumber"]')
                                if (adyen) {
                                    await page.waitForSelector('span[data-cse="encryptedCardNumber"]');
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await delay(1200);
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await delay(500)
                                    await page.keyboard.type(`${csv[i].CardNumber}`);
                                    await delay(800);
                                    await page.click('span[data-cse="encryptedExpiryDate"]');
                                    await page.click('span[data-cse="encryptedExpiryDate"]');
                                    await page.keyboard.type(`${csv[i].ExpiryDate}`);
                                    await delay(1200);
                                    await page.click('span[data-cse="encryptedSecurityCode"]');
                                    await page.click('span[data-cse="encryptedSecurityCode"]');
                                    await page.keyboard.type(`${csv[i].CVV}`);
                                    await delay(550);
                                    // await page.type('input[name="holderName"]', `${csv[i].NameOnCard}`);
                                    await page.type('input[name="postalCode"]', `${csv[i].Zip}`);
                                    await delay(550);

                                }
                                const stripe = await page.$('.__PrivateStripeElement');
                                if (stripe) {
                                    // await page.click('#billingName');
                                    // await page.click('#billingName');
                                    // await page.type('#billingName', `${csv[i].NameOnCard}`)
                                    await delay(500)
                                    await page.click('.__PrivateStripeElement');
                                    await page.click('.__PrivateStripeElement');
                                    await page.keyboard.type(`${csv[i].CardNumber}`);
                                    await page.keyboard.type(`${csv[i].ExpiryDate}`);
                                    await page.keyboard.type(`${csv[i].CVV}`);
                                }
                                await delay(550);

                                await page.click('#paymentConsent')
                                await delay(550);
                                await page.click('#termsConsent')
                                await delay(700);
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Entry`);
                                await page.click('.MuiBox-root.css-79elbk > button');
                                await delay(10000)

                                try {
                                    await page.waitForSelector('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button', { timeout: 15000 });
                                    await delay(3000)
                                    await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button', btn => btn.click());
                                    await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button', btn => btn.click());
                                    // await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0 > button', btn => btn.click());
                                    // await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0 > button', btn => btn.click());

                                } catch {

                                }
                                // if (!url.includes('4ballers')) {

                                // }
                                try {
                                    await page.waitForSelector('#code', { timeout: 30000 })

                                } catch {
                                    const duplicate = await page.$('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                    if (duplicate) {
                                        fs.appendFileSync('../accounts/eql.csv', `\n${csv[i].Email},${csv[i].Password},${csv[i].Phone}`);
                                        throw new Error('Account already registered, saved in accounts/eql.csv')
                                    }
                                    throw new Error('Error Fetching Authentication Token')
                                }
                                async function getVerificationCode() {
                                    var code;
                                    var error = false;
                                    for (var t = 0; t < 24; t++) {
                                        async function getMails() {
                                            var imap = new Imap({
                                                user: settings.masterMail,
                                                password: settings.masterPassword,
                                                host: 'imap.gmail.com',
                                                port: 993,
                                                tls: true,
                                                autotls: 'always'
                                            });

                                            function openInbox(cb) {
                                                imap.openBox('INBOX', false, cb);
                                            }

                                            imap.once('ready', function () {
                                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Opened Mailbox`);

                                                openInbox(function (err, box) {
                                                    // console.clear()
                                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Looking for verification mail`);

                                                    if (err) throw err;
                                                    imap.seq.search(['UNSEEN', ['FROM', 'support@eql.com']], function (err, results) {
                                                        if (!results || !results.length) {
                                                            console.log(`${getTime()} [${currentFunction.name}] No mail found, retrying in 5 seconds`);

                                                            imap.end();

                                                        } else {
                                                            var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                                            f.on('message', function (msg, seqno) {
                                                                // console.log('Message #%d', seqno);
                                                                var prefix = '(#' + seqno + ') ';
                                                                msg.on('body', function (stream, info) {
                                                                    simpleParser(stream, (err, mail) => {
                                                                        if (mail.subject.includes('code')) {
                                                                            // var bstnSplit = mail.text.split('(')[1];
                                                                            // var bstnLink = bstnSplit.split(')')[0]
                                                                            // var msgSplit = mail.html.split('<div style="display:block;font-family:Arial,sans-serif;font-size: 30px;font-weight: 600;line-height:24px;color:#333333">')
                                                                            // var msg = msgSplit[1].split('<')[0]
                                                                            const textSplit = mail.text.split('\n\n')[3]
                                                                            const verificatiecode = textSplit.split('\n')[1]
                                                                            code = verificatiecode
                                                                            // for (var i = 0; i < msgSplit.length; i++) {
                                                                            //     if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                                            //         var linklong = msgSplit[i].split('href="')
                                                                            //         var l = linklong[1].split('"')[0]
                                                                            //         links.push(l)
                                                                            //         break;
                                                                            //     }
                                                                            // }
                                                                        }
                                                                        // console.log(mail.html.split('\n'));
                                                                        // mes = mail.text.split('[')[2]
                                                                        // link = mes.split(']')[0];
                                                                        // console.log(link);
                                                                    });
                                                                    // imap.seq.setFlags(seqno, 'SEEN')


                                                                });
                                                                // msg.once('attributes', function (attrs) {
                                                                //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                                                // });
                                                                msg.once('end', function () {
                                                                    // console.log(prefix + 'Finished');


                                                                });
                                                            });
                                                            f.once('error', function (err) {
                                                                console.log('No mail found, retrying in 5 seconds..');
                                                            });
                                                            f.once('end', function () {
                                                                // console.log('Done fetching all messages!');
                                                                imap.end();
                                                            });
                                                        }



                                                    })
                                                });
                                            });



                                            imap.once('error', function (err) {
                                                console.log(chalk.red(err.message))
                                                console.log('Read the guide on how to setup your mailbox')
                                                error = true;

                                            });

                                            imap.once('end', async function () {


                                                // console.log('Connection ended');
                                            });

                                            imap.connect();
                                        }
                                        getMails()
                                        await delay(5000);
                                        if (code) {

                                            return code;
                                        }
                                        if (error) {
                                            throw new Error('Error connecting to imap')
                                        }
                                        if (t == 24) {

                                            throw new Error('Mail not found')
                                        }
                                    }
                                };
                                code = await getVerificationCode();
                                await delay(500);
                                await page.type('#code', `${code}`)
                                await delay(1000);
                                await page.$eval('.MuiBox-root.css-79elbk > button', b => b.click())
                                await page.click('.MuiBox-root.css-79elbk > button');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Verifying..`);
                                try {

                                    await page.waitForSelector('.MuiBox-root.css-1yjvs5a > button');
                                } catch {
                                    throw new Error('')
                                }
                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered, account ${csv[i].Email} saved in 'accounts/eql.csv'`));
                                fs.appendFileSync('../accounts/eql.csv', `\n${csv[i].Email},${csv[i].Password},${csv[i].Phone}`);
                                retry = 'no';
                                successfulLog(csv[i], currentFunction);
                                var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);
                                let task = csv[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                    await delay(200);
                                    await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                    await delay(200);
                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                } catch (e) {
                                    console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

                                }


                                // console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${csv[i].Email} Generated!`));






                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(csv[i], currentFunction, 'dev', true, ERROR);
                                var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);

                                if (!retry == 'no')
                                    retry = 'yes';
                            } finally {
                                if (browser) {
                                    browser.close();
                                }
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                    i = i - 1;
                                    t = t + 1;
                                    continue;
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(csv[i], currentFunction)
                                    retry = 'no';
                                    t = 0;
                                }
                                console.log(`Waiting for ${settings.delay} ms`);
                                await delay(settings.delay);
                            }
                        }
                        else {
                            const url = `${csv[i].Url}`
                            if (retry != 'yes') {
                                var retry = '';
                                var t = 0;

                            }




                            if (csv[i].Email == '' || csv[i].FirstName == '' || csv[i].LastName == '') {
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                                continue;
                            }
                            if (csv[i].Password == '') {
                                csv[i].Password = 'JRaffles23!'
                            }
                            if (settings.useRandomProxy = false) {
                                var proxySplit = proxies[i].split(":");
                            } else {
                                var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                var proxySplit = proxies[randomProxy].split(":");
                            }
                            var browser;
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });
                            }
                            try {
                                const page = await browser.newPage();
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                                await page.setRequestInterception(true);
                                page.on("request", (req) => {
                                    if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                        req.abort();
                                    } else {
                                        req.continue();
                                    }
                                });
                                await page.goto(url);
                                // await delay(50000)
                                await page.waitForSelector('body > div.css-ntpfvx > div > div > div.MuiBox-root.css-1upilqn > div > button')
                                await page.click('body > div.css-ntpfvx > div > div > div.MuiBox-root.css-1upilqn > div > button')
                                await delay(2000)
                                await page.waitForSelector('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc')
                                await page.click('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc')
                                // await page.$eval('#gatsby-focus-wrapper > main > div.css-hpuw4b > div > div.MuiBox-root.css-qd9g9l > div:nth-child(1) > div > div > div.MuiBox-root.css-nomazo > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc', btn => btn.click())
                                await delay(1000);
                                await page.waitForSelector('#email');
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Setting Credentials`);
                                // await page.select('#customer_salutation', 'mr');

                                await page.type('#email', `${csv[i].Email}`);
                                await delay(850);
                                await page.waitForSelector('#password');
                                await page.type('#password', `${csv[i].Password}`);
                                await delay(850);

                                // await page.$eval('form', form => form.submit());
                                await page.click('.MuiBox-root.css-79elbk > button');
                                await delay(5000)
                                if (!csv[i].Url.includes('footlocker'))
                                    await page.click('.MuiBox-root.css-i3pbo > button')
                                // await page.click('.MuiBox-root.css-79elbk > button');
                                try {
                                    await page.waitForSelector('div[data-testid="field-productVariantID"]');

                                } catch {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Not an active Raffle / Already Entered`));
                                    successfulLog(csv[i], currentFunction);
                                    retry = 'no';
                                    continue;

                                }
                                await page.click('div[data-testid="field-productVariantID"]');
                                await delay(1000);
                                try {
                                    if (csv[i].Url.includes('en-GB')) {
                                        // console.log(Number(csv[i].Size) + 1)
                                        await page.click(`li[data-value="UK ${csv[i].Size} / US ${Number(csv[i].Size) + 1}"]`);
                                    } else {

                                        await page.click(`li[data-value="EU ${csv[i].Size}"]`);
                                    }
                                } catch {
                                    throw new Error(`Error fetching size ${csv[i].Size}`);
                                }
                                await delay(500)
                                // await page.click('#firstName');
                                // await delay(100)
                                // await page.click('#firstName');
                                // await delay(100)
                                // await page.click('#firstName');

                                // await delay(300)
                                // await page.type('#firstName', `${csv[i].FirstName}`);
                                // await delay(300)
                                // await page.click('#lastName');
                                // await page.click('#lastName');
                                // await delay(850);
                                // await page.type('#lastName', `${csv[i].LastName}`);
                                const title = await page.$('#title > label');
                                await delay(300);
                                if (title) {
                                    await title.click();
                                }
                                await page.click('.MuiBox-root.css-79elbk > button');

                                // await page.$eval('.css-9rzfaw', f => f.submit())
                                await page.focus('#postcode')
                                await page.keyboard.down('Control');
                                await page.keyboard.press('A');
                                await page.keyboard.up('Control');
                                await page.keyboard.press('Backspace');
                                await page.keyboard.type(csv[i].Zip);
                                await delay(1550);
                                await page.click('.MuiBox-root.css-79elbk > button');
                                await delay(1000)
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Adyen`);
                                await delay(500)
                                const adyen = await page.$('span[data-cse="encryptedCardNumber"]')
                                if (adyen) {
                                    await page.waitForSelector('span[data-cse="encryptedCardNumber"]');
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await delay(1200);
                                    await page.click('span[data-cse="encryptedCardNumber"]');
                                    await delay(500)
                                    await page.keyboard.type(`${csv[i].CardNumber}`);
                                    await delay(800);
                                    await page.click('span[data-cse="encryptedExpiryDate"]');
                                    await page.keyboard.type(`${csv[i].ExpiryDate}`);
                                    await delay(1200);
                                    await page.click('span[data-cse="encryptedSecurityCode"]');
                                    await page.keyboard.type(`${csv[i].CVV}`);
                                    await delay(550);
                                    // await page.type('input[name="holderName"]', `${csv[i].NameOnCard}`);
                                    await page.type('input[name="postalCode"]', `${csv[i].Zip}`);
                                    await delay(550);

                                }
                                const stripe = await page.$('.__PrivateStripeElement');
                                if (stripe) {
                                    await page.click('#billingName');
                                    await page.click('#billingName');
                                    await page.type('#billingName', `${csv[i].NameOnCard}`)
                                    await delay(500)
                                    await page.click('.__PrivateStripeElement');
                                    await page.click('.__PrivateStripeElement');
                                    await page.keyboard.type(`${csv[i].CardNumber}`);
                                    await page.keyboard.type(`${csv[i].ExpiryDate}`);
                                    await page.keyboard.type(`${csv[i].CVV}`);
                                }
                                await delay(550);
                                await page.click('#paymentConsent')
                                await delay(550);
                                await page.click('#termsConsent')
                                await delay(700);
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Entry`);
                                await page.click('.MuiBox-root.css-79elbk > button');
                                await delay(10000)

                                try {
                                    await page.waitForSelector('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button');
                                    await delay(3000)
                                    await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button', btn => btn.click());
                                    await page.$eval('body > div.MuiModal-root.MuiDialog-root.css-1ltcsoi > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiGrid-root.MuiGrid-container.css-wybudx > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a > button', btn => btn.click());

                                } catch {

                                }
                                try {
                                    await page.waitForSelector('.MuiBox-root.css-1yjvs5a > button');

                                } catch {
                                    throw new Error('Failure getting succes response')
                                }
                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered`));
                                successfulLog(csv[i], currentFunction);
                                var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);
                                let task = csv[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                    await delay(200);
                                    await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                    await delay(200);
                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                } catch (e) {
                                    console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

                                }
                                retry = 'no';



                                // console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${csv[i].Email} Generated!`));






                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(csv[i], currentFunction, 'dev', true, ERROR);
                                var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                                retry = 'yes';
                            } finally {
                                if (browser) {
                                    browser.close();
                                }
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                    i = i - 1;
                                    t = t + 1;
                                    continue;
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(csv[i], currentFunction)
                                    retry = 'no';
                                    t = 0;
                                }
                                console.log(`Waiting for ${settings.delay} ms`);
                                await delay(settings.delay);
                            }
                        }

                    }
                }
            },

        ]
    },
    {
        name: "FENOM",
        modules: [
            {
                name: 'FENOM Account Generator',
                store: 'FENOM',
                logo: 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                function: async function (currentFunction, fenom, proxies) {
                    var opium = fenom;
                    var tasks = 0;
                    for (var i = 0; i < fenom.length; i++) {
                        maxTasks = Number(settings.threads);

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                            // console.log(`waiting`)
                        }
                        let skip = false;
                        async function fenomFunction(currentFunction, fenom, proxies, i, t) {
                            tasks++;
                            puppeteer.use(StealthPlugin());
                            puppeteer.use(RecaptchaPlugin({
                                provider: {
                                    id: '2captcha',
                                    token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                                },
                                visualFeedback: true
                            }))
                            if (retry != 'yes') {
                                var retry = '';
                                var t = 0;

                            }
                            var ERROR;
                            try {
                                await jig(fenom, i);

                            } catch {
                                retry = 'no';
                                throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                            }
                            setTitle(`${currentFunction.name} Task ${i + 1} / ${fenom.length} || File: ${currentFile} Proxies: ${currentProxy}`);

                            var succesDEV = await makeEmbed(fenom[i], currentFunction, 'acc', false);


                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] }
                            };
                            const url = `https://www.fenom.com/en/authentication?create_account=1`
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                            var browser;
                            async function checkDuplicate(csv) {
                                const successFile = fs.readFileSync('../accounts/fenom.csv', 'utf8');
                                const success = Papa.parse(successFile, { header: true }).data
                                // console.log(success)
                                let duplicate = false
                                for (var task of success) {
                                    if (task.Email == csv.Email) {
                                        duplicate = true;
                                        break;
                                    }
                                }
                                return duplicate;

                            }
                            // pxyPBtPONpqy1jTFkbDYoTsQryOMa_b81yDXOV2wPvI-1676636568-0-160
                            try {
                                if (await checkDuplicate(fenom[i]) == true) {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task Already Entered, Going to Next Task`);
                                    skip = true;
                                    dupli = true;
                                    return;
                                }
                                try {
                                    browser = await puppeteer.launch({
                                        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                        headless: false,
                                        args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                    });

                                } catch {
                                    browser = await puppeteer.launch({
                                        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                        headless: false,
                                        args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                    });
                                }
                                const page = await browser.newPage();
                                await page.setViewport({
                                    width: 1280 + randomIntFromInterval(1, 50),
                                    height: 729 + randomIntFromInterval(1, 50)
                                })
                                const session = await page.target().createCDPSession();
                                const { windowId } = await session.send('Browser.getWindowForTarget');
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                                await page.goto(`${url}`, { waitUntil: 'networkidle2' });
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Cloudflare`);
                                await delay(5000);
                                var cf = await page.$('.hcaptcha-box');
                                if (cf) {
                                    console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Handling Challenge`);
                                    await delay(10000);
                                    const challengeButton = await page.$('.hcaptcha-box');
                                    if (challengeButton) {
                                        try {

                                            await challengeButton.click();
                                        } catch {
                                            throw new Error('Empty Turnstile Challenge')
                                        }
                                    }
                                    try {
                                        await page.waitForSelector('input[name="firstname"]', { timeout: 40000 });

                                    } catch {
                                        var challengeButton2 = await page.$('.hcaptcha-box');
                                        if (challengeButton2) {

                                            try {

                                                await challengeButton2.click();
                                            } catch {
                                                throw new Error('Empty Turnstile Challenge')
                                            }
                                        }
                                    }
                                    // await frame.click('#challenge-stage > div > label > input');

                                }

                                // try {
                                //     const turnstile = await page.$eval()
                                // } catch {

                                // }
                                try {

                                    await page.waitForSelector('input[name="firstname"]', { timeout: 120000 });
                                    await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'minimized' } });
                                    await delay(4000);
                                } catch {
                                    throw new Error('Blocked by cloudflare')
                                }
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking Credentials`);
                                await page.type('input[name="firstname"]', `${fenom[i].FirstName}`);
                                await delay(500);
                                await page.type('input[name="lastname"]', `${fenom[i].LastName}`);
                                await delay(500);
                                await page.type('input[name="email"]', `${fenom[i].Email}`);
                                await delay(500);
                                await page.type('input[name="password"]', `${fenom[i].Password}`);
                                await delay(600);
                                await page.$eval('input[name="psgdpr"]', btn => btn.click());
                                await delay(500);
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Request`);
                                await page.$eval('#customer-form', form => form.submit());
                                try {
                                    try {
                                        await page.waitForSelector('.product-list.slider-fenom', { timeout: 60000 });

                                    } catch {
                                        throw new Error('Succes-response not found')
                                    }
                                    retry = 'no';

                                    console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${fenom[i].Email} Generated`));
                                    fs.appendFileSync('../accounts/fenom.csv', `\n${fenom[i].Email},${fenom[i].Password}`);
                                    let task = fenom[i]
                                    try {
                                        prxdata = {
                                            username: username.replace('#', ''),
                                            module: currentFunction.name,
                                            entrydata: JSON.stringify(task),
                                            proxy: `${proxies[i]}`
                                        }
                                        var prx = JSON.stringify(prxdata);
                                        let config = {
                                            headers: {
                                                'content-type': 'application/json',
                                            }
                                        }
                                        await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                    } catch (e) {

                                    }
                                    try {
                                        if (settings.webhook != undefined && settings.webhook != '') {
                                            await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                        }
                                    } catch {
                                    }
                                    await sendWebhook(accountWH, EMBEDS.succesDEVMSG);

                                } catch (e) {
                                    throw new Error(`Account generation failed`)
                                }


                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                                ERROR = `${e}`
                                var errorDEV = await makeEmbed(fenom[i], currentFunction, 'acc', true, ERROR);
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                                retry = 'yes';
                            } finally {
                                if (browser) {

                                    browser.close();
                                }
                                if (retry == 'yes' && t != 5) {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));

                                    t = t + 1;
                                    tasks--;

                                    return fenomFunction(currentFunction, fenom, proxies, i, t);
                                }
                                if (retry == 'yes' && t >= 5) {
                                    errorLog(fenom[i], currentFunction)

                                }
                                if (!skip) {
                                    console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                                    await delay(settings.delay);

                                }


                                tasks--;
                            }

                        }
                        fenomFunction(currentFunction, opium, proxies, i);
                        if (!skip) {
                            // console.log('skip')
                            await delay(350);
                        }
                    }

                }
            },
            {
                name: 'FENOM Raffle Entries',
                store: 'FENOM',
                logo: 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                function: async function fenomModule(currentFunction, fenom, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < fenom.length; i++) {
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var ERROR;
                        try {
                            await jig(fenom, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${fenom.length} || File: ${currentFile} Proxies: ${currentProxy}`);


                        const url = `https://www.fenom.com/en/authentication?create_account=1`;
                        var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                        var proxySplit = proxies[randomProxy].split(":");
                        var browser;
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: false,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: false,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();

                            const session = await page.target().createCDPSession();
                            const { windowId } = await session.send('Browser.getWindowForTarget');
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            await page.goto(`https://www.fenom.com/en/authentication`, { waitUntil: 'networkidle2' });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Cloudflare`);
                            // await delay(3000);
                            await delay(5000);
                            var cf = await page.$('.hcaptcha-box');
                            if (cf) {
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Handling Challenge`);
                                await delay(10000);
                                const challengeButton = await page.$('.hcaptcha-box');
                                if (challengeButton) {
                                    try {

                                        await challengeButton.click();
                                    } catch {
                                        throw new Error('Empty Turnstile Challenge')
                                    }
                                }
                                try {
                                    await page.waitForSelector('input[name="firstname"]', { timeout: 40000 });

                                } catch {
                                    var challengeButton2 = await page.$('.hcaptcha-box');
                                    if (challengeButton2) {

                                        try {

                                            await challengeButton2.click();
                                        } catch {
                                            throw new Error('Empty Turnstile Challenge')
                                        }
                                    }
                                }
                                // await frame.click('#challenge-stage > div > label > input');

                            }
                            await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'minimized' } });
                            await delay(8000);
                            try {

                                await page.waitForSelector('input[name="email"]', { timeout: 120000 });
                            } catch {
                                throw new Error('Blocked by cloudflare')
                            }
                            await delay(5000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Logging in`);
                            await page.type('input[name="email"]', `${fenom[i].Email}`);
                            await delay(500);
                            await page.type('input[name="password"]', `${fenom[i].Password}`);
                            await delay(600);
                            await page.$eval('#login-form', form => form.submit());
                            await page.waitForSelector('.product-list.slider-fenom', { timeout: 60000 });
                            await delay(500);
                            await page.goto(`${fenom[i].Url}`);
                            await page.waitForSelector('.prod-variant > ul > li');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing Size ${fenom[i].Size}`);

                            if (fenom[i].Size != 'RANDOM') {
                                var size = ` ${fenom[i].Size} `;
                                const sizeButtons = await page.$x(`//span[contains(text(), ${size})]`);
                                await sizeButtons[0].click();
                            } else {
                                const sizeButtons = await page.$$(`.prod-variant > ul > li`);
                                var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
                                await sizeButtons[randomSize].click();

                            }
                            await delay(600);
                            await page.click('#cookieChoiceDismiss');
                            await delay(1000);
                            await page.type('#instagram-account', `${fenom[i].Follower}`);
                            await delay(650);
                            await page.click('#book-btn');
                            await delay(3000);
                            try {

                                await page.waitForSelector('#recaptcha-container > div > div > iframe');
                            } catch {
                                throw new Error('Captcha not found')
                            }
                            await delay(500);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.cyan('Solving Captcha')}`);
                            await page.solveRecaptchas();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Finishing Entry`);

                            await delay(2000);
                            await page.$eval('#book-btn-for-sure', btn => btn.click());
                            await delay(300)
                            await page.click('#book-btn-for-sure');
                            await delay(3500);
                            const success = await page.$eval('.reservation-popup > .title', (element) => {
                                return element.innerHTML
                            })
                            // console.log(success)
                            if (success) {
                                retry = 'no';
                                successfulLog(fenom[i], currentFunction);

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                var succesDEV = await makeEmbed(fenom[i], currentFunction, 'dev', false);
                                var succesPUB = await makeEmbed(fenom[i], currentFunction, 'pub', false);
                                let task = fenom[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                                const EMBEDS =
                                {
                                    succesDEVMSG: { embeds: [succesDEV] },
                                    succesPUBMSG: { embeds: [succesPUB] }
                                };
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                    await delay(200);
                                    await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                    await delay(200);
                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                } catch (e) {
                                    console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

                                }
                            } else {
                                throw new Error('Error sending entry. Check if duplicate, or proxies.')
                            }


                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`
                            var errorDEV = await makeEmbed(fenom[i], currentFunction, 'dev', true, ERROR);
                            var succesDEV = await makeEmbed(fenom[i], currentFunction, 'dev', false);
                            var succesPUB = await makeEmbed(fenom[i], currentFunction, 'pub', false);

                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] },
                                succesPUBMSG: { embeds: [succesPUB] }
                            };
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            if (e != 'Error sending entry. Check if duplicate, or proxies.') {

                                retry = 'yes';
                            }
                        } finally {
                            browser.close();
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(fenom[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },
    {
        name: "FOOTSHOP",
        modules: [
            {
                name: 'FOOTSHOP Raffle Entries',
                store: 'Footshop',
                logo: 'https://images.easyfundraising.org.uk/retailer/cropped/logo-footshop-1615542072.png',
                function: async function (currentFunction, footshop, proxies) {

                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < footshop.length; i++) {
                        var ERROR;
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful Footshop entry`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Product`,
                                        "value": `${footshop[i].Url}`
                                    },
                                    {
                                        "name": `Size`,
                                        "value": `${footshop[i].Size}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.footshopDelay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]
                        var succesDEV = await makeEmbed(footshop[i], currentFunction, 'dev', false);
                        var succesPUB = await makeEmbed(footshop[i], currentFunction, 'pub', false);
                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] },
                            succesPUBMSG: { embeds: [succesPUB] }
                        };
                        const msg = { embeds: embed };
                        try {
                            await jig(footshop, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        if (footshop[i].Email == '' || footshop[i].FirstName == '' || footshop[i].LastName == '' || footshop[i].Country == '' || footshop[i].Size == '' || footshop[i].Address1 == '' || footshop[i].Zip == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }
                        // console.log(footshop[i].Url)
                        // async function getSizePid() {
                        //     var sizes = await axios.get(`https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_`)
                        //         .then((response) => response.data)
                        //         .catch(() => undefined);
                        //     console.log(sizes)
                        //     var sizePids = sizes.sizeSets.Men.sizes;
                        //     if (sizePids.length == 0) {
                        //         sizePids = sizes.sizeSets.Women.sizes;
                        //         if (sizePids.length == 0) {
                        //             sizePids = sizes.sizeSets.Unisex.sizes;
                        //             if (sizePids.length == 0) {
                        //                 sizePids = sizes.sizeSets.Kids.sizes;
                        //             }
                        //         }
                        //     };
                        //     async function checkSize() {
                        //         for (var s = 0; s < sizePids.length; s++) {
                        //             if (sizePids[s].eur == footshop[i].Size) {
                        //                 sizeLink = sizePids[s].id
                        //                 console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Found SizePid`);
                        //                 return true;
                        //             }
                        //         }
                        //         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Size ${footshop[i].Size} not found`);
                        //         return false;
                        //     };
                        //     let sizeCheck = await checkSize();
                        //     if (sizeCheck == false) {
                        //         return false;
                        //     }


                        // }
                        // let sizeCheck = await getSizePid();
                        // if (sizeCheck == false) {
                        //     continue;
                        // }
                        if (footshop[i].Email == '' || footshop[i].FirstName == '' || footshop[i].LastName == '' || footshop[i].Country == '' || footshop[i].Size == '' || footshop[i].Address1 == '' || footshop[i].Zip == '' || footshop[i].Phone == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }
                        const url = `${footshop[i].Url}`

                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }

                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });


                            try {
                                await page.goto(url);
                                await delay(3000);
                                await page.waitForSelector('.control__JhutY');

                            } catch {
                                throw new Error('Proxy Error')
                            }
                            await page.click('.control__JhutY');
                            await delay(500);
                            if (footshop[i].Size != 'RANDOM') {
                                try {
                                    const sizeButtons = await page.$x(`//div[contains(text(), '${footshop[i].Size}')]`);
                                    await sizeButtons[0].click();
                                } catch {
                                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Size Not Found`));
                                    continue;
                                }
                            } else {
                                const sizeButtons = await page.$$('.options__3UQpT > div.row');
                                var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
                                await sizeButtons[randomSize].click();
                            }
                            await delay(1200);
                            const enterButton = await page.$x("//span[contains(text(), 'Enter raffle now')]");
                            await enterButton[0].click();

                            await page.waitForSelector('input[name="email"]');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Entry Credentials`);
                            await page.type('input[name="email"]', `${footshop[i].Email}`);
                            await delay(1600);
                            await page.type('input[name="phone"]', `${footshop[i].Phone}`);
                            await delay(1200);
                            await page.click('button.btn.continue-button__1RtsS');
                            await delay(1200);
                            try {
                                await page.type('input[name="firstName"]', `${footshop[i].FirstName}`);
                                await delay(600);
                            } catch {
                                const errorMessage = await page.$$eval('.invalid-feedback > div', err => {
                                    return err.map(err => err.innerText);
                                });
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${errorMessage}`));
                                continue;
                            }
                            await page.type('input[name="lastName"]', `${footshop[i].LastName}`);
                            await delay(200);
                            await page.type('input[name="instagramUsername"]', `${footshop[i].Follower}`);
                            await delay(1200);
                            await page.click('button.btn.continue-button__1RtsS');
                            await delay(1000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Shipping`);
                            await page.select('select[name="country"]', `${footshop[i].Country}`);
                            await delay(700);
                            await page.type('input[name="streetName"]', `${footshop[i].Address1}`);
                            await delay(600);
                            await page.type('input[name="houseNumber"]', `${footshop[i].HouseNumber} ${footshop[i].Address2}`);
                            await delay(200);
                            await page.type('input[name="postalCode"]', `${footshop[i].Zip}`);
                            await delay(500);
                            await page.type('input[name="city"]', `${footshop[i].City}`);
                            await delay(1200);
                            await page.click('input[name="consent::privacy-policy-101"]');
                            await delay(1200);
                            await page.click('button.btn.continue-button__1RtsS');
                            await delay(1200);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving hCaptcha`);
                            await page.solveRecaptchas();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : hCaptcha solved`);
                            await delay(3000);
                            await page.click('button.btn.continue-button__1RtsS');
                            await delay(5000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Adyen`);
                            await page.waitForSelector('span[data-cse="encryptedCardNumber"]');
                            await page.click('span[data-cse="encryptedCardNumber"]');
                            await delay(1200);
                            await page.type('span[data-cse="encryptedCardNumber"]', `${footshop[i].CardNumber}`);
                            await delay(800);
                            await page.click('span[data-cse="encryptedExpiryDate"]');
                            await page.type('span[data-cse="encryptedExpiryDate"]', `${footshop[i].ExpiryDate}`);
                            await delay(1200);
                            await page.click('span[data-cse="encryptedSecurityCode"]');
                            await page.type('span[data-cse="encryptedSecurityCode"]', `${footshop[i].CVV}`);
                            await delay(550);
                            await page.type('input[name="holderName"]', `${footshop[i].NameOnCard}`);
                            await delay(550);
                            await page.click('button.adyen-checkout__button');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Awaiting 3DS`);

                            try {
                                await page.waitForSelector('.thank-you__1AwOo', { timeout: 300000 });
                                await delay(3000);

                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : 3DS Failed`));
                                ERROR = `3DS Error ${e}`;
                                var errorDEV = await makeEmbed(footshop[i], currentFunction, 'dev', true, ERROR);
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                                continue;
                            }
                            successfulLog(footshop[i], currentFunction);

                            console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                            let task = footshop[i]
                            try {
                                prxdata = {
                                    username: username.replace('#', ''),
                                    module: currentFunction.name,
                                    entrydata: JSON.stringify(task),
                                    proxy: `${proxies[i]}`
                                }
                                var prx = JSON.stringify(prxdata);
                                let config = {
                                    headers: {
                                        'content-type': 'application/json',
                                    }
                                }
                                await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                            } catch (e) {

                            }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                try {

                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                } catch {

                                }
                            }
                            await delay(200);
                            await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                            await delay(200);
                            try {

                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                            } catch {

                            }
                        } catch (e) {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`);
                            ERROR = `${e}`;
                            var errorDEV = await makeEmbed(footshop[i], currentFunction, 'dev', true, ERROR);
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            retry = 'yes';
                        } finally {
                            browser.close();
                            if (retry == 'yes' && t != 5) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },
    {
        name: "Google Forms",
        modules: [
            {
                name: 'SMART ENTRIES',
                store: 'Google Forms',
                logo: 'https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png',
                function: async function (currentFunction, csv, proxies) {
                    let raffleData = {
                        FirstName: '',
                        LastName: '',
                        Email: '',
                        Country: '',
                        Address: '',
                        City: '',
                        Zip: '',
                        Size: '',
                        Phone: '',

                    }
                    let custom = 0;
                    let strict = 0;
                    function log(c) {
                        console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${c}`);
                    }
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < csv.length; i++) {
                        var ERROR;
                        if (retry != 'yes') {
                            if (!retry) {
                                var retry = '';

                            } else {
                                retry = '';
                            }
                            var t = 0;

                        }
                        try {
                            await jig(csv, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        if (csv[i].Email == '' || csv[i].FirstName == '' || csv[i].LastName == '' || csv[i].Country == '' || csv[i].Size == '' || csv[i].Address1 == '' || csv[i].Zip == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }




                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }

                        var browser
                        // log(proxySplit.length)
                        if (proxySplit.length == 1) {
                            // log('hi')
                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: ['--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: ['--no-sandbox', '--disable-setuid-sandbox'],
                                    env: { LANGUAGE: "en-US" }
                                });
                            }
                        } else {

                            try {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                });

                            } catch {
                                browser = await puppeteer.launch({
                                    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                    headless: true,
                                    args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                                    env: { LANGUAGE: "en-US" }
                                });
                            }
                        }
                        try {
                            let filled = {
                                first: false
                            }

                            const page = await browser.newPage();
                            if (proxySplit.length != 0)
                                await page.authenticate({
                                    username: `${proxySplit[2]}`,
                                    password: `${proxySplit[3]}`,
                                });
                            await page.setExtraHTTPHeaders({
                                'Accept-Language': 'en-US'
                            });
                            log(`Getting Session`);
                            await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });


                            try {
                                await page.goto(csv[i].Url, { waitUntil: 'networkidle0' });
                                await delay(3000);
                                await page.waitForSelector('.teQAzf');

                            } catch (e) {
                                throw new Error(e)
                            }
                            let questions = await page.$$('.o3Dpx > div[role="listitem"]');
                            // console.log(raffleData)
                            for (question of questions) {
                                // console.log('question found')
                                let title = await question.$eval('.M7eMe', el => el.textContent);
                                if (custom != 0) {
                                    // console.log('triggered != custom')
                                    let customFilled = false;
                                    for (let cus = 0; cus < custom; cus++) {
                                        // console.log(title)
                                        // console.log(raffleData[`custom${cus}`].title)
                                        if (title == raffleData[`custom${cus}`].title) {
                                            // console.log(title)
                                            // console.log(raffleData[`custom${cus}`].title)
                                            log(`Custom Selector found; ${title}`);
                                            let inputField = await question.$('input[jsname="YPqjbf"]'); // retrieve the input element
                                            let inputTextArea = await question.$('textarea[jsname="YPqjbf"]'); // retrieve the input element
                                            if (inputField) {
                                                await inputField.type(`${raffleData[`custom${cus}`].answer}`); // type into the input element

                                            }
                                            else if (inputTextArea) {
                                                await inputTextArea.type(`${raffleData[`custom${cus}`].answer}`); // type into the input element

                                            }
                                            customFilled = true;
                                            break;
                                        }
                                    }
                                    if (customFilled) {
                                        await delay(350)
                                        continue;
                                    }
                                }

                                try {
                                    if (title == raffleData['0Select'].title) {
                                        log(`Custom Selector found; ${raffleData['0Select'].title}`);
                                        let options = await question.$$('.ulDsOb');
                                        let click = await options[raffleData['0Select'].answer];
                                        await click.click();
                                        continue;
                                    }
                                    if (title == raffleData['1Select'].title) {
                                        log(`Custom Selector found; ${raffleData['1Select'].title}`);

                                        let options = await question.$$('.ulDsOb');
                                        let click = await options[raffleData['1Select'].answer];
                                        await click.click();
                                        continue;
                                    }
                                    if (title == raffleData['2Select'].title) {
                                        log(`Custom Selector found; ${raffleData['2Select'].title}`);

                                        let options = await question.$$('.ulDsOb');
                                        let click = await options[raffleData['2Select'].answer];
                                        await click.click();
                                        continue;
                                    }

                                } catch (e) {
                                    // log(e)
                                }
                                // console.log(title.toLowerCase())
                                if (title.toLowerCase().includes('mail') && !title.toLowerCase().includes('agree') || title == raffleData.Email) {
                                    log(`Mail Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea[jsname="YPqjbf"]')
                                    }
                                    await inputField.type(csv[i].Email); // type into the input element
                                    await delay(600);
                                    continue;

                                }
                                if (title.toLowerCase().includes('first') || title.toLowerCase() == 'name' || title.toLowerCase() == 'name ' || title == raffleData.FirstName) {
                                    log(`FirstName Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].FirstName} `); // type into the input element
                                    await delay(600);
                                    if (title == raffleData.FirstName)
                                        continue;
                                }
                                if (title.toLowerCase().includes('last') || title.toLowerCase().includes('surname') || title == raffleData.LastName) {
                                    log(`LastName Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].LastName} `); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('address') && !title.toLowerCase().includes('agree') || title == raffleData.Address) {
                                    log(`Address Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].Address1} ${csv[i].HouseNumber} ${csv[i].Address2}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('phone') || title.toLowerCase().includes('mobile') || title == raffleData.Phone) {
                                    log(`Phone Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].Phone}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('country') || title == raffleData.Country) {
                                    let select = await question.$('div[jsname="wCJL8"]');
                                    if (select) {
                                        // log('found');
                                        let found = false;
                                        let options = await select.$$('.ulDsOb');
                                        for (option of options) {
                                            let click = await option.$('span');
                                            let country = await option.$eval('span', el => el.textContent);
                                            if (country.toLowerCase() == csv[i].Country.toLowerCase()) {
                                                // log('found')
                                                await click.click();
                                                found = true;
                                                break;
                                            }
                                        }
                                        if (!found) {
                                            const otherCountry = await question.$('.Hvn9fb.zHQkBf')
                                            await otherCountry.click();
                                            await otherCountry.type(csv[i].Country);
                                        }
                                        continue;
                                    }
                                    log(`Country Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].Country}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('city') || title == raffleData.City) {
                                    log(`City Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].City}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('zip') || title == raffleData.Zip) {
                                    log(`Zip Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].Zip}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('insta') || title == raffleData.Follower) {
                                    log(`Follower Selector found; ${title}`);
                                    let inputField = await question.$('input'); // retrieve the input element
                                    if (!inputField) {
                                        inputField = await question.$('textarea')
                                    }
                                    await inputField.type(`${csv[i].Follower}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('size') || title == raffleData.Size) {
                                    log(`Size Selector found; ${title}`);
                                    let multiSelector = await question.$('div[jscontroller="sW52Ae"]'); // retrieve the input element
                                    if (multiSelector) {
                                        let sizes = await multiSelector.$$('.ulDsOb');
                                        if (csv[i].Size.toLowerCase() == 'random') {

                                            var randomSize = Math.round(Math.random() * (sizes.length - 1));
                                            await sizes[randomSize].click();
                                        } else {

                                            for (size of sizes) {
                                                let header = await size.$eval('.aDTYNe.snByac.n5vBHf.OIC90c', el => el.textContent);
                                                if (header.toLowerCase().includes(csv[i].Size)) {
                                                    await size.click();
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    let dropDown = await question.$('.ry3kXd');
                                    if (dropDown) {
                                        await dropDown.click();
                                        await delay(2500);
                                        let dropDown2 = await page.$('div[jsname="V68bde"]');
                                        let sizes = await dropDown2.$$('div[jsname="wQNmvb"]');
                                        for (size of sizes) {
                                            let header = await size.$eval('.vRMGwf.oJeWuf', el => el.textContent);
                                            let selector = await size.$('.vRMGwf.oJeWuf');
                                            // console.log(csv[i].Size)
                                            // log(header)
                                            if (header.toLowerCase().includes(csv[i].Size)) {
                                                await delay(400)
                                                await selector.click();
                                                break;
                                            }
                                        }
                                    }
                                    // await inputField.type(`${csv[i].Follower}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('receive') || title.toLowerCase().includes('method')) {
                                    log(`Method Selector found; ${title}`);

                                    let multiSelector = await question.$('div[jscontroller="sW52Ae"]'); // retrieve the input element
                                    if (multiSelector) {
                                        const sizes = await multiSelector.$$('.ulDsOb');
                                        for (size of sizes) {
                                            let header = await size.$eval('.aDTYNe.snByac.n5vBHf.OIC90c', el => el.textContent);
                                            if (header.toLowerCase().includes('shipping')) {
                                                await size.click();
                                                break;
                                            }
                                        }
                                    }
                                    // await inputField.type(`${csv[i].Follower}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                if (title.toLowerCase().includes('offers') || title.toLowerCase().includes('agree')) {
                                    log(`Authorization Selector found; ${title}`);

                                    const multiSelector = await question.$('div[jscontroller="sW52Ae"]'); // retrieve the input element
                                    if (multiSelector) {
                                        const sizes = await multiSelector.$$('.ulDsOb');
                                        for (size of sizes) {
                                            let header = await size.$eval('.aDTYNe.snByac.n5vBHf.OIC90c', el => el.textContent);
                                            if (header.toLowerCase().includes('authorize') || header.toLowerCase().includes('yes')) {
                                                await size.click();
                                                break;
                                            }
                                        }
                                    }
                                    // await inputField.type(`${csv[i].Follower}`); // type into the input element
                                    await delay(600);
                                    continue;
                                }
                                // log(`No property found for selector: ${title}`);
                                async function callTitle() {
                                    let strictSelect = await question.$('.oyXaNc')
                                    if (strictSelect) {
                                        console.log(`Choose an input for selector: ${chalk.cyan(title)}\n`);
                                        let options = await question.$$('.ulDsOb');
                                        for (let u = 0; u < options.length; u++) {
                                            let header = await options[u].$eval('span', el => el.textContent);
                                            console.log(` (${u}) ${header}`);
                                        }
                                        console.log();
                                        let choice = await prompt.get('option');
                                        let header = await options[choice.option].$eval('span', el => el.textContent);
                                        raffleData[`${strict}Select`] = { title: title, answer: choice.option };
                                        let click = await options[choice.option].$('span');
                                        await click.click();
                                        strict++;
                                        return;

                                    }
                                    let multiSelector = await question.$('.Y6Myld');
                                    if (multiSelector) {
                                        console.log(`Choose an input for selector: ${chalk.cyan(title)}\n`);
                                        let options = await question.$$('.ulDsOb');
                                        for (let u = 0; u < options.length; u++) {
                                            let header = await options[u].$eval('span', el => el.textContent);
                                            console.log(` (${u}) ${header}`);
                                        }
                                        console.log();
                                        let choice = await prompt.get('option');
                                        // let header = await options[choice.option].$eval('span', el => el.textContent);
                                        raffleData[`${strict}Select`] = { title: title, answer: choice.option.split(',') };
                                        for (opt of raffleData[`${strict}Select`].answer) {
                                            let click = await options[opt].$('span');
                                            await click.click();

                                        }
                                        strict++;
                                        return;
                                    }
                                    var l = 0;
                                    let props = Object.keys(raffleData);
                                    console.log(`Choose an input for selector: ${chalk.cyan(title)}\n`);
                                    for (data of props) {
                                        if (!data.includes('custom' && !data.includes('Select'))) {
                                            console.log(` (${l}) ${data} (Taken from csv)`);

                                        } else {
                                            console.log(` (${l}) ${data}`);

                                        }
                                        l++;
                                    }
                                    console.log(` (${props.length}) Custom input:`);
                                    console.log();
                                    let promptTitle = await prompt.get('input');
                                    if (promptTitle.input == props.length) {
                                        console.log('What should the bot fill in this input?\n');
                                        let input = await prompt.get('input');
                                        raffleData[`custom${custom}`] = { title: title, answer: input.input };
                                        let inputField = await question.$('input[jsname="YPqjbf"]'); // retrieve the input element
                                        let inputTextArea = await question.$('textarea[jsname="YPqjbf"]'); // retrieve the input element
                                        if (inputField) {
                                            await inputField.type(`${raffleData[`custom${custom}`].answer}`); // type into the input element

                                        }
                                        else if (inputTextArea) {
                                            await inputTextArea.type(`${raffleData[`custom${custom}`].answer}`); // type into the input element

                                        }
                                        custom++;
                                        return;
                                    }
                                    raffleData[`${props[promptTitle.input]}`] = title;
                                    // console.log();
                                    let inputField = await question.$('input[jsname="YPqjbf"]'); // retrieve the input element
                                    let inputTextArea = await question.$('textarea[jsname="YPqjbf"]'); // retrieve the input element
                                    if (inputField) {
                                        await inputField.type(`${csv[i][`${props[promptTitle.input]}`]}`); // type into the input element

                                    }
                                    if (inputTextArea) {
                                        await inputTextArea.type(`${csv[i][`${props[promptTitle.input]}`]}`); // type into the input element

                                    }

                                    await delay(600);

                                    // await delay(5000)
                                }
                                await callTitle();
                                await delay(890);
                            }
                            await page.click('div[jsname="M2UYVd"]');
                            try {
                                await page.waitForSelector('.vHW8K')

                            } catch {
                                throw new Error('Could not send Form, check all fields!')
                            }
                            successfulLog(csv[i], currentFunction);
                            retry = 'no';
                            var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                            var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);
                            let task = csv[i]
                            try {
                                prxdata = {
                                    username: username.replace('#', ''),
                                    module: currentFunction.name,
                                    entrydata: JSON.stringify(task),
                                    proxy: `${proxies[i]}`
                                }
                                var prx = JSON.stringify(prxdata);
                                let config = {
                                    headers: {
                                        'content-type': 'application/json',
                                    }
                                }
                                await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                            } catch (e) {

                            }
                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] },
                                succesPUBMSG: { embeds: [succesPUB] }
                            };
                            try {
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                }
                                await delay(200);
                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                await delay(200);
                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                            } catch (e) {
                                console.log(chalk.yellow(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Error sending webhook ${e}`));

                            }
                            console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));


                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`;
                            var errorDEV = await makeEmbed(csv[i], currentFunction, 'dev', true, ERROR);
                            let EMBEDS = {};
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();

                            }
                            if (retry == 'yes' && t != 5) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t == 5) {
                                t = 0;
                                retry = 'no';
                                continue;
                            }
                            log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },

    {
        name: 'JD',
        modules: [
            {
                name: 'JD Raffle Entries',
                store: 'JD',
                logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/2048px-JD_Sports_logo.svg.png',
                function: async function (currentFunction, jd, proxies) {
                    var isSuccess = false;
                    var isError = false;
                    if (settings.captchaKey == '' || settings.captchaKey == undefined) {
                        console.log(chalk.yellow('No 2Captcha key found in settings.json'));
                        console.log('Returning to Menu');
                        return menu();
                    }
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < jd.length; i++) {
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var ERROR;
                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful JD entry`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `Product`,
                                        "value": `${jd[i].Url}`
                                    },
                                    {
                                        "name": `Size`,
                                        "value": `${jd[i].Size}`
                                    },
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.delay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]
                        const msg = { embeds: embed };
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${jd.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(jd, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        var succesDEV = await makeEmbed(jd[i], currentFunction, 'dev', false);
                        var succesPUB = await makeEmbed(jd[i], currentFunction, 'pub', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] },
                            succesPUBMSG: { embeds: [succesPUB] }
                        };
                        if (settings.webhook != undefined && settings.webhook != '') {
                            try {

                                await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                            } catch {

                            }
                        }
                        await delay(200);
                        await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                        await delay(200);
                        try {

                            await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                        } catch {

                        }
                        if (jd[i].Email == '' || jd[i].Url == '' || jd[i].FirstName == '' || jd[i].LastName == '') {
                            console.log(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }

                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            try {

                                await page.goto(`${jd[i].Url}`,
                                    {
                                        waitUntil: "networkidle2",
                                        timeout: 60000
                                    });
                            } catch {
                                throw new Error('Connection Error')
                            }
                            try {
                                await page.waitForSelector('#comp_firstname', { timeout: 30000 });
                            } catch {
                                throw new Error('Not an Active Raffle');
                            }
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Information`);
                            await page.type('#comp_firstname', `${jd[i].FirstName}`);
                            await page.waitForSelector('#comp_lastname');
                            await page.type('#comp_lastname', `${jd[i].LastName}`);
                            await page.waitForSelector('#comp_email');
                            await page.type('#comp_email', `${jd[i].Email}`);
                            await page.waitForSelector('#comp_paypalemail');
                            await page.type('#comp_paypalemail', `${jd[i].Email}`);
                            await page.waitForSelector('#comp_mobile_end');
                            await page.type('#comp_mobile_end', `${jd[i].Phone}`);
                            await page.waitForSelector('#comp_dob');
                            await page.type('#comp_dob', `08/09/1992`);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing Size`);
                            if (jd[i].Size == 'RANDOM') {
                                const sizes = await page.$$eval('select[id="shoesize"] > option', sizes => {
                                    return sizes.map(size => size.value);
                                })
                                var randomSize = Math.round(Math.random() * (sizes.length - 2));
                                await page.select('#shoesize', sizes[randomSize + 1])
                                await delay(1000);
                                // console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Picking Random Size ${sizes[randomSize]}`);
                                // await page.click(`label[data-eu-size="${sizes[randomSize]}"]`);
                            } else {
                                const sizeString = await page.$$eval('select[id="shoesize"] > option', sizeString => {
                                    return sizeString.map(size => size.innerText)
                                }
                                )
                                const sizes = await page.$$eval('select[id="shoesize"] > option', sizes => {
                                    return sizes.map(size => size.value);
                                })
                                var sizeIndex = jd[i].Size
                                for (var s = 1; s < sizes.length; s++) {
                                    var size = sizeString[s].split(' ')[0];
                                    if (size == sizeIndex) {
                                        await page.select('#shoesize', sizes[s]);
                                        break;
                                    } else if (s + 1 == sizes.length) {
                                        throw new Error('Size Not Found..')
                                    }
                                }
                            }
                            await page.waitForSelector('#comp_address1');
                            await page.type('#comp_address1', `${jd[i].Address1} ${jd[i].HouseNumber}`);
                            await page.waitForSelector('#comp_address2');
                            await page.type('#comp_address2', `${jd[i].Address2}`);
                            await page.waitForSelector('#comp_address2');
                            await page.type('#comp_address3', `${jd[i].City}`);
                            await page.waitForSelector('#comp_postcode');
                            await page.type('#comp_postcode', `${jd[i].Zip}`);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Entry`);
                            await delay(1200);
                            await page.click('label#emailhold');
                            await delay(1500);
                            await page.click('#preauth_tandc_email > label');
                            await delay(1500);
                            await page.click('#submit');
                            try {
                                await page.waitForSelector('#paymentWrap');

                            } catch {
                                throw new Error('Could not find Payment')
                            }
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.blue('Awaiting Paypal Payment')}`);
                            browser.on('targetcreated', async (target) => {
                                if (target.type() === 'page') {
                                    //const page = await target.page();      
                                    const newpage = await target.page();
                                    async function checkError() {
                                        try {
                                            await page.waitForSelector('#error_message', { timeout: 300000 });
                                            isError = true;
                                            return;
                                        } catch {

                                        }
                                    }
                                    async function checkSuccess() {
                                        try {
                                            await page.waitForSelector('#successMessage', { timeout: 300000 });
                                            isSuccess = true;
                                            return;
                                        } catch {

                                        }
                                    }
                                    checkSuccess();
                                    checkError();
                                    await delay(300000);

                                    //.....
                                }
                            });
                            async function waitForSuccess() {
                                for (let s = 0; s < 300; s++) {
                                    if (isSuccess == true) {
                                        retry = 'no';
                                        successfulLog(jd[i], currentFunction);

                                        console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                        if (settings.webhook != undefined && settings.webhook != '') {
                                            try {

                                                await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                            } catch {

                                            }
                                        }
                                        await delay(200);
                                        await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                        await delay(200);
                                        try {

                                            await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                        } catch {

                                        }
                                        // await sendWebhook(succesWH, msg);
                                        return;
                                    } else if (isError) {
                                        throw new Error('Paypal Error: Target closed')
                                    } else {
                                        await delay(1000);
                                    }
                                }
                                throw new Error('Paypal Error');
                            }
                            await delay(3000);
                            await page.click('.zoid-outlet');
                            await delay(2000);
                            await waitForSuccess();

                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`;
                            var errorDEV = await makeEmbed(jd[i], currentFunction, 'dev', true, ERROR);
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(afew[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },
    {
        name: 'KICKZ',
        modules: [
            {
                name: 'KICKZ Account Generator',
                store: 'KICKZ',
                logo: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                function: async function (currentFunction, kickz, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < kickz.length; i++) {
                        const url = 'https://www.kickz.com/login'
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${kickz.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(kickz, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }

                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful Kickz Account Generated`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.delay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]
                        const msg = { embeds: embed };
                        var succesDEV = await makeEmbed(kickz[i], currentFunction, 'acc', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] }
                        };
                        if (kickz[i].Email == '' || kickz[i].FirstName == '' || kickz[i].LastName == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }
                        if (kickz[i].Password == '') {
                            kickz[i].Password = 'JRaffles23!'
                        }
                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto(url);
                            await delay(3000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Registration`);
                            await page.waitForSelector('#consent-dialog > section > button');
                            await page.click('#consent-dialog > section > button');
                            await page.waitForSelector('#button-register');
                            await delay(2000)
                            await page.evaluate(() => {
                                const element = document.querySelector("#button-register")
                                element.click();
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Setting Credentials`);
                            await delay(5000);
                            await page.waitForSelector('#customer_salutation');
                            await page.select('#customer_salutation', 'mr');
                            await delay(2000);
                            await page.waitForSelector('#customer_firstname');
                            await page.type('#customer_firstname', `${kickz[i].FirstName}`);
                            await delay(850);
                            await page.waitForSelector('#customer_lastname');
                            await page.type('#customer_lastname', `${kickz[i].LastName}`);
                            await delay(850);
                            await page.type('#email-input', `${kickz[i].Email}`);
                            await delay(850);
                            await page.type('#email-confirm-input', `${kickz[i].Email}`);
                            await delay(850);
                            await page.type('#register-password', `${kickz[i].Password}`);
                            await delay(850);
                            await page.type('#password-confirm', `${kickz[i].Password}`);
                            await delay(850);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Credentials`);
                            await page.click('#consent');
                            await delay(500);
                            const passwordError = await page.$('div.inputErrorMsg.b-form_section-message');
                            if (passwordError) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Your password must contain at least one uppercase & one lowercase letter, one number and one special character.`));
                                continue;
                            }
                            await page.click('#buttonRegister');
                            try {
                                await page.waitForSelector('#verificationCode');
                            } catch {
                                throw new Error('Account already registered')
                            }
                            // console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${kickz[i].Email} Generated!`));
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : A verification code has been sent to ${kickz[i].Email}`);
                            await delay(1200);
                            async function getVerificationCode() {
                                var code;
                                var error = false;
                                for (var t = 0; t < 24; t++) {
                                    async function getMails() {
                                        var imap = new Imap({
                                            user: settings.masterMail,
                                            password: settings.masterPassword,
                                            host: 'imap.gmail.com',
                                            port: 993,
                                            tls: true,
                                            autotls: 'always'
                                        });

                                        function openInbox(cb) {
                                            imap.openBox('INBOX', false, cb);
                                        }

                                        imap.once('ready', function () {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Opened Mailbox`);

                                            openInbox(function (err, box) {
                                                // console.clear()
                                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Looking for verification mail`);

                                                if (err) throw err;
                                                imap.seq.search(['UNSEEN', ['FROM', 'verification@kickz.com']], function (err, results) {
                                                    if (!results || !results.length) {
                                                        console.log(`${getTime()} [${currentFunction.name}] No mail found, retrying in 5 seconds`);

                                                        imap.end();

                                                    } else {
                                                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                                        f.on('message', function (msg, seqno) {
                                                            // console.log('Message #%d', seqno);
                                                            var prefix = '(#' + seqno + ') ';
                                                            msg.on('body', function (stream, info) {
                                                                simpleParser(stream, (err, mail) => {
                                                                    if (mail.subject == 'Kickz Account Verification Code') {
                                                                        // var bstnSplit = mail.text.split('(')[1];
                                                                        // var bstnLink = bstnSplit.split(')')[0]
                                                                        var msgSplit = mail.html.split('<div style="display:block;font-family:Arial,sans-serif;font-size: 30px;font-weight: 600;line-height:24px;color:#333333">')
                                                                        var msg = msgSplit[1].split('<')[0]
                                                                        code = msg
                                                                        // console.log(msg)
                                                                        // for (var i = 0; i < msgSplit.length; i++) {
                                                                        //     if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                                        //         var linklong = msgSplit[i].split('href="')
                                                                        //         var l = linklong[1].split('"')[0]
                                                                        //         links.push(l)
                                                                        //         break;
                                                                        //     }
                                                                        // }
                                                                    }
                                                                    // console.log(mail.html.split('\n'));
                                                                    // mes = mail.text.split('[')[2]
                                                                    // link = mes.split(']')[0];
                                                                    // console.log(link);
                                                                });
                                                                // imap.seq.setFlags(seqno, 'SEEN')


                                                            });
                                                            // msg.once('attributes', function (attrs) {
                                                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                                            // });
                                                            msg.once('end', function () {
                                                                // console.log(prefix + 'Finished');


                                                            });
                                                        });
                                                        f.once('error', function (err) {
                                                            console.log('No mail found, retrying in 5 seconds..');
                                                        });
                                                        f.once('end', function () {
                                                            // console.log('Done fetching all messages!');
                                                            imap.end();
                                                        });
                                                    }



                                                })
                                            });
                                        });



                                        imap.once('error', function (err) {
                                            console.log(chalk.red(err.message))
                                            console.log('Read the guide on how to setup your mailbox')
                                            error = true;

                                        });

                                        imap.once('end', async function () {


                                            // console.log('Connection ended');
                                        });

                                        imap.connect();
                                    }
                                    getMails()
                                    await delay(5000);
                                    if (code) {

                                        return code;
                                    }
                                    if (error) {
                                        throw new Error('Error connecting to imap')
                                    }
                                    if (t == 24) {

                                        throw new Error('Mail not found')
                                    }
                                }
                            };
                            code = await getVerificationCode();
                            delay(800);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Verifying..`);
                            await page.type('#verificationCode', code);
                            await delay(500);
                            await page.click('#buttonVerify');
                            await delay(400);
                            await page.click('#buttonVerify');
                            await delay(1000);
                            try {
                                await page.waitForSelector('div.b-user_greeting');
                                retry = 'no';

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${kickz[i].Email} Generated & Verified!`));
                                fs.appendFileSync('../accounts/kickz-verified.csv', `\n${kickz[i].Email},${kickz[i].Password},`);
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${kickz[i].Email} Saved in 'accounts/kickz-verified.csv'`);
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                } catch {
                                }
                                await sendWebhook(accountWH, EMBEDS.succesDEVMSG);
                            } catch {
                                retry = 'no';

                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Verification failed`));
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account saved in 'accounts/kickz-unverified.csv'`));

                            }



                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            embed[0].title = 'Failed kickz Acc Gen';
                            embed[0].description = `${e}`;
                            await sendWebhook(errorWH, msg);
                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(kickz[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            },
            {
                name: 'KICKZ Raffle Entries',
                store: 'KICKZ',
                logo: 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                function: async function (currentFunction, kickz, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < kickz.length; i++) {
                        var ERROR;
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${kickz.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful Kickz Entry`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Product`,
                                        "value": `${kickz[i].Url}`
                                    },
                                    {
                                        "name": `Size`,
                                        "value": `${kickz[i].Size}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.delay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]

                        var succesDEV = await makeEmbed(kickz[i], currentFunction, 'dev', false);
                        var succesPUB = await makeEmbed(kickz[i], currentFunction, 'pub', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] },
                            succesPUBMSG: { embeds: [succesPUB] }
                        };
                        // const msg = { embeds: embed };
                        try {
                            await jig(kickz, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        if (kickz[i].Email == '' || kickz[i].Password == '' || kickz[i].FirstName == '' || kickz[i].LastName == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }

                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: !true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: !true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto(`${kickz[i].Url}`, { waitUntil: 'networkidle2' });
                            await delay(300);
                            await page.waitForSelector('#consent-dialog > section > button');
                            await page.click('#consent-dialog > section > button');
                            await delay(2000);
                            try {
                                await page.click('a[title="Sign In"]');
                            } catch {
                                await page.click('a[title="sign in"]');
                            }
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Logging in`);
                            await page.waitForSelector('#username');
                            await page.type('#username', kickz[i].Email);
                            await page.waitForSelector('#password');
                            await page.type('#password', kickz[i].Password);
                            await delay(400);
                            await page.click('#buttonSubmit');
                            await page.waitForSelector('.b-variation_swatch-value_overlay');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Product`);
                            await delay(500);
                            // await page.goto(`${kickz[i].Url}`, { waitUntil: 'networkidle2' });
                            // await delay(200000)
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing size ${kickz[i].Size}`);
                            let size = kickz[i].Size.replace('.5', ' 1/2');
                            if (size.toUpperCase() == 'RANDOM') {
                                const sizeButtons = await page.$$('.b-variations_item-content.m-list > button');
                                var randomSize = Math.round(Math.random() * (sizeButtons.length - 1));
                                await sizeButtons[randomSize].click();
                            } else {

                                await page.click(`button[aria-label="${size}"]`)
                            }
                            await delay(500);
                            try {
                                await page.click('button[data-tau="add_new_address"]');
                            } catch {

                            }
                            await delay(300);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Information`);
                            await page.select('#dwfrm_raffle_addressFields_salutation', 'mr');
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_firstName', kickz[i].FirstName);
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_lastName', kickz[i].LastName);
                            await delay(300);
                            await page.select('#dwfrm_raffle_addressFields_country', kickz[i].Country);
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_city', kickz[i].City);
                            await delay(300);
                            if (kickz[i].Postcode == undefined) {
                                kickz[i].Postcode = kickz[i].Zip
                            }
                            await page.type('#dwfrm_raffle_addressFields_postalCode', kickz[i].Postcode);
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_address1', kickz[i].Address1);
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_address2', kickz[i].HouseNumber);
                            await delay(300);
                            await page.type('#dwfrm_raffle_addressFields_additionalAddressInfo', kickz[i].Address2);
                            await delay(300);
                            await page.click('#dwfrm_raffle_addressFields_saveAddress');
                            await delay(300);
                            await page.type('#dwfrm_raffle_raffleSpecificFields_instagramAccount', kickz[i].Follower);
                            await delay(500);
                            await page.click('#dwfrm_raffle_raffleSpecificFields_consentOnConditions')
                            await delay(500);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.blue('Awaiting Paypal Payment')}`);
                            await page.click('.b-paypal_button');
                            try {
                                await page.waitForSelector('.b-raffle-message.m-success', { timeout: 300000 });
                                retry = 'no';
                                successfulLog(kickz[i], currentFunction);

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                }
                                await delay(200);
                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                await delay(200);
                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                let task = kickz[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Paypal Error: ${e}`))
                                ERROR = `Error while entering Paypal: ${e}`
                                var errorDEV = await makeEmbed(kickz[i], currentFunction, 'dev', true, ERROR);
                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                }
                                await sendWebhook(errorWH, EMBEDS.errorDEV);
                            }
                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`
                            var errorDEV = await makeEmbed(kickz[i], currentFunction, 'dev', true, ERROR);
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(kickz[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.AfewDelay} ms`);
                            await delay(settings.AfewDelay);
                        }
                    }
                }
            }
        ]
    },
    {
        name: "MAHA Amsterdam",

        modules: [
            {
                name: "MAHA Raffle Entries",
                store: 'MAHA',
                logo: 'https://i1.sndcdn.com/avatars-XIAMNs5LPWV2iRwj-SNwa5A-t500x500.jpg',
                url: 'https://a.klaviyo.com/client/subscriptions/?company_id=THxSew',
                data: {
                    data: {
                        type: "subscription",
                        attributes: {
                            list_id: 'YqtGfh',
                            custom_source: "Air Jordan 4 Retro Thunder (2023)",
                            email: ``,
                            properties: {
                                $address1: "",
                                $city: "",
                                $country: "",
                                $first_name: "",
                                $last_name: "",
                                $zip: "",
                                $consent_method: "Klaviyo Form",
                                $consent_form_id: "Taryg7",
                                $consent_form_version: 9174950
                                ,
                                'Instagram Handle': ``,
                                Shipping: 'Shipping',
                                Size: '',
                                services: '{\"shopify\":{\"source\":\"form\"}}',
                                $timezone_offset: 2,
                            },
                        },
                    },
                },
                headers: {
                    'accept': "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "access-control-allow-headers": "*",
                    "content-type": "application/json",
                    "origin": "https://www.maha-amsterdam.com",
                    "referer": "https://www.maha-amsterdam.com/",
                    "revision": "2022-02-16",
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "'Windows'",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                },
                function: async function (currentFunction, oqium, proxies) {
                    for (var i = 0; i < oqium.length; i++) {
                        try {
                            await jig(oqium, i);

                        } catch {

                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        async function oqiumFunction(i, mode, currentFunction, oqium, proxies) {
                            var ERROR;
                            var data = {};
                            var embed = [];
                            var msg = {};
                            var sizeArray = [
                                '40', '40.5', '41', '42', '42.5', '43', '44', '45', '45.5', '46', '47', '47.5', '48'
                            ]
                            var randomSize = Math.round(Math.random() * (sizeArray.length - 1));

                            if (!oqium) {
                                oqium = {

                                };
                            }
                            if (mode != 'ver') {
                                setTitle(`${currentFunction.name} Task ${i + 1} / ${oqium.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                                await jig(oqium, i);

                                data = currentFunction.data;


                                data.data.attributes.email = `${oqium[i].Email}`;

                                if (oqium[i].Size == 'RANDOM') {

                                }

                                data.data.attributes.properties.$first_name = `${oqium[i].FirstName}`;
                                data.data.attributes.properties.$last_name = `${oqium[i].LastName}`;
                                data.data.attributes.properties.$address1 = `${oqium[i].Address1} ${oqium[i].Address2} ${oqium[i].HouseNumber}`;
                                data.data.attributes.properties.$zip = `${oqium[i].Zip}`;
                                data.data.attributes.properties.$city = `${oqium[i].City}`;
                                data.data.attributes.properties.$country = `${oqium[i].Country}`;
                                if (
                                    oqium[i].Size == 'RANDOM'
                                ) {
                                    // oqium[i].Size = sizeArray[randomSize]
                                    data.data.attributes.properties.Size = `US W / EU ${sizeArray[randomSize]}`;
                                }
                                else {

                                    data.data.attributes.properties.Size = `US W / EU ${oqium[i].Size}`;
                                }
                                data.data.attributes.properties.$phone_number = `${oqium[i].Phone}`;
                                data.data.attributes.properties['Instagram Account'] = `${oqium[i].Follower}`;
                            }

                            if (settings.useRandomProxy = false) {
                                var proxySplit = proxies[i].split(":");
                            } else {
                                var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                var proxySplit = proxies[randomProxy].split(":");
                            }



                            var options = {
                                jar: j,
                                followAllRedirects: true,
                                method: 'POST',
                                url: currentFunction.url,
                                headers: currentFunction.headers,
                                body: JSON.stringify(data),
                                proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                            };
                            if (mode != 'ver') {
                                options.url = currentFunction.url
                                options.headers = currentFunction.headers
                            }
                            if (mode == 'ver') {
                                options.method = 'GET';
                            }
                            return new Promise(function (resolve, reject) {
                                callback = async (err, res, body) => {

                                    if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
                                        if (mode != 'ver') {
                                            var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
                                            var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
                                            const EMBEDS =
                                            {
                                                succesDEVMSG: { embeds: [succesDEV] },
                                                succesPUBMSG: { embeds: [succesPUB] }
                                            };
                                            let task = oqium[i]
                                            try {
                                                prxdata = {
                                                    username: username.replace('#', ''),
                                                    module: currentFunction.name,
                                                    entrydata: JSON.stringify(task),
                                                    proxy: `${proxies[i]}`
                                                }
                                                var prx = JSON.stringify(prxdata);
                                                let config = {
                                                    headers: {
                                                        'content-type': 'application/json',
                                                    }
                                                }
                                                await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                            } catch (e) {

                                            }
                                            if (settings.webhook != undefined && settings.webhook != '') {
                                                try {

                                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                                } catch {

                                                }
                                            }
                                            await delay(200);
                                            await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                            await delay(200);
                                            try {

                                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                            } catch {

                                            }
                                            successfulLog(oqium[i], currentFunction);
                                        }

                                        resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
                                    } else {
                                        if (mode != 'ver') {
                                            var ERROR = `${err}`;
                                            var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
                                            var EMBEDS = {}
                                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                                            errorLog(oqium[i], currentFunction)

                                            if (settings.webhook != undefined && settings.webhook != '') {
                                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                            }
                                            await sendWebhook(errorWH, EMBEDS.errorDEV);

                                        }
                                        reject(console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`)));
                                    }
                                }
                                try {
                                    if (mode != 'ver') {
                                        console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
                                    }
                                    request(options, callback);
                                    // console.log(data)
                                } catch (err) {
                                    console.log(`${getTime()} Task ${i + 1}: ${err}`);
                                }
                            });
                        };
                        try {
                            await oqiumFunction(i, 'nor', currentFunction, oqium, proxies);

                            console.log(`${getTime()} [${currentFunction.name}] Sleeping for ${settings.delay} ms`);
                            await delay(settings.delay);

                        } catch (e) {

                        }
                    }
                }
            },
            {
                name: "MAHA Raffle Verification",
                store: 'MAHA',
                logo: 'https://i1.sndcdn.com/avatars-XIAMNs5LPWV2iRwj-SNwa5A-t500x500.jpg',
                url: '',
                data: {
                    data: {
                        type: "subscription",
                        attributes: {
                            list_id: 'TFTWYv',
                            custom_source: "Air Jordan 1 Retro High OG Lost and Found",
                            email: ``,
                            properties: {
                                $address1: "",
                                $city: "",
                                $country: "",
                                $first_name: "",
                                $last_name: "",
                                $zip: "",
                                $consent_method: "Klaviyo Form",
                                $consent_form_id: "V4PNGA",
                                $consent_form_version: 7328877,
                                'Instagram Handle': ``,
                                Shipping: 'Shipping',
                                Size: '',
                                services: '{\"shopify\":{\"source\":\"form\"}}',
                                $timezone_offset: 1,
                            },
                        },
                    },
                },
                headers: {
                    'accept': "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "access-control-allow-headers": "*",
                    "content-type": "application/json",
                    "origin": "https://www.maha-amsterdam.com",
                    "referer": "https://www.maha-amsterdam.com/",
                    "revision": "2022-02-16",
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "'Windows'",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                },
                function: async function (currentFunction, oqium, proxies) {
                    var links = [];
                    var done = false;
                    // console.log(`Found ${links.length} Links in Mailbox`)
                    async function getMails() {
                        var imap = new Imap({
                            user: settings.masterMail,
                            password: settings.masterPassword,
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            autotls: 'always'
                        });

                        function openInbox(cb) {
                            imap.openBox('INBOX', false, cb);
                        }

                        imap.once('ready', function () {
                            openInbox(function (err, box) {
                                console.clear()
                                console.log('Looking For Links')
                                if (err) throw err;
                                imap.seq.search(['UNSEEN', ['SUBJECT', 'Confirm Your Subscription']], function (err, results) {
                                    if (!results || !results.length) {
                                        console.log(`${getTime()} [${currentFunction.name}] No mails found`);

                                        imap.end();

                                    } else {
                                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                        f.on('message', function (msg, seqno) {
                                            // console.log('Message #%d', seqno);
                                            var prefix = '(#' + seqno + ') ';
                                            msg.on('body', function (stream, info) {
                                                simpleParser(stream, (err, mail) => {

                                                    var bstnSplit = mail.text.split('(')[1];
                                                    var bstnLink = bstnSplit.split(')')[0]
                                                    // var msgSplit = mail.html.split('\n')
                                                    links.push(bstnLink)
                                                    // for (var i = 0; i < msgSplit.length; i++) {
                                                    //     if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                    //         var linklong = msgSplit[i].split('href="')
                                                    //         var l = linklong[1].split('"')[0]
                                                    //         links.push(l)
                                                    //         break;
                                                    //     }
                                                    // }

                                                    // console.log(mail.html.split('\n'));
                                                    // mes = mail.text.split('[')[2]
                                                    // link = mes.split(']')[0];
                                                    // console.log(link);
                                                });
                                                // imap.seq.setFlags(seqno, 'SEEN')


                                            });
                                            // msg.once('attributes', function (attrs) {
                                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                            // });
                                            msg.once('end', function () {
                                                // console.log(prefix + 'Finished');


                                            });
                                        });
                                        f.once('error', function (err) {
                                            console.log('Fetch error: ' + err);
                                            done = true
                                        });
                                        f.once('end', function () {
                                            // console.log('Done fetching all messages!');
                                            imap.end();

                                        });
                                    }
                                })
                            });
                        });



                        imap.once('error', function (err) {
                            // throw new Error(err)
                            console.log(chalk.red(err.message))
                            console.log('Read the guide on how to setup your mailbox')
                            done = true;

                        });

                        imap.once('end', async function () {
                            done = true;


                            // console.log('Connection ended');
                        });

                        imap.connect();
                    }
                    async function verify(currentFunction, links, proxies) {
                        for (var i = 0; i < links.length; i++) {
                            async function verifyFunction(i, mode, currentFunction, oqium, proxies) {

                                var ERROR;
                                var data = {};
                                var embed = [];
                                var msg = {};
                                var sizeArray = [
                                    '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
                                ]
                                var randomSize = Math.round(Math.random() * (sizeArray.length - 1));
                                if (
                                    oqium[i].Size == 'RANDOM'
                                ) {
                                    oqium[i].Size = sizeArray[randomSize]
                                }
                                if (!oqium) {
                                    oqium = {

                                    };
                                }


                                if (settings.useRandomProxy = false) {
                                    var proxySplit = proxies[i].split(":");
                                } else {
                                    var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                    var proxySplit = proxies[randomProxy].split(":");
                                }



                                var options = {
                                    jar: j,
                                    followAllRedirects: true,
                                    method: 'POST',
                                    url: currentFunction.url,
                                    headers: currentFunction.headers,
                                    body: JSON.stringify(data),
                                    proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                                };
                                if (mode != 'ver') {
                                    options.url = currentFunction.url
                                    options.headers = currentFunction.headers
                                }
                                if (mode == 'ver') {
                                    options.method = 'GET';
                                    options.url = oqium[i]
                                }
                                return new Promise(function (resolve, reject) {
                                    callback = async (err, res, body) => {
                                        if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
                                            if (mode != 'ver') {
                                                var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
                                                var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
                                                const EMBEDS =
                                                {
                                                    succesDEVMSG: { embeds: [succesDEV] },
                                                    succesPUBMSG: { embeds: [succesPUB] }
                                                };

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    try {

                                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                                    } catch {

                                                    }
                                                }
                                                await delay(200);
                                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                                await delay(200);
                                                try {

                                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                                } catch {

                                                }
                                                successfulLog(oqium[i], currentFunction);
                                            }

                                            resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
                                        } else {
                                            if (mode != 'ver') {
                                                var ERROR = `${err}`;
                                                var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
                                                var EMBEDS = {}
                                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                                errorLog(oqium[i], currentFunction)

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                                }
                                                await sendWebhook(errorWH, EMBEDS.errorDEV);

                                            }
                                            reject(console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`)));
                                        }
                                    }
                                    try {
                                        if (mode != 'ver') {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
                                        } else {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Fetching Response`)

                                        }
                                        request(options, callback);
                                    } catch (err) {
                                        console.log(`${getTime()} Task ${i + 1}: ${err}`);
                                    }
                                });
                            };
                            try {
                                await verifyFunction(i, 'ver', currentFunction, links, proxies);
                                console.log(`${getTime()} [${currentFunction.name}] Sleeping for ${settings.delay} ms`);
                                await delay(settings.delay);

                            } catch (e) {

                            }
                        }
                    }
                    try {
                        getMails();
                        while (!done) {
                            await delay(3000);
                        }
                        console.log(`Found ${links.length} Links in Mailbox`)

                    } catch {
                        console.log(`Searching mailbox failed, please read the guide on how to setup..`)
                        await delay(2500)
                    }

                    await verify(currentFunction, links, proxies);
                }
            },
        ]
    },
    // {
    //     name: 'OneBlockDown',
    //     modules: [
    //         {
    //             name: 'OneBlockDown Raffle Entries',
    //             store: 'OneBlockDown',
    //             logo: 'https://thesneakersbible.fr/wp-content/uploads/2021/04/logo-one-block-down.png',
    //             function: async function (currentFunction, csv, proxies) {
    //                 puppeteer.use(StealthPlugin());
    //                 puppeteer.use(RecaptchaPlugin({
    //                     provider: {
    //                         id: '2captcha',
    //                         token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    //                     },
    //                     visualFeedback: true
    //                 }))
    //                 for (var i = 0; i < csv.length; i++) {
    //                     if (retry != 'yes') {
    //                         var retry = '';
    //                         var t = 0;

    //                     }
    //                     var ERROR;
    //                     try {
    //                         await jig(csv, i);

    //                     } catch {
    //                         retry = 'no';
    //                         throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
    //                     }
    //                     setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
    //                     var sizeArray = [
    //                         '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
    //                     ]
    //                     var randomSize = Math.round(Math.random() * (sizeArray.length - 1));
    //                     if (
    //                         csv[i].Size == 'RANDOM'
    //                     ) {
    //                         csv[i].Size = sizeArray[randomSize]
    //                     }
    //                     var randomProxy = Math.round(Math.random() * (proxies.length - 1));
    //                     var proxySplit = proxies[randomProxy].split(":");
    //                     var browser;
    //                     try {
    //                         browser = await puppeteer.launch({
    //                             executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    //                             headless: false,
    //                             args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
    //                         });

    //                     } catch {
    //                         browser = await puppeteer.launch({
    //                             executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    //                             headless: false,
    //                             args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
    //                         });
    //                     }
    //                     try {
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
    //                         async function getForm() {
    //                             let resp = await axios('https://eu.oneblockdown.it/collections/drops/products/4-retro-x-nike-sb-pine-green')
    //                             let formSplit1 = resp.data.split('docs.google.com')[3]
    //                             let formSplit2 = formSplit1.split('"')[0]
    //                             let form = formSplit2.replace(/\\/g, '')
    //                             return form
    //                         }
    //                         let form = 'https://docs.google.com' + await getForm()
    //                         const page = await browser.newPage();
    //                         await page.authenticate({
    //                             username: `${proxySplit[2]}`,
    //                             password: `${proxySplit[3]}`,
    //                         });
    //                         await page.setRequestInterception(true);

    //                         page.on("request", (req) => {
    //                             if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
    //                                 req.abort();
    //                             } else {
    //                                 req.continue();
    //                             }
    //                         });
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Entry`);
    //                         try {
    //                             await page.goto(form, { waitUntil: 'networkidle2' });
    //                             await delay(50000)
    //                             await page.waitForSelector('.action_button.add_to_cart.raffle-button');

    //                         } catch {
    //                             throw new Error('Connection Error')
    //                         }
    //                         await delay(1000);

    //                         await page.click('.action_button.add_to_cart.raffle-button');
    //                         await delay(1000);
    //                         await page.waitForSelector('#raffles-product');
    //                         await page.$eval('#raffles-product', btn => btn.click());
    //                         await delay(5000)
    //                         await page.waitForSelector(`.fancybox-inner > iframe`)
    //                         var elementHandle = await page.$(
    //                             '.fancybox-inner > iframe',
    //                         );
    //                         var frame = await elementHandle.contentFrame();
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking Information`);

    //                         await frame.waitForSelector('input[name="sm-form-email"]');
    //                         await delay(500);
    //                         await frame.type('input[name="sm-form-email"]', csv[i].Email);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-name"]', `${csv[i].FirstName} ${csv[i].LastName}`);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-street"]', `${csv[i].Address1} ${csv[i].HouseNumber} ${csv[i].Address2}`);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-city"]', csv[i].City);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-province"]', csv[i].State);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-zip"]', csv[i].Zip);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-country"]', csv[i].Country);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-form-phone"]', csv[i].Phone);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-cst.instagram_user"]', csv[i].Follower);
    //                         await delay(200);
    //                         await frame.type('input[name="sm-cst.size"]', csv[i].Size);
    //                         await delay(500);
    //                         await frame.click('.icheckbox_simple-custom.icheckbox--CONSENT');
    //                         await delay(500);
    //                         await frame.click('.icheckbox_simple-custom');
    //                         await delay(500);
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Request`);

    //                         await frame.$eval('form', f => f.submit());


    //                         console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
    //                         retry = '';
    //                         var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
    //                         var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

    //                         const EMBEDS =
    //                         {
    //                             succesDEVMSG: { embeds: [succesDEV] },
    //                             succesPUBMSG: { embeds: [succesPUB] }
    //                         };
    //                         try {
    //                             if (settings.webhook != undefined && settings.webhook != '') {
    //                                 await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
    //                             }
    //                             await delay(200);
    //                             await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
    //                             await delay(200);
    //                             await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
    //                         } catch (e) {
    //                             console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Error sending webhook ${e}`));

    //                         }



    //                     } catch (e) {
    //                         console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
    //                         ERROR = `${e}`
    //                         var errorDEV = await makeEmbed(csv[i], currentFunction, 'dev', true, ERROR);
    //                         var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
    //                         var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);

    //                         const EMBEDS =
    //                         {
    //                             succesDEVMSG: { embeds: [succesDEV] },
    //                             succesPUBMSG: { embeds: [succesPUB] }
    //                         };
    //                         EMBEDS.errorDEV = { embeds: [errorDEV] }
    //                         if (settings.webhook != undefined && settings.webhook != '') {
    //                             await sendWebhook(settings.webhook, EMBEDS.errorDEV);
    //                         }
    //                         await sendWebhook(errorWH, EMBEDS.errorDEV);
    //                         if (e != 'Error sending entry. Check if duplicate, or proxies.') {

    //                             retry = 'yes';
    //                         }
    //                     } finally {
    //                         browser.close();
    //                         if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
    //                             console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5) `));
    //                             i = i - 1;
    //                             t = t + 1;
    //                             continue;
    //                         }
    //                         if (retry == 'yes' && t >= 5) {
    //                             errorLog(csv[i], currentFunction)
    //                             retry = 'no';
    //                             t = 0;
    //                         }
    //                         console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
    //                         await delay(settings.delay);
    //                     }
    //                 }
    //             }
    //         }
    //     ]
    // },
    // {
    //     name: 'Overkill',
    //     modules: [
    //         {
    //             name: 'Overkill Account Generator',
    //             store: 'Overkill',
    //             logo: 'https://thesneakersbible.fr/wp-content/uploads/2021/04/logo-one-block-down.png',
    //             function: async function (currentFunction, csv, proxies) {
    //                 puppeteer.use(StealthPlugin());
    //                 puppeteer.use(RecaptchaPlugin({
    //                     provider: {
    //                         id: '2captcha',
    //                         token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    //                     },
    //                     visualFeedback: true
    //                 }))
    //                 for (var i = 0; i < csv.length; i++) {
    //                     if (retry != 'yes') {
    //                         var retry = '';
    //                         var t = 0;

    //                     }
    //                     var ERROR;
    //                     try {
    //                         await jig(csv, i);

    //                     } catch {
    //                         retry = 'no';
    //                         throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
    //                     }
    //                     setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);

    //                     var succesDEV = await makeEmbed(csv[i], currentFunction, 'acc', false);


    //                     const EMBEDS =
    //                     {
    //                         succesDEVMSG: { embeds: [succesDEV] }
    //                     };
    //                     const url = `https://www.overkillshop.com/de-en/register`
    //                     var randomProxy = Math.round(Math.random() * (proxies.length - 1));
    //                     var proxySplit = proxies[randomProxy].split(":");
    //                     var browser;
    //                     // pxyPBtPONpqy1jTFkbDYoTsQryOMa_b81yDXOV2wPvI-1676636568-0-160
    //                     try {
    //                         browser = await puppeteer.launch({
    //                             executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    //                             headless: false,
    //                             args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
    //                         });

    //                     } catch {
    //                         browser = await puppeteer.launch({
    //                             executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    //                             headless: false,
    //                             args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
    //                         });
    //                     }
    //                     try {
    //                         const page = await browser.newPage();
    //                         await page.setViewport({
    //                             width: 1280 + randomIntFromInterval(1, 50),
    //                             height: 729 + randomIntFromInterval(1, 50)
    //                         })
    //                         const session = await page.target().createCDPSession();
    //                         const { windowId } = await session.send('Browser.getWindowForTarget');
    //                         await page.authenticate({
    //                             username: `${proxySplit[2]}`,
    //                             password: `${proxySplit[3]}`,
    //                         });
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
    //                         await page.goto(`${url}`, { waitUntil: 'networkidle2' });
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Cloudflare`);
    //                         await delay(5000);
    //                         var cf = await page.$('.hcaptcha-box');
    //                         if (cf) {
    //                             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Handling Challenge`);
    //                             await delay(10000);
    //                             const challengeButton = await page.$('.hcaptcha-box');
    //                             if (challengeButton) {
    //                                 try {

    //                                     await challengeButton.click();
    //                                 } catch {
    //                                     throw new Error('Empty Turnstile Challenge')
    //                                 }
    //                             }
    //                             try {
    //                                 await page.waitForSelector('input[name="firstname"]', { timeout: 40000 });

    //                             } catch {
    //                                 var challengeButton2 = await page.$('.hcaptcha-box');
    //                                 if (challengeButton2) {

    //                                     try {

    //                                         await challengeButton2.click();
    //                                     } catch {
    //                                         throw new Error('Empty Turnstile Challenge')
    //                                     }
    //                                 }
    //                             }
    //                             // await frame.click('#challenge-stage > div > label > input');

    //                         }

    //                         // try {
    //                         //     const turnstile = await page.$eval()
    //                         // } catch {

    //                         // }
    //                         try {

    //                             await page.waitForSelector('input[name="firstname"]', { timeout: 120000 });
    //                             await session.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'minimized' } });
    //                             await delay(4000);
    //                         } catch {
    //                             throw new Error('Blocked by cloudflare')
    //                         }
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Checking Credentials`);
    //                         await page.type('input[name="firstname"]', `${csv[i].FirstName}`);
    //                         await delay(500);
    //                         await page.type('input[name="lastname"]', `${csv[i].LastName}`);
    //                         await delay(500);
    //                         await page.type('input[name="email"]', `${csv[i].Email}`);
    //                         await delay(500);
    //                         await page.type('input[name="password"]', `${csv[i].Password}`);
    //                         await delay(600);
    //                         await page.$eval('input[name="psgdpr"]', btn => btn.click());
    //                         await delay(500);
    //                         console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Sending Request`);
    //                         await page.$eval('#customer-form', form => form.submit());
    //                         try {
    //                             try {
    //                                 await page.waitForSelector('.product-list.slider-csv', { timeout: 60000 });

    //                             } catch {
    //                                 throw new Error('Succes-response not found')
    //                             }
    //                             retry = 'no';

    //                             console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${csv[i].Email} Generated`));
    //                             fs.appendFileSync('../accounts/csv.csv', `\n${csv[i].Email},${csv[i].Password}`);
    //                             let task = csv[i]
    //                             try {
    //                                 prxdata = {
    //                                     username: username.replace('#', ''),
    //                                     module: currentFunction.name,
    //                                     entrydata: JSON.stringify(task),
    //                                     proxy: `${proxies[i]}`
    //                                 }
    //                                 var prx = JSON.stringify(prxdata);
    //                                 let config = {
    //                                     headers: {
    //                                         'content-type': 'application/json',
    //                                     }
    //                                 }
    //                                 await axios.post('https://jraffles.herokuapp.com/success', prx, config)
    //                             } catch (e) {

    //                             }
    //                             try {
    //                                 if (settings.webhook != undefined && settings.webhook != '') {
    //                                     await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
    //                                 }
    //                             } catch {
    //                             }
    //                             await sendWebhook(accountWH, EMBEDS.succesDEVMSG);

    //                         } catch (e) {
    //                             throw new Error(`Account generation failed`)
    //                         }


    //                     } catch (e) {
    //                         console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
    //                         ERROR = `${e}`
    //                         var errorDEV = await makeEmbed(csv[i], currentFunction, 'acc', true, ERROR);
    //                         EMBEDS.errorDEV = { embeds: [errorDEV] }
    //                         if (settings.webhook != undefined && settings.webhook != '') {
    //                             await sendWebhook(settings.webhook, EMBEDS.errorDEV);
    //                         }
    //                         await sendWebhook(errorWH, EMBEDS.errorDEV);
    //                         retry = 'yes';
    //                     } finally {
    //                         browser.close();
    //                         if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
    //                             console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
    //                             i = i - 1;
    //                             t = t + 1;
    //                             continue;
    //                         }
    //                         if (retry == 'yes' && t >= 5) {
    //                             errorLog(csv[i], currentFunction)
    //                             retry = 'no';
    //                             t = 0;
    //                         }
    //                         console.log(`${getTime()} [${currentFunction.name}] Waiting for ${settings.delay} ms`);
    //                         await delay(settings.delay);
    //                     }
    //                 }
    //             }
    //         }
    //     ]
    // },
    {
        name: 'OQIUM Store',
        modules: [
            {
                name: "OQIUM Raffle Entries",
                store: "OQIUM",
                logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5e8e742e8f9bb4000118f0bc/0x0.png",
                url: 'https://a.klaviyo.com/client/subscriptions/?company_id=R3sbqs',
                data: {
                    data: {
                        type: "subscription",
                        attributes: {
                            list_id: "RVHsXu",
                            custom_source: "DH6927-017",
                            email: "",
                            properties: {
                                $first_name: "",
                                $last_name: "",
                                $phone_number: "",
                                Size: "",
                                'Instagram Account': "",
                                $address1: "",
                                $zip: "",
                                $city: "",
                                $country: "",
                                'Accepts Marketing': [
                                    "NoByRaffle"
                                ],
                                $consent_method: "Klaviyo Form",
                                $consent_form_id: "ScxJcu",
                                $consent_form_version: 9175131,
                                services: "{\"shopify\":{\"source\":\"form\"}}",
                                $timezone_offset: 2
                            }
                        }
                    }
                },
                headers: {
                    'accept': "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "access-control-allow-headers": "*",
                    "content-type": "application/json",
                    "origin": "https://oqium.com",
                    "referer": "https://oqium.com/",
                    "revision": "2022-02-16",
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "'Windows'",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                },
                function: async function (currentFunction, oqium, proxies) {
                    var opium = oqium;
                    var tasks = 0;
                    for (var i = 0; i < oqium.length; i++) {
                        maxTasks = settings.threads;

                        while (tasks >= maxTasks) {
                            await delay(settings.delay);
                        }
                        async function oqium(currentFunction, oqium, proxies, i) {

                            try {
                                await jig(oqium, i);

                            } catch (e) {

                                throw new Error(e)
                            }
                            async function oqiumFunction(i, mode, currentFunction, oqium, proxies) {
                                tasks++;
                                var ERROR;
                                var data = {};
                                var embed = [];
                                var msg = {};
                                var sizeArray = [
                                    '40', '40.5', '41', '42', '42.5', '43', '44', '45', '45.5', '46', '47', '47.5', '48'
                                ]
                                var randomSize = Math.round(Math.random() * (sizeArray.length - 1));

                                if (!oqium) {
                                    oqium = {

                                    };
                                }
                                if (mode != 'ver') {
                                    setTitle(`${currentFunction.name} Task ${i + 1} / ${oqium.length} || File: ${currentFile} Proxies: ${currentProxy}`);

                                    embed = [
                                        {
                                            "type": "rich",
                                            "title": `Succesful OQIUM Entry`,
                                            "description": "",
                                            "color": 0xc0d6d6,
                                            "fields": [
                                                {
                                                    "name": `User`,
                                                    "value": `${username}`
                                                },
                                                {
                                                    "name": `Size`,
                                                    "value": `${oqium[i].Size}`
                                                },
                                                {
                                                    "name": `Delay`,
                                                    "value": `${settings.delay}`
                                                },
                                                {
                                                    "name": `Version`,
                                                    "value": `${version}`
                                                }
                                            ]
                                        }
                                    ]
                                    msg = { embeds: embed };


                                    data = currentFunction.data;


                                    data.data.attributes.email = `${oqium[i].Email}`;

                                    if (oqium[i].Size == 'RANDOM') {

                                    }

                                    data.data.attributes.properties.$first_name = `${oqium[i].FirstName}`;
                                    data.data.attributes.properties.$last_name = `${oqium[i].LastName}`;
                                    data.data.attributes.properties.$address1 = `${oqium[i].Address1} ${oqium[i].Address2} ${oqium[i].HouseNumber}`;
                                    data.data.attributes.properties.$zip = `${oqium[i].Zip}`;
                                    data.data.attributes.properties.$city = `${oqium[i].City}`;
                                    data.data.attributes.properties.$country = `${oqium[i].Country}`;
                                    if (
                                        oqium[i].Size == 'RANDOM'
                                    ) {
                                        // oqium[i].Size = sizeArray[randomSize]
                                        data.data.attributes.properties.Size = `US W / EU ${sizeArray[randomSize]}`;
                                    }
                                    else {

                                        data.data.attributes.properties.Size = `US W / EU ${oqium[i].Size}`;
                                    }
                                    data.data.attributes.properties.$phone_number = `${oqium[i].Phone}`;
                                    data.data.attributes.properties['Instagram Account'] = `${oqium[i].Follower}`;
                                }

                                if (settings.useRandomProxy = false) {
                                    var proxySplit = proxies[i].split(":");
                                } else {
                                    var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                    var proxySplit = proxies[randomProxy].split(":");
                                }



                                var options = {
                                    jar: j,
                                    followAllRedirects: true,
                                    method: 'POST',
                                    url: currentFunction.url,
                                    headers: currentFunction.headers,
                                    body: JSON.stringify(data),
                                    proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                                };
                                if (mode != 'ver') {
                                    options.url = currentFunction.url
                                    options.headers = currentFunction.headers
                                }
                                if (mode == 'ver') {
                                    options.method = 'GET';
                                }
                                return new Promise(function (resolve, reject) {
                                    callback = async (err, res, body) => {
                                        if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
                                            if (mode != 'ver') {
                                                // console.log(`StatusCode: ${res.statusCode}`)
                                                var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
                                                var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
                                                const EMBEDS =
                                                {
                                                    succesDEVMSG: { embeds: [succesDEV] },
                                                    succesPUBMSG: { embeds: [succesPUB] }
                                                };
                                                let task = oqium[i]
                                                try {
                                                    prxdata = {
                                                        username: username.replace('#', ''),
                                                        module: currentFunction.name,
                                                        entrydata: JSON.stringify(task),
                                                        proxy: `${proxies[i]}`
                                                    }
                                                    var prx = JSON.stringify(prxdata);
                                                    let config = {
                                                        headers: {
                                                            'content-type': 'application/json',
                                                        }
                                                    }
                                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)

                                                } catch (e) {

                                                }
                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    try {

                                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                                    } catch {

                                                    }
                                                }
                                                await delay(200);
                                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                                await delay(200);
                                                try {

                                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                                } catch {

                                                }
                                                successfulLog(oqium[i], currentFunction);
                                            }
                                            tasks--;
                                            resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
                                        } else {
                                            if (mode != 'ver') {
                                                var ERROR = `${err}`;
                                                var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
                                                var EMBEDS = {}
                                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                                errorLog(oqium[i], currentFunction)

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                                }
                                                await sendWebhook(errorWH, EMBEDS.errorDEV);

                                            }
                                            tasks--;
                                            reject(console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`)));
                                        }
                                    }
                                    try {
                                        if (mode != 'ver') {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
                                        }
                                        request(options, callback);
                                    } catch (err) {
                                        console.log(`${getTime()} Task ${i + 1}: ${err}`);
                                    }
                                });
                            };
                            try {
                                await oqiumFunction(i, 'nor', currentFunction, oqium, proxies);
                                console.log(`${getTime()} [${currentFunction.name}] Sleeping for ${settings.delay} ms`);
                                await delay(settings.delay);

                            } catch (e) {

                            }

                        }
                        oqium(currentFunction, opium, proxies, i);
                        await delay(1000);
                    }
                }
                // function: async function (currentFunction, csv, proxies) {
                //     puppeteer.use(StealthPlugin());
                //     puppeteer.use(RecaptchaPlugin({
                //         provider: {
                //             id: '2captcha',
                //             token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                //         },
                //         visualFeedback: true
                //     }))
                //     for (var i = 0; i < csv.length; i++) {
                //         var ERROR;
                //         if (retry != 'yes') {
                //             var retry = '';
                //             var t = 0;

                //         }
                //         setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                //         try {
                //             await jig(csv, i);

                //         } catch {
                //             retry = 'no';
                //             throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                //         }
                //         if (csv[i].Email == '' || csv[i].Password == '' || csv[i].FirstName == '' || csv[i].LastName == '') {
                //             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                //             continue;
                //         }

                //         if (settings.useRandomProxy = false) {
                //             var proxySplit = proxies[i].split(":");
                //         } else {
                //             var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                //             var proxySplit = proxies[randomProxy].split(":");
                //         }
                //         var browser
                //         try {
                //             browser = await puppeteer.launch({
                //                 executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                //                 headless: true,
                //                 args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                //             });

                //         } catch {
                //             browser = await puppeteer.launch({
                //                 executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                //                 headless: true,
                //                 args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                //             });
                //         }
                //         try {
                //             const page = await browser.newPage();
                //             await page.authenticate({
                //                 username: `${proxySplit[2]}`,
                //                 password: `${proxySplit[3]}`,
                //             });
                //             await page.setViewport({ width: 1280, height: 720 });

                //             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                //             // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                //             await page.setRequestInterception(true);
                //             page.on("request", (req) => {
                //                 if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                //                     req.abort();
                //                 } else {
                //                     req.continue();
                //                 }
                //             });
                //             await page.goto(`${csv[i].Url}`,
                //                 {
                //                     waitUntil: "networkidle2",
                //                     timeout: 60000
                //                 });

                //             try {
                //                 await page.waitForSelector(`div[data-step="thank_you"]`, { timeout: 300000 })
                //                 retry = 'no';
                //                 successfulLog(csv[i], currentFunction);

                //                 console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));

                //             } catch (e) {
                //                 throw new Error(`Error Processing Order: ${e.message}`);

                //             }
                //             var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                //             var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);
                //             let task = csv[i]
                //             try {
                //                 prxdata = {
                //                     username: username.replace('#', ''),
                //                     module: currentFunction.name,
                //                     entrydata: JSON.stringify(task),
                //                     proxy: `${proxies[i]}`
                //                 }
                //                 var prx = JSON.stringify(prxdata);
                //                 let config = {
                //                     headers: {
                //                         'content-type': 'application/json',
                //                     }
                //                 }
                //                 await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                //             } catch (e) {

                //             }
                //             const EMBEDS =
                //             {
                //                 succesDEVMSG: { embeds: [succesDEV] },
                //                 succesPUBMSG: { embeds: [succesPUB] }
                //             };
                //             try {
                //                 if (settings.webhook != undefined && settings.webhook != '') {
                //                     await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                //                 }
                //                 await delay(200);
                //                 await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                //                 await delay(200);
                //                 await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                //             } catch (e) {
                //                 console.log(chalk.yellow(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Error sending webhook ${e}`));

                //             }


                //         } catch (e) {
                //             console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : ${e}`));
                //             ERROR = `${e}`
                //             var errorDEV = await makeEmbed(kickz[i], currentFunction, 'dev', true, ERROR);
                //             EMBEDS.errorDEV = { embeds: [errorDEV] }
                //             if (settings.webhook != undefined && settings.webhook != '') {
                //                 await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                //             }
                //             await sendWebhook(errorWH, EMBEDS.errorDEV);
                //             retry = 'yes';
                //         } finally {
                //             if (browser) {
                //                 browser.close();
                //             }
                //             if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                //                 console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                //                 i = i - 1;
                //                 t = t + 1;
                //                 continue;
                //             }
                //             if (retry == 'yes' && t >= 5) {
                //                 errorLog(csv[i], currentFunction)
                //                 retry = 'no';
                //                 t = 0;
                //             }
                //             console.log(`Waiting for ${settings.delay} ms`);
                //             await delay(settings.delay);
                //         }
                //     }
                // }
            },
            {
                name: "OQIUM Raffle Verification",
                url: '',
                data: {
                    data: {
                        type: "subscription",
                        attributes: {
                            list_id: 'TFTWYv',
                            custom_source: "Air Jordan 1 Retro High OG Lost and Found",
                            email: ``,
                            properties: {
                                $address1: "",
                                $city: "",
                                $country: "",
                                $first_name: "",
                                $last_name: "",
                                $zip: "",
                                $consent_method: "Klaviyo Form",
                                $consent_form_id: "V4PNGA",
                                $consent_form_version: 7328877,
                                'Instagram Handle': ``,
                                Shipping: 'Shipping',
                                Size: '',
                                services: '{\"shopify\":{\"source\":\"form\"}}',
                                $timezone_offset: 1,
                            },
                        },
                    },
                },
                headers: {
                    'accept': "*/*",
                    "accept-encoding": "gzip, deflate, br",
                    "access-control-allow-headers": "*",
                    "content-type": "application/json",
                    "origin": "https://www.maha-amsterdam.com",
                    "referer": "https://www.maha-amsterdam.com/",
                    "revision": "2022-02-16",
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                    'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "'Windows'",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                },
                function: async function (currentFunction, links, proxies) {
                    var links = [];
                    var done = false;
                    // console.log(`Found ${links.length} Links in Mailbox`)
                    async function getMails() {
                        var imap = new Imap({
                            user: settings.masterMail,
                            password: settings.masterPassword,
                            host: 'imap.gmail.com',
                            port: 993,
                            tls: true,
                            autotls: 'always'
                        });

                        function openInbox(cb) {
                            imap.openBox('INBOX', false, cb);
                        }

                        imap.once('ready', function () {
                            openInbox(function (err, box) {
                                console.clear()
                                console.log('Looking For Links')
                                if (err) throw err;
                                imap.seq.search(['UNSEEN', ['SUBJECT', 'Confirm Your Subscription'], ['FROM', 'OQIUM']], function (err, results) {
                                    if (!results || !results.length) {
                                        console.log(`${getTime()} [${currentFunction.name}] No mails found`);

                                        imap.end();

                                    } else {
                                        var f = imap.seq.fetch(results, { bodies: '', markSeen: true });
                                        f.on('message', function (msg, seqno) {
                                            // console.log('Message #%d', seqno);
                                            var prefix = '(#' + seqno + ') ';
                                            msg.on('body', function (stream, info) {
                                                simpleParser(stream, (err, mail) => {

                                                    var bstnSplit = mail.text.split('(')[1];
                                                    var bstnLink = bstnSplit.split(')')[0];
                                                    // var msgSplit = mail.html.split('\n')
                                                    links.push(bstnLink)
                                                    // for (var i = 0; i < msgSplit.length; i++) {
                                                    //     if (msgSplit[i].includes('salesmanago') && msgSplit[i].includes('<td') && msgSplit[i].includes('href')) {
                                                    //         var linklong = msgSplit[i].split('href="')
                                                    //         var l = linklong[1].split('"')[0]
                                                    //         links.push(l)
                                                    //         break;
                                                    //     }
                                                    // }

                                                    // console.log(mail.html.split('\n'));
                                                    // mes = mail.text.split('[')[2]
                                                    // link = mes.split(']')[0];
                                                    // console.log(link);
                                                });
                                                // imap.seq.setFlags(seqno, 'SEEN')


                                            });
                                            // msg.once('attributes', function (attrs) {
                                            //     console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                                            // });
                                            msg.once('end', function () {
                                                // console.log(prefix + 'Finished');


                                            });
                                        });
                                        f.once('error', function (err) {
                                            console.log('Fetch error: ' + err);
                                            done = true;

                                        });
                                        f.once('end', function () {
                                            // console.log('Done fetching all messages!');
                                            imap.end();
                                            done = true;
                                        });
                                    }
                                })
                            });
                        });



                        imap.once('error', function (err) {
                            console.log(err);
                            done = true;

                        });

                        imap.once('end', async function () {

                            done = true;

                            // console.log('Connection ended');
                        });

                        imap.connect();
                    }
                    async function verify(currentFunction, links, proxies) {
                        for (var i = 0; i < links.length; i++) {
                            async function verifyFunction(i, mode, currentFunction, oqium, proxies) {

                                var ERROR;
                                var data = {};
                                var embed = [];
                                var msg = {};
                                var sizeArray = [
                                    '40', '40,5', '41', '42', '42,5', '43', '44', '45', '45,5', '46', '47', '47,5', '48'
                                ]
                                var randomSize = Math.round(Math.random() * (sizeArray.length - 1));
                                if (
                                    oqium[i].Size == 'RANDOM'
                                ) {
                                    oqium[i].Size = sizeArray[randomSize]
                                }
                                if (!oqium) {
                                    oqium = {

                                    };
                                }


                                if (settings.useRandomProxy = false) {
                                    var proxySplit = proxies[i].split(":");
                                } else {
                                    var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                                    var proxySplit = proxies[randomProxy].split(":");
                                }



                                var options = {
                                    jar: j,
                                    followAllRedirects: true,
                                    method: 'POST',
                                    url: currentFunction.url,
                                    headers: currentFunction.headers,
                                    body: JSON.stringify(data),
                                    proxy: `http://${proxySplit[2]}:${proxySplit[3]}@${proxySplit[0]}:${proxySplit[1]}`,
                                };
                                if (mode != 'ver') {
                                    options.url = currentFunction.url
                                    options.headers = currentFunction.headers
                                }
                                if (mode == 'ver') {
                                    options.method = 'GET';
                                    options.url = oqium[i]
                                }
                                return new Promise(function (resolve, reject) {
                                    callback = async (err, res, body) => {
                                        if (!err && res.statusCode == 202 || !err && res.statusCode == 200) {
                                            if (mode != 'ver') {
                                                var succesDEV = await makeEmbed(oqium[i], currentFunction, 'dev', false);
                                                var succesPUB = await makeEmbed(oqium[i], currentFunction, 'pub', false);
                                                const EMBEDS =
                                                {
                                                    succesDEVMSG: { embeds: [succesDEV] },
                                                    succesPUBMSG: { embeds: [succesPUB] }
                                                };

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    try {

                                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                                    } catch {

                                                    }
                                                }
                                                await delay(200);
                                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                                await delay(200);
                                                try {

                                                    await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                                                } catch {

                                                }
                                                successfulLog(oqium[i], currentFunction);
                                            }

                                            resolve(console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Raffle Entered!`)));
                                        } else {
                                            if (mode != 'ver') {
                                                var ERROR = `${err}`;
                                                var errorDEV = await makeEmbed(oqium[i], currentFunction, 'dev', true, ERROR);
                                                var EMBEDS = {}
                                                EMBEDS.errorDEV = { embeds: [errorDEV] }
                                                errorLog(oqium[i], currentFunction)

                                                if (settings.webhook != undefined && settings.webhook != '') {
                                                    await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                                                }
                                                await sendWebhook(errorWH, EMBEDS.errorDEV);

                                            }
                                            reject(console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1}: ${err}`)));
                                        }
                                    }
                                    try {
                                        if (mode != 'ver') {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Sending Entry for ${data.data.attributes.email}`)
                                        } else {
                                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1}: Fetching Response`)

                                        }
                                        request(options, callback);
                                    } catch (err) {
                                        console.log(`${getTime()} Task ${i + 1}: ${err}`);
                                    }
                                });
                            };
                            try {
                                await verifyFunction(i, 'ver', currentFunction, links, proxies);
                                console.log(`${getTime()} [${currentFunction.name}] Sleeping for ${settings.delay} ms`);
                                await delay(settings.delay);

                            } catch (e) {

                            }
                        }
                    }
                    try {
                        getMails();
                        while (!done) {
                            await delay(4000);
                        }
                        // await delay(4000);
                        console.log(`Found ${links.length} Links in Mailbox`)

                    } catch {
                        console.log(`Searching mailbox failed, please read the guide on how to setup..`)
                    }

                    await verify(currentFunction, links, proxies);
                }
            }
        ]
    },
    // {
    //     name: 'BOUNCEWEAR',
    //     modules: [
    //         {
    //             name: 'BOUNCEWEAR Account Generator'
    //         }
    //     ]
    // },
    {
        name: 'PATTA',
        modules: [
            {
                name: 'PATTA Account Generator',
                store: 'Patta',
                logo: 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                function: async function (currentFunction, patta, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < patta.length; i++) {
                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful Patta Account Generated`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.delay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]
                        const msg = { embeds: embed };
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${patta.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(patta, i);

                        } catch {

                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        var succesDEV = await makeEmbed(patta[i], currentFunction, 'acc', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] }
                        };
                        if (patta[i].Email == '' || patta[i].FirstName == '' || patta[i].LastName == '') {
                            console.log(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Invalid CSV`);
                            await delay(2000)
                            continue;
                        }
                        if (patta[i].Password == '' || patta[i] == undefined) {
                            patta[i].Password == 'JRaffles23!'
                        }
                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            // console.log(patta[i].Password)
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto(`https://patta.nl/account/register`);
                            await delay(3000);
                            await page.waitForSelector('#RegisterForm-FirstName');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling information`);
                            await page.type('#RegisterForm-FirstName', `${patta[i].FirstName}`);
                            await delay(550);
                            await page.type('#RegisterForm-LastName', `${patta[i].LastName}`);
                            await delay(550);
                            await page.type('#RegisterForm-email', `${patta[i].Email}`);
                            await delay(550);
                            await page.type('#RegisterForm-password', `${patta[i].Password}`);
                            await delay(550);
                            // await page.click('#marketing');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Submitting..`);
                            await page.$eval('#RegisterForm', form => form.submit());
                            await delay(8000);
                            // console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Solving Captcha`)
                            // await page.solveRecaptchas();
                            // await page.click('.shopify-challenge__button.btn');
                            // async function retry() {
                            //     for (var a = 0; a < 4; a++) {
                            //         try {
                            //             console.log('try')
                            //             await page.waitForSelector('.shopify-challenge__error', { timeout: 5000 });
                            //             console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.red('Catpcha failed, retrying..')}`)
                            //             await page.solveRecaptchas();
                            //             await page.click('.shopify-challenge__button.btn');

                            //         } catch {
                            //             console.log('catch')
                            //             break
                            //         }
                            //     }
                            // }
                            // await retry();
                            // console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Captcha Solved`);
                            try {
                                await page.waitForSelector('.home-page-grid__collection');
                                await delay(500);

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${patta[i].Email} Generated!`));
                                fs.appendFileSync('../accounts/patta.csv', `\n${patta[i].Email},${patta[i].Password}`);
                                console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${patta[i].Email} Saved in 'accounts/patta.csv'`));
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                } catch {
                                }
                                await sendWebhook(accountWH, EMBEDS.succesDEVMSG);
                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Account genration failed. ${e}`))
                            }
                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : ${e}`));
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            },
            {
                name: 'PATTA Raffle Entries',
                store: 'Patta',
                logo: 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                function: async function (currentFunction, patta, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < patta.length; i++) {
                        var ERROR;
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${patta.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(patta, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        if (patta[i].Email == '' || patta[i].Password == '' || patta[i].FirstName == '' || patta[i].LastName == '') {
                            console.log(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }

                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto('https://www.patta.nl/nl/account/login',
                                {
                                    waitUntil: "networkidle2",
                                    timeout: 60000
                                });
                            await page.waitForSelector('#CustomerEmail')
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Logging in..`)
                            await page.type('#CustomerEmail', `${patta[i].Email}`);
                            await delay(300);
                            await page.type('#CustomerPassword', `${patta[i].Password}`);
                            await delay(550);
                            await page.$eval('#customer_login', form => form.submit());
                            try {
                                await page.waitForSelector('#orders');
                                await delay(1200);
                            } catch {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task failed, invalid credentials`));
                                continue;
                            }
                            await page.goto(`${patta[i].Url}`, {
                                waitUntil: "networkidle2",
                                timeout: 60000
                            });
                            await delay(3000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Entry`)
                            try {
                                await page.waitForSelector('#email');
                            } catch {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Duplicate entry/ Account error`))
                            }
                            await page.type('#email', `${patta[i].Email}`);
                            await delay(900);
                            await page.type('#first_name', `${patta[i].FirstName}`);
                            await delay(1300);
                            await page.type('#last_name', `${patta[i].LastName}`);
                            await delay(1300);
                            await page.type('#street_address', `${patta[i].Address1} ${patta[i].HouseNumber} ${patta[i].Address2}`);
                            await delay(700);
                            if (patta[i].Postcode == undefined) {
                                patta[i].Postcode = patta[i].Zip
                            }
                            await page.type('#zip_code', `${patta[i].Postcode}`);
                            await delay(800);
                            await page.type('#city', `${patta[i].City}`);
                            await delay(800);
                            await page.type('#bday', `01/01/1994`);
                            await delay(800);
                            await page.type('#instagram', `${patta[i].Follower}`);
                            await delay(850);
                            if (patta[i].Size == 'RANDOM') {
                                const sizes = await page.$$eval('div[id="raffle__size-selector-container"] > label', sizes => {
                                    return sizes.map(size => size.textContent)
                                })
                                var randomSize = Math.round(Math.random() * (sizes.length - 1));
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Picking Random Size ${sizes[randomSize]}`);
                                await page.click(`label[data-eu-size="${sizes[randomSize]}"]`);
                            } else {
                                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Picking Size ${patta[i].Size}`);
                                try {
                                    await page.click(`label[data-eu-size="${patta[i].Size}"]`);
                                } catch {
                                    await page.click(`label[data-eu-size="${patta[i].Size}.0"]`);
                                }
                            }
                            // await delay(1000);
                            // await page.click('#conditions-region');
                            await delay(3000);
                            await page.$$eval('.raffle__checkbox-label', links => links.forEach(link => link.click()));
                            await delay(2000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Submitting Entry`);
                            await page.click('#raffle__form-submit');
                            await delay(5000);
                            try {
                                await page.waitForSelector('#raffle__confirmation-message-container');
                                retry = 'no';
                                successfulLog(patta[i], currentFunction);

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
                                let task = patta[i]
                                try {
                                    prxdata = {
                                        username: username.replace('#', ''),
                                        module: currentFunction.name,
                                        entrydata: JSON.stringify(task),
                                        proxy: `${proxies[i]}`
                                    }
                                    var prx = JSON.stringify(prxdata);
                                    let config = {
                                        headers: {
                                            'content-type': 'application/json',
                                        }
                                    }
                                    await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                                } catch (e) {

                                }
                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Raffle entry failed. ${e}`))
                            }

                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : ${e}`));
                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(patta[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },

    {
        name: 'SLAM JAM',
        modules: [
            {
                name: 'SLAM JAM Account Generator',
                store: 'SLAM JAM',
                logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                function: async function (currentFunction, csv, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < csv.length; i++) {
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        var embed = [
                            {
                                "type": "rich",
                                "title": `Succesful Patta Account Generated`,
                                "description": "",
                                "color": 0xc0d6d6,
                                "fields": [
                                    {
                                        "name": `User`,
                                        "value": `${username}`
                                    },
                                    {
                                        "name": `Delay`,
                                        "value": `${settings.delay}`
                                    },
                                    {
                                        "name": `Version`,
                                        "value": `${version}`
                                    }
                                ]
                            }
                        ]
                        const msg = { embeds: embed };
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(csv, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        var succesDEV = await makeEmbed(csv[i], currentFunction, 'acc', false);

                        const EMBEDS =
                        {
                            succesDEVMSG: { embeds: [succesDEV] }
                        };
                        if (csv[i].Email == '' || csv[i].FirstName == '' || csv[i].LastName == '') {
                            console.log(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Invalid CSV`);
                            await delay(2000)
                            continue;
                        }
                        if (csv[i].Password == '' || csv[i] == undefined) {
                            csv[i].Password == 'JRaffles23!'
                        }
                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            // console.log(csv[i].Password)
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto('https://drop.slamjam.com/account/register');
                            await delay(3000);
                            await page.waitForSelector('#FirstName');
                            await page.waitForSelector('.iubenda-cs-accept-btn.iubenda-cs-btn-primary')
                            await page.click('.iubenda-cs-accept-btn.iubenda-cs-btn-primary')
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling information`);
                            await delay(1200);
                            await page.type('#FirstName', `${csv[i].FirstName}`);
                            await delay(550);
                            await page.type('#LastName', `${csv[i].LastName}`);
                            await delay(550);
                            await page.type('#Email', `${csv[i].Email}`);
                            await delay(750);
                            await page.type('#ConfirmEmail', `${csv[i].Email}`);
                            await delay(750);
                            await page.type('#CreatePassword', `${csv[i].Password}`);
                            await delay(750);
                            await page.type('#CreateConfirmPassword', `${csv[i].Password}`);
                            await delay(550);
                            // await page.click('#checkPrivacy');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Submitting..`);
                            await page.$eval('#create_customer', form => form.submit());
                            await delay(5000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.cyan('Solving Captcha')}`)

                            await page.solveRecaptchas();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Captcha solved`)
                            await page.$eval('.shopify-challenge__container > form', form => form.submit());

                            try {
                                await page.waitForSelector('.product-card__image');
                                await delay(500);
                                retry = 'no';

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${csv[i].Email} Generated!`));
                                fs.appendFileSync('../accounts/slamjam.csv', `\n${csv[i].Email},${csv[i].Password}`);
                                console.log(chalk.yellow(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Account ${csv[i].Email} Saved in 'accounts/slamjam.csv'`));
                                try {
                                    if (settings.webhook != undefined && settings.webhook != '') {
                                        await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                    }
                                } catch {
                                }
                                await sendWebhook(accountWH, EMBEDS.succesDEVMSG);
                            } catch (e) {
                                console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Account genration failed. ${e}`))
                            }
                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : ${e}`));
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5) {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(csv[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            },
            {
                name: 'SLAM JAM Raffle Entries',
                store: 'SLAM JAM',
                logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                function: async function (currentFunction, csv, proxies) {
                    puppeteer.use(StealthPlugin());
                    puppeteer.use(RecaptchaPlugin({
                        provider: {
                            id: '2captcha',
                            token: `${settings.captchaKey}` // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
                        },
                        visualFeedback: true
                    }))
                    for (var i = 0; i < csv.length; i++) {
                        var ERROR;
                        if (retry != 'yes') {
                            var retry = '';
                            var t = 0;

                        }
                        setTitle(`${currentFunction.name} Task ${i + 1} / ${csv.length} || File: ${currentFile} Proxies: ${currentProxy}`);
                        try {
                            await jig(csv, i);

                        } catch {
                            retry = 'no';
                            throw new Error('Invalid CSV Format, use the CSV Files from the guides!')
                        }
                        if (csv[i].Email == '' || csv[i].Password == '' || csv[i].FirstName == '' || csv[i].LastName == '') {
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Invalid CSV`);
                            continue;
                        }

                        if (settings.useRandomProxy = false) {
                            var proxySplit = proxies[i].split(":");
                        } else {
                            var randomProxy = Math.round(Math.random() * (proxies.length - 1));
                            var proxySplit = proxies[randomProxy].split(":");
                        }
                        var browser
                        try {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });

                        } catch {
                            browser = await puppeteer.launch({
                                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                                headless: true,
                                args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox', '--disable-setuid-sandbox'],
                            });
                        }
                        try {
                            const page = await browser.newPage();
                            await page.authenticate({
                                username: `${proxySplit[2]}`,
                                password: `${proxySplit[3]}`,
                            });
                            await page.setViewport({ width: 1280, height: 720 });

                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Session`);
                            // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
                            await page.setRequestInterception(true);
                            page.on("request", (req) => {
                                if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                                    req.abort();
                                } else {
                                    req.continue();
                                }
                            });
                            await page.goto('https://drop.slamjam.com/account/login',
                                {
                                    waitUntil: "networkidle2",
                                    timeout: 60000
                                });
                            await page.waitForSelector('.iubenda-cs-accept-btn.iubenda-cs-btn-primary')
                            await page.click('.iubenda-cs-accept-btn.iubenda-cs-btn-primary')
                            await delay(600)
                            await page.waitForSelector('#CustomerEmail')
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Logging in..`)
                            await page.type('#CustomerEmail', `${csv[i].Email}`);
                            await delay(300);
                            await page.type('#CustomerPassword', `${csv[i].Password}`);
                            await delay(550);
                            await page.$eval('#customer_login', form => form.submit());
                            await delay(2000);
                            await page.waitForSelector('iframe[title="reCAPTCHA"]')
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${chalk.cyan('Solving Captcha')}`)
                            await page.solveRecaptchas();
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Captcha Solved`);
                            await page.$eval('.shopify-challenge__container > form', form => form.submit());
                            try {
                                await page.waitForSelector('.nav-account');
                                await delay(1200);
                            } catch {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Task failed, invalid credentials`));
                                continue;
                            }
                            await page.goto(`${csv[i].Url}`, {
                                waitUntil: "networkidle2",
                                timeout: 60000
                            });
                            await delay(3000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Starting Entry`)
                            try {
                                await page.waitForSelector('#ProductSelect-product-template-raffle');
                            } catch {
                                // console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Duplicate entry/ Account error`))
                            }
                            await page.click('.product-select-variant-wrapper');
                            await delay(800);
                            await page.click(`li.product-select-variant__value[data-size="${csv[i].Size}"]`)
                            // await page.select('#ProductSelect-product-template-raffle', '42376884715678');

                            await delay(900);
                            await page.$eval('#AddToCartForm-product-template-raffle', form => form.submit());
                            // await page.click('#AddToCart-product-template');
                            await page.waitForSelector('.cart-order-summary__content')
                            await delay(1300);
                            await page.goto('https://drop.slamjam.com/checkout');
                            await delay(1300);
                            await page.waitForSelector('#checkout_shipping_address_country');
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Information`)
                            await page.select('#checkout_shipping_address_country', `${csv[i].Country}`);
                            await delay(512);
                            await page.waitForSelector('#checkout_shipping_address_first_name');
                            await page.type('#checkout_shipping_address_first_name', `${csv[i].FirstName}`);
                            await delay(567);
                            await page.type('#checkout_shipping_address_last_name', `${csv[i].LastName}`);
                            await delay(480);
                            await page.type('#checkout_shipping_address_address1', `${csv[i].Address1} ${csv[i].HouseNumber}`);
                            await delay(1300);
                            await page.type('#checkout_shipping_address_address2', `${csv[i].Address2}`);
                            await delay(1300);
                            if (csv[i].Postcode == undefined) {
                                csv[i].Postcode = csv[i].Zip
                            }
                            await page.type('#checkout_shipping_address_zip', `${csv[i].Postcode}`);
                            await delay(700);
                            await page.type('#checkout_shipping_address_city', `${csv[i].City}`);
                            await delay(800);
                            await page.type('#checkout_shipping_address_phone', `${csv[i].Phone}`);
                            await delay(800);
                            await page.click('#continue_button');
                            await delay(3000);
                            await page.waitForSelector('.summary-title');
                            await delay(800);
                            await page.click('#continue_button');
                            await delay(800);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Finishing Checkout`)

                            await page.waitForSelector('#checkout_credit_card_vault');
                            await delay(1000);
                            var elementHandle = await page.$(
                                'iframe[title="Field container for: Card number"]',
                            );
                            var frame = await elementHandle.contentFrame();
                            await frame.click('#number');
                            // await page.click('#checkout_credit_card_vault');
                            await delay(1000)
                            await frame.type('#number', `${csv[i].CardNumber}`, { delay: 120 });
                            elementHandle = await page.$(
                                'iframe[title="Field container for: Name on card"]'
                            );
                            frame = await elementHandle.contentFrame();
                            await delay(450);
                            await frame.click('#name');
                            await delay(500);
                            await frame.type('#name', `${csv[i].NameOnCard}`, { delay: 120 });
                            elementHandle = await page.$(
                                'iframe[title="Field container for: Expiration date (MM / YY)"]'
                            );
                            frame = await elementHandle.contentFrame();
                            await delay(450);
                            await frame.click('#expiry');
                            await delay(500);
                            await frame.type('#expiry', `${csv[i].ExpiryDate}`, { delay: 120 });
                            elementHandle = await page.$(
                                'iframe[title="Field container for: Security code"]'
                            );
                            frame = await elementHandle.contentFrame();
                            await delay(450);
                            await frame.click('#verification_value');
                            await delay(500);
                            await frame.type('#verification_value', `${csv[i].CVV}`, { delay: 120 });
                            // console.log('before eval')
                            await page.$eval('#accepts-flag-raffle', check => check.click())
                            // await page.evaluate(() => {
                            //     document.querySelector("#accepts-flag-raffle").parentElement.click();
                            // });
                            // console.log('before page.click')
                            // await page.click('#accepts-flag-raffle')
                            // await page.click('#accepts-flag-raffle')
                            await delay(2000);
                            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Processing Order`)

                            // console.log('before before form')
                            await page.$eval('#continue_button', check => check.click());
                            await delay(7000)
                            // await page.click('#continue_button')
                            await page.waitForSelector('.edit_checkout.animate-floating-labels')
                            await page.$eval('.edit_checkout.animate-floating-labels', form => form.submit());
                            await delay(2000);
                            try {
                                await page.waitForSelector(`div[data-step="thank_you"]`, { timeout: 300000 })
                                retry = 'no';
                                successfulLog(csv[i], currentFunction);

                                console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));

                            } catch (e) {
                                throw new Error(`Error Processing Order: ${e.message}`);

                            }
                            var succesDEV = await makeEmbed(csv[i], currentFunction, 'dev', false);
                            var succesPUB = await makeEmbed(csv[i], currentFunction, 'pub', false);
                            let task = csv[i]
                            try {
                                prxdata = {
                                    username: username.replace('#', ''),
                                    module: currentFunction.name,
                                    entrydata: JSON.stringify(task),
                                    proxy: `${proxies[i]}`
                                }
                                var prx = JSON.stringify(prxdata);
                                let config = {
                                    headers: {
                                        'content-type': 'application/json',
                                    }
                                }
                                await axios.post('https://jraffles.herokuapp.com/success', prx, config)
                            } catch (e) {

                            }
                            const EMBEDS =
                            {
                                succesDEVMSG: { embeds: [succesDEV] },
                                succesPUBMSG: { embeds: [succesPUB] }
                            };
                            try {
                                if (settings.webhook != undefined && settings.webhook != '') {
                                    await sendWebhook(settings.webhook, EMBEDS.succesDEVMSG);
                                }
                                await delay(200);
                                await sendWebhook(succesWH, EMBEDS.succesDEVMSG);
                                await delay(200);
                                await sendWebhook(publicWH, EMBEDS.succesPUBMSG);
                            } catch (e) {
                                console.log(chalk.yellow(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : Error sending webhook ${e}`));

                            }


                        } catch (e) {
                            console.log(chalk.red(`${getTime()} [${modules[taskModule].name}] Task ${i + 1} : ${e}`));
                            ERROR = `${e}`
                            var errorDEV = await makeEmbed(kickz[i], currentFunction, 'dev', true, ERROR);
                            EMBEDS.errorDEV = { embeds: [errorDEV] }
                            if (settings.webhook != undefined && settings.webhook != '') {
                                await sendWebhook(settings.webhook, EMBEDS.errorDEV);
                            }
                            await sendWebhook(errorWH, EMBEDS.errorDEV);
                            retry = 'yes';
                        } finally {
                            if (browser) {
                                browser.close();
                            }
                            if (retry == 'yes' && t != 5 && ERROR != 'Size Not Found') {
                                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Retrying (${t} / 5)`));
                                i = i - 1;
                                t = t + 1;
                                continue;
                            }
                            if (retry == 'yes' && t >= 5) {
                                errorLog(csv[i], currentFunction)
                                retry = 'no';
                                t = 0;
                            }
                            console.log(`Waiting for ${settings.delay} ms`);
                            await delay(settings.delay);
                        }
                    }
                }
            }
        ]
    },

    // {
    //     name: 'Seven Store',
    //     modules: [

    //         {
    //             name: 'Seven Store Raffle Entries'
    //         }
    //     ]
    // },
    {
        name: 'Failed Tasks',
        modules: [
            {
                name: 'Retry Failed Tasks',
                function: async function (currentFunction) {
                    var proxies = await getProxyFile();
                    var taskCSV = fs.readFileSync('../failed-tasks.csv', 'utf-8')
                    var tasks = Papa.parse(taskCSV, { header: true }).data;
                    for (var i = 0; i < tasks.length; i++) {
                        var s = tasks[i].Store
                        var m = tasks[i].Mode

                        for (var stores of modules) {
                            const isStore = stores.name.includes(s);
                            if (!isStore) {
                                continue;
                            }
                            for (mode of stores.modules) {
                                // console.log(mode);
                                if (mode.name == m) {
                                    console.log(`Running ${chalk.cyan(mode.name)}`);


                                    await mode.function(mode, [tasks[i]], proxies);
                                    var lines = taskCSV.split('\n').splice(0, 1).join('\n');
                                    fs.writeFileSync('../failed-tasks.csv', lines);


                                }
                            }
                        }
                    }
                }
            },
            {
                name: 'Clear Failed Tasks',
                function: async function () {

                    console.clear();
                    console.log('Are you sure you want to clear "failed-tasks.csv"? (y/n)');
                    var sure = await prompt.get('Answer');
                    if (sure.Answer.toLowerCase() == 'y') {
                        fs.writeFileSync('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\n');
                        console.clear();
                        console.log('Cleared Failed Tasks');
                        await delay(1000);
                        return;
                    }
                    if (sure.Answer.toLowerCase() == 'n') {
                        console.clear();

                        console.log('Returning to Main Menu');
                        await delay(1000);
                        return;
                    }
                    console.clear();

                    console.log('Invalid Input');
                    await delay(1000);
                    return this.function();

                }
            }
        ]
    },
    {
        name: 'Paypal Verification'
    },
    {
        name: 'Change Settings'
    },
    {
        name: 'Reload Settings'
    },

    // {
    //     name: 'BSTN ACCOUNT GENERATOR'
    // },
    // {
    //     name: 'BSTN ACCOUNT VERIFIER'
    // },
    // {
    //     name: 'BSTN RAFFLE'
    // }
]

async function runFailedTasks(currentFunction) {
    var proxies = await getProxyFile();
    var taskCSV = fs.readFileSync('../failed-tasks.csv', 'utf-8')
    var tasks = Papa.parse(taskCSV, { header: true }).data;
    for (var i = 0; i < tasks.length; i++) {
        var s = tasks[i].Store
        var m = tasks[i].Mode
        for (var stores of modules) {
            const isStore = stores.name.includes(s);
            if (isStore) {
                for (mode of modules[stores].modules) {
                    const isMode = mode.name.includes(m);
                    if (isMode) {
                        currentFunction = mode.name;
                        await mode.function(currentFunction, tasks[i], proxies)
                    }
                }
            }
        }
    }
}

async function main() {
    await loadSettings();
    console.clear();
    if (settings.threads > 5) {
        settings.threads = 5;
    }
    if (version != 'devkey') {
        let didUpdate = await updater.autoUpdate();
        if (didUpdate === 'yes') {
            return exeCute('node JRaffles.js');
        }
        console.clear();
    }
    if (licenseKey == "") {
        console.log('No key found in settings.json')
        return await delay(10000);
        ;
    }
    await checkLicense(licenseKey);
    if (auth === false) {
        console.log(`Closing Browser`)
        return await delay(3000);
    } else {
        try {

            var openEmbed = [
                {
                    "type": "rich",
                    "title": `User Opened JRaffles`,
                    "description": "",
                    "color": 0xc0d6d6,
                    "fields": [
                        {
                            "name": `User`,
                            "value": `${username}`
                        },
                        {
                            "name": `Version`,
                            "value": `${version}`
                        }
                    ]
                }
            ]
            const openMSG = { embeds: openEmbed };
            var openDEV = await makeEmbed(null, null, 'open', false);

            const EMBEDS =
            {
                openDEVMSG: { embeds: [openDEV] }
            };
            await sendWebhook(openWH, EMBEDS.openDEVMSG)
            async function menu() {
                setTitle(`JRaffles ${version}`);
                console.clear();
                // figlet('JRaffles', function (err, data) {
                //     if (err) {
                //         console.log('Something went wrong...');
                //         console.dir(err);
                //         return;
                //     }
                //     console.log(data)
                // });
                // await delay(1000)
                console.log(`Hello ${chalk.cyan(`${username}`)}, Welcome to JRaffles ${version}`)
                console.log('Choose a Module to run..\n');
                for (var m = 0; m < modules.length - 4; m++) {
                    if (m >= 10) {
                        console.log(` (${m}) [${modules[m].name}]`)
                        continue;
                    }
                    if (modules[m].name === 'Reload Settings' || modules[m].name === 'Change Settings') {
                        continue;
                    } else {

                        console.log(` (${m})  [${modules[m].name}]`)
                    }
                };
                console.log(`\n ----------------------------------------------------- \n`)

                console.log(` (${modules.length - 4}) Failed Tasks`)
                console.log(` (${modules.length - 3}) Paypal Verification`)
                console.log(` (${modules.length - 2}) Change Settings`)
                console.log(` (${modules.length - 1}) Reload Settings`)
                console.log(``);
                taskModule = await getModule();
                if (taskModule > modules.length - 1 || isNaN(taskModule) == true) {
                    console.log('Invalid selection');
                    await delay(1000);
                    return menu();
                }
                if (modules[taskModule].name == 'BSTN') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    try {
                        if (taskFunction == 3) {
                            var proxies = await getProxyFile();
                            await currentFunction.function(currentFunction, proxies)
                        }
                        if (taskFunction == 2) {
                            var proxies = await getProxyFile();
                            var bstn = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(bstn)
                            }
                            await currentFunction.function(currentFunction, bstn, proxies)
                        } else if (taskFunction == 0) {
                            var proxies = await getProxyFile();
                            var bstn = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(bstn)
                            }
                            await currentFunction.function(currentFunction, bstn, proxies)
                        } else if (taskFunction == 1) {
                            var proxies = await getProxyFile();
                            // var linksRaw = await getLinks();
                            // var links = linksRaw.split(';');
                            await currentFunction.function(currentFunction, proxies);
                        }
                    } catch (e) {
                        console.log(e)
                        await delay(2000);
                    }
                    return menu();
                }
                if (modules[taskModule].name == 'FENOM') {
                    try {

                        taskFunction = await getFunction(modules[taskModule].modules);
                        var currentFunction = modules[taskModule].modules[taskFunction];
                        console.clear();
                        if (taskFunction == 1) {
                            var proxies = await getProxyFile();
                            var fenom = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(fenom)
                            }
                            await currentFunction.function(currentFunction, fenom, proxies)
                        } else if (taskFunction == 0) {
                            var proxies = await getProxyFile();
                            var fenom = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(fenom)
                            }
                            await currentFunction.function(currentFunction, fenom, proxies)
                        }
                    } catch (e) {
                        console.log(e);
                        await delay(4000);
                    }
                    return menu();
                }
                if (modules[taskModule].name == 'Overkill') {
                    try {

                        taskFunction = await getFunction(modules[taskModule].modules);
                        var currentFunction = modules[taskModule].modules[taskFunction];
                        console.clear();
                        if (taskFunction == 1) {
                            var proxies = await getProxyFile();
                            var fenom = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(fenom)
                            }
                            await currentFunction.function(currentFunction, fenom, proxies)
                        } else if (taskFunction == 0) {
                            var proxies = await getProxyFile();
                            var fenom = await getTaskFile(currentFunction);
                            if (settings.shuffleTasks) {
                                await shuffle(fenom)
                            }
                            await currentFunction.function(currentFunction, fenom, proxies)
                        }
                    } catch (e) {
                        console.log(e);
                        await delay(4000);
                    }
                    return menu();
                }
                if (modules[taskModule].name == '4ELEMENTOS') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        await currentFunction.function(currentFunction, proxies);
                        return menu();
                    }
                    var proxies = await getProxyFile();
                    var afew = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(afew)
                    }
                    await currentFunction.function(currentFunction, afew, proxies);
                    return menu();
                }
                if (modules[taskModule].name == 'OneBlockDown') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    var proxies = await getProxyFile();
                    var afew = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(afew)
                    }
                    await currentFunction.function(currentFunction, afew, proxies);
                    return menu();
                }
                if (modules[taskModule].name == 'AFEW Store') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    var proxies = await getProxyFile();
                    var afew = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(afew)
                    }
                    await currentFunction.function(currentFunction, afew, proxies);
                    return menu();
                }
                if (modules[taskModule].name == 'EQL') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    var proxies = await getProxyFile();
                    var afew = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(afew)
                    }
                    await currentFunction.function(currentFunction, afew, proxies);
                    return menu();
                }
                else if (modules[taskModule].name == 'MAHA Amsterdam') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var oqium = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(oqium)
                        }
                        await currentFunction.function(currentFunction, oqium, proxies);

                        return menu();
                    } else if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        // console.log('Use the JRaffles Chrome Extension to copy your links here..');
                        // linksRaw = await getLinks();
                        // links = linksRaw.split(";");
                        // console.log(`${links.length} links found!`);
                        // console.log(`Starting verification..`);
                        await currentFunction.function(currentFunction, null, proxies);

                        return menu();
                    };
                } else if (modules[taskModule].name == 'FOOTSHOP') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    var proxies = await getProxyFile();
                    var footshop = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(footshop)
                    }
                    await currentFunction.function(currentFunction, footshop, proxies);
                    await delay(5000);
                    return menu();
                } else if (modules[taskModule].name == 'Google Forms') {
                    try {
                        let config = {
                            headers: {
                                'content-type': 'application/json',
                            }
                        }
                        let data = {
                            key: licenseKey
                        }
                        let response = await axios.post('https://jraffles.herokuapp.com/beta', data, config);
                        if (response.status != 200) {
                            throw new Error('No Beta Access..')
                        }
                        console.log(`Hello, ${chalk.cyan(username)}. Beta Access Granted.`)
                        await delay(1000)
                    } catch (e) {
                        console.log('No Beta Access.')
                        await delay(2000)
                        return menu();
                    }
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    var proxies = await getProxyFile();
                    var footshop = await getTaskFile(currentFunction);
                    if (settings.shuffleTasks) {
                        await shuffle(footshop)
                    }
                    await currentFunction.function(currentFunction, footshop, proxies);
                    await delay(5000);
                    return menu();
                } else if (modules[taskModule].name == 'OQIUM Store') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var oqium = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(oqium)
                        }
                        await currentFunction.function(currentFunction, oqium, proxies);

                        return menu();
                    } else if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        // console.log('Use the JRaffles Chrome Extension to copy your links here..');
                        // linksRaw = await getLinks();
                        // links = linksRaw.split(";");
                        // console.log(`${links.length} links found!`);
                        // console.log(`Starting verification..`);
                        await currentFunction.function(currentFunction, null, proxies);

                        return menu();
                    };
                } else if (modules[taskModule].name == 'BOUNCEWEAR') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        await bwAcc(`https://bouncewear.com/nl/account/register`, currentFunction);
                    } else if (taskFunction == 1) {

                    };
                } else if (modules[taskModule].name == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var patta = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(patta)
                        }
                        await currentFunction.function(currentFunction, patta, proxies);
                        return menu();
                    } else if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        var patta = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(patta)
                        }
                        await currentFunction.function(currentFunction, patta, proxies);
                        return menu();
                    };
                } else if (modules[taskModule].name == 'SLAM JAM') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var slamjam = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(slamjam)
                        }
                        await currentFunction.function(currentFunction, slamjam, proxies);
                        return menu();
                    } else if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        var slamjam = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(slamjam)
                        }
                        await currentFunction.function(currentFunction, slamjam, proxies);
                        return menu();
                    };
                    // console.log('inalid selection')
                    // return menu()
                } else if (modules[taskModule].name == 'KICKZ') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var kickz = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(kickz)
                        }
                        await currentFunction.function(currentFunction, kickz, proxies);
                        return menu();
                    } else if (taskFunction == 1) {
                        var proxies = await getProxyFile();
                        var kickz = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(kickz)
                        }
                        await currentFunction.function(currentFunction, kickz, proxies);
                        return menu();
                    };
                } else if (modules[taskModule].name == 'JD') {
                    taskFunction = await getFunction(modules[taskModule].modules);
                    var currentFunction = modules[taskModule].modules[taskFunction];
                    console.clear();
                    if (taskFunction == 0) {
                        var proxies = await getProxyFile();
                        var jd = await getTaskFile(currentFunction);
                        if (settings.shuffleTasks) {
                            await shuffle(jd)
                        }
                        await currentFunction.function(currentFunction, jd, proxies);
                        return menu();
                    }
                } else if (modules[taskModule].name == 'Seven Store') {
                    // taskFunction = await getFunction(modules[taskModule].modules);
                    // var currentFunction = modules[taskModule].modules[taskFunction];
                    // console.clear();
                    // if (taskFunction == 0) {
                    //     var proxies = await getProxyFile();
                    //     var seven = await getTaskFile();
                    //     await sevenFunction(currentFunction, seven, proxies);
                    //     return menu();
                    // }
                    console.log('returning to menu')
                    await delay(1000)
                    return menu();
                } else if (modules[taskModule].name == 'Paypal Verification') {
                    var f = modules[taskModule].name
                    var proxies = await getProxyFile();
                    // const linksRaw = await getLinks();
                    // var links = linksRaw.split(';');
                    await paypalFunction(f, proxies);
                    return menu();
                } else if (modules[taskModule].name == 'Failed Tasks') {
                    taskFunction = await getFunction(modules[taskModule].modules);

                    var currentFunction = modules[taskModule].modules[taskFunction];

                    await currentFunction.function(currentFunction);

                    return menu();
                } else if (modules[taskModule].name == 'Change Settings') {
                    console.log(`Choose a Setting to change :\n`);
                    var s = 0;
                    for (const properties in settings) {
                        console.log(`(${s}) ${properties} : ${settings[properties]}`);
                        s++;
                    }
                    console.log('\n ----------------------------------------------------- \n');
                    console.log(`(${s}) Return to Main Menu`);
                    var changeSetting = await getSetting();
                    if (changeSetting == s) {
                        return menu();
                    }
                    console.clear;
                    var c = 0;
                    for (var properties in settings) {
                        if (changeSetting == c) {
                            console.log(`Changing: \n \n ${properties} :`);
                            settings[properties] = await getValue();
                            fs.writeFileSync('../settings.json', JSON.stringify(settings))
                            break;
                        } else {
                            c++;
                        }
                    }
                    console.log(`Settings Saved!`)
                    await delay(3000);
                    return menu();
                } else if (modules[taskModule].name == 'Reload Settings') {
                    console.log(`Reloading settings`);
                    await loadSettings();
                    return menu();
                } else if (taskModule == 69) {
                    modules[69] = { name: "AFEW SECRET" }
                    var pw = await getPassword();
                    if (pw == 'ModuleVoorDeBoys') {
                        await afewScraper();
                        await getAfewProduct();
                        await afewFunction(afewProducts[afewProduct], 'sec');
                    } else {
                        console.log(`Wrong password, closing in 10 seconds...`);
                        await delay(3000);
                    }
                } else {

                }
            }
            try {
                await menu();

            } catch (e) {
                console.log(e);
                await delay(10000);
                return menu();
            }
        } catch (e) {
            console.log(e);
            return await delay(15000);
        }
    }

};


setTitle(`JRaffles ${version}`);


try {
    loadSettings();
    main();

} catch (e) {
    console.log(e);

}
