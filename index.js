import React from "react";
import ReactDom from "react-dom";
import Component from "./components/Component";

export default props => <h1>oi</h1>;
const logger = require("./logger"); // commonJS
import Pessoa from "./Pessoa"; // es2015
logger.info("oi bebe");

ReactDom.render(<Component texto="jae" />, document.getElementById("app"));
