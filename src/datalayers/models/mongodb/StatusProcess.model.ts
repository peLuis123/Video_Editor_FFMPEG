import { Schema } from 'mongoose'
import { connectDBProcess } from '../../databases/mongo'
import { VideoStatusProcess } from './VideoReel.model'

const StatusProcessSchema = new Schema({
    statusOfProcess: {type: String, enum: VideoStatusProcess}
}, {timestamps: true})


const StatusProcessModel = connectDBProcess.model('StatusProcess', StatusProcessSchema)

export default StatusProcessModel