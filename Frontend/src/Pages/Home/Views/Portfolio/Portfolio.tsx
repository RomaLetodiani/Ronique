import CoursesCard from "../../../../Components/Courses/CoursesCard";
import SectionWrapper from "../../../../Components/SectionWrapper";
import productStore from "../../../../Stores/Product.store";

// TODO: FINISH THIS and REFACTOR IT
const Portfolio = () => {
  const { products } = productStore();
  return (
    products && (
      <div className="bg-gradient bg-cover bg-center">
        <SectionWrapper className="py-10">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold">Trending Courses</h3>
            <p>Let's Join our Trending Courses, the knowledge will definitely be useful to you</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {products.slice(0, 3).map((product) => (
              <CoursesCard
                key={product.id}
                className="flex-1 min-w-[345px] max-w-[400px] lg:min-w-0"
                {...product}
              />
            ))}
          </div>
        </SectionWrapper>
      </div>
    )
  );
};

export default Portfolio;
