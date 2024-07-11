import { wishListHandler } from "../../../../Hooks/handlerWishlist";
import CoursesCard from "../../../../Components/Courses/CoursesCard";
import SectionWrapper from "../../../../Components/SectionWrapper";
import Button from "../../../../Components/UI/Button";
import { ProductI } from "../../../../Types/Product.interface";

const RenderTrendingCourses = ({ products }: { products: ProductI[] }) => {
  const { handleWishlistActions, isInWishlist } = wishListHandler();

  return (
    <div className="bg-gradient bg-cover bg-center">
      <SectionWrapper className="py-10">
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold">Trending Courses</h3>
          <p>Let's Join our Trending Courses, the knowledge will definitely be useful to you</p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {products.slice(0, 3).map((product) => (
            <CoursesCard
              isInWishlist={isInWishlist(product.id)}
              key={product.id}
              className="flex-1 min-w-[345px] max-w-[400px] lg:min-w-0"
              {...product}
              cartAction={() => {}}
              wishlistAction={() => handleWishlistActions(product.id)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="mt-5">View All Courses</Button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default RenderTrendingCourses;
