import mongoose, {Schema} from 'mongoose'

class MongoSingleton {
    connection: any;
    constructor(){
        this.connection = null
    }
    createConnection(){
        this.connection = mongoose.connect(process.env.DB_HOST)
    }
    validateConnection(){
        if(!this.connection)
            this.createConnection()
    }
    getConnection(){
        this.validateConnection()
        return this.connection
    }
}

const comidaSchema = new Schema({
    type: {enum: ['vegetables', 'fruits']}
})



const mongoConnectionHandler = new MongoSingleton()

const connectionDB: any = mongoConnectionHandler.getConnection()

const comidaModel = connectionDB.model('Comida', comidaSchema)

const getDataFromDB = async () => {
    try {
        const comida = await comidaModel.findOne({}).lean()
        return comida
    } catch (error) {
        
    }
}