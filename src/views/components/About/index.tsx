// libs
import React from "react";
// components
import AboutBanner from "./mains/AboutBanner";
import CompanyImages from "./mains/CompanyImages";
import CompanyInfo from "./mains/CompanyInfo";
import CoreValue from "./mains/CoreValue";
import WhatWeHave from "./mains/WhatWeHave";

const AboutLayout = () => (
  <>
    <AboutBanner />
    <CompanyInfo />
    <WhatWeHave />
    <CoreValue />
    <CompanyImages />
  </>
);

export default AboutLayout;
