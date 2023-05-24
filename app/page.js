import { Divider } from "@tremor/react";
import Banner from "./Banner";
import BodyMain from "./BodyMain";
import ItemNoticia from "./ItemNoticia";
import ItemPropiedad from "./Proyectos/ItemPropiedad";

const HomePage = () => {
  return (
    <div>
      <BodyMain />
      <Divider />

      {/* Seccion Noticias */}
      <h1 className="text-center font-bold text-2xl text-blue-800">
        Noticias Destacadas{" "}
      </h1>
      <div className="max-w-5xl mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        <ItemNoticia />
        <ItemNoticia />
        <ItemNoticia />
      </div>
      <Banner />

      {/* section inmoviliaria */}
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
