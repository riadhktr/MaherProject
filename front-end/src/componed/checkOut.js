import {PaymentElement} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { emptyCart, setConfirm } from '../app/cartSlice';
import { bagCart } from '../api/prodApi';
const CheckoutForm = () => {
  
  const navigate =useNavigate();
  const {confirmed,cart} = useSelector((state)=>state.shopCart);
  const dispatch = useDispatch();

  
  

  const handelSucess = async (e)=>{
    e.preventDefault();
     dispatch(setConfirm(true));
     await bagCart({cart ,confirm : confirmed})
    .then((doc)=>{
        console.log(doc);
        navigate('/');
        
        dispatch(setConfirm(false))
        dispatch(emptyCart())
    })
    .catch((err)=>{
      
        console.log(err);
        
    })
  }
  
  return (
    <form>
      <PaymentElement />
      <button onClick={(e)=>handelSucess(e)}>Submit</button>
      <button onClick={()=>navigate('/')}>Cancel</button>
    </form>
  );
};

export default CheckoutForm;