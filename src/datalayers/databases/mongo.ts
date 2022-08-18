import mongoose from 'mongoose'


const connectDBProcess = mongoose.createConnection(process.env.DB_HOST)

export {
    connectDBProcess
}