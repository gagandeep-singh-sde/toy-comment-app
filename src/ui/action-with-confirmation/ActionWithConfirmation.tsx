import { useState } from "react";
import clsx from "clsx";

import { FiXCircle } from "react-icons/fi";

import { ActionWithConfirmationProps } from "./ActionWithConfirmation.d";

const ActionWithConfirmation = ({
  Icon,
  ConfirmActionIcon,
  onClick,
}: ActionWithConfirmationProps) => {
  const [confirmUiVisvible, setConfirmUiVisvible] = useState(false);
  const confirmAction = () => {
    setConfirmUiVisvible((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={confirmAction}
        className={clsx(
          confirmUiVisvible ? "h-14 bg-red-500 bg-opacity-15" : "h-7",
          "w-7 relative p-1.5 rounded-2xl transition-all duration-300 ease-in-out text-red-500 cursor-pointer hover:bg-red-500 hover:bg-opacity-15"
        )}
      >
        <div
          className={clsx(
            "absolute z-10",
            confirmUiVisvible &&
              "rotate-180 transition-all duration-700 ease-in-out opacity-0",
            !confirmUiVisvible &&
              "rotate-0 transition-opacity duration-700 ease-in-out opacity-1"
          )}
        >
          <Icon />
        </div>
        <div
          className={clsx(
            "absolute z-10",
            !confirmUiVisvible &&
              "rotate-180 transition-all duration-300 ease-in-out opacity-0",
            confirmUiVisvible &&
              "rotate-0 transition-all duration-700 ease-in-out opacity-1"
          )}
        >
          <FiXCircle />
        </div>
        <div
          className={clsx(
            "absolute p-1 bottom-0.5 left-0.5 rounded-2xl hover:bg-red-500 hover:bg-opacity-25 hover:text-red-600 transition-all z-0",
            !confirmUiVisvible && "duration-500 ease-in-out opacity-0",
            confirmUiVisvible && "duration-500 ease-in-out opacity-1"
          )}
          onClick={onClick}
        >
          <ConfirmActionIcon />
        </div>
      </div>
    </>
  );
};
export default ActionWithConfirmation;
