import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IfmbSFrVrGypAm82acI2utWgfpw45erQ6uF58w6kqTBPnRT7wJU3HtPdMWzWGyuWsFJSEra9pQrLTeU1Qnlo5A500RqAUzzyO'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment success! :)')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('Payment error! :(')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-comm Demo'
            billingAddress
            shippingAddress
            description={`Total price to pay $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton