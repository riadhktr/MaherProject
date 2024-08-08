import  {useEffect, useState} from "react"
import "./welcome.css"
import ProdCard from "./prodCard";
import { allProducts } from "../api/prodApi";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../app/productSlice";







const Product =()=>{

  const divStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: "url('/store.webp')",
    backgroundSize: 'cover',
    
  };
  const {products} = useSelector((state)=>state.produit); 
  const dispatch = useDispatch();

   useEffect(()=>{
    allProducts()
    .then((file)=>{
      dispatch(setProduct(file.doc));     
    })
    .catch((err)=>{
        console.log(err);
    })
   },[])



  return(
      <div >
       <div style={divStyle}>
       </div>
       <div style={{backgroundColor:"yellowgreen" , padding:"2%"}} id="scroll-container">
        <h3 id="scroll-text">Welcome, here you can find anything you look for </h3>
       </div>
      <div style={{display:"flex" , justifyContent:"space-around" ,
         flexWrap:"wrap" , padding:"20px"}}>
      {products.map((element,index)=>{
          return <ProdCard prod={element}  key={index}/>
        })}
        
      </div>
        
      </div>
    )
  }
  
  
  export default Product;