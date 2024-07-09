import Avatar from "../../../../Components/Avatar";
import { MentorI } from "../../../../Types/Mentor.interface";

const Mentor = ({ fullName, position, img, desc, quote }: MentorI) => {
  return (
    <div className="flex lg:gap-10 p-5 flex-col lg:flex-row">
      <div className="m-auto flex-1 flex justify-center items-center w-full border h-[300px] max-w-[400px] rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={fullName} />
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-between py-10 max-w-80">
          <h5 className="font-semibold">"{quote}"</h5>
          <p className="my-5 text-sm font-thin">{desc}</p>

          <Avatar fullName={fullName} desc={position} length={50} />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
