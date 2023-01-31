const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurfboardSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: Schema.Types.ObjectId, ref: "Brand", required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

SurfboardSchema.virtual("url").get(function () {
  return `/catalog/surfboard/${this._id}`;
});

module.exports = mongoose.model("Surfboard", SurfboardSchema);

