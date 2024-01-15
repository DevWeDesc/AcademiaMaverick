"use client";
import React, { useState } from "react";
import { IDataNav, INav } from "../../@types/types";
import { DataNav } from "../../data/data";
import {
  BookMarked,
  MessagesSquare,
  Home,
  CircleDollarSign,
  Dumbbell,
  PersonStanding,
} from "lucide-react";

export const Nav = ({ navOpen, HandleNavOpen }: INav) => {
  const [navSelection, setNavSelection] = useState("Inicio");

  const IconsNav = ({ name }: IDataNav): React.JSX.Element => {
    let component: React.JSX.Element = <></>;

    switch (name) {
      case "Inicio":
        component = <Home />;
        break;
      case "Sobre Nós":
        component = <BookMarked />;
        break;
      case "Feedbacks":
        component = <MessagesSquare />;
        break;
      case "Planos":
        component = <CircleDollarSign />;
        break;
      case "Parceiros":
        component = <PersonStanding />;
        break;
      default:
        component = <Dumbbell />;
        break;
    }
    return component;
  };

  return (
    <div
      className={`text-sm fixed right-0 flex top-20 flex-col gap-10 p-10 h-[90vh] bg-black transition-all lg:opacity-100 lg:relative lg:flex-row lg:h-auto lg:top-0 ${
        navOpen
          ? "z-20 opacity-100 "
          : "z-[-1] opacity-0 h-[90vh] hidden lg:flex"
      }`}
    >
      {DataNav.map((data, index) => (
        <a
          aria-label={`Link para a sessão ${data.name}`}
          onClick={() => {
            setNavSelection(data.name);
            HandleNavOpen();
          }}
          className={`flex items-center gap-2 py-2 font-semibold lg:pr-6 lg:py-1 ${
            navSelection === data.name
              ? "transition-all text-logoColor border-b border-logoColor"
              : "border-0 border-black text-white"
          }`}
          href={data.url}
          key={index}
        >
          <span className="lg:hidden">{IconsNav(data)}</span>
          <span> {data.name}</span>
        </a>
      ))}
    </div>
  );
};
