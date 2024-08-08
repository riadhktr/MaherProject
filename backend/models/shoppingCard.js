const mongoose = require("mongoose");



const shopCart = new mongoose.Schema({

    products:[
       {prod: {
        type: mongoose.Types.ObjectId ,
        ref:"Product"
   }}],
    totalPrice : Number,
    orderby:{
        type : mongoose.Types.ObjectId ,
        ref:"User"
      }
})


module.exports = mongoose.model('Cart',shopCart)