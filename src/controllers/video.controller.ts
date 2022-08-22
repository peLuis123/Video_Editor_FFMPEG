import VideoReelModel, { VideoStatusProcess } from "../datalayers/models/mongodb/VideoReel.model"
import SonyVegasController from './sonyvegas.controller'
class VideoController {
    async testingFfmpeg() {
        try {
            await SonyVegasController.ffmpeg({})
        } catch (error) {
            throw error
        }
    }
    async executeProcessToBuildReel() {
        const videoId: any = null

        try {
            // al iniciar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.INIT
            })
            // al finalizar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.END
            })
        } catch (error) {
            // al obtener error en el proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoStatusProcess.ERR
            })
            throw error
        }
    }
    async getStatusOfProcess({ }: any) {
        try {

        } catch (error) {
            throw error
        }
    }

    private async setStatusOfVideo({ }: any) {

    }

    private async createVideoReel() {

    }

    async updateData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.findOneAndUpdate({
            _id: "62f302a0f9027c96dda81aa6"
        }, {
            $set: {
                srcLink: 'https://google.com',
                updatedAt: dateUpdate
            }
        })
    }

    async createData() {
        let dateUpdate=  new Date()
        const updateData = await VideoReelModel.insertMany([{
            srcLink: 'https://google.com',
            createdAt: new Date()
        }])
    }

    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables: number) {
        try {
            await SonyVegasController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
        } catch (error) {
            throw error
        }
    }

    async joinVideo(nameTxt:string){
        try {
            await SonyVegasController.joinVideo(nameTxt)
        } catch (error) {
            throw error
        }
    }

    async addFilterVideos(nameVideo:string){
        try {
            await SonyVegasController.addFilterVideos(nameVideo)
        } catch (error) {
            throw error
        }
    }
}

export default new VideoController()