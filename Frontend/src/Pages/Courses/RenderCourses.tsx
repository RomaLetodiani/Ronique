import { useState } from "react";
import CoursesCard from "../../Components/Courses/CoursesCard";
import Pagination from "../../Components/UI/Pagination/Pagination";
import { twMerge } from "tailwind-merge";
import { productStore } from "../../Stores";
import { handlerWishlist } from "../../Hooks";

const RenderCourses = ({ isMobile }: { isMobile: boolean }) => {
  const [page, setPage] = useState(1);
  const { totalProducts, products: courses } = productStore();
  const { handleWishlistActions, isInWishlist } = handlerWishlist();

  return (
    <div className={twMerge(isMobile && "mt-10")}>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
        {courses.map((course) => (
          <CoursesCard
            key={course.id}
            {...course}
            cartAction={() => {}}
            wishlistAction={() => {
              handleWishlistActions(course.id);
            }}
            isInWishlist={isInWishlist(course.id)}
          />
        ))}
      </div>
      <Pagination totalItems={totalProducts} pageSize={12} page={page} setPage={setPage} />
    </div>
  );
};

export default RenderCourses;
