const puppeteer = require("puppeteer-extra");
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const chalk = require('chalk');
const axios = require('axios');
const setTitle = require('node-bash-title');
const getTaskFile = require('getTaskFile');
const getProxyFile = require('getProxyFile');
var jig = require('jig');
var delay = require('delay');
const getTime = require('getTime');
var prompt = require("prompt");

let afewProducts = [];
let afewProduct;

const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS';
const errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz'

async function sendWebhook(url, content) {
    let config = {
        headers: {
            'content-type': 'application/json',
        }
    }
    await axios.post(url, content, config)
};

async function afewScraper(currentFunction, proxies) {
    var proxySplit = proxies[1].split(":");
    const browser = await puppeteer.launch({
        headless: true,
        args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]},--no-sandbox',
      '--disable-setuid-sandbox,--force-device-scale-factor=0.3`],
    });
    try {
        const page = await browser.newPage();
        await page.authenticate({
            username: `${proxySplit[2]}`,
            password: `${proxySplit[3]}`,
        });
        console.log(`${getTime()} [${currentFunction.name}] Afew Scraper started`);
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36')
        await page.setRequestInterception(true);
        page.on("request", (req) => {
            if (req.resourceType() === "image" || req.resourceType() === "font" || req.resourceType() === "media") {
                req.abort();
            } else {
                req.continue();
            }
        });
        await page.goto('https://en.afew-store.com/collections/sneaker-raffles');
        console.log(`${getTime()} [${currentFunction.name}] Looking for Raffles`);
        await page.waitForTimeout(3000);
        await page.waitForSelector('.product-card');
        const urls = await page.$$eval('a.product-card', titles => {
            return titles.map(title => title.href)
        })

        return afewProducts = urls
    } catch (e) {
        console.log(` ${e}`);
    } finally {
        browser.close();
        console.clear();
    }
};

async function getAfewProduct() {
    console.log(`Choose a Raffle to enter: \n`);
    for (var p = 0; p < afewProducts.length; p++) {
        console.log(` (${p}) ${afewProducts[p]}`)
    };
    console.log();
    let AP = await prompt.get('Product');
    console.clear();
    afewProduct = AP.Product;
    return
};

