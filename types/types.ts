import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type IFeedbacks = {
  photo: string;
  name: string;
  quantityStars: number;
  content: string;
};

export type ICardPlans = {
  id?: number;
  title: string;
  price: string;
  benefits: ArrayBenefits[];
};

type ArrayBenefits = {
  content: string;
};

export type Ischedules = {
  days: string;
  schedules: string;
};

export type IContactsDefault = {
  children: ReactNode;
};

export type INav = {
  navOpen: boolean;
  HandleNavOpen: () => void;
};

export type IDataNav = {
  url: string;
  name: string;
};

export type ISwiperFeedbacks = {
  slidesPerView: number;
};

export type IComents = {
  photo?: string | StaticImport | StaticImageData | any;
  name: string;
  content: string;
};
