import React from 'react';
import '../../css/cart-dropdown.scss'
import CustomButton from "../custom-buttons/custom-button";
import CartItem from "./cart-item.component";
import {connect} from "react-redux";
import {getCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import toggleCartHidden from "../../redux/cart/cart.action";
import { useNavigate } from 'react-router-dom'

const CartDropdown = ({ cartItems, history, dispatch}) => {

    const navigate = useNavigate()

    return (
    <div className={"cart-dropdown"}>
        <div className={"cart-items"}>
            {
                cartItems.length ? (cartItems.map(item => (
                    <CartItem key={item.id} item={item}/>
                ))) : (
                    <span className='empty-message'>Your cart is empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden())
            navigate("/shop/checkout")
        }}>GO TO CHECKOUT</CustomButton>
    </div>)
}

const mapStateToProps = createStructuredSelector({
    cartItems: getCartItems
});

export default connect(mapStateToProps)(CartDropdown);