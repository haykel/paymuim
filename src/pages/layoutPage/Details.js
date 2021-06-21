import React, { useContext } from "react";
import { PageHeader, Card } from "antd";
import "antd/dist/antd.css";
import "../../App.css";
import { DetailsContext } from "../../Context/DetailsContext";
const { Meta } = Card;

const Details = () => {
  const { detailsItem } = useContext(DetailsContext);
console.log(detailsItem.length)
  return (
    <div className="detailsSection">
      <PageHeader className="site-page-header-details" />

      { (detailsItem.length) > 0 ? (
        <div className="detailsContainer">
          {detailsItem.map((item) => (
            <Card
              key={item.key}
              style={{ width: 300 }}
              cover={<img alt="example" src={item.attachements[0].url} />}
            >
              <Meta title="created_at" description={item.created_at} />
              <Meta
                title="counterparty_name"
                description={item.counterparty_name}
              />
              <Meta title="debit" description={item.debit} />
              <Meta title="credit" description={item.credit} />
              <Meta title="amount" description={item.amount} />
              <Meta title="currency" description={item.currency} />
              <Meta title="operation_type" description={item.operation_type} />
            </Card>
          ))}
        </div>
      ) : (
        <div className="detailsContainer">
          <p>click on one or several transactions to see details</p>
        </div>
      )}
    </div>
  );
};

export default Details;
