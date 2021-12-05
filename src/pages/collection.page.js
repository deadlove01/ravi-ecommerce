import React, {useEffect, useState} from "react";

import '../css/collection.scss'
import CollectionItem from "../components/shop/collection-item.component";
import {selectShopSections} from "../redux/shop/shop.selector";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {createStructuredSelector} from "reselect";

const CollectionPage = ({ collection }) => {

    const {collectionId} = useParams();
    const [data, setData] = useState(undefined);

    useEffect(() => {
        setData(collection[collectionId])
    }, [collectionId]);

    if (!data)
        return (<div>Invalid collection</div>);
    const { title, items } = data;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collection: selectShopSections
});

export default connect(mapStateToProps)(CollectionPage);