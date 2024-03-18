"use client";
import ActionWithConfirmation from "@/ui/action-with-confirmation";
import { FiTrash } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const Comment = () => {
  const onClickHandler = () => {
    console.log("Delete comment");
  };
  return (
    <>
      <ActionWithConfirmation
        Icon={FiTrash}
        ConfirmActionIcon={FiTrash2}
        onClick={onClickHandler}
      />
    </>
  );
};
export default Comment;
