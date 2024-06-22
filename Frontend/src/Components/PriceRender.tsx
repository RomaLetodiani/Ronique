import { twMerge } from "tailwind-merge";

type Props = {
  price: number;
  salePrice: number | null;
};

const PriceRender = ({ price, salePrice }: Props) => {
  return (
    <div className="flex flex-col">
      <span className={twMerge("text-gray-500", salePrice && "line-through text-sm")}>
        ${price}
      </span>
      {salePrice && <span className="text-red-500">${salePrice}</span>}
    </div>
  );
};

export default PriceRender;
