import React from "react";
import ReactDOM from "react-dom";
import Page from "./Page";

export default ({ title = "How to use" }) => (
  <Page title={title} otherMarkdown={["content/tutorial-meta.md"]} />
);
