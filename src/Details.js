import React from 'react';

import { Image, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const Details = (detailsItem) => {
    detailsItem = "https:\/\/fakeimg.pl\/200x320\/?text=Hello";
    return (
        <div className="detailsSection">
        <PageHeader className="site-page-header-details"/>
        <div className="detailsContainer">       
        <Image
            width={200}
            src={detailsItem}
            />
        </div>
       </div> 
    );
}

export default Details;