afewFunction = async (url, mode, currentFunction, afew, proxies, currentFile, username, settings) => {
    for (var i = 0; i < afew.length; i++) {
        setTitle(`${currentFunction.name} Task ${i + 1} / ${afew.length} || File: ${currentFile} Proxies: ${currentProxy}`);
        await jig(afew, i);
        var embed = [
            {
                "type": "rich",
                "title": `Succesful AFEW Entry`,
                "description": "",
                "color": 0xc0d6d6,
                "fields": [
                    {
                        "name": `User`,
                        "value": `${username}`
                    },
                    {
                        "name": `Product`,
                        "value": `${url}`
                    },
                    {
                        "name": `Size`,
                        "value": `${afew[i].Size}`
                    },
                    {
                        "name": `Delay`,
                        "value": `${settings.AfewDelay}`
                    },
                    {
                        "name": `Version`,
                        "value": `${settings.version}`
                    }
                ]
            }
        ]
        const msg = { embeds: embed };
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
        const browser = await puppeteer.launch({
            headless: true,
            args: [`--proxy-server=${proxySplit[0]}:${proxySplit[1]}`, '--no-sandbox',
                '--disable-setuid-sandbox'],
        });
        try {
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(120000);
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
            await page.goto(url, { waitUntil: 'networkidle2' });
            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Gathering cookies`);
            await page.waitForTimeout(4000);
            // try {
            //     function cookieHandling() {
            //         page.waitForSelector('#onetrust-accept-btn-handler', { timeout: 60000 });
            //         page.evaluate(() => {
            //             const element = document.querySelector("#onetrust-accept-btn-handler")
            //             if (element) {
            //                 element.click();

            //             }
            //         });
            //     }
            //     cookieHandling();
            // } catch (e) {
            //     // console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Proxy error, retrying..`));
            //     // embed[0].title = 'Failed entry';
            //     // embed[0].description = 'Proxy error';
            //     // await sendWebhook(errorWH, msg);
            //     // i = i - 1;
            //     // continue
            // }
            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Cookies received`);
            await page.waitForTimeout(800);

            if (afew[i].Size == 'RANDOM') {
                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing random size`);

                const sizes = await page.$$eval('div.size-picker.mt-2 > ul > li > a', sizes => {
                    return sizes.map(size => size.href)
                })
                var randomSize = Math.round(Math.random() * (sizes.length - 1));
                await page.goto(`${sizes[randomSize]}`);
            } else {
                console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Choosing Size ${afew[i].Size}`);
                try {
                    const sizes = await page.$$eval(`li[data-original-title="Größe in EU: ${afew[i].Size}"] > a`, sizes => {
                        return sizes.map(size => size.href)
                    })
                    await page.goto(`${sizes[0]}`, { waitUntil: 'networkidle2' });
                } catch (e) {
                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e} Size not found`));
                    embed[0].title = 'Failed entry';
                    embed[0].description = 'Size not found';
                    await sendWebhook(errorWH, msg);
                    continue;
                }

                try {
                    // const element = await page.$(`li[data-original-title="Größe in EU: ${afew[i].Size}"] > a`);
                    // await page.goto(element.attributes());
                    await page.click(`li[data-original-title="Größe in EU: ${afew[i].Size}"]`);
                    await page.waitForTimeout(800);
                    await page.click(`li[data-original-title="Größe in EU: ${afew[i].Size}"]`);
                } catch (e) {
                    console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e} Size not found`));
                    embed[0].title = 'Failed entry';
                    embed[0].description = 'Size not found';
                    await sendWebhook(errorWH, msg);
                    continue;
                }
            }
            await page.waitForTimeout(600);
            await page.type("#raffle-instagram", `${afew[i].Follower}`, { delay: 100 });
            await page.waitForTimeout(900);
            await page.click("#raffle-terms");
            await page.waitForTimeout(900);
            //button[contains(., 'Enter Raffle')]
            await page.evaluate(() => {
                const element = document.querySelector("button.btn[name='add']")
                element.click();
            });
            await page.waitForTimeout(3000);
            await page.waitForSelector("#checkout_email");
            await delay(1000);
            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Filling Information`);
            if (mode == 'sec') {
                await page.type('#checkout_email', `${afew[i].FirstName}${afew[i].LastName}${settings.catchall}`, 50);
            } else { await page.type('#checkout_email', `${afew[i].Email}`, 50); }
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
            if (afew[i].Postcode == undefined) {
                await page.type("#checkout_shipping_address_zip", `${afew[i].Zip}`)
            } else {
                await page.type("#checkout_shipping_address_zip", `${afew[i].Postcode}`);
            }
            await page.waitForTimeout(700);
            await page.type("#checkout_shipping_address_city", `${afew[i].City}`);
            await page.waitForTimeout(700);
            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Getting Shipping`);
            page.evaluate(() => {
                const element = document.querySelector("#continue_button")
                for (var e = 0; e < 5; e++) {
                    if (element) {
                        element.click();
                        break;
                    } else {
                        delay(4000)
                    }
                }
            });

            await page.waitForTimeout(4500);
            await page.waitForSelector("div.radio-wrapper", { timeout: 100000 });
            page.evaluate(() => {
                const element = document.querySelector("#continue_button")
                for (var e = 0; e < 5; e++) {
                    if (element) {
                        element.click();
                        break;
                    } else {
                        delay(4000)
                    }
                }
            });
            await page.waitForTimeout(2000);
            console.log(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Finishing Entry`);

            await page.waitForSelector("#continue_button", { timeout: 100000 });
            page.evaluate(() => {
                const element = document.querySelector("#continue_button")
                for (var e = 0; e < 5; e++) {
                    if (element) {
                        element.click();
                        break;
                    } else {
                        delay(4000)
                    }
                }
            });
            await page.waitForTimeout(4500);
            await page.waitForSelector("#continue_button");
            page.evaluate(() => {
                const element = document.querySelector("#continue_button")
                for (var e = 0; e < 5; e++) {
                    if (element) {
                        element.click();
                        break;
                    } else {
                        delay(4000)
                    }
                }
            });
            try {
                await page.waitForSelector(`div[data-step="thank_you"]`)

            } catch (e) {
                console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Entry Failed: ${e}`));
            }
            console.log(chalk.green(`${getTime()} [${currentFunction.name}] Task ${i + 1} : Raffle Entered!`));
            await sendWebhook(succesWH, msg);

        } catch (e) {
            console.log(chalk.red(`${getTime()} [${currentFunction.name}] Task ${i + 1} : ${e}`));
            embed[0].title = 'Failed entry'
            embed[0].description = `${e}`
            await sendWebhook(errorWH, msg)
        } finally {
            if (browser) {
                browser.close();

            }
            if (i + 1 == afew.length) {
                console.log(chalk.green(`Finished tasks, returning to Main Menu`))
                await delay(2000);
                break;
            }
            console.log(`Waiting for ${settings.AfewDelay} ms`);
            await delay(settings.AfewDelay);
        }
    }
};

module.exports = async function afew(currentFunction, proxyFiles, proxies, taskFiles, username, settings) {
    var afew = await getTaskFile(taskFiles);
    var proxies = await getProxyFile(proxyFiles);
    await afewScraper(currentFunction, proxies.proxies);
    await getAfewProduct();
    await afewFunction(afewProducts[afewProduct], 'nor', currentFunction, afew, proxies.proxies, afew.name, username, settings);
}