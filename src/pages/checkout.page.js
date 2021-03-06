import React from "react";

import '../css/checkout.scss'

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {getCartItemsTotalPrice} from "../redux/cart/cart.selectors";
import {getCartItems} from "../redux/cart/cart.selectors";
import CheckoutItem from "../components/checkout/checkout-item.component";
import StripeButton from "../stripe/stripe-button";

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${totalPrice}</div>

        <div className='test-warning'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </div>
        <StripeButton price={totalPrice} />
    </div>

)


const mapStateToProps = createStructuredSelector({
  cartItems: getCartItems,
    totalPrice: getCartItemsTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);