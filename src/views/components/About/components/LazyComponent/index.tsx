// libs
import React from "react";
// types
import { ANY_OBJECT } from "@/types/common";

const LazyComponent = ({ pageProps }: { pageProps: ANY_OBJECT }) => (
  <div>
    <p>Redux:</p>
    <pre>
      <code>{JSON.stringify(pageProps, null, 2)}</code>
    </pre>
  </div>
);

export default LazyComponent;
