import { toast } from "react-toastify";
import productServices from "../../../Services/ProductServices";
import productStore from "../../../Stores/Product.store";

const HandleCourses = ({
  selectedKeys,
  setSelectedKeys,
}: {
  selectedKeys: string[];
  setSelectedKeys: (keys: string[]) => void;
}) => {
  const { deleteProduct } = productStore();

  const handleDelete = () => {
    if (!selectedKeys.length) {
      toast.error("Please select a course to delete");
      return;
    }
    productServices
      .deleteProducts(selectedKeys)
      .then(() => {
        selectedKeys.forEach((id) => deleteProduct(id));
        setSelectedKeys([]);
        toast.success("Products deleted successfully");
      })
      .catch(() => {
        toast.error("Error while deleting products");
      });
  };
  return { handleDelete };
};

export default HandleCourses;
