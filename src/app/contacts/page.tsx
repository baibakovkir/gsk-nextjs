'use client';
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import React from "react";
import Department from "./department";
import Filials from "./filials";
export default function Publications() {
  const [filials, setFilials] = React.useState(false);

  const handleClickCenter = () => {
    setFilials(false);
  };
  const handleClickFilials = () => {
    setFilials(true);
  };

  return (
      <Container>
          <div className='flex items-center justify-center space-x-2 mb-14 md:flex-row flex-col'>
            <button
                onClick={handleClickCenter}
                disabled={!filials}
                className="text-gray-400 text-2xl rounded-full outline-none md:mr-10 mb-5 md:mb-0 focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20 disabled:text-lime-400">
                Центральный аппарат
            </button>
            <button
                onClick={handleClickFilials}
                disabled={filials}
                className="text-gray-400 text-2xl rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20 disabled:text-lime-400">
                Филиалы
            </button>
        </div>
        {!filials && <Department/>}
        {filials && <Filials/>}
      </Container>
  );
}