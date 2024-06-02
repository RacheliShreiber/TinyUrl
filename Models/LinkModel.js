import mongoose from "mongoose"

import ClickModel from "./ClickModel.js"
import TargetModel from "./TargetModel.js"

const LinkSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  clicks: [ClickModel.schema],
  targetParamName: {
    type: String,
    default:"t"
  },
  targetValues: [TargetModel.schema]
})
export default mongoose.model("links", LinkSchema)