import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import authStore from "../Stores/Auth.store";

const UserAvatar = () => {
  const { user } = authStore();
  return (
    <div className="p-2 rounded-lg bg-secondary-200">
      <Link to={"/profile"}>
        <Avatar firstName={user?.first_name} lastName={user?.last_name} role={user?.role} />
      </Link>
    </div>
  );
};

export default UserAvatar;
