import React from "react";
import { ICardPlans } from "../../@types/types";
import { CheckCircle } from "lucide-react";

export const CardPlans = ({ title, price, benefits }: ICardPlans) => {
  let priceNumber: number = parseFloat(price.replace(",", "."));
  let totalPrice: number = priceNumber * 12;
  let totalInFront: string = totalPrice.toFixed(2).replace(".", ",");

  return (
    <div className="px-5 h-full pt-8 pb-12 border border-logoColor rounded-lg flex flex-col items-center hover:shadow-card hover:shadow-logoColorLight transition-all relative">
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
      <p className="font-normal text-[11px] mb-3">
        Pagamento por Débito, Crédito à Vista, Dinheiro e Pix
      </p>
      <div className="flex gap-3 flex-col mb-9">
        {benefits.map((data, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="text-logoColor" size={15} />
            <p className="text-sm text-logoColor font-medium">{data.content}</p>
          </div>
        ))}
      </div>
      <a
        className="w-full absolute bottom-0 p-5"
        target="_blank"
        href={`https://api.whatsapp.com/send?phone=5511948451643&text=Estou%20interessado%20em%20me%20inscrever%20na%20Maverick,%20no%20plano%20${title}%20de%20R$${price}!`}
      >
        <button className="text-xs font-bold shadow-sm hover:shadow-lg hover:shadow-zinc-800 border border-zinc-600 shadow-zinc-600 opacity-80 hover:opacity-100 transition-all  w-full py-3 rounded-lg">
          Inscreva-se agora
        </button>
      </a>
    </div>
  );
};
