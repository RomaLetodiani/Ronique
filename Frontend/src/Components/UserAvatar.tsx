import { UserDecodedI } from "../Types/User.interface";
import Avatar from "./Avatar";

const UserAvatar = ({ user }: { user: UserDecodedI }) => {
  return (
    <div className="p-2 rounded-lg bg-secondary-200">
      <Avatar firstName={user.first_name} lastName={user.last_name} role={user.role} />
    </div>
  );
};

export default UserAvatar;
