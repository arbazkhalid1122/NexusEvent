import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Variants from './components/Variants';
import Quote from './components/Quote';
import PrimaryCases from './components/PrimaryCases';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import SiteFooter from './components/SiteFooter';

export default function Page() {
  return (
    <div className="main-wrapper">
      <Navbar />
      <Hero />
      <Benefits />
      <Variants />
      <Quote />
      <PrimaryCases />
      <CTA />
      <Testimonials />
      <Partners />
      <FAQ />
      <SiteFooter />
      {/* TODO: convert remaining sections to components step by step */}
    </div>
  );
}
