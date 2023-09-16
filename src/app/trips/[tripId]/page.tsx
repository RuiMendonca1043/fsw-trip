import React from "react";
import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

const TripsDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div>
      <TripHeader trip={trip} />
    </div>
  );
};

export default TripsDetails;
