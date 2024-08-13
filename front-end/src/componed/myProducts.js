import React, { useEffect } from 'react'
import { myProd } from '../api/prodApi'
import ProdCard from './prodCard'
import {useDispatch, useSelector} from "react-redux";
import { setProduct } from '../app/productSlice';

const MyProducts = () => {
  
  const {products} = useSelector((state)=>state.produit);

  const dispatch = useDispatch();

    useEffect(()=>{
        myProd()
        .then((doc)=>{
          
          dispatch(setProduct(doc));
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[dispatch])

  return (
    <div style={{display:"flex", justifyContent:"space-around" , flexWrap:"wrap" , margin:"3rem"}}>
    {products?.map((item,index)=>{
      return <ProdCard prod={item} key={index} />
    })}</div>
  )
}

export default MyProducts