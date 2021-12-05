import React, {useEffect, useState} from 'react';

import '../css/directory.styles.scss'
import MenuItem from "./menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../redux/directory/directory.selector";
import {useParams} from "react-router-dom";


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
                sections && sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </div>
    )


}

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

