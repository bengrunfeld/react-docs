import Head from "next/head";
import { HomePage } from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Ben Grunfeld</title>
      </Head>

      <PageLayout>
        <HomePage />
      </PageLayout>
    </div>
  );
};

export default Home;
