import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import React from "react";
import {dataHero, statSectiondata}  from "@/utils/data"
import Script from "next/script";
import WageCodeProblemSection from "@/components/WageCode";
import ContactWorkforce from "@/components/Contact";
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
            "name": "Your Brand Name",
            "url": "https://www.yourdomain.com/",
            "logo": "https://www.yourdomain.com/logo.png",
            "description":
              "Expert-managed payroll services including salary structuring, compliance filings, PF, ESI, TDS management, and fully compliant payroll operations.",
            "sameAs": [
              "https://www.facebook.com/yourbrand",
              "https://www.linkedin.com/company/yourbrand",
              "https://www.instagram.com/yourbrand",
            ],
          }),
        }}
      />

      <Hero data={dataHero}/>
      
      {/* <Features /> */}
      <SolutionsSection />
      <StatsSection data={statSectiondata}/>
      <ContactWorkforce />
    </>
  );
};

export default LandingPage;
