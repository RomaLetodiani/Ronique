import { ProductI } from "../../Types/Product.interface";
import Option from "./Option";

type OptionsProps = {
  loading: boolean;
  searchResults: ProductI[];
  error: boolean;
};

const Options = ({ loading, searchResults, error }: OptionsProps) => {
  return (
    <div className="absolute z-[999] drop-shadow-lg w-full bg-white flex flex-col overflow-y-auto max-h-96 border rounded-b-xl">
      {!searchResults.length && (
        <div className="p-5">
          {renderConditionals({ loading, error, length: searchResults.length })}
        </div>
      )}
      {searchResults.map((course, index) => (
        <Option key={index} {...course} />
      ))}
    </div>
  );
};

export default Options;

const renderConditionals = ({
  loading,
  error,
  length,
}: {
  loading: boolean;
  error: boolean;
  length: number;
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>No Courses Found</div>;
  if (!error && !loading && !length) return <div>Search for the Courses</div>;
  return null;
};
