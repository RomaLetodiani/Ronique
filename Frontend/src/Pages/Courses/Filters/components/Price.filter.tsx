import Selector from "../../../../Components/UI/Selector";

type Props = {
  priceRange: { min: number; max: number };
  setPriceRange: (value: { min: number; max: number }) => void;
};

const PriceFilter = ({ priceRange, setPriceRange }: Props) => {
  const priceOptions = [0, 50, 100, 150, 200].map((price) => ({
    value: price,
    title: `${price} $`,
  }));

  return (
    <div>
      <p className="font-semibold text-lg">Price</p>
      <div className="flex gap-5">
        <span>
          <p>Min</p>
          <Selector
            options={priceOptions}
            selected={priceRange.min}
            setSelected={(value) => setPriceRange({ ...priceRange, min: +value })}
            onChange={(value) => setPriceRange({ ...priceRange, min: +value })}
          />
        </span>
        <span>
          <p>Max</p>
          <Selector
            options={priceOptions}
            selected={priceRange.max}
            setSelected={(value) => setPriceRange({ ...priceRange, max: +value })}
            onChange={(value) => setPriceRange({ ...priceRange, max: +value })}
          />
        </span>
      </div>
    </div>
  );
};

export default PriceFilter;
