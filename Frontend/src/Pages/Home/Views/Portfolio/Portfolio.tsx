import { productStore } from "@/Stores";
import RenderTrendingCourses from "./RenderTrendingCourses";
import CoursesSlider from "./Slider/CoursesSlider";

const Portfolio = () => {
  const { products } = productStore();
  return products.length ? (
    <>
      <RenderTrendingCourses products={products} />
      <CoursesSlider products={products} />
    </>
  ) : null;
};

export default Portfolio;
