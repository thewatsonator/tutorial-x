import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";
import { firstSection } from "../routes";

const content = `
## Some page data
`;

export default ({ title = "Variables", parent = firstSection }) => (
  <Page
    title={title}
    parent={parent}
    reactHandbook="javascript-variables/index.md"
  />
);
