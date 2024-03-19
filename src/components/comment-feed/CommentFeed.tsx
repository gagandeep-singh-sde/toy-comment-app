"use client";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Comment from "@/components/comment";
import CommentBox from "@/components/comment-box";
import type { FormFieldsType } from "@/components/comment-box";
import { mockComments } from "@/lib/mock-data";

const CommentFeed = () => {
  const [comments, setComments] = useState(mockComments);

  const onAddComment = (data: FormFieldsType) => {
    const newComment = {
      id: uuidv4(),
      username: "jp",
      author: "JP Lemieux",
      authorImage: "https://avatar.iran.liara.run/public/4",
      content: data.comment,
      createdAt: new Date(),
    };
    setComments((prevComments) => {
      return [newComment, ...prevComments].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onEditComment = (id: string, data: FormFieldsType) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, content: data.comment, createdAt: new Date() };
        }
        return comment;
      })
    );
  };

  const onDeleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div className="mx-auto w-full max-w-lg divide-y divide-neutral-300">
      <div className="pb-40 divide-y divide-neutral-300">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser="jp"
            onEdit={onEditComment}
            onDelete={onDeleteComment}
          />
        ))}
      </div>
      <div className="fixed w-full max-w-lg bottom-0 pb-5 bg-white z-10">
        <CommentBox
          buttonText="Comment"
          placeholder="Add a comment"
          onClick={onAddComment}
        />
      </div>
    </div>
  );
};
export default CommentFeed;
