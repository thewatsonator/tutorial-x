import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

export default ({ source, ...rest }) => {
  return (
    <ReactMarkdown source={source} renderers={{ code: CodeBlock }} {...rest} />
  );
};
