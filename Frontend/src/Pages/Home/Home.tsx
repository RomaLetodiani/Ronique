import {
  Hero,
  CategoryDiv,
  Services,
  Portfolio,
  Mentors,
  Testimonials,
  About,
  FAQView,
  Newsletter,
  Contact,
} from "./Views";

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
