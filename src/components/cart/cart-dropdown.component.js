import React from 'react';
import '../../css/cart-dropdown.scss'
import CustomButton from "../custom-buttons/custom-button";
import CartItem from "./cart-item.component";
import {connect} from "react-redux";
import {getCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

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

const mapStateToProps = createStructuredSelector({
    cartItems: getCartItems
});

export default connect(mapStateToProps)(CartDropdown);