import { spawn } from 'child_process'
import { mkdirSync, existsSync, appendFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import uuid4 from "uuid4";

class SonyVegasByBootcamp {
    dirVideos: string;
    constructor(){
        this.dirVideos = `${__dirname.split('/').slice(0,5).join('/')}/srcvideos`
    }
    dirTxt: string;//
    constructortxt(){//
        this.dirTxt = `${__dirname.split('/').slice(0,5).join('/')}/srcvideos`//
    }//
    async ffmpeg(argsFfmpeg: any) {
        try {
            return new Promise((resolve, reject) => {
                const opts = { shell: true }
                
                console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 13 ~ SonyVegasByBootcamp ~ ffmpeg ~ argsFfmpeg", argsFfmpeg)
                const child = spawn('ffmpeg', (argsFfmpeg), opts)
            

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
        console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 43 ~ SonyVegasByBootcamp ~ ffmpeg ~ error", error)

        }
    }

    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables = 4) {
        try {
            let extensionVideo = '.mp4'
            let videoSource = {
                srcVideo: `${this.dirVideos}/${nameVideo}${extensionVideo}`,
                srcVideoOutput: `${this.dirVideos}/${nameVideo}-${uuid4()}${extensionVideo}`
            }
            // ffmpeg -y -i video_5.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_5_cut.mp4
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 53 ~ SonyVegasByBootcamp ~ cutVideo ~ videoSource", videoSource)
            let args = [
                '-y',
                '-i',
                videoSource?.srcVideo,
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                videoSource?.srcVideoOutput
            ]

            await this.ffmpeg(args)
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 67 ~ SonyVegasByBootcamp ~ cutVideo ~ error", error)
            throw error
        }
    }
//codigo echo por mi 
    async joinVideo(nameTxt: string){
        try {
            let extensionTextos = '.txt'
            let extensionVideos = '.mpeg'
            let videoJoinSource={
                srcTxt: `${this.dirTxt}/${nameTxt}${extensionTextos}`,
                srcTxtOutput:`${this.dirTxt}/${nameTxt}${extensionVideos}`,
            }
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 87 ~ SonyVegasByBootcamp ~ joinVideo ~ videoJoinSource", videoJoinSource)
            //ffmpeg -f concat -i a.txt -c copy Funny_join.mpeg
            let args = [
                '-f',
                'concat',
                '-i',
                videoJoinSource?.srcTxt,
                '-c',
                'copy',
                videoJoinSource?.srcTxtOutput
            ]
        } catch (error) {
        console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 99 ~ SonyVegasByBootcamp ~ joinVideo ~ error", error)
            
        }
    }
//

    async cutVideos(videoSources: any[]) {
        try {
        } catch (error) {
            throw error
        }
    }
    async joinVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addFilterVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addImagesToVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
}

export default new SonyVegasByBootcamp()