import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
// import eventData from "../../event-data.js";
const Talk = () => {
  const router = useRouter();
  const { year } = router.query;
  // console.log(eventData[year]);

  return (
    <Layout>
      <Head>
        <title>{year}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <h1>{eventData[year]}</h1> */}
      </Head>
      <h1>TedxSanJosedeMayo {year} </h1>
      <p>Content</p>
    </Layout>
  );
};

export default Talk;
