import React, {useState} from 'react'
import CollectionPreview from "../components/shop/preview-collection.component";

import {createStructuredSelector} from "reselect";
import {selectShopSections} from "../redux/shop/shop.selector";
import {connect} from "react-redux";

const ShopPage = ({sections}) =>{

    return (
        <div className={"shop-page"}>
            {
                sections.map(({id, ...otherProps}) =>(
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectShopSections
})

export default connect(mapStateToProps) (ShopPage);