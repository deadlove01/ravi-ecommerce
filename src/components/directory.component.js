import React from 'react';

import '../css/directory.styles.scss'
import MenuItem from "./menu-item.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../redux/directory/directory.selector";


const Directory = ({sections}) => {


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

