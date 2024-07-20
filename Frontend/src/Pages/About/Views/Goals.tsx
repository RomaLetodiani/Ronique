import { GoalsTextObj } from "@/Utils/Data";
import RenderView from "./RenderView";

const Goals = () => {
  return (
    <RenderView
      title="Our Goals"
      description="Driven by our mission to create lasting change, we have set ambitious goals to expand our reach, enhance educational resources, promote sustainability, and foster community engagement. Each goal is designed to push the boundaries of what we can achieve together and to ensure a better future for all."
      cards={GoalsTextObj}
    />
  );
};

export default Goals;
