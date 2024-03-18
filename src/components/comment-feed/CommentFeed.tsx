"use client";
import Comment from "@/components/comment";
import CommentBox from "@/components/comment-box";
import type { FormFieldsType } from "@/components/comment-box";
import { mockComments } from "@/lib/mock-data";

const CommentFeed = () => {
  const onClickHandler = (data: FormFieldsType) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-lg mx-3 divide-y divide-neutral-300">
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <CommentBox
        buttonText="Comment"
        placeholder="Add a comment"
        onClick={onClickHandler}
      />
    </div>
  );
};
export default CommentFeed;
