import { Schema } from 'mongoose'
import { connectDBProcess } from '../../databases/mongo'


const TikTokSchema = new Schema({
    videoLink: {type: String},
    srcLink: {type: String}
}, {timestamps: true})


const TikTokModel = connectDBProcess.model('TikTok', TikTokSchema)

export default TikTokModel