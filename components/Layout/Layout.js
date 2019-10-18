import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>TEDxSJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {props.children}
      <Footer />
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        div {
          background-color: #fafafa;
        }
      `}</style>
    </div>
  );
};

export default Layout;
