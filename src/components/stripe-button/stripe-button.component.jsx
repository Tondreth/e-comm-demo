import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const onToken = token =>{
    console.log(token)
    alert('Payment success')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IfmbSFrVrGypAm82acI2utWgfpw45erQ6uF58w6kqTBPnRT7wJU3HtPdMWzWGyuWsFJSEra9pQrLTeU1Qnlo5A500RqAUzzyO'
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