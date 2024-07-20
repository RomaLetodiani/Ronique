import About from "./Views/About/About";
import CategoryDiv from "./Views/CategoryDiv/CategoryDiv";
import Contact from "./Views/Contact/Contact";
import FAQView from "./Views/FAQ/FAQ";
import Hero from "./Views/Hero/Hero";
import Mentors from "./Views/Mentors/Mentors";
import Newsletter from "./Views/Newsletter/Newsletter";
import Portfolio from "./Views/Portfolio/Portfolio";
import Services from "./Views/Services/Services";
import Testimonials from "./Views/Testimonials/Testimonials";

const Home = () => {
  return (
    <span className="text-secondary-500">
      <Hero />
      <CategoryDiv />
      <Services />
      <Portfolio />
      <Mentors />
      {/* TODO: Build these Sections */}
      <Testimonials />
      <About />
      <FAQView />
      <Newsletter />
      <Contact />
    </span>
  );
};

export default Home;
