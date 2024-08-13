import React, { useEffect, useState } from 'react'
import { userCart } from '../api/prodApi'
import Table from 'react-bootstrap/Table';

const UserOrder = () => {

  const [list, setList] = useState([]);

  console.log(list);
  
  useEffect(()=>{
    userCart()
    .then((file)=>{
      setList(file);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
   <div>
    
   </div>
  )
}

export default UserOrder