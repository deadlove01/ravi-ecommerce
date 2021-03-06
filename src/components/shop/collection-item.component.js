import React from 'react'

import '../../css/collection-item.styles.scss'
import CustomButton from "../custom-buttons/custom-button";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem}) => {
    const {id, name, price, imageUrl} = item;
    return (
    <div className={"collection-item"}>
        <div className={"image"}
             style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className={"collection-footer"}>
            <span className={"name"}>{name}</span>
            <span className={"price"}>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted={true}>ADD TO CART</CustomButton>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);