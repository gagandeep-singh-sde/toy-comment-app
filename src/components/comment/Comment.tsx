"use client";
import Action from "@/ui/action";
import { MdCreate } from "react-icons/md";

const Comment = () => {
  const onClickHandler = () => {
    console.log("Edit comment");
  };
  return (
    <>
      <Action Icon={MdCreate} onClick={onClickHandler} />
    </>
  );
};
export default Comment;
