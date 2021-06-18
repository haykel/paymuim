import React from "react";
import ReactJson from 'react-json-view';

import data from "../../transactions.json";

const JsonView = () => {
  return (
    <ReactJson src={data} />
  );
};

export default JsonView;