const Cart = require('../models/shoppingCard') ;
const Product = require('../models/productSchema') ;


exports.creeteCart = async(req , res)=>{
    const { cart , confirm } = req.body;
    const  user  = req.user;

    
    
    try {
      // let products = [];      
      // for (let i= 0; i< cart.length; i++) {
      //   let object = {};
      //   object.product = cart[i]._id;
      //   object.count = cart[i].count;
        
      //   object.price = cart[i].price;
      //   products.push(object);
        
      // }
      // console.log(products);
      let cartTotal = 0;
      for (let i= 0; i< cart.length; i++) {
        cartTotal = cartTotal + cart[i].price * cart[i].count;
      }

      // console.log(cartTotal);
      let newCart =  new Cart({
        products:cart,
        totalPrice:cartTotal,
        orderby: user?._id,
      })
     
      
      

      if(confirm === true){
        await newCart.save()
        .then(async()=>{
          for (let i= 0; i< cart.length; i++){
            await Product.updateMany({_id : cart[i]._id },{$inc:{quantity: -cart[i].count}})
          }
          res.json({msg:"created cart",newCart}).end()
        })
        .catch((err)=>{
          console.log(err);
          
          res.status(400).json({msg:"cart cancelled"})
        })
        
      }
      // const updatedCart = await User.findByIdAndUpdate(_id,{$push:{cart:newCart}})
      //   // updatedCart.cart.push(newCart).save()
      
    } catch (error) {
        console.log(error);
      res.status(500).json({msg:"server errro"})
    }
  }


  // get a single user cart as an order 

  exports.getUserCart =async(req,res)=>{

    let {_id} = req.user ;

    await Cart.find({orderby : _id}).populate('orderby')
    .populate("products")
    .then((doc)=>{
        res.status(200).json(doc)
    })
    .catch((err)=>{
      res.status(500).json({msg:"server error",err})
    })

     
  }