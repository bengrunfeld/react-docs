import { CodeBlock } from "./CodeSnippet.styles";

const CodeSnippet = ({ children }) => {
  return (
    <pre>
      <CodeBlock className="lang-javascript">{children}</CodeBlock>
    </pre>
  );
};

export default CodeSnippet;
