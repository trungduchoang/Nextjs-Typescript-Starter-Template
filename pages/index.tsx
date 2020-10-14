// libs
import React from "react";
// components
import DocumentHead from "@/components/DocumentHead";
import Link from "next/link";

export const config = {
  amp: true,
};

const Main = () => (
  <div className="main-wrapper">
    <DocumentHead />
    Content
    <Link href="./hello-pages">
      <a>Im a Link</a>
    </Link>
  </div>
);

export default Main;
