import Prism from "prismjs";
import { useEffect } from "react";

import { MainContent, CodeSnippet, Title, SubTitle, Text } from "../";

const HomePage = () => {
  const code = `const a = msg => console.log(msg);

  function prism() {
    console.log('hello')
  }
  `;
  return (
    <MainContent>
      <Title>SHORTENED REACT DOCS</Title>
      <SubTitle>An abdridged version</SubTitle>
      <Text>Some text goes here...</Text>
    </MainContent>
  );
};

export default HomePage;
