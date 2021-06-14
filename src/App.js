import React, { Component } from 'react';

import { PageHeader } from 'antd';
import LayoutApp from "./LayoutApp";
import 'antd/dist/antd.css';
import './App.css';




class App extends Component {
  render() {
    return (
      <>
       <PageHeader className="site-page-header"/>
      <LayoutApp />
  </>
    );
  }
}

export default App;
