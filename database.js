import mongoose from "mongoose"

const uri = process.env.DB_URI
const uriLocal = "mongodb://127.0.0.1:27017/TinyUrl"

const connectDB = async () => {
    await mongoose.connect(uriLocal)
}

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
})

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

export default connectDB