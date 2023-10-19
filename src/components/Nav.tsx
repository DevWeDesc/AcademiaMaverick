import React from "react";
import { INav } from "../../types/types";
import { DataNav } from "../../data/data";

export const Nav = ({ navOpen, HandleNavOpen }: INav) => {
  return (
    <div
      className={`${
        navOpen
          ? "text-sm fixed right-0 z-10 flex flex-col gap-6 p-10 h-[90vh] bg-black opacity-100 transition-all"
          : "z-[-1] opacity-0 h-0 right-0"
      }`}
    >
      {DataNav.map((data, index) => (
        <a href={data.url} key={index}>
          {data.name}
        </a>
      ))}
    </div>
  );
};
