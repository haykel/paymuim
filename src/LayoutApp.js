import React from 'react';


import { Layout, Menu, PageHeader, Button, Divider  } from 'antd';
import DataList from "./DataList";
import 'antd/dist/antd.css';
import './App.css';
import  Details  from "./Details";
const { Header, Content, Sider } = Layout; 

const LayoutApp = () => {
  
    return (
      <div className="container">
        <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" >FINPAL</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
           
            <Menu.Item key="2">
              Overview
            </Menu.Item>
            <Menu.Item key="3">
              Transactions (3)
            </Menu.Item>
               
              <Divider dashed />
    
            <Menu.Item key="4">
              Transfers (2)
            </Menu.Item>
            <Menu.Item key="5">
             Invoices (1)
            </Menu.Item>
    
              <Divider dashed />
    
            <Menu.Item key="6">
              Manage cards
            </Menu.Item>
            <Menu.Item key="7">
              Manage accounts
            </Menu.Item>
    
              <Divider dashed />
    
            <Menu.Item key="8">
              Team
            </Menu.Item>
            <Menu.Item key="9">
              Integrations
            </Menu.Item>
            <Menu.Item key="10">
              Settings
            </Menu.Item>
            <Menu.Item key="11">
              <Button type="primary" ghost>UPGRADE ACCOUNT</Button>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <PageHeader className="site-page-header-layout"/>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
             
             <DataList />
            </div>
          </Content>
          
        </Layout>
      </Layout>
      <Details />
      </div>
    );
  
}

export default LayoutApp;
