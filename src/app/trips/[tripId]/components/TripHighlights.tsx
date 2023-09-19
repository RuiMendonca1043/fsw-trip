import Image from "next/image";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-primaryDarker font-semibold">Destaques</h2>
      <div className="flex flex-wrap gap-y-3 lg:mt-5">
        {highlights.map((h, i) => (
          <div key={h} className="flex items-center gap-2 lg:gap-3 w-1/2">
            <Image src="/check-icon.png" width={15} height={15} alt={h} />
            <p className="text-grayPrimary text-xs lg:text-base">{h}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHighlights;
