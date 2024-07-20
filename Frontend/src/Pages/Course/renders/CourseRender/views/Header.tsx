import { PriceRender } from "@/Components";

type Props = {
  title: string;
  description: string;
  price: number;
  salePrice: number | null;
};

const Header = ({ title, description, price, salePrice }: Props) => {
  return (
    <div className="flex gap-10">
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
      <PriceRender price={price} salePrice={salePrice} />
    </div>
  );
};

export default Header;
