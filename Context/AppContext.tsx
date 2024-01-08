"use client";
import { ReactNode, useState, useContext, createContext } from "react";

type AppContextPropsType = {
  children: ReactNode;
};

type AppContextProviderType = {
  section: any;
  setSection: React.Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext<AppContextProviderType | undefined>(
  undefined
);

export const AppContextProvider = ({ children }: AppContextPropsType) => {
  const [section, setSection] = useState<string>("");
  return (
    <AppContext.Provider value={{ section, setSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProviderType => {
  const contexto = useContext(AppContext);

  if (!contexto) {
    throw new Error(
      "useAppContext deve ser usado dentro de AppContextProvider"
    );
  }

  return contexto;
};
