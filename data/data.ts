import { ICardPlans, IComents, IDataNav, Ischedules } from "../types/types";
import PhotoPrimaryComent from "../public/ImageWesley.jpeg";
export const DataNav: IDataNav[] = [
  { name: "Inicio", url: "#init" },
  { name: "Sobre Nós", url: "#about" },
  { name: "Atividades", url: "#activies" },
  { name: "Planos", url: "#plans" },
  { name: "Feedbacks", url: "#feedbacks" },
];

export const DataPlans: ICardPlans[] = [
  {
    id: 2,
    title: "Premium Anual",
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
    id: 3,
    title: "Pro Semestral",
    price: "109,90",
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
    title: "Plus Trimestral",
    price: "119,90",
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
    price: "129,90",
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
  { days: "Segunda", schedules: "Inicio 0:00" },
  { days: "Terça, Quarta e Quinta", schedules: "24 Horas" },
  { days: "Sexta", schedules: "Termino 00:00" },
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
