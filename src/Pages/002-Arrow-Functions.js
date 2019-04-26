import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";
import { firstSection } from "../routes";

export default ({ title = "Arrow Functions", parent = firstSection }) => (
  <Page
    title={title}
    parent={parent}
    reactHandbook="javascript-arrow-functions/index.md"
  />
);
