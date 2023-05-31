"use client";
import { Divider } from "@tremor/react";
import Banner from "./Banner";
import BodyMain from "./BodyMain";

import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import LargeCard from "./LargeCard";
import NewSectionNoticias from "./NewSectionNoticias";

const HomePage = () => {
  const exploreData = [
    {
      img: "https://links.papareact.com/5j2",
      location: "Lima",
      distance: "45-Minutos conduciendo",
    },
    {
      img: "https://links.papareact.com/1to",
      location: "Arequipa",
      distance: "4.5-Hora conduciendo",
    },
    {
      img: "https://links.papareact.com/40m",
      location: "Trujillo",
      distance: "4.5-Hora conduciendo",
    },
    {
      img: "https://links.papareact.com/msp",
      location: "Chiclayo",
      distance: "4-Hora conduciendo",
    },
    {
      img: "https://links.papareact.com/2k3",
      location: "Iquitos",
      distance: "45-minute drive",
    },
    {
      img: "https://links.papareact.com/ynx",
      location: "Huancayo",
      distance: "4.5-Hora conduciendo",
    },
    {
      img: "https://links.papareact.com/kji",
      location: "Chimbote",
      distance: "6-Hora conduciendo",
    },
    {
      img: "https://links.papareact.com/41m",
      location: "Tacna",
      distance: "2-Hora conduciendo",
    },
  ];

  const CardsData = [
    {
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways",
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays",
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes",
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed",
    },
  ];
  return (
    <div>
      {/* <BodyMain />
      <Divider /> */}

      {/* Seccion Noticias */}
      <h1 className="text-center font-bold text-2xl text-blue-800">
        Noticias Destacadas{" "}
      </h1>
      {/* <div className="max-w-6xl mx-auto grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        <ItemNoticia />
        <ItemNoticia />
        <ItemNoticia />
      </div> */}
      <NewSectionNoticias />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16  ">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">
            Explorar los alrededores
          </h2>
          {/* pull some data from a server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, key) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={key}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Projectos destacados</h2>
          <h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
              {CardsData?.map((item) => (
                <MediumCard key={item.img} img={item.img} title={item.title} />
              ))}
            </div>
          </h2>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="Tu hogar, sin límites."
          description="Encuentra tu hogar sin fronteras con nuestra inmobiliaria."
          buttonText="Inspírate"
        />
      </main>
    </div>
  );
};

export default HomePage;
