import { useEffect } from "react";
import userServices from "../../Services/UserServices";
import authStore from "../../Stores/Auth.store";

const Profile = () => {
  const { fullUser, setFullUser } = authStore();
  console.log("🚀 ~ Profile ~ fullUser:", fullUser);
  useEffect(() => {
    userServices.getCurrent().then(({ data }) => {
      setFullUser(data);
    });
  }, []);

  return <div>Profile</div>;
};

export default Profile;
