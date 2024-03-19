import type { FormFieldsType } from "@/components/comment-box";

export type CommentBoxProps = {
  buttonText: string;
  placeholder: string;
  onClick: (data: FormFieldsType) => void;
  onCancel?: () => void;
  content?: string;
};
