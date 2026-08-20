import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy-load below-the-fold sections — they won't block initial Hero render
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function SectionFallback() {
  return <div className="min-h-[200px]" aria-hidden />;
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Timeline />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}
