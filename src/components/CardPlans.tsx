import React from "react";
import { ICardPlans } from "../../types/types";
import { CheckCircle } from "lucide-react";

export const CardPlans = ({ title, price, benefits }: ICardPlans) => {
  let priceNumber: number = parseFloat(price.replace(",", "."));
  let totalPrice: number = priceNumber * 12;
  let totalInFront: string = totalPrice.toFixed(2).replace(".", ",");

  return (
    <div className="px-5 py-8 border border-logoColor rounded-lg flex flex-col items-center">
      <p className="font-bold mb-7">{title}</p>
      <div className="flex items-center gap-2 mb-5">
        <div className="flex items-center gap-2">
          <p className="text-[10px] opacity-70 font-medium">R$</p>
          <p className="font-bold text-4xl">
            {price.length === 5 ? price.substring(0, 2) : price.substring(0, 3)}
          </p>
        </div>
        <div>
          <p className="font-extrabold">
            {" "}
            {price.length === 5 ? price.substring(2) : price.substring(3)}
          </p>
          <p className="font-medium text-[10px] opacity-70">
            {`= R$ ${totalInFront} / Ano`}
          </p>
        </div>
      </div>
      <div className="flex gap-3 flex-col mb-9">
        {benefits.map((data, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="text-logoColor" size={15} />
            <p className="text-sm text-logoColor font-medium">{data.content}</p>
          </div>
        ))}
      </div>
      <button className="text-xs font-bold shadow-sm hover:shadow-lg hover:shadow-zinc-800 border border-zinc-600 shadow-zinc-600 opacity-80 hover:opacity-100 transition-all  w-full py-3 rounded-lg">
        Inscreva-se agora
      </button>
    </div>
  );
};
