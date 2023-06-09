import Image from "next/image";
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-5 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} fill={true} className="rounded-lg" alt={img} />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
