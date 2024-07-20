import { logo } from "@/Assets";

export const sliceText = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};

export const renderImage = (image: string) => {
  return image.split(",")[1] ? image : logo;
};
