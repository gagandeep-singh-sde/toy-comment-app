"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Button from "@/ui/button";
import { CommentBoxProps } from "./commentBox.d";
import Avatar from "@/ui/avatar";

const schema = z.object({
  comment: z
    .string()
    .min(1, { message: "Comment cannot be empty" })
    .max(500, { message: "You have reached the maximum length of a comment" }),
});

export type FormFieldsType = z.infer<typeof schema>;

const CommentBox = ({ buttonText, placeholder, onClick }: CommentBoxProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFieldsType>({
    resolver: zodResolver(schema),
  });
  const submitHandler: SubmitHandler<FormFieldsType> = (
    data: FormFieldsType
  ) => {
    onClick(data);
  };
  return (
    <div>
      <div className="pt-5 flex items-start">
        <Avatar profilePicture="https://avatar.iran.liara.run/public/4" />
        <div className="ml-2 border border-neutral-300 rounded-lg">
          <form className="flex" onSubmit={handleSubmit(submitHandler)}>
            <textarea
              className="p-3 resize-none bg-transparent focus:outline-none"
              {...register("comment")}
              placeholder={placeholder}
              rows={4}
              cols={36}
            />
            <div className="self-end mb-3 mr-3">
              <Button label={buttonText} type="submit" />
            </div>
          </form>
        </div>
      </div>
      {errors.comment && (
        <p className="text-red-500 text-sm ml-10 mt-2.5">
          {errors.comment.message}
        </p>
      )}
    </div>
  );
};
export default CommentBox;
