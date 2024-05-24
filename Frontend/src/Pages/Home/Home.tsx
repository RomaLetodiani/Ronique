import authStore from "../../Stores/Auth.store";

const Home = () => {
  const { user } = authStore();
  console.log("🚀 ~ Home ~ user:", user);

  return <div>Home</div>;
};

export default Home;
