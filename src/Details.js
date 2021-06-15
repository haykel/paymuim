import React from 'react';

import { Image } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const Details = (detailsItem) => {

    detailsItem = "https:\/\/fakeimg.pl\/200x320\/?text=Hello";
    return (
        <div className="detailsContainer">
        <Image
            width={200}
            src={detailsItem}
            />
        </div>
        
    );
  
}

export default Details;
