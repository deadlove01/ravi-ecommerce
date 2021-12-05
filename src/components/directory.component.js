import React, {useEffect, useState} from 'react';

import '../css/directory.styles.scss'
import MenuItem from "./menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../redux/directory/directory.selector";
import {Route, useParams} from "react-router-dom";
import ShopPage from "../pages/shope.page";
import CollectionOverview from "./shop/collection-overview.component";
import CollectionPage from "../pages/collection.page";


const Directory = ({sections}) => {
    const { collectionId} = useParams()

    const [collection, setCollection] = useState(undefined);


    useEffect(() => {
        // const data = sections.find(x => x.id === collectionId);
        setCollection(sections)
    }, [collectionId]);

    if(!collection)
        return (<div>Invalid category</div>)

    return (
        <div className='directory-menu'>
            {
                sections && sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
        </div>
    )


}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

