import SocialsDiv from "../../Components/Socials";
import Button from "../../Components/UI/Button";
import Input from "../../Components/UI/Input";
import { useInput } from "../../Hooks/useInput";
import { FooterTextLeft } from "../../Utils/Consts";

const ContactPage = () => {
  const firstNameInput = useInput(() => true, "");
  const lastNameInput = useInput(() => true, "");
  const phoneNameInput = useInput(() => true, "");
  const emailInput = useInput(() => true, "");
  const subjectInput = useInput(() => true, "");
  return (
    <div className="w-full flex flex-col p-5 bg-teal-300 justify-center items-center">
      <h2>Contact Us</h2>
      <div className="bg-white bg-opacity-30 rounded-xl p-5 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Input {...firstNameInput} type="text" label="First Name" />
            <Input {...lastNameInput} type="text" label="Last Name" />
          </div>
          <div className="flex gap-5">
            <Input {...emailInput} type="text" label="Email" />
            <Input {...phoneNameInput} type="text" label="Phone" />
          </div>
          <Input {...subjectInput} type="text" label="Subject" />
          <textarea
            className="rounded-xl p-5 w-full outline-none max-h-[250px]"
            placeholder="Enter your Message here..."
          />
        </div>
        <div className="flex flex-col justify-between gap-5">
          {FooterTextLeft.map((item, index) => (
            <Button
              btnType="secondary"
              key={index}
              className="bg-slate-100 flex flex-col justify-center items-center gap-3 border rounded-lg p-5"
            >
              <img className="w-6 h-6" src={item.icon} alt={item.alt} />
              <p>{item.text}</p>
            </Button>
          ))}
          <Button
            btnType="secondary"
            className="bg-slate-100 flex flex-col items-center justify-center gap-3 border rounded-lg p-5"
          >
            <SocialsDiv />
            <p>Social Media</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
