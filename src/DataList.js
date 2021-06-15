import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { PaperClipOutlined } from "@ant-design/icons";
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';
import './App.css';
import data from './transactions.json';


const columns = [
  {
    title: 'DD-MM-YYYY',
    dataIndex: 'created_at',
    key: 'created_at',
    sorter: {
      compare: (a, b) => (new Date(a.created_at).valueOf()) - (new Date(b.created_at).valueOf()),
      multiple: 1,
    },
    render: text => <Moment format="DD-MM-YYYY">{text}</Moment>,
  },
  {
    title: 'Counterparty Name',
    dataIndex: 'counterparty_name',
    key: 'counterparty_name',
  },
  {
    title: 'Payment type',
    dataIndex: 'operation_type',
    key: 'operation_type',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
      title: <PaperClipOutlined />,
      dataIndex: 'currency',
      key: 'currency',
      render: text => <a><PaperClipOutlined /> 1</a>,
    },
    
];

const dataTrans = data[0].transactions;

class DataList extends React.Component {
state = {
  selectedRowKeys: [], 
  loading: false,
};

start = () => {
  this.setState({ loading: true });
  setTimeout(() => {
    this.setState({
      selectedRowKeys: [],
      loading: false,
    });
  }, 1000);
};

onSelectChange = selectedRowKeys => {
  this.setState({ selectedRowKeys });
};

render() {
  const { loading, selectedRowKeys } = this.state;
  const rowSelection = {
    selectedRowKeys,
    onChange: this.onSelectChange,
  };
  
  return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataTrans} />
  );
}
}

export default DataList;
