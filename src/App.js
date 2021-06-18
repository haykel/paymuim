import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import JsonView from "./pages/jsonView/JsonView";
import LayoutPage from "./pages/layoutPage/LayoutPage";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/transactions" component={JsonView} />
            <Route path="/" component={LayoutPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
