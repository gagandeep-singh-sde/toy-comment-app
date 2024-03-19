"use client";
import { useState } from "react";

import Avatar from "@/ui/avatar";
import ActionWithConfirmation from "@/ui/action-with-confirmation";
import CommentBox from "@/components/comment-box";

import { FiTrash } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

import formatDate from "@/lib/date-parser";

import type { CommentProps } from "./Comment.d";
import type { FormFieldsType } from "@/components/comment-box";
import Action from "@/ui/action";

const Comment = ({ comment, currentUser, onEdit, onDelete }: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const onActionClick = () => {
    setIsEditing((prev) => !prev);
  };
  const onActionWithConfirmationClick = (id: string) => {
    onDelete(id);
  };
  const onEditClick = (id: string, data: FormFieldsType) => {
    setIsEditing((prev) => !prev);
    onEdit(id, data);
  };
  const onCancel = () => {
    setIsEditing((prev) => !prev);
  };
  return (
    <>
      {isEditing ? (
        <div className="pb-5">
          <CommentBox
            buttonText="Edit"
            placeholder=""
            content={comment.content}
            onClick={(data) => onEditClick(comment.id, data)}
            onCancel={onCancel}
          />
        </div>
      ) : (
        <div className="py-5 cursor-pointer">
          <div className="flex items-center">
            <div className="flex w-full">
              <Avatar
                profilePicture={comment.authorImage}
                name={comment.author}
              />
            </div>
            <div className="flex w-full justify-end">
              <p className="text-neutral-500 text-xs">
                {formatDate(comment.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="ml-10 w-full">{comment.content}</p>
            {comment.username === currentUser && (
              <div className="flex justify-end">
                <Action Icon={MdCreate} onClick={onActionClick} />
                <ActionWithConfirmation
                  onClick={() => onActionWithConfirmationClick(comment.id)}
                  Icon={FiTrash}
                  ConfirmActionIcon={FiTrash2}
                  ConfirmActionMessage="Confirm!"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Comment;
