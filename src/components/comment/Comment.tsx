"use client";
import Button from "@/ui/button";

const Comment = () => {
  const onClickHandler = () => {
    console.log("Clicked");
  };
  return (
    <>
      <Button label={"Comment"} onClick={onClickHandler} />
    </>
  );
};
export default Comment;
