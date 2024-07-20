import { Avatar } from "@/Components";
import { authStore } from "@/Stores";

const UserProfile = () => {
  const { fullUser: user } = authStore();
  return (
    <div className="border-l border-secondary-200 p-5">
      <Avatar imageOnly firstName={user?.first_name} lastName={user?.last_name} />
    </div>
  );
};

export default UserProfile;
