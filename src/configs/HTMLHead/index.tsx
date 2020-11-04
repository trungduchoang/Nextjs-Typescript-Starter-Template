// libs
import React from "react";
import Head from "next/head";

const HTMLHead = ({ title = "NextJS Application" }: { title?: string }) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="NextJS Application" />
  </Head>
);

export default HTMLHead;
