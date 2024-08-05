const mongoose = require("mongoose");



const shopCart = new mongoose.Schema({

    products:[
       {prod: {
        type: mongoose.Types.ObjectId ,
        ref:"Product"
   }}],
    totalPrice : Number
})


module.exports = mongoose.model('Cart',shopCart)