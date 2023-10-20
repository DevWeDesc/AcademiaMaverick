"use client";
import React, { useState } from "react";
import { IDataNav, INav } from "../../types/types";
import { DataNav } from "../../data/data";
import {
  BookMarked,
  MessagesSquare,
  Home,
  CircleDollarSign,
} from "lucide-react";

export const Nav = ({ navOpen }: INav) => {
  const IconsNav = ({ name }: IDataNav) => {
    if (name === "Inicio") {
      return <Home />;
    } else if (name === "Sobre Nós") {
      return <BookMarked />;
    } else if (name === "Feedbacks") {
      return <MessagesSquare />;
    } else {
      return <CircleDollarSign />;
    }
  };

  return (
    <div
      className={`text-sm fixed right-0 flex flex-col gap-6 p-10 h-[90vh] bg-black transition-all ${
        navOpen ? "z-10 opacity-100" : "z-[-1] opacity-0 h-[90vh]"
      }`}
    >
      {DataNav.map((data, index) => (
        <a className="flex items-center gap-2" href={data.url} key={index}>
          {IconsNav(data)}
          <span> {data.name}</span>
        </a>
      ))}
    </div>
  );
};
