import { AchievementsTextObj } from "../Utils/AchievementsTextObj";
import RenderView from "./RenderView";

const Achievements = () => {
  return (
    <RenderView
      title="Achievements"
      description="Our journey is marked by numerous milestones that highlight our commitment to innovation, community impact, and educational excellence. Each achievement is a testament to the hard work and dedication of our team, partners, and supporters. Explore some of the key accomplishments that drive us forward and inspire our future endeavors."
      cards={AchievementsTextObj}
    />
  );
};

export default Achievements;
