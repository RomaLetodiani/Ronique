import { twMerge } from "tailwind-merge";
import type { Role } from "@/Types/User.interface";
import { sliceText } from "@/Utils/helpers";

type avatarProps = {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  desc?: string;
  role?: Role;
  imageOnly?: boolean;
  bgColor?: string;
  textColor?: string;
  image?: string;
  imageSize?: string;
  length?: number;
};

const Avatar = ({
  firstName,
  lastName,
  fullName,
  desc,
  role,
  imageOnly = false,
  bgColor = "bg-primary",
  textColor = "text-white",
  image,
  imageSize = "h-10 w-10",
  length = 15,
}: avatarProps) => {
  const renderFullName = fullName ?? `${firstName} ${lastName}`;
  const initials = fullName
    ? `${fullName?.charAt(0)}${fullName?.charAt(fullName.indexOf(" ") + 1)}`
    : `${firstName?.charAt(0)}${lastName?.charAt(0)}`;

  const renderDesc = desc ?? role;

  return (
    <div className="flex gap-3">
      {image ? (
        <div>
          <img src={image} alt={renderFullName} />
        </div>
      ) : (
        <div
          className={twMerge(
            "flex justify-center items-center border rounded-full ",
            imageSize,
            bgColor,
            textColor
          )}
        >
          {initials}
        </div>
      )}
      {!imageOnly && (
        <div>
          <h3 className="text-sm">{sliceText(renderFullName, length)}</h3>
          <p className="text-xs">{renderDesc}</p>
        </div>
      )}
    </div>
  );
};

export default Avatar;
