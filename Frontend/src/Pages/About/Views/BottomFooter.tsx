import Button from "../../../Components/UI/Button";

const BottomFooter = () => {
  return (
    <div className="w-full p-5 border shadow-sm flex flex-col md:flex-row gap-5 rounded-lg justify-between items-center">
      <div>
        <h2>Together, Let's make the world a better place.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ut quod dignissimos
          voluptatum odio ducimus id consequatur sint, illum commodi corporis iure suscipit enim
          repellendus distinctio nostrum, non quidem quisquam.
        </p>
      </div>
      <div>
        <Button>Join Us</Button>
      </div>
    </div>
  );
};

export default BottomFooter;
