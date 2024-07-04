import { useEffect, useState } from "react";

const HandleCurrentImage = () => {
  const [current, setCurrent] = useState(0);
  const sliderBgs = ["bg-hero-1", "bg-hero-2", "bg-hero-3"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % sliderBgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return { img: sliderBgs[current] };
};

export default HandleCurrentImage;
