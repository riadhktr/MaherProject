import { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { decreese, deleteElement, emptyCart, increase  } from '../app/cartSlice';
import { bagCart } from '../api/prodApi';
import Button from 'react-bootstrap/esm/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AlertDialog from './DialogBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getLocalStorage } from '../helpers/localStorage';


function ShoppingCart() {
  const {cart } = useSelector((state)=>state.shopCart)
  
  const [total , setTotal] = useState(0);
  const [error , setError] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let result = cart.filter((item)=> item.count > 0 )

  const dispatch = useDispatch()
 
  const removeElement =(ID)=>{
    dispatch(deleteElement(ID))
  }
  const handelCart =()=>{
    let token = getLocalStorage('token');

    if(!token){
      handleClickOpen()
      setError(true)
    }else{
      navigate('/pay')
    }
  }
  
  const clearCart = ()=>{
    dispatch(emptyCart())
  }
   useEffect(()=>{
    setTotal(cart.map((item)=>{
      return item.count * item.price
    }).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    ))
   },[cart])


  return (
    <div style={{display:"flex" , justifyContent:"space-around" ,
    padding:"50px",
    flexWrap:"wrap"  }}>
      
    <Card
          bg="Light"
          style={{ width: '38rem' }}
          className="mb-2"
        >
          <Card.Header>My_Bag</Card.Header>
          {result.length === 0 ? <div style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
            <h3> Empty bag </h3>
             <p> You can see our products here <Link to="/">products</Link></p>
          </div>  
          : result.map((item,index)=>{
            return(<Card.Body key={index} style={{display:"flex" ,
              justifyContent:"space-around" ,alignItems:"center"}}>
            <Card.Title> {item.nameProdut} </Card.Title>
            
            <Card.Text>
             <b>{item.price}</b> $
            </Card.Text>
           
           <div style={{display:"flex" ,alignItems:"center", width:"10rem" , justifyContent:"space-between"}}>
            <div style={{display:"flex" , alignItems:"center",justifyContent:"space-between", width:"5rem"}}>
            {item.quantity >0  ? <AddBoxIcon style={{ cursor:"pointer"}} color="primary" onClick={()=>dispatch(increase(item))}/> : <AddBoxIcon color="disabled" /> }
            
            <p>{item?.count}</p>
           
            <IndeterminateCheckBoxIcon style={{ cursor:"pointer"}} color="primary"  onClick={()=>dispatch(decreese(item))}/> 
            </div>
            <DeleteForeverIcon style={{color:"red", fontSize:"30px"}} onClick={()=>removeElement(item._id)}/>
           
            </div>
          
           
          </Card.Body>)  
          })}
          
          <Button onClick={()=>clearCart()} >Clear Cart</Button>
        </Card>

     { result.length >0 ? <Card style={{ width: '18rem' }}>
      <Card.Body>
        {result.map((item,index)=>{
          return <div key={index}>
          <Card.Title >{item.nameProdut} x {item.count}</Card.Title>
          <hr></hr></div>
        })}
        
        <Button onClick={()=>handelCart()}> command ({`${total}$`})</Button>
      </Card.Body>
    </Card>
    : null } 
    {error && <AlertDialog  handleClose={handleClose} open={open} />}
    </div>
  );
}

export default ShoppingCart;