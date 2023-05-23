import Banner from "./Banner";
import ItemPropiedad from "./ItemPropiedad";

const HomePage = () => {
  return (
    <div className="bg-gray-800">
      {" "}
      <Banner /> {/* section inmoviliaria */}
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          <ItemPropiedad />
          <ItemPropiedad />
          <ItemPropiedad />
          <ItemPropiedad />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
