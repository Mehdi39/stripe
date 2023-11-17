import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import getStripe from './utils/stripe.jsx';

const stripePromise = getStripe();

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <Elements stripe={stripePromise} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Elements>
  </React.StrictMode>,
)
