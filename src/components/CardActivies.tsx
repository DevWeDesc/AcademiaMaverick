import React from "react";

type ICardActivies = {
  name: string;
  hour: string;
};
export const CardActivies = ({ name, hour }: ICardActivies) => {
  return (
    <div className="flex flex-col gap-5 text-[10px] p-4 lg:text-sm hover:shadow-card hover:shadow-logoColor lg:px-10 lg:py-8 rounded-lg">
      <p>{name}</p>
      <p>{hour}</p>
    </div>
  );
};
