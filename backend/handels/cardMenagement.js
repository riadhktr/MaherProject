const Cart = require('../models/shoppingCard') ;
const Product = require('../models/productSchema') ;


exports.creeteCart = async(req , res)=>{
    const { cart , confirm } = req.body;
    const  user  = req.user;
    try {
      let products = [];
      let myProd = await  Product.find();
      // check if user already have product in cart
      // const alreadyExistCart = await Cart.findOne({ orderby: user._id });
      // console.log(alreadyExistCart);
      // if (alreadyExistCart) {
      //  await  alreadyExistCart.deleteOne();
      // }
      
      for (let i= 0; i< cart.length; i++) {
        let object = {};
        object.product = cart[i]._id;
        object.count = cart[i].count;
        
        object.price = cart[i].price;
        products.push(object);
        
      }
      // console.log(products);
      let cartTotal = 0;
      for (let i= 0; i< products.length; i++) {
        cartTotal = cartTotal + products[i].price * products[i].count;
      }

      // console.log(cartTotal);
      let newCart =  new Cart({
        products,
        totalPrice:cartTotal,
        orderby: user?._id,
      })

      if(confirm === true){
        await newCart.save()
        for (let i= 0; i< cart.length; i++){
          await Product.updateMany({_id : cart[i]._id },{$inc:{quantity: -cart[i].count}})
        }
        res.json({msg:"created cart",newCart}).end()
      }else{
        res.status(400).json({msg:"cart cancelled"})
      }
      // const updatedCart = await User.findByIdAndUpdate(_id,{$push:{cart:newCart}})
      //   // updatedCart.cart.push(newCart).save()
      
    } catch (error) {
        console.log(error);
      res.status(500).json({msg:"server errro"})
    }
  }