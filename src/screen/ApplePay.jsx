/**
 * 1. APPLE PAY DOMAIN REGISTERED ON STRIPE
 * 2. WEBSITE ON HTTPS
 * 3. CARDS SETUP ON APPLE PAY WALLET
 */

import React, { useEffect, useState } from 'react'
import StatusMessage, { useMessages } from '../components/StatusMessages';
import { PaymentRequestButtonElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Result } from 'postcss';

const ApplePay = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [messages, addMessage] = useMessages();
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if(!stripe || !elements) return

        const pr = stripe.paymentRequest({
            currency: 'usd',
            country: "US",
            requestPayerEmail: true,
            requestPayerName: true,
            total: {
                label: 'Demo payment',
                amount: 1999,
            }
        })

        pr.canMakePayment().then((result) => {
            if (result) {
                // show some button on the page
                setPaymentRequest(pr)
            }
        })
    }, [stripe, elements, addMessage])

    return (
        <div className='h-screen bg-gray-200'>
            <h1>Apple Pay</h1>
            {paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}}/>}
            <StatusMessage messages={messages} />
        </div>
    )
}

export default ApplePay