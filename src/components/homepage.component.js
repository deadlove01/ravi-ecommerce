import React from 'react';

import '../css/homepage.styles.scss';
import Directory from "./directory.component";

const HomePage = ({sections}) =>(
    <div className='homepage'>
        <Directory />
    </div>
)

export default HomePage;