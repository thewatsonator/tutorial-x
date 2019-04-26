import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";
import { firstSection } from "../routes";

export default ({ title = "Rest Spread", parent = firstSection }) => (
  <Page
    title={title}
    parent={parent}
    reactHandbook="javascript-rest-spread/index.md"
  />
);
