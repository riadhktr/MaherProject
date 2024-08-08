import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './checkOut';

const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');
const ConfirmPay = () => {
   
  return (
    <Elements stripe={stripePromise} options={{ mode: 'setup', currency: 'usd' }}>
      <CheckoutForm />
    </Elements>
  )
}

export default ConfirmPay