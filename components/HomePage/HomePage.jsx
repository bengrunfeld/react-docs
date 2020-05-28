import { Title, SubTitle, Text } from "./HomePage.styles";
import { MainContent } from "../";

const HomePage = () => {
  return (
    <MainContent>
      <Title>SHORTENED REACT DOCS</Title>
      <SubTitle>An abdridged version</SubTitle>
      <Text>Some text goes here...</Text>
      <pre>
        <code>Some code goes here...</code>
      </pre>
    </MainContent>
  );
};

export default HomePage;
