import { Socials } from "@/Utils/Data";

const SocialsDiv = () => {
  return (
    <div className="flex gap-5">
      {Socials.map((item, index) => (
        <a key={index} href={item.href} target="__blank">
          <img
            className="w-6 h-6 transition-all ease-out duration-300 hover:scale-110"
            src={item.icon}
            alt={item.alt}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialsDiv;
