/*import { spawn } from 'child_process'
import { mkdirSync, existsSync, appendFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import uuid4 from "uuid4";
import { Json } from 'aws-sdk/clients/marketplacecatalog';
const puppeteer = require('puppeteer');
const util = require('util');
const child_process = require('child_process')
const exec = util.promisify(require('child_process').exec);

class DownVideo {
    dirVideos: string;
    dirTxt: string;//
    constructor() {
        this.dirVideos = `${__dirname.split('/').slice(0, 5).join('/')}/backend/codeprofe/srcvideos`
        console.log("direccion", __dirname)
        this.dirTxt = `${__dirname.split('/').slice(0, 5).join('/')}/backend/codeprofe/srcvideos`//

    }
    async download(link: any) {
        try {

        
            fetch(link)
                .then((response) => {
                    const datajson = response.json();
                    console.log(datajson);

                    /*const linkvideo = datajson.data.children.filter(item => {
                        return item.is_video
                    })
                    const links = linkvideo.map(item => {
                        return item.url_overridden_by_dest
                    })
                })
                .then((data) => console.log(data));

            //const datajson = link;
            
            /*
            const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
            const page = await browser.newPage();
            await page.goto(link);
            await page.setViewport({ width: 1366, height: 768 })
            await page.waitForTimeout(1000);
            page.keyboard.press('End');
            await page.waitForTimeout(2000);
            const enlaces = await page.evaluate(() => {
                console.log('estamos aqui');
                //let elements: obje[]
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
            //probar con este comando for f in *mp4; do echo "file '$f'" >> file_list1.txt; done
            //cd srcvideos; for f in *mp4; do echo "file '$f'" >> file_list.txt; done
            //'mv *.mp4 srcvideos/;cd srcvideos; dir -b > lista.txt',
            /*exec(`mv *.mp4 srcvideos/;cd srcvideos; for f in *mp4; do echo "file '$f'" >> file_list.txt; done`, (error, stdout, stderr) => {
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

        } catch (error) {
            console.log("🚀 ~ file: downvideo.controllers.ts ~ line 61 ~ DownVideo ~ download ~ error", error)

            throw error
        }
    }
}

export default new DownVideo()*/