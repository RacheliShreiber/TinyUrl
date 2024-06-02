import mongoose from "mongoose"

const TargetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }

})
export default mongoose.model("targets", TargetSchema)