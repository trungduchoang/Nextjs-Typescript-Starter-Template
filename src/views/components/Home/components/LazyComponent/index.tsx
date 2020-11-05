// libs
import React from "react";
// types
import { ANY_OBJECT } from "@/types/common";

const LazyComponent = ({ pageData }: { pageData: ANY_OBJECT }) => (
  <div>
    <p>Redux:</p>
    <pre>
      <code>{JSON.stringify(pageData, null, 2)}</code>
    </pre>
  </div>
);

export default LazyComponent;
