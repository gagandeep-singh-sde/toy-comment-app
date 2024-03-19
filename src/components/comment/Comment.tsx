"use client";
import { useState } from "react";

import Avatar from "@/ui/avatar";
import ActionWithConfirmation from "@/ui/action-with-confirmation";
import CommentBox from "@/components/comment-box";

import { FiTrash } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

import { CommentProps } from "./Comment.d";
import Action from "@/ui/action";

const Comment = ({ comment }: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const onActionClick = () => {
    setIsEditing((prev) => !prev);
  };
  const onActionWithConfirmationClick = () => {
    console.log("Delete comment");
  };
  const onEdit = () => {
    setIsEditing((prev) => !prev);
  };
  const onCancel = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <>
      {isEditing ? (
        <div className="pb-5 mx-1">
          <CommentBox
            buttonText="Edit"
            placeholder=""
            content={comment.content}
            onClick={onEdit}
            onCancel={onCancel}
          />
        </div>
      ) : (
        <div className="py-5 cursor-pointer mx-1">
          <div className="flex items-center">
            <div className="flex w-full">
              <Avatar
                profilePicture={comment.authorImage}
                name={comment.author}
              />
            </div>
            <div className="flex w-full justify-end">
              <p className="text-neutral-500 text-xs">
                {comment.createdAt.getTime()}
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="ml-10 w-full">{comment.content}</p>
            <div className="flex justify-end">
              <Action Icon={MdCreate} onClick={onActionClick} />
              <ActionWithConfirmation
                onClick={onActionWithConfirmationClick}
                Icon={FiTrash}
                ConfirmActionIcon={FiTrash2}
                ConfirmActionMessage="Confirm!"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Comment;
