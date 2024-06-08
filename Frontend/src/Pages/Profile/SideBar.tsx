import { Link } from "react-router-dom";
import { Role } from "../../Types/User.interface";
import { isAdmin } from "../../Utils/Claims";
import Logo from "../../Components/Logo";

const SideBar = ({ role }: { role?: Role }) => {
  return (
    <div className="border-r border-secondary-200 p-5">
      <Logo size="100" />

      <div>
        <p>OverView</p>
        <ul>
          <li>Dashboard</li>
          <li>Inbox</li>
          <li>Task</li>
          {isAdmin(role) && (
            <li>
              <Link to={"admin"}>Admin Panel</Link>
            </li>
          )}
        </ul>
      </div>

      <div>
        <p>Setting</p>
        <ul>
          <li>Setting</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
