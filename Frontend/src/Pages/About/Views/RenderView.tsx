import { Card } from "@/Components";
import { CardProps } from "@/Types/Card.interface";

type Props = {
  title: string;
  description: string;
  cards: CardProps[];
};

const RenderView = ({ title, description, cards }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, index) => {
          return <Card key={index} {...card} align="items-center" direction="flex-col" />;
        })}
      </div>
    </div>
  );
};

export default RenderView;
