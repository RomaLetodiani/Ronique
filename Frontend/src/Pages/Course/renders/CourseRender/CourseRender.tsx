import { ProductI } from "@/Types/Product.interface";
import { Actions, Category, Dates, Header, ImageDiv } from "./views";
import { SectionWrapper } from "@/Components";

type CourseRenderProps = {
  course: ProductI;
};

const CourseRender = ({ course }: CourseRenderProps) => {
  return (
    <SectionWrapper className="py-5 grid gap-10 lg:grid-cols-[1fr_minmax(300px,500px)]">
      <ImageDiv image={course.image} title={course.title} />
      <div className="flex flex-col gap-5">
        <Header
          title={course.title}
          description={course.description}
          price={course.price}
          salePrice={course.salePrice}
        />

        <Category category_name={course.category_name} />

        <Dates created_at={course.created_at} updated_at={course.updated_at} />

        <Actions productId={course.id} />
      </div>
    </SectionWrapper>
  );
};

export default CourseRender;
