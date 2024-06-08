import { useState } from "react";

type Props = {
  handleChange: (base64Image: string) => void;
  initialImage: string;
};

const ImageToBase64Converter = ({ handleChange, initialImage = "" }: Props) => {
  const [base64Image, setBase64Image] = useState(initialImage);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;

      if (typeof result === "string") {
        setBase64Image(result);

        const base64 = result.split(",")[1];
        handleChange(base64);
      }
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleChangeInput} />
      {base64Image && <img src={base64Image} alt="preview" />}
    </div>
  );
};

export default ImageToBase64Converter;
