import Comment from "@/components/comment";
import { mockComments } from "@/lib/mock-data";

const CommentFeed = () => {
  return (
    <div className="divide-y divide-neutral-300">
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
export default CommentFeed;
