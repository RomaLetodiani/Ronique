import { useEffect } from "react";
import userServices from "../../Services/UserServices";
import authStore from "../../Stores/Auth.store";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router";
import UserProfile from "./UserProfile";
import SectionWrapper from "../../Components/SectionWrapper";

const Profile = () => {
  const { fullUser, setFullUser } = authStore();

  const navigate = useNavigate();
  useEffect(() => {
    userServices
      .getCurrent()
      .then(({ data }) => {
        setFullUser(data);
      })
      .catch(() => {
        if (!fullUser) {
          navigate("/auth");
        }
      });
  }, []);

  return (
    <div className="flex w-full">
      <SideBar role={fullUser?.role} />
      <SectionWrapper className="flex-1">
        <Outlet />
      </SectionWrapper>
      <UserProfile user={fullUser} />
    </div>
  );
};

export default Profile;
