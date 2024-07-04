import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../../../../Components/UI/Button";

const TextDiv = () => {
  return (
    <div
      className={twMerge(
        "text-primary font-bold",
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "lg:translate-x-0 lg:w-[40%]",
        "lg:min-w-[330px] p-5 rounded-lg bg-white/60"
      )}
    >
      <p className="lg:text-3xl">Up to 40% Sales</p>
      <h1 className="text-4xl lg:text-6xl tracking-wider lg:leading-tight mb-5">
        Everything in One Place
      </h1>
      <Link to="/courses">
        <Button>See All</Button>
      </Link>
    </div>
  );
};

export default TextDiv;
