var mongoose = require("mongoose")
var Schema = mongoose.Schema
var ObjectId = mongoose.Schema.Types.ObjectId


var wishList = new Schema({
    title: {type: String, default: "Cool Wish List"},
    products: [{type: ObjectId, ref: "Product"}]
})

module.export = mongoose.model("WishList", wishList)