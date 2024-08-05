const mongoose = require('mongoose')




const productSchema = new mongoose.Schema({
    image : {
        type : [String ],
      
    } ,
    nameProdut : {
        type : String ,
        required : true
    } ,
    price : {
        type : Number ,
        required : true
    } ,
    quantity : {
        type : Number ,
        required : true
    } ,
    productDescription : {
        type : String ,
        required : true
    } ,
    count : {
        type : Number ,
        default : 1
    } ,
    postedBy : {
        type : mongoose.Types.ObjectId ,
        ref : "User"
    },
    category:{
        type : mongoose.Types.ObjectId ,
        ref:"Category"
    }
})


module.exports = mongoose.model("Product" , productSchema) ;