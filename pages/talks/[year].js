import Layout from "../../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
const Talk = props => {
  const { year } = props;
  return (
    <Layout>
      <Head>
        <title>{year}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>TedxSanJosedeMayo {year} </h1>
      <p>{props.speakers[0].summary}</p>
    </Layout>
  );
};

Talk.getInitialProps = async ({ query }) => {
  const { year } = query;
  const reqSpeakers = await fetch(`http://localhost:3001/speakers/${year}`);
  const { data: speakers } = await reqSpeakers.json();
  return { speakers, year };
};

export default Talk;
