const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.8,
    },

    creatdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "dell", "mi"],
            message: `{Value} is not supported`
        },
    },

})

module.exports = mongoose.model("Product", productSchema);