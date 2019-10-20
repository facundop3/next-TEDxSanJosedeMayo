import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
const Error = ({ statusCode }) => {
  return (
    <Layout>
      <h1>
        {`Ooooops, ${statusCode} error :( `}
        <br />
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
      </h1>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
