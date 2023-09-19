import Image from "next/image";
import Button from "@/components/Button";
interface TripLocationProps {
  location: string;
  description: string;
}

const TripLocation = ({ location, description }: TripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="shadow-md rounded-lg"
        />
      </div>
      <h3 className="text-primaryDarker text-sm font-semibold mt-3">
        {location}
      </h3>
      <p className="text-xs text-primaryDarker mt-2 leading-5">{description}</p>
      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;