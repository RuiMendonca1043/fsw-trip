import React from "react";
import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayPrimary"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap px-2">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayPrimary"></div>
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className="flex flex-col items-center gap-1">
          <Image width={25} height={25} src="/hotel-icon.png" alt="hotel" />
          <p className="text-grayPrimary text-sm">Hotel</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={25} height={25} src="/farm-icon.png" alt="farm" />
          <p className="text-grayPrimary text-sm">Fazenda</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={25} height={25} src="/cottage-icon.png" alt="cottage" />
          <p className="text-grayPrimary text-sm">Chalé</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image width={25} height={25} src="/inn-icon.png" alt="pousada" />
          <p className="text-grayPrimary text-sm">Pousada</p>
        </div>
      </div>
    </div>
  );
};
export default QuickSearch;
