import { useEffect, useState } from "react";
import userServices from "../../Services/UserServices";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router";
import UserProfile from "./UserProfile";
import SectionWrapper from "../../Components/SectionWrapper";
import { twMerge } from "tailwind-merge";
import { authStore } from "../../Stores";
import { useMediaQuery } from "../../Hooks";

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
    <div className="flex flex-col w-full h-full flex-1 md:flex-row relative overflow-hidden">
      <SideBar open={open} setOpen={setOpen} isMobile={!isNotMobile} role={fullUser?.role} />
      <SectionWrapper
        className={twMerge("flex-1 py-5 min-h-screen", isNotMobile ? "mt-0" : "mt-24 border-t")}
      >
        <Outlet />
      </SectionWrapper>
      {isNotMobile && <UserProfile />}
    </div>
  );
};

export default Profile;
