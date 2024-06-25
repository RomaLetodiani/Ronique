import Button from "../../../Components/UI/Button";

const BottomFooter = () => {
  return (
    <div className="w-full p-5 border shadow-sm flex flex-col lg:flex-row gap-5 lg:gap-20 rounded-lg justify-between items-center">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Together, Let's make the world a better place.
        </h2>
        <p>
          Imagine a world where everyone has access to clean water, education, and equal
          opportunities. By joining us, you're not just supporting a cause, you're becoming a part
          of a global movement to empower communities, foster innovation, and drive sustainable
          change. Let's unite and make a lasting impact, one step at a time.
        </p>
      </div>
      <div className="min-w-28">
        <Button>Join Us</Button>
      </div>
    </div>
  );
};

export default BottomFooter;
