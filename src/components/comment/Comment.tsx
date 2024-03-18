"use client";
import Avatar from "@/ui/avatar";
import ActionWithConfirmation from "@/ui/action-with-confirmation";
import { FiTrash } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

import { CommentProps } from "./Comment.d";
import Action from "@/ui/action";

const Comment = ({ comment }: CommentProps) => {
  const onClickHandler = () => {
    console.log("Delete comment");
  };
  return (
    <>
      <div className="py-5 w-full max-w-lg">
        <div className="flex items-center">
          <div className="flex w-full">
            <Avatar
              profilePicture={comment.authorImage}
              name={comment.author}
            />
          </div>
          <div className="flex w-full justify-end">
            <p className="text-neutral-500 text-xs">15 minutes ago</p>
          </div>
        </div>
        <div className="flex">
          <p className="ml-10 w-full">{comment.content}</p>
          <div className="flex justify-end">
            <Action Icon={MdCreate} onClick={onClickHandler} />
            <ActionWithConfirmation
              onClick={onClickHandler}
              Icon={FiTrash}
              ConfirmActionIcon={FiTrash2}
              ConfirmActionMessage="Confirm!"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
