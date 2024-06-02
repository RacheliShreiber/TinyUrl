import mongoose from "mongoose"

const uri = "mongodb+srv://rachel:rachel!11@cluster0.mcthkpq.mongodb.net/TinyUrl?retryWrites=true&w=majority&appName=Cluster0"
const uriLocal = "mongodb://127.0.0.1:27017/TinyUrl"

const connectDB = async () => {
    await mongoose.connect(uri)
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