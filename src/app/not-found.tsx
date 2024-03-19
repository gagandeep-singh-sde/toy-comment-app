"use client";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="bg-neutral-100 flex items-center mx-auto mt-44 w-2/5 h-40 rounded-full">
        <Image
          src="https://avatar.iran.liara.run/public/12"
          width={160}
          height={160}
          alt="A guy here to help you find your way back home."
          className="rounded-2xl"
        />
        <p className="w-96 mx-auto">
          &quot;Hello there! I believe you lost your way,{" "}
          <Link className="text-orange-500 font-bold" href={"/"}>
            here let me take you back.
          </Link>
          &quot;
        </p>
      </div>
    </>
  );
};
export default NotFound;
