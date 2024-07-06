import mongoose from "mongoose";

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

//Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/Genre/${this._id}`;
});

export default mongoose.model("Genre", GenreSchema);
