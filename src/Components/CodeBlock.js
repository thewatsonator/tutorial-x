import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// https://github.com/conorhastings/react-syntax-highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    // https://github.com/conorhastings/react-syntax-highlighter
    return (
      <SyntaxHighlighter language={language} style={xonokai}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
