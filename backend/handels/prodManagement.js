const Product = require('../models/productSchema') ;
const Category = require('../models/categorySchema');
// const multer  = require('multer')
// const upload = multer({ dest: './public' })
// per postare un prodotto


exports.registerProd = async (req , res) =>{
    let{ nameProdut , price , quantity , productDescription , nameCat} = req.body ;
   
    let user = req.user ;
    let picture =req.files
    console.log(picture);

    try{

        let catID = await Category.findOne({nameCat})
        if( !nameProdut || !price || !quantity || !productDescription ||    !picture){
            return res.status(400).json({msg : "is required"})
        }
 
        
        let data = picture.map((item)=>{
            return item.filename
        })
        
        let newProdact = new Product({ nameProdut , price , quantity , productDescription ,category:catID._id, postedBy: user._id , image: data});
        await newProdact.save() ;

        
        res.status(200).json({msg:"registred"})
    }catch (error) {
        console.log(error);
       res.status(500).json({msg:"server error from register product"}) 
    }
} ;

// per modificare un prodotto

exports.updateProduct = async(req , res)=>{
    let user = req.user;
    let {id} = req.params ;

    try {
        let currentProd = await Product.findById(id);
        if(user._id.toString() !== currentProd.postedBy.toString()){
         return res.status(400).json({msg:"not authorized"})
        }



        let prodappdate = await Product.findByIdAndUpdate({_id : currentProd._id},{$set:req.body},{new : true})
        res.status(200).json({msg:"product updated " ,prodappdate})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"server error in aupdete product"})
    }
} ;

//per eliminare un prodotto

exports.deleteProduct = async(req , res)=>{
    let user = req.user ;
    let {id} = req.params ;
    try {
        let currentProd = await Product.findById(id) ;
        if(user._id.toString() !== currentProd.postedBy.toString()){
           return  res.status(400).json({msg:"user not autorized"}) ;
        }
         await Product.findByIdAndDelete({_id:currentProd._id})

        res.status(200).json({msg:"product removed"})
    } catch (err) {
        res.status(500).json({msg:"server error in delet product"})
        
    }

}


// get all product 

exports.allProd =async(req,res)=>{

    await Product.find({}).populate("category").populate('postedBy')

    .then((doc)=>{
     
     res.status(200).json({msg:"list of all products" , doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:"server error"})
    })
}

exports.prodById = async(req,res)=>{
    let {id} = req.params ;
    await Product.findById(id).populate("category").populate('postedBy')

    .then((doc)=>{
        res.status(200).json({msg:"product found" , doc})
    })
    .catch((err)=>{
        res.status(500).json({msg:"server error"})
    })
}