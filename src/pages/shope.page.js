import React, {useState} from 'react'
import SHOP_DATA from "../data/shop_data";
import CollectionPreview from "../components/shop/preview-collection.component";

const ShopPage = () =>{

    const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <div className={"shop-page"}>
            {
                collections.map(({id, ...otherProps}) =>(
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>
    );
}


export default ShopPage;