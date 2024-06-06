import Card, { CardProps } from "../../../Components/Card";

type Props = {
  title: string;
  description: string;
  cards: CardProps[];
};

const RenderView = ({ title, description, cards }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="flex gap-5">
        {cards.map((card, index) => {
          return (
            <Card
              className="flex flex-1 flex-row md:flex-col border rounded gap-5"
              key={index}
              {...card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderView;
