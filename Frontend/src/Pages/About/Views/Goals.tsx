import { GoalsTextObj } from "../Utils/AchievementsTextObj";
import RenderView from "./RenderView";

const Goals = () => {
  return <RenderView title="Our Goals" description="lorem" cards={GoalsTextObj} />;
};

export default Goals;
