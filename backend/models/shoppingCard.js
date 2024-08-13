const mongoose = require("mongoose");



const shopCart = new mongoose.Schema({

    products:[
        {
            type: mongoose.Types.ObjectId ,
            ref:"Product"
       }
        ],
    totalPrice : Number,
    orderby:{
        type : mongoose.Types.ObjectId ,
        ref:"User"
      }
},{ timestamps: true })


module.exports = mongoose.model('Cart',shopCart)