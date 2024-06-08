import Avatar from "../../Components/Avatar";
import { UserI } from "../../Types/User.interface";

type Props = {
  user: UserI | null;
};

const UserProfile = ({ user }: Props) => {
  return (
    <div className="border-l border-secondary-200 p-5">
      <Avatar imageOnly firstName={user?.first_name} lastName={user?.last_name} />
    </div>
  );
};

export default UserProfile;
