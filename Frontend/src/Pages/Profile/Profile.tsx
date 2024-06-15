import { useEffect, useState } from "react";
import userServices from "../../Services/UserServices";
import authStore from "../../Stores/Auth.store";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router";
import UserProfile from "./UserProfile";
import SectionWrapper from "../../Components/SectionWrapper";
import useMediaQuery from "../../Hooks/UseMediaQuery";
import { twMerge } from "tailwind-merge";

const Profile = () => {
  const { fullUser, setFullUser } = authStore();
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

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
    <div className="flex flex-col md:flex-row">
      <SideBar open={open} setOpen={setOpen} isMobile={!isNotMobile} role={fullUser?.role} />
      <SectionWrapper className={twMerge("flex-1", isNotMobile ? "mt-0" : "mt-32")}>
        <Outlet />
      </SectionWrapper>
      {isNotMobile && <UserProfile user={fullUser} />}
    </div>
  );
};

export default Profile;
