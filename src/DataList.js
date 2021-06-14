import React, { useState, useEffect } from 'react';

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
          render: text => <a>{text}</a>,
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
      ];

  
    return (
        <Table columns={columns} dataSource={dataTrans} />
    );
  
}

export default DataList;




