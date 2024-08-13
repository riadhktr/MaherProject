import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteProd } from '../api/prodApi';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-toastify";
import { setProduct } from '../app/productSlice';
import { getLocalStorage } from '../helpers/localStorage';


function ProdCard({prod}) {
  const {products} = useSelector((state)=>state.produit);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const user = getLocalStorage('User');
 
  const handelRemove =(ID)=>{
    deleteProd(ID)
    .then((doc)=>{
      dispatch(setProduct(products.filter((item)=>item._id !== prod._id)))
      toast.success('product removed with sucess')
      
    })
    .catch((err)=>{
      console.log(err);
      
    })

  }
  return (
    <Card style={{ width: '200px', margin:"0.5rem"}}>
      
      <Card.Img variant="top" src={prod?.image[0]} alt = "prod" />
      <Card.Body>
        <Card.Title>{prod.nameProdut}</Card.Title>
        <Card.Text>
          {prod.productDescription}
          <br/>
          {prod.price}
          <br/>
          {prod.postedBy.firstName}
          <br/>
          {prod.category?.nameCat}
        </Card.Text>
          {location.pathname.includes("myprod") ? <div style={{display:"flex", justifyContent:"space-around"}}>
            <DriveFileRenameOutlineIcon style={{cursor:"pointer"}}/> 
            <AutoDeleteIcon style={{cursor:"pointer"}} onClick={()=>handelRemove(prod._id)}/> 
            </div> 
           : user?._id !== prod?.postedBy._id  ?   <Button  onClick={()=>navigate(`/detail/${prod._id}`)} variant="primary">See more</Button> : null }
        
          </Card.Body>
    </Card>
  );
}

  
  export default ProdCard;