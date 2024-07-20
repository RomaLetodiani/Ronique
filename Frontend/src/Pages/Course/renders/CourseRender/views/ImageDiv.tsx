type Props = {
  image: string;
  title: string;
};

const ImageDiv = ({ image, title }: Props) => {
  return (
    <div className="rounded-3xl overflow-hidden border shadow-lg">
      <img className="w-full h-full object-contain" src={image} alt={title} />
    </div>
  );
};

export default ImageDiv;
