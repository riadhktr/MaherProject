import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { allProducts, singleProd } from '../api/prodApi';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/cartSlice';
import SimilarProd from './SimilarProd';



function Detail() {
 

  const [prod , setProd] = useState({}) ;
  const [images , setImages] = useState([]);
  const dispatch = useDispatch(); 
  let {id} = useParams();

  useEffect(()=>{
    singleProd(id)
    .then ((val)=>{
        setProd(val.doc)
        setImages(val.doc.image)
      })
    .catch((err)=>{
      console.error(err);
    }) 
  },[id])

   
  // console.log(similar);
  return (
   <div >
    
    <Carousel data-bs-theme="dark" >
    {
    images.map((item,index)=>{
      return <Carousel.Item key={index} >
        <div   style={{ display:"flex", justifyContent:"center"}}
 >
        <img
        height="400"
        src={`http://localhost:3000/${item}`}
        alt={`index slide`}
             
      />
      
        </div>
      
    </Carousel.Item>
    })} 
    </Carousel>
    <div
      className="modal show"
      style={{ display: 'block', position: 'relative'  }}
    >
      <Modal.Dialog size='lg' >
        <Modal.Header style={{display:"flex" , justifyContent:"center"}}>
          <Modal.Title>{prod.nameProdut}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <b>Description</b> : <p>{prod.productDescription}</p>
         <b>Price</b> : <p> {prod.price} $</p>
          <b>Stock</b> :<p>{prod.quantity} </p>
        </Modal.Body>

        <Modal.Footer style={{display:"flex", justifyContent:"center"}}>
        {prod.quantity > 0 ?  <Button  onClick={()=>dispatch(addToCart(prod))}>Add To Cart</Button>
        :  <Button disabled>Add To Cart</Button>}
        
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    <SimilarProd prod={prod}/>
   </div>
  );
}

export default Detail;