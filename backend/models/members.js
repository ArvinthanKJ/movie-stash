const mongoose = require("mongoose");

const { Schema } = mongoose;

const members = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  bucket: [
    {
      Title: { type: String },
      Year: { type: String },
      Poster: { type: String },
      imdbID: { type: String },
    },
  ],
  watched: [
    {
      Title: { type: String },
      Year: { type: String },
      Poster: { type: String },
      imdbID: { type: String },
    },
  ],
  public: [
    {
      Title: { type: String },
      Year: { type: String },
      Poster: { type: String },
      imdbID: { type: String },
    },
  ],
  friends: [{ type: String }],
  requests: [{ type: String }],
  ratings: [
    { movieId: { type: String }, rating: { type: Number, default: 0 } },
  ],
  count: { type: Number, default: 0 },
});
const Members = mongoose.model("_Members", members);

module.exports = Members;
