"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { MdCancel } from "react-icons/md";

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

const CommentBox = ({
  buttonText,
  placeholder,
  onClick,
  onCancel,
  content,
}: CommentBoxProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFieldsType>({
    resolver: zodResolver(schema),
  });
  const submitHandler: SubmitHandler<FormFieldsType> = (
    data: FormFieldsType
  ) => {
    onClick(data);
    reset();
  };
  return (
    <div>
      <div className="pt-5 mx-1 relative flex items-start">
        <Avatar profilePicture="https://avatar.iran.liara.run/public/4" />
        <div className="ml-2 flex flex-grow border border-neutral-300 rounded-lg">
          <form
            className="flex flex-grow"
            onSubmit={handleSubmit(submitHandler)}
          >
            <textarea
              className="p-3 flex-grow resize-none bg-transparent focus:outline-none"
              {...register("comment")}
              placeholder={placeholder}
              rows={4}
            >
              {content}
            </textarea>
            <div className="self-end mb-3 mr-3 ml-3">
              <Button label={buttonText} type="submit" />
            </div>
          </form>
        </div>
        {buttonText == "Edit" && (
          <div
            className="absolute right-0 m-3 text-neutral-500 cursor-pointer"
            onClick={onCancel}
          >
            <MdCancel />
          </div>
        )}
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
