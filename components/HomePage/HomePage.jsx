import Prism from "prismjs";
import { useEffect } from "react";

import { Title, SubTitle, Text } from "./HomePage.styles";
import { MainContent } from "../";

const HomePage = () => {
  const code = `return (
    <MainContent>
      <Title>SHORTENED REACT DOCS</Title>
      <SubTitle>An abdridged version</SubTitle>
      <Text>Some text goes here...</Text>
      <div>
      </div>
    </MainContent>
  );`;

  // const html = Prism.highlight(code, Prism.languages.javascript, "javascript");

  return (
    <MainContent>
      <Title>SHORTENED REACT DOCS</Title>
      <SubTitle>An abdridged version</SubTitle>
      <Text>Some text goes here...</Text>
      <pre className="language-javascript line-numbers">
        <code>{code}</code>
      </pre>
    </MainContent>
  );
};

// <div dangerouslySetInnerHTML={{ __html: html }} />;

export default HomePage;
