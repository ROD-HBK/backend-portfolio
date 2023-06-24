const mongoose = require("mongoose");

const testimonialsModel = mongoose.model("testimonials", mongoose.Schema({
    _id: String,
    avatar: String,
    name: String,
    github: String,
    review: String,


}))

module.exports = {
    testimonialsModel
}