import { FiUser } from "react-icons/fi";
import Image from "next/image";
import { AvatarProps } from "./Avatar.d";

const Avatar = ({ profilePicture, name }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 flex justify-center items-center rounded-2xl bg-blue-100">
        {/* padding of 1px is added to the bottom of the icon to make it look center because of it's visual weight */}
        {profilePicture ? (
          <Image
            src={profilePicture}
            width={32}
            height={32}
            alt={`${name}'s profile picture`}
            className="rounded-2xl"
          />
        ) : (
          <FiUser width={18} height={18} className="pb-px" />
        )}
      </div>
      <div className="ml-2 text-xs">{name}</div>
    </div>
  );
};
export default Avatar;
