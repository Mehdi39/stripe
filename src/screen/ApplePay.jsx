import React, {useEffect} from 'react'
import StatusMessage, { useMessages } from '../components/StatusMessages';
import { useStripe, useElements } from '@stripe/react-stripe-js'

const ApplePay = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [messages, addMessage] = useMessages();

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
    }, [stripe, elements, addMessage])

    return (
        <div className='h-screen bg-gray-200'>
            <h1>Apple Pay</h1>

            <StatusMessage messages={messages} />
        </div>
    )
}

export default ApplePay