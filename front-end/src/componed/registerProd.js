import  {useEffect, useState} from "react"
import ProdCard from "./prodCard";
import { allProducts } from "../api/prodApi";






const Product =()=>{

  const divStyle = {
    width: '100%',
    height: '500px',
    backgroundImage: "url('/store.webp')",
    backgroundSize: 'cover',
    
  };
   const [product , setProduct] = useState([]) ;
 
   useEffect(()=>{
    allProducts()
    .then((file)=>{
     setProduct(file.doc)
    })
    .catch((err)=>{
        console.log(err);
    })
   },[])



  return(
      <div >
       <div style={divStyle}>
        
       </div>
       <p>This example creates a half page background image. Try to resize the browser window to see how it always will cover 50% of the screen, and that it scales nicely on all screen sizes.</p>
        {product.map((element,index)=>{
          return <ProdCard prod={element}  key={index}/>
        })}
        
      </div>
    )
  }
  
  
  export default Product;