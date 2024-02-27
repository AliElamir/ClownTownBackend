const mongoose = require("mongoose")
const Schema = mongoose.Schema

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    clowns: [{ type: Schema.Types.ObjectId, ref: "Clown" }],
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Room", roomSchema)
