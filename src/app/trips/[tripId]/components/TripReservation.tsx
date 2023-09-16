"use client";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip;
}
const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div>
      <div className="flex-fle-col px-5">
        <div className="flex gap-3">
          <DatePicker
            placeholderText="data de inicio"
            onChange={() => {}}
            className="w-full"
          />
          <DatePicker
            placeholderText="data final"
            onChange={() => {}}
            className="w-full"
          />
        </div>

        <Input
          placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
          className="mt-3"
        />

        <div className="flex justify-between mt-3">
          <p className="text-primaryDarker font-medium text-sm">
            Total (2 noites)
          </p>
          <p className="text-primaryDarker font-medium text-sm">500€</p>
        </div>

        <div className="pb-10 border-b border-grayPrimary w-full">
          <Button className="mt-3 w-full">Reservar agora</Button>
        </div>
      </div>
    </div>
  );
};

export default TripReservation;
