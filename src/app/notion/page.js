import NotionFooter from "@/components/notion/Footer";
import NotionHero from "@/components/notion/Hero";
import NotionIntro from "@/components/notion/Intro";
import NotionNavbar from "@/components/notion/Navbar";
import AiUseCases from "@/components/notion/UseCases";
import { dataHero } from "@/utils/data";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <NotionNavbar />
      <NotionHero data={dataHero}/>
      <AiUseCases />
      <NotionIntro />
      <NotionFooter />
    </React.Fragment>
  );
};

export default page;
