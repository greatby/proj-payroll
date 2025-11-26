import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import React from "react";
import { dataHeroUae, statSectiondataUae } from "@/utils/data";
import Script from "next/script";
import ContactWorkforce from "@/components/Contact";
import WageCodeSectionUae from "@/components/SolutionSectionUae";
export const metadata = {
  title: "UAE Payroll Services – WPS, EoS, Compliance & Multi-Zone Payroll",
  description:
    "Specialized UAE payroll services including WPS automation, End-of-Service (EoS) management, multi-currency payroll, and compliance across mainland and free zones like DMCC, DIFC, ADGM.",
  alternates: {
    canonical: "https://www.yourdomain.com/uae",
  },
  openGraph: {
    title: "UAE Payroll Services – WPS, EoS, Compliance & Multi-Zone Payroll",
    description:
      "Accurate UAE payroll management with WPS automation, EoS calculation, and multi-zone compliance support.",
    url: "https://www.yourdomain.com/uae",
    siteName: "Your Brand Name",
    type: "website",
  },
};

const LandingPage = () => {
  return (
    <>
      <Script
        id="uae-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "UAE Payroll Services",
            serviceType: "Payroll Management",
            provider: {
              "@type": "Organization",
              name: "Your Brand Name",
              url: "https://www.yourdomain.com/",
            },
            url: "https://www.yourdomain.com/uae",
            description:
              "UAE-compliant payroll services with automated WPS generation, End-of-Service (EoS) benefits calculation, and multi-currency support for mainland and free zones.",
            areaServed: {
              "@type": "Country",
              name: "United Arab Emirates",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: "0",
              priceCurrency: "AED",
              description:
                "Includes WPS automation, multi-zone payroll, EoS calculation, and compliance filings.",
            },
          }),
        }}
      />

      <Hero data={dataHeroUae} />
      {/* <Features /> */}
      <WageCodeSectionUae />
      <StatsSection data={statSectiondataUae} />
      <ContactWorkforce />
    </>
  );
};

export default LandingPage;
