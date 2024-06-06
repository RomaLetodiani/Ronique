import { AchievementsTextObj } from "../Utils/AchievementsTextObj";
import RenderView from "./RenderView";

const Achievements = () => {
  return (
    <RenderView
      title="Achievements"
      description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid libero repellat esse
     harum dicta qui voluptate asperiores vero a. Neque nihil assumenda atque ipsum laboriosam
     reiciendis beatae natus enim quibusdam."
      cards={AchievementsTextObj}
    />
  );
};

export default Achievements;
