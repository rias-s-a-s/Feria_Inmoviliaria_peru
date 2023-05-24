import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px]">
      <Image src="https://links.papareact.com/0fm" fill={true} alt="Banner" />

      <div className="absolute top-[30%] text-center w-full">
        <div className="rounded-xl bg-white/30 px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
          {/* <p className="text-sm sm:text-2xl">
            Encuentra el hogar de tus sueños
          </p> */}

          <div className="container  mx-auto flex justify-center items-center p-2 md:p-0">
            <p className="text-sm sm:text-2xl">
              Encuentra el hogar de tus sueños
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
