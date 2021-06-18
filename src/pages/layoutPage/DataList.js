import React, { useState, useEffect, useContext } from "react";
import Moment from "react-moment";
import {
  PaperClipOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Table from "antd/lib/table";
import "antd/dist/antd.css";
import "../../App.css";
import data from "../../transactions.json";
import { DetailsContext } from "../../Context/DetailsContext";

// data from json
const dataTrans = data[0].transactions;

const DataList = () => {
  const { setDetailsItem } = useContext(DetailsContext);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
 
  // columns table
  const columns = [
    {
      title: "DD-MM-YYYY",
      dataIndex: "created_at",
      key: "created_at",
      sorter: {
        compare: (a, b) =>
          new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf(),
        multiple: 1,
      },
      render: (text) =><div> <Moment format="DD-MM-YYYY">{text}</Moment></div>,
    },
    {
      title: "Counterparty Name",
      dataIndex: "counterparty_name",
      key: "counterparty_name",
      render: (text) => <div onClick={() => {setDetailsItem(text)}}>{text}</div>
    },
    {
      title: "Payment type",
      dataIndex: "operation_type",
      key: "operation_type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => (
        <>
          {Number(text) < 0 ? (
            <>
              {text}
              <CaretDownOutlined className="decrise" />
            </>
          ) : (
            <>
              +{text}
              <CaretUpOutlined className="incrise" />
            </>
          )}
        </>
      ),
    },
    {
      title: <PaperClipOutlined />,
      dataIndex: "attachements",
      key: "attachements",
      render: (text) => (
        console.log(text[0].url),
        (
          <a target="_blank" href={text[0].url}>
            <PaperClipOutlined /> 1
          </a>
        )
      ),
    },
  ];

  const start = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys({ selectedRowKeys });
  };

  const rowSelection = { setSelectedRowKeys, onChange: onSelectChange };
  
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataTrans}
    />
  );
};

export default DataList;
