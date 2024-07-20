import { CheckBox } from "@/Components/UI";

type Props = {
  onlySales: boolean;
  setOnlySales: (value: boolean) => void;
};

const SalesFilter = ({ onlySales, setOnlySales }: Props) => {
  return (
    <div>
      <CheckBox
        id="onlySales"
        withText
        checkedText="Only Sales"
        uncheckedText="All Products"
        clickable
        checked={onlySales}
        onChange={() => setOnlySales(!onlySales)}
      />
    </div>
  );
};

export default SalesFilter;
