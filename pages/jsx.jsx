import Head from "next/head";
import { PageLayout, Page, Title, SubTitle, Text } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ben Grunfeld</title>
      </Head>

      <PageLayout>
        <Page>
          <Title>JSX</Title>
          <SubTitle>JSX is an Expression Too</SubTitle>
          <Text>
            After compilation, JSX expressions become regular JavaScript
            function calls and evaluate to JavaScript objects.
          </Text>
          <Text>
            This means that you can use JSX inside of if statements and for
            loops, assign it to variables, accept it as arguments, and return it
            from functions:
          </Text>
          <SubTitle>JSX Prevents Injection Attacks</SubTitle>
          <Text>
            It is safe to embed user input in JSX. By default, React DOM escapes
            any values embedded in JSX before rendering them. Thus it ensures
            that you can never inject anything that’s not explicitly written in
            your application.
          </Text>
          <Text>
            Everything is converted to a string before being rendered. This
            helps prevent XSS (cross-site-scripting) attacks.
          </Text>

          <SubTitle>JSX Represents Objects</SubTitle>
          <Text>Babel compiles JSX down to React.createElement() calls.</Text>
        </Page>
      </PageLayout>
    </div>
  );
};

export default Home;
