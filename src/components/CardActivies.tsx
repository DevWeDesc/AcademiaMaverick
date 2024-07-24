import React from "react";

type ICardActivies = {
  name: string;
  hour: string;
};
export const CardActivies = ({ name, hour }: ICardActivies) => {
  return (
    <div
      className={` flex flex-col gap-5 text-[10px] p-4 lg:text-sm ${
        name !== "" ? "shadow-card shadow-logoColorLight" : "xl:block hidden"
      }  lg:px-8 lg:py-6 rounded-lg w-full h-full`}
    >
      <div className={`py-1 px-3 ${name !== "" && "bg-logoColor"}  rounded-lg`}>
        <p className="text-black font-bold">{hour}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};
