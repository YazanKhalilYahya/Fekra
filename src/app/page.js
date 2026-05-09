"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Process from "@/components/home/Process";
import WhyUs from "@/components/home/WhyUs";
import ContactCTA from "@/components/home/ContactCTA";
import { siteContent } from "@/data/siteContent";

export default function Home() {
  const [locale, setLocale] = useState("ar");

  const content = useMemo(() => siteContent[locale], [locale]);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <main
      id="main-content"
      dir={dir}
      className={`page page--${locale}`}
    >
      <Navbar
        locale={locale}
        setLocale={setLocale}
        content={content.nav}
      />
      <Hero
        content={content.hero}
        locale={locale}
      />
      <Services
        content={content.services}
        locale={locale}
      />
      <Work
        content={content.work}
        locale={locale}
      />
      <Process
        content={content.process}
        locale={locale}
      />
      <WhyUs
        content={content.whyUs}
        locale={locale}
      />
      <ContactCTA
        content={content.contact}
        locale={locale}
      />
      <Footer
        content={content.footer}
        locale={locale}
      />
    </main>
  );
}
