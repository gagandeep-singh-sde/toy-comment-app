import type { MockComment } from "@/lib/mock-data";
import type { FormFieldsType } from "@/components/comment-box";

export type CommentProps = {
  currentUser: string;
  comment: MockComment;
  onEdit: (id: string, data: FormFieldsType) => void;
  onDelete: (id: string) => void;
};
