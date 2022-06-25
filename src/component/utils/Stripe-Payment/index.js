import React from 'react';
import ReactDOM from 'react-dom/client';
 
import PaymentGatewayStripe from './PaymentGatewayStripe';
 
/** Guide
 * Client:
 * https://www.cluemediator.com/integrate-stripe-payment-gateway-in-react
 * Server:
 * https://www.cluemediator.com/confirm-a-stripe-paymentintent-using-node-js
 */
//Payment gatway intergartion guide website url: https://www.cluemediator.com/integrate-stripe-payment-gateway-in-react

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaymentGatewayStripe />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
