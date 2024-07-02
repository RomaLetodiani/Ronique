import SectionWrapper from "../../Components/SectionWrapper";
import { FAQs } from "../../Utils/Const";
import Question from "./Question";

const FAQPage = () => {
  return (
    <SectionWrapper maxWidth="max-w-[1440px]" className="flex items-center flex-col p-5">
      <h1 className="text-2xl mb-5">Frequently Asked Questions</h1>
      <div className="flex flex-col w-full border rounded-2xl overflow-hidden">
        {FAQs.map((faq, index) => (
          <Question key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQPage;
