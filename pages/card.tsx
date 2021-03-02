import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <main className="flex items-center justify-center h-screen p-2 bg-trueGray-100">
      <div className="flex flex-col items-center justify-center px-4 py-8 bg-white rounded shadow-md w-largeRem lg:flex-row lg:pl-4 lg:p-0">
        <Image
          src="/person.jpg"
          height={256}
          width={256}
          priority
          objectFit="cover"
          className="rounded-full"
        />
        <div className="flex flex-col items-center justify-center flex-1 flex-grow mt-6 mx-7 lg:items-start">
          <h1 className="text-lg font-semibold">Barbara Sanches</h1>
          <h2 className="mt-1 font-medium text-gray-400 text-medium">
            Software engineer at Google
          </h2>
          <p className="mt-4 mb-6 text-center text-gray-500 font-regular lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Card;
