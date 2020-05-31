import Head from "next/head";
import {
  PageLayout,
  Page,
  Title,
  SubTitle,
  Text,
  CodeSnippet,
} from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ben Grunfeld</title>
      </Head>

      <PageLayout>
        <Page>
          <Title>COMPONENTS</Title>
          <Text>
            Always start component names with a capital letter. React treats
            components starting with lowercase letters as DOM tags.
          </Text>
          <Text>
            Components let you split the UI into independent, reusable pieces,
            and think about each piece in isolation.
          </Text>
          <Text>
            Components accept arbitrary inputs (called “props”) and return React
            elements describing what should appear on the screen.
          </Text>
        </Page>
      </PageLayout>
    </div>
  );
};

export default Home;
