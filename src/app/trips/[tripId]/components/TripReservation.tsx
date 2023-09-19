"use client";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Trip } from "@prisma/client";
import { useForm } from "react-hook-form";
import { error } from "console";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: string;
}
const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripReservationForm>();
  const onSubmit = (data: TripReservationForm) => {};
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
          {...register("guests", {
            required: {
              value: true,
              message: "Número de hóspedes obrigatório.",
            },
          })}
          placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
          className="mt-3"
          error={!!errors?.guests}
          errorMessage={errors?.guests?.message}
        />

        <div className="flex justify-between mt-3">
          <p className="text-primaryDarker font-medium text-sm">
            Total (2 noites)
          </p>
          <p className="text-primaryDarker font-medium text-sm">500€</p>
        </div>

        <div className="pb-10 border-b border-grayPrimary w-full">
          <Button
            onClick={() => handleSubmit(onSubmit)()}
            className="mt-3 w-full"
          >
            Reservar agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripReservation;
