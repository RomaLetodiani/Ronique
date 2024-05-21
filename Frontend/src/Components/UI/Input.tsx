import { useState } from "react";
import { copyIcon } from "../Shared/icons";
import useMediaQuery from "../../Hooks/UseMediaQuery";

type Props = {};

const Input = (props: Props) => {
  const [value, setValue] = useState();
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log("🚀 ~ Input ~ isMobile:", isMobile);
  return <img src={copyIcon} alt="" />;
};

export default Input;
