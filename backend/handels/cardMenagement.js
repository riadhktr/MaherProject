const Cart = require('../models/shoppingCard') ;
const Product = require('../models/productSchema') ;


exports.creeteCart = async(req , res)=>{
    let {products , totalPrice} = req.body ;

     let prixTot = 0 ;
    for(let i = 0 ; i < products.length ; i++){
      
        let data = await Product.findById(products[i].prod);
        // console.log(data.price);

        prixTot += data.price * products[i].count

    }

    console.log(prixTot);
    

    try {
        // let newCart = new Cart({products , totalPrice})
        // await newCart.save() ;
        res.status(200).json({msg:'cart creeted'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:'server error in creet cart'})
        
    }

}