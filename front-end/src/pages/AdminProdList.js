import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { allProducts } from '../api/prodApi';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../app/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { getLocalStorage } from '../helpers/localStorage';

const AdminProdList = () => {
    const {products} = useSelector((state)=>state.produit);
    const user = getLocalStorage('User');

    const dispatch = useDispatch();
    const [loading ,setLoading] = useState(true);
    useEffect(()=>{

        allProducts()
        .then((result)=>{
         dispatch(setProduct(result.doc));
         setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap" , margin:"50px" , width:"70%"}}>
{loading ?  <Spinner animation="border" variant="secondary" /> 
  : products.map((item,index)=>{
return (    
<Card key={index} style={{width:"15rem", display:"flex", flexDirection:"column" , justifyContent:"space-between"}}>
<CardMedia
  component="img"
  alt="green iguana"
  height="200"
  image={item.image[0]}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {item.nameProdut}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {item.productDescription}
  </Typography>
</CardContent>
<CardActions style={{display:"flex" , justifyContent:"space-around", alignItems:"end"}}>
 <AutoDeleteIcon style={{cursor:"pointer"}}/>
 {user?._id === item?.postedBy._id ? <DriveFileRenameOutlineIcon style={{cursor:"pointer"}}/> : null}
  
</CardActions>
</Card>
) 
        })}
    </div>
  )
}

export default AdminProdList