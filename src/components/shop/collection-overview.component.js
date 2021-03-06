import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "./preview-collection.component";

import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

import "../../css/collection-overview.scss";

const CollectionOverview = ({ collections }) => {
    return (

    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);