const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurfboardInstanceSchema = new Schema({
  surfboard: { type: Schema.Types.ObjectId, ref: "Surfboard", required: true },
  dimensions: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Shipping", "Reserved", "Sold"],
    default: "Reserved",
  }
});

SurfboardInstanceSchema.virtual("url").get(function () {
  return `/catalog/surfboardinstance/${this._id}`;
});

module.exports = mongoose.model("SurfboardInstance", SurfboardInstanceSchema);