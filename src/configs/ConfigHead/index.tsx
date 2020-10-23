// libs
import React from "react";
import Head from "next/head";

const ConfigHead = ({
  title = "NextJS Application",
  children,
}: {
  title?: string;
  children?: any;
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

export default ConfigHead;
