
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import VariantsSlider from './components/VariantsSlider';
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
      <VariantsSlider />
      <Quote />
      <PrimaryCases />
      <CTA />
      <Testimonials />
      <Partners />
      <FAQ />
      <SiteFooter />
    </div>
  );
}
