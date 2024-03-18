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
      <div className="pb-40 divide-y divide-neutral-300">
        {mockComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="fixed w-full max-w-lg bottom-0 pb-5 bg-white z-10">
        <CommentBox
          buttonText="Comment"
          placeholder="Add a comment"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
};
export default CommentFeed;
