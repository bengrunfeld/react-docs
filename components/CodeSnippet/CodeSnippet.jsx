import Prism from "prismjs";
import { useEffect } from "react";

import { CodeBlock } from "./CodeSnippet.styles";

const CodeSnippet = ({ children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="line-numbers">
      <CodeBlock className="lang-javascript">{children}</CodeBlock>
    </pre>
  );
};

export default CodeSnippet;
