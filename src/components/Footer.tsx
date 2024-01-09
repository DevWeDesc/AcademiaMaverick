import Image from "next/image";
import React from "react";
import Logo from "../../public/LogoFooter.png";
import { schedulesData } from "../../data/data";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { IContactsDefault } from "../../types/types";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center py-8 gap-10 border-t-[2px] border-[#222222] lg:flex-row lg:justify-between lg:px-36">
      <Image alt="" className="object-contain" src={Logo} />
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-5 items-center">
          <h3 className="font-semibold">Horarios de Funcionamento</h3>
          {schedulesData.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="font-bold text-sm">{data.days}</p>
              <p className="font-semibold text-sm">{data.schedules}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center items-center flex flex-col gap-5 lg:col-span-2">
        <h3 className="font-bold">Contatos</h3>
        <div className="flex items-center gap-2">
          <a
            aria-label="Link de direionamento para o WhatsApp"
            about="Link de direionamento para o WhatsApp"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511948451643&text=Estou%20interessado%20em%20me%20inscrever%20na%20Maverick!"
          >
            <BsWhatsapp
              size={30}
              className="hover:text-green-600 hover:p-1 rounded-full transition-all"
            />
          </a>
          <a
            aria-label="Link de direionamento para o Instagram"
            about="Link de direionamento para o Instagram"
            target="_blank"
            href="https://www.instagram.com/maverickacademia/"
          >
            <Instagram
              size={30}
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:p-1 rounded-md transition-all"
            />
          </a>
        </div>
        <ContactsDefault>
          <Phone size={16} />
          <p className="max-w-[150px] text-sm font-medium">(11) 94845 - 1643</p>
        </ContactsDefault>
        <ContactsDefault>
          <MapPin size={20} />
          <p className="max-w-[190px] text-sm font-medium">
            Rua Pedro de Tolêdo, 296 Mauá, São Paulo
          </p>
        </ContactsDefault>
      </div>
    </div>
  );
};

const ContactsDefault = ({ children }: IContactsDefault) => {
  return <div className="flex items-center gap-2">{children}</div>;
};
