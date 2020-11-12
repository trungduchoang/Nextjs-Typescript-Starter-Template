// libs
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// others
import { LANGUAGES } from "@/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={LANGUAGES.JA_JP}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
