import { Card } from "@/Components";
import { ServicesData } from "@/Utils/Data";

const RenderServicesCards = () => {
  return (
    <div className="flex-[2] grid sm:grid-cols-2 gap-5">
      {ServicesData.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          direction="flex-col"
          iconComponent={
            <div className="text-3xl rounded-full p-2 bg-secondary-200 text-primary">
              {service.icon}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default RenderServicesCards;
