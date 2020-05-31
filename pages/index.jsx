import Head from "next/head";
import { PageLayout, Page, Title, SubTitle, Text, Anchor } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ben Grunfeld</title>
      </Head>

      <PageLayout>
        <Page>
          <Title>INTRODUCTION</Title>
          <SubTitle>
            So why are you re-publishing a modified version of the React Docs?
          </SubTitle>
          <Text>
            Hi, I'm Ben and I'm the author of this site. Now, the sane among you
            may quickly ask a perfectly valid question: "Why oh why would you
            modify and re-publish the React Docs? The ones we've currently got
            really are good enough".
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
          <SubTitle>
            You've copied and pasted a lot of the content from the official docs
          </SubTitle>
          <Text>
            Under the{" "}
            <Anchor href="https://github.com/reactjs/reactjs.org/blob/master/LICENSE-DOCS.md">
              Public License
            </Anchor>{" "}
            laid out by Facebook, any person is allowed to use part or all of
            the documentation, so long as they fulfill several conditions:
          </Text>
          <Text>
            That they identify the creators of the licensed material - Facebook.
          </Text>
          <Text>
            That they include a link to the licensed material -{" "}
            <Anchor href="https://reactjs.org/docs/getting-started.html">
              https://reactjs.org/docs/getting-started.html
            </Anchor>
          </Text>
          <Text>
            That they indicate if they modified the Licensed Material and retain
            an indication of any previous modifications - I have modified the
            original material.
          </Text>
          <Text>
            Now that I've done all that, the following part of the license
            applies:
          </Text>
          <Text>
            "1. Subject to the terms and conditions of this Public License, the
            Licensor hereby grants You a worldwide, royalty-free,
            non-sublicensable, non-exclusive, irrevocable license to exercise
            the Licensed Rights in the Licensed Material to: a. reproduce and
            Share the Licensed Material, in whole or in part; and b. produce,
            reproduce, and Share Adapted Material."
          </Text>
        </Page>
      </PageLayout>
    </div>
  );
};

export default Home;
