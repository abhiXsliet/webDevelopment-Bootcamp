const mongoose = require('mongoose');

const ratingAndReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
    },
    reating: {
        type: Number,
        required: true,
    },
    reviews: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('RatingAndReview', ratingAndReviewSchema);