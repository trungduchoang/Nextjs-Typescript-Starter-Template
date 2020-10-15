// libs
import React from "react";
import Head from "next/head";

const DocumentHead: React.FC<{ title?: string; children?: any }> = ({
  title = "NextJS Application",
  children,
}) => (
  <Head>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="NextJS Application" />
    {/* <meta name="viewport" content="width=device-width,minimum-scale=1" /> */}
    {children}
  </Head>
);

export default DocumentHead;
