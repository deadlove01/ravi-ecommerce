import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {

    const totalPrice = price * 100;
    const publishableKey = "pk_test_51K3OmvCKc0beerv12UhxHli4ayYr3eiNSjhJ9upNnKy7IO8n3sf7F5UKoJCavEIpLQBhFyjkPdoQACSrAcTdCUaa008LCiASL5"

    const onToken = token =>{
        console.log(token);
        alert('Payment Succesful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ravi Remote Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={totalPrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeButton;