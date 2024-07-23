import React from "react";

type ICardActivies = {
  name: string;
  hour: string;
};
export const CardActivies = ({ name, hour }: ICardActivies) => {
  return (
    <div className="flex flex-col gap-5 text-[10px] p-4 lg:text-sm shadow-card shadow-logoColorLight lg:px-8 lg:py-6 rounded-lg">
      <div className="py-1 px-3 bg-orange-500 rounded-lg">
        <p>{hour}</p>
      </div>
      <p>{name}</p>
    </div>
  );
};
