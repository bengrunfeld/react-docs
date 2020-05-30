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
          <Title>INTRODUCTION</Title>
          <SubTitle>So why are you rewriting the React Docs?</SubTitle>
          <Text>
            Hi, I'm Ben and I'm the author of this site. Now, the sane among you
            may quickly ask a perfectly valid question: "Why oh why would you
            rewrite the React Docs. The ones we've currently got really are good
            enough".
          </Text>
          <Text>
            Agreed. The current React Docs are very informative, but they are
            sooo soooo soooooooo long winded!
          </Text>
          <Text>
            It's practically impossible to just get to the information that you
            want. Even if you click on a menu item, you're taken to a huge page
            where you have to sift through paragraph after paragraph until you
            get to what you need. What happened to being concise?
          </Text>
          <Text>
            So yeah, that's the general idea of what I'm going for here. Concise
            and to the point. Let me know how I do. =)
          </Text>
        </Page>
      </PageLayout>
    </div>
  );
};

export default Home;
