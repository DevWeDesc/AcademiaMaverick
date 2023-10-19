import { ICardPlans, IDataNav, Ischedules } from "../types/types";

export const DataNav: IDataNav[] = [
  { name: "Sobre Nós", url: "#about" },
  { name: "Feedbacks", url: "#feedbacks" },
  { name: "Planos", url: "#plans" },
];

export const DataPlans: ICardPlans[] = [
  {
    id: 1,
    title: "Premium Mensal",
    price: "69,99",
    benefits: [
      { content: "Acesso ilimitado à academia" },
      { content: "Aulas em grupo inclusas" },
      { content: "Consulta inicial com um treinador" },
      { content: "Sessões de treinamento personalizado" },
      { content: "Acompanhamento de progresso" },
    ],
  },
  {
    id: 2,
    title: "Premium Mensal",
    price: "69,99",
    benefits: [
      { content: "Acesso ilimitado à academia" },
      { content: "Aulas em grupo inclusas" },
      { content: "Consulta inicial com um treinador" },
      { content: "Sessões de treinamento personalizado" },
      { content: "Acompanhamento de progresso" },
    ],
  },
  {
    id: 3,
    title: "Premium Mensal",
    price: "69,99",
    benefits: [
      { content: "Acesso ilimitado à academia" },
      { content: "Aulas em grupo inclusas" },
      { content: "Consulta inicial com um treinador" },
      { content: "Sessões de treinamento personalizado" },
      { content: "Acompanhamento de progresso" },
    ],
  },
];

export const schedulesData: Ischedules[] = [
  { days: "Segunda a Sexta", schedules: " das 0:00 as 23:59" },
  { days: "Sábado", schedules: "das 8:00 as 18:00" },
  { days: "Domingo", schedules: "das 8:00 as 14:00" },
];
