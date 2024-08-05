import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { singleProd } from '../api/prodApi';
import { useParams } from 'react-router-dom';


function Detail() {
 

  const [prod , setProd] = useState({}) ;
  const [images , setImages] = useState([])
  console.log(prod);
   let {id} = useParams()
  useEffect(()=>{
    singleProd(id)
    .then ((val)=>{
        setProd(val.doc)
        setImages(val.doc.image)
    })
    .catch((err)=>{
      console.error(err);
    })
  },[])

  return (
   <div>
    
    <Carousel data-bs-theme="dark">
    {
    images.map((item,index)=>{
      return <Carousel.Item key={index}>
      <img
        className="d-block w-100"
        src={`http://localhost:3000/${item}`}
        alt={`index slide`}
      />
      
    </Carousel.Item>
    })} 
    </Carousel>
    <div>
      <h2>category: {prod.category?.nameCat}</h2>
      <h3>name: {prod.nameProdut}</h3>
      <p>description: {prod.productDescription}</p>
      <p>price: {prod.price} $</p>
      <p>quantity: {prod.quantity} $</p>
    </div>


   </div>
  );
}

export default Detail;