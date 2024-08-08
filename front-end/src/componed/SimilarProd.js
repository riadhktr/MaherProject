import React, { useEffect, useState } from 'react';
import ProdFigure from './ProdFigure';
import { allProducts } from '../api/prodApi';

const SimilarProd = ({prod}) => {
    const [similar, setSimilar] = useState([]);
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        allProducts()
        .then((file)=>{
          setProducts(file.doc)
          setLoading(false)
          if(!loading){
            setSimilar(products.filter((item)=>item.category.nameCat === prod.category.nameCat && item._id !== prod._id ))
          }
              }).catch((err)=>{
          console.log(err);
          
        })
    },[prod])

  return (
   
    
    <div>
      {similar.length > 0 ?<div style={{marginTop:"3rem", display:"flex", alignItems:"center" , justifyContent:"space-around",flexWrap:"wrap"}}>
        <h3> Similar product </h3>
        <div className='figure'>
         {similar.map((item,index)=>{
       return <ProdFigure {...item} key={index}/>
      })}</div></div>:null}
     
    </div>

 
  )
}

export default SimilarProd