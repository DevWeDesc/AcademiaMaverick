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