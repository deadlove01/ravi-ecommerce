import React from 'react';
import '../../css/cart-dropdown.scss'
import CustomButton from "../custom-buttons/custom-button";
import CartItem from "./cart-item.component";
import {connect} from "react-redux";


const CartDropdown = ({ cartItems}) => (
    <div className={"cart-dropdown"}>
        <div className={"cart-items"} >
            {
                cartItems && cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: { cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);