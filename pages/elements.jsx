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
          <Title>ELEMENTS</Title>
          <SubTitle>JSX is an Expression Too</SubTitle>
          <Text>An element describes what you want to see on the screen</Text>

          <CodeSnippet>{"const element = <h1>Hello, world</h1>;"}</CodeSnippet>

          <Text>
            Unlike browser DOM elements, React elements are plain objects, and
            are cheap to create. React DOM takes care of updating the DOM to
            match the React elements.
          </Text>
          <Text>
            Don't confuse Elements with Components. Components are made up of
            Elements and sometimes of other Components too.
          </Text>
          <SubTitle>React Elements Are Immutable</SubTitle>
          <Text>
            Once you create an element, you can’t change its children or
            attributes. The way to make changes in a React application is by
            updating state.
          </Text>
        </Page>
      </PageLayout>
    </div>
  );
};

export default Home;
