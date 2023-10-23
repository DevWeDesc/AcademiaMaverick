import { ICardPlans, IComents, IDataNav, Ischedules } from "../types/types";
import PhotoPrimaryComent from "../public/ImageWesley.jpeg";
export const DataNav: IDataNav[] = [
  { name: "Inicio", url: "#init" },
  { name: "Sobre Nós", url: "#about" },
  { name: "Feedbacks", url: "#feedbacks" },
  { name: "Planos", url: "#plans" },
];

export const DataPlans: ICardPlans[] = [
  {
    id: 2,
    title: "Premium Anual",
    price: "74,90",
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
    title: "Pro Semestral",
    price: "92,90",
    benefits: [
      { content: "Acesso ilimitado à academia" },
      { content: "Aulas em grupo inclusas" },
      { content: "Consulta inicial com um treinador" },
      { content: "Sessões de treinamento personalizado" },
      { content: "Acompanhamento de progresso" },
    ],
  },
  {
    id: 1,
    title: "Plus Trimestrol",
    price: "99,90",
    benefits: [
      { content: "Acesso ilimitado à academia" },
      { content: "Aulas em grupo inclusas" },
      { content: "Consulta inicial com um treinador" },
      { content: "Sessões de treinamento personalizado" },
      { content: "Acompanhamento de progresso" },
    ],
  },
  {
    id: 4,
    title: "Basic Mensal",
    price: "109,90",
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

export const comentsData: IComents[] = [
  {
    photo: PhotoPrimaryComent,
    name: "Wesley M.",
    content:
      "Academia com um atendimento ótimo, maquinas de ultima geração, ambiente limpo, pessoal muito receptivo.",
  },
  {
    name: "Juliana S.",
    content:
      "Energia Total é mais do que uma academia, é uma comunidade! Encontrei a motivação que precisava e amigos.",
  },
  {
    name: "Lucas M.",
    content:
      "Os instrutores na Energia Total são simplesmente os melhores!! Eles conhecem seus nomes e seus objetivos.",
  },
];
