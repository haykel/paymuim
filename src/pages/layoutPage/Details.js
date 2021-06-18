import React, {useContext} from "react";

import { Image, PageHeader } from "antd";
import "antd/dist/antd.css";
import "../../App.css";
import { DetailsContext } from "../../Context/DetailsContext";

const Details = () => {
  const { detailsItem } = useContext(DetailsContext); 
  const ddetailsItem = "https://fakeimg.pl/200x320/?text="+`${detailsItem}`;
  console.log(detailsItem)
  return (
    <div className="detailsSection">
      <PageHeader className="site-page-header-details" />
      <div className="detailsContainer">
        <Image width={200} src={ddetailsItem} />
      </div>
    </div>
  );
};

export default Details;
