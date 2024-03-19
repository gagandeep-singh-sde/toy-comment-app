"use client";
import Link from "next/link";
import Image from "next/image";

const ErrorBoundary = ({ reset }: { reset: () => void }) => {
  return (
    <>
      <div className="bg-purple-100 flex items-center mx-auto mt-44 w-2/5 h-40 rounded-full">
        <Image
          src="https://avatar.iran.liara.run/public/27"
          width={160}
          height={160}
          alt="A guy trying to resolve the issue."
          className="rounded-2xl"
        />
        <p className="w-96 mx-auto">
          &quot;Hi! Something went wrong apparently, I apologise for that.
          <span
            onClick={reset}
            className="text-violet-500 font-bold cursor-pointer"
          >
            Would you like to try again?
          </span>
          &quot;
        </p>
      </div>
    </>
  );
};
export default ErrorBoundary;
