interface TripDescriptionPorps {
  tripDescription: string;
}

const TripDescription = ({ tripDescription }: TripDescriptionPorps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-primaryDarker font-semibold">Sobre a viagem</h2>
      <p className="text-xs text-primaryDarker mt-2">{tripDescription}</p>
    </div>
  );
};

export default TripDescription;
