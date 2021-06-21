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

// columns table
const columns = [
  {
    title: "DD-MM-YYYY",
    dataIndex: "created_at",

    render: (text) => (
      <div>
        {" "}
        <Moment format="DD-MM-YYYY">{text}</Moment>
      </div>
    ),
  },
  {
    title: "Counterparty Name",
    dataIndex: "counterparty_name",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Payment type",
    dataIndex: "operation_type",
  },
  {
    title: "Amount",
    dataIndex: "amount",
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

const DataList = () => {
  const { setDetailsItem } = useContext(DetailsContext);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setDetailsItem(selectedRows);
    },
  };
  return (
    <>
      <Table
        size="small"
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {}, // click row
          };
        }}
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataTrans}
      />
    </>
  );
};

export default DataList;
