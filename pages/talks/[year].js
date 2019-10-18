import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
const Talk = props => {
  const router = useRouter();
  const { year } = router.query;
  return (
    <Layout>
      <Head>
        <title>{year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TedxSanJosedeMayo {year} </h1>
      <p>{props.speakers[year][0].summary}</p>
    </Layout>
  );
};

Talk.getInitialProps = async () => {
  const reqSpeakers = await fetch("http://localhost:3001/speakers");
  const speakers = await reqSpeakers.json();
  return { speakers };
};

export default Talk;
