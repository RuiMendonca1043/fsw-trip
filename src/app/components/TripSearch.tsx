import React from "react";
import Input from "../../components/Input";
import DatePicker from "@/components/DatePicker";
import CurrencyInput from "@/components/CurrencyInput";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-xl text-primaryDarker p-5 text-center">
        Encontre a sua próxima <span className="text-primary">viagem!</span>
      </h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde deseja ir?" />
        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de ida"
            onChange={() => {}}
            className="w-full"
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>
      </div>
    </div>
  );
};

export default TripSearch;