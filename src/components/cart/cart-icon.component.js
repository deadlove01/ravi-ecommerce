import React from 'react';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import '../../css/cart-icon.scss'
import {connect} from "react-redux";
import toggleCartHidden from "../../redux/cart/cart.action";
import {getCartItemsTotal} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className={"cart-icon"} onClick={toggleCartHidden}>
        <ShoppingIcon className={"shopping-icon"} />
        <span className={"item-count"}>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: getCartItemsTotal
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);