import React from "react";
import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader";
import TripReservation from "./components/TripReservation";
import TripDescription from "./components/TripDescriotion";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";

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
      <TripReservation trip={trip} />
      <TripDescription tripDescription={`${trip.description}`} />
      <TripHighlights highlights={trip.highlights} />
      <TripLocation
        location={trip.location}
        description={trip.locationDescription}
      />
    </div>
  );
};

export default TripsDetails;
