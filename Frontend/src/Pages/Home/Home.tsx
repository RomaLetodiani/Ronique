import About from "./Views/About/About";
import CategoryDiv from "./Views/CategoryDiv/CategoryDiv";
import Contact from "./Views/Contact/Contact";
import FAQ from "./Views/FAQ/FAQ";
import Hero from "./Views/Hero/Hero";
import Newsletter from "./Views/Newsletter/Newsletter";
import Portfolio from "./Views/Portfolio/Portfolio";
import Services from "./Views/Services/Services";
import Testimonials from "./Views/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <CategoryDiv />
      {/* TODO: Build these Sections */}
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
