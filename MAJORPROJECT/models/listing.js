const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/a-sunset-on-a-beach-with-a-boat-in-the-water-wGbG2FKsFMc",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-sunset-on-a-beach-with-a-boat-in-the-water-wGbG2FKsFMc"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
