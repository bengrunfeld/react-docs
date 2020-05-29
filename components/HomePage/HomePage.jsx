import Prism from "prismjs";
import { useEffect } from "react";

import { Title, SubTitle, Text } from "./HomePage.styles";
import { MainContent, CodeSnippet } from "../";

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

  return (
    <MainContent>
      <Title>SHORTENED REACT DOCS</Title>
      <SubTitle>An abdridged version</SubTitle>
      <Text>Some text goes here...</Text>
      <CodeSnippet>{code}</CodeSnippet>
    </MainContent>
  );
};

export default HomePage;
