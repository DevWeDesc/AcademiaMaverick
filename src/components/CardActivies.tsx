import React from "react";

type ICardActivies = {
  name: string;
  hour: string;
};
export const CardActivies = ({ name, hour }: ICardActivies) => {
  return (
    <div className="flex flex-col gap-5 text-sm hover:shadow-card hover:shadow-logoColor px-10 py-8 rounded-lg">
      <p>{name}</p>
      <p>{hour}</p>
    </div>
  );
};
