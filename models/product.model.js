const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    imgLink : {
        type: String
    },
    name  : {
        type: String
    },
    price : {
        type: String
    },
    stock : {
        type: String
    },
    isPublished : Boolean,
    updated: { type: Date, default: Date.now() }
})

let productModel = mongoose.model('product',productSchema)
module.exports = productModel