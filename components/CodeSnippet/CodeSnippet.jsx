import { CodeBlock } from "./CodeSnippet.styles";

const CodeSnippet = ({ children }) => {
  return (
    <pre className="line-numbers">
      <CodeBlock className="lang-javascript">{children}</CodeBlock>
    </pre>
  );
};

export default CodeSnippet;
