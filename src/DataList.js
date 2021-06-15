import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { PaperClipOutlined } from "@ant-design/icons";
import Table from 'antd/lib/table';
import 'antd/dist/antd.css';
import './App.css';
import data from './transactions.json'
const DataList = () => {
    const [dataTrans, setDataTrans] = useState([]);
      
    useEffect (()=>{   
      setDataTrans(data[0].transactions);  
    })
    
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

    return (
        <Table columns={columns} dataSource={dataTrans} />
    );
  
}

export default DataList;
