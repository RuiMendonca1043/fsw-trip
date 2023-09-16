import React from "react";
import { Trip } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

interface TripHeaderProps {
  trip: Trip;
}

const TripHeader = ({trip}: TripHeaderProps) => {
  return (
    <div className="container  mx-auto">
      <div className="relative h-[300px] w-full">
        <Image
          src={trip?.coverImage}
          style={{
            objectFit: "cover",
          }}
          alt={trip?.name}
          fill
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="text-primaryDarker font-semibold text-xl">
          {trip?.name}
        </h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip?.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">{trip?.location}</p>
        </div>
        <p className="text-xs text-grayPrimary ">
          <span className="text-primary font-medium">
            {trip?.pricePerDay.toString()}€
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
};

export default TripHeader;
