// libs
import React from "react";
// components
import DocumentHead from "@/components/DocumentHead";
import Link from "next/link";
import { isLocalURL } from "next/dist/next-server/lib/router/router";

export const config = {
  amp: true,
};

const Main = () => {
  console.log(111);

  return (
    <div className="main-wrapper">
      <DocumentHead />
      Content
      <Link href="./hello-pages">
        <a>Im a Link</a>
      </Link>
    </div>
  );
};

export default Main;
