import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image src="https://links.papareact.com/0fm" fill={true} alt="Banner" />

      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {" "}
          I am Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
