import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import React from "react";
import { dataHero, statSectiondata } from "@/utils/data";
import Script from "next/script";
import WageCodeProblemSection from "@/components/WageCode";
import ContactWorkforce from "@/components/Contact";
import NotionNavbar from "@/components/notion/Navbar";
import NotionHero from "@/components/notion/Hero";
import NotionFooter from "@/components/notion/Footer";
import AiUseCases from "@/components/notion/UseCases";
import NotionIntro from "@/components/notion/Intro"
import BentoCards from "@/components/notion/BentoCards";
export const metadata = {
  title: "Payroll Services Built for Compliance, Precision & Scalability",
  description:
    "Expert-managed payroll services with precision-engineered salary structuring, optimized take-home design, and flawless statutory compliance for PF, ESI, TDS, and more.",
  alternates: {
    canonical: "https://www.yourdomain.com/",
  },
  openGraph: {
    title: "Payroll Services Built for Compliance, Precision & Scalability",
    description:
      "Expert-managed payroll services with precision-engineered salary structuring, optimized take-home design, and flawless statutory compliance.",
    url: "https://www.yourdomain.com/",
    siteName: "Your Brand Name",
    type: "website",
  },
};

const LandingPage = () => {
  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Your Brand Name",
            url: "https://www.yourdomain.com/",
            logo: "https://www.yourdomain.com/logo.png",
            description:
              "Expert-managed payroll services including salary structuring, compliance filings, PF, ESI, TDS management, and fully compliant payroll operations.",
            sameAs: [
              "https://www.facebook.com/yourbrand",
              "https://www.linkedin.com/company/yourbrand",
              "https://www.instagram.com/yourbrand",
            ],
          }),
        }}
      />

      {/* <Hero data={dataHero}/>
      
      
      <SolutionsSection />
      <StatsSection data={statSectiondata}/>
      <ContactWorkforce /> */}
      <div className="font-inter">
        <NotionNavbar />
        <NotionHero data={dataHero} />
        <AiUseCases />
        <NotionIntro />
        <BentoCards />
        <NotionFooter />
      </div>
    </>
  );
};

export default LandingPage;
