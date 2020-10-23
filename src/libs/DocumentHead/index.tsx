// libs
import React from "@/components/Home/components/SectionTitle/node_modules/@/components/CommonHeader/mains/Logo/node_modules/@/components/CommonFooter/components/BranchInfo/node_modules/react";
import Head from "next/head";

const DocumentHead = ({
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

export default DocumentHead;
