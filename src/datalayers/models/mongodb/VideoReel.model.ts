import { Schema } from 'mongoose'
import { connectDBProcess } from '../../databases/mongo'

export const VideoStatusProcess = {
    INIT: 'inicio',
    END: 'fin',
    ERR: 'error'
}

const TiktokVideoSchemas = new Schema({
    tiktokId: {type: Schema.Types.ObjectId, ref: 'TikTok'},
})

const VideoReelSchema = new Schema({
    lastStatusOfProcess: {type: String, enum: VideoStatusProcess},
    srcLink: {type: String},
    tiktokVideos: [TiktokVideoSchemas]
}, {timestamps: true})


const VideoReelModel = connectDBProcess.model('VideoReels', VideoReelSchema)

export default VideoReelModel
