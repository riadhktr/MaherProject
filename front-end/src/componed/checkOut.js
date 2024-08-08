import {PaymentElement} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate =useNavigate();
  
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
      <button onClick={()=>navigate('/')}>Cancel</button>
    </form>
  );
};

export default CheckoutForm;