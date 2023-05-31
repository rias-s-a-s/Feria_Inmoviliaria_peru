import { Divider } from "@tremor/react";
import React from "react";

const NewSectionNoticias = () => {
  return (
    <div className="px-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-center ">
      <div className="lg:col-span-2  px-2 w-full  mx-auto">
        <section>
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/Kyiv-miercoles.jpg?quality=100&strip=info&w=460&h=260&crop=1"
            alt="img"
            className="w-full "
          />
          <h1 className="font-sans text-[32px] font-medium mb-2 line-clamp-3 overflow-hidden max-h-[132px]">
            La guerra se extiende cada vez más a territorio ruso
          </h1>

          <p className="font-sans text-[#727272]">
            Un ataque masivo en la región rusa de Belgorod causa cuatro heridos,
            según el gobernador, tras el ataque con drones en Moscú. Además, un
            dron se estrelló en una refinería de petróleo de la región rusa de
            Krasnodar, según autoridades.
          </p>
        </section>
        <Divider />
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/ron-desantis-230310-file.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">POLÍTICA</h2>

            <p className="font-sans text-sm px-2">
              DeSantis dice que dará contragolpes a los ataques de Trump
            </p>
          </div>
        </section>
        <Divider />
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/02/GettyImages-1245419320.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">COLOMBIA</h2>

            <p className="font-sans text-sm px-2">
              Petro anuncia que Colombia se reintegra a Unasur
            </p>
          </div>
        </section>
        <Divider />
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/us-national-debt-pin.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">ANÁLISIS</h2>

            <p className="font-sans text-sm px-2">
              Petro anuncia que Colombia se reintegra a Unasur
            </p>
          </div>
        </section>
      </div>
      <div>
        {/* noticia 2 */}
        <section>
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/Willis-Ascharzenegger.webp?w=1024"
            alt="noticia 2"
            className="w-full object-contain"
          />
          <h2 className="text-[#c00] pt-2">Celebridades</h2>
          <h3 className="line-clamp-3 overflow-hidden max-[84px] text-[#262626] font-bold ">
            Arnold Schwarzenegger dice que su amigo Bruce Willis será recordado
            así
          </h3>
        </section>
        <Divider />
        <section>
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/seyfried-holmes-split.jpeg?quality=100&strip=info&w=1024"
            alt="noticia 2"
            className="w-full object-contain"
          />
          <h2 className="text-[#c00] pt-2">
            Amanda Seyfried dice que la sentencia de Elizabeth Holmes es justa
          </h2>
          <h3 className="line-clamp-3 overflow-hidden max-[84px] text-[#262626] font-bold ">
            Arnold Schwarzenegger dice que su amigo Bruce Willis será recordado
            así
          </h3>
        </section>
        <section>
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/mejores-aerolineas-2023-ranking-1.jpg?quality=100&strip=info&w=1024"
            alt="noticia 2"
            className="w-full object-contain"
          />
          <h2 className="text-[#c00] pt-2">CELEBRIDADES</h2>
          <h3 className="line-clamp-3 overflow-hidden max-[84px] text-[#262626] font-bold ">
            Amanda Seyfried dice que la sentencia de Elizabeth Holmes es justa
          </h3>
        </section>
      </div>
      <div>
        {" "}
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/jxVcvhHKJkk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold">
          EE.UU. Niño dice que se mira en un ataúd tras ser baleado por un
          policía
        </h1>
        <Divider />
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/ron-desantis-230310-file.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">MÉXICO</h2>

            <p className="font-sans text-sm px-2">
              Quién es Alejandra del Moral, la candidata de Va por México{" "}
            </p>
          </div>
        </section>
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/ron-desantis-230310-file.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">MÉXICO</h2>

            <p className="font-sans text-sm px-2">
              Quién es Alejandra del Moral, la candidata de Va por México{" "}
            </p>
          </div>
        </section>
        <section className="flex  py-1 max-h-[88px] ">
          <img
            src="https://cnnespanol.cnn.com/wp-content/uploads/2023/05/ron-desantis-230310-file.jpeg?quality=100&strip=info&w=105&h=60&crop=1"
            alt="img"
            className="object-cover h-[60px]"
          />
          <div>
            <h2 className="text-[#c00] px-2">MÉXICO</h2>

            <p className="font-sans text-sm px-2">
              Quién es Alejandra del Moral, la candidata de Va por México{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewSectionNoticias;
