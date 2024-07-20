import productServices from "@/Services/ProductServices";
import { ProductI } from "@/Types/Product.interface";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import useSWR from "swr";

const handleSingleCourse = () => {
  const { id } = useParams<{ id: string }>();

  const fetchCourse: () => Promise<ProductI> = async () => {
    if (!id) {
      toast.error("Course not found");
      return;
    }

    const { data } = await productServices.getProduct(id);

    return data;
  };

  const {
    data: course,
    error: courseFetchError,
    isLoading: courseFetchLoading,
  } = useSWR(`/api/course/${id}`, fetchCourse);

  return {
    course,
    courseFetchError,
    courseFetchLoading,
  };
};

export default handleSingleCourse;
