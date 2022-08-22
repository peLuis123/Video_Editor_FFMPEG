const puppeteer = require('puppeteer');
const util = require('util');
const child_process = require('child_process')
const exec = util.promisify(require('child_process').exec);
(async () => {
    const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
    const page = await browser.newPage();
    await page.goto("https://www.reddit.com/r/TikTokCringe/");
    await page.setViewport({ width: 1366, height: 768 })
    await page.waitForTimeout(1000);
    page.keyboard.press('End');
    await page.waitForTimeout(2000);
    const enlaces = await page.evaluate(() => {
        console.log('estamos aqui');
        const elements = document.querySelectorAll('#AppRouter-main-content video>source');//se copio el selector de el link
        const links = [];
        for (let element of elements) {
            links.push(element.src);
        }
        return links;
    });
    for (let enlace of enlaces) {
        console.log(enlace)
        const { stdout } = await exec(`youtube-dl '${enlace}' `);
    }
// comando para poder ejecutar comandos de consola desde javascritp    
    exec('mv *.mp4 srcvideos/;cd srcvideos; dir -b > lista.txt', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`stdout:\n${stdout}`);
    });

})();
