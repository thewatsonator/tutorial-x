import React from "react";
import ReactDOM from "react-dom";
// https://rexxars.github.io/react-markdown/
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

/**
 * react-markdown with react-syntax-highlighter renderer for code element
 */
export default ({ source, ...rest }) => {
  return (
    // https://rexxars.github.io/react-markdown/
    <ReactMarkdown source={source} renderers={{ code: CodeBlock }} {...rest} />
  );
};
