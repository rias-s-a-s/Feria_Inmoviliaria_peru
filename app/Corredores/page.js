"use client";
import { useState } from "react";
import SeccionPage from "../SeccionPage";
import ItemTeam from "./ItemTeam";
import ModalTeam from "./ModalTeam";

const Corredores = () => {
  const [Modal, setModal] = useState({
    show: false,
    data: null,
  });
  return (
    <div>
      <SeccionPage title={"Corredores"} />

      {Modal.show && <ModalTeam Modal={Modal} setModal={setModal} />}

      {/* component */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">
            Disponemos de los mejores equipos del mercado{" "}
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Conoce a los miembros de nuestro corredores{" "}
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ItemTeam setModal={setModal} />

          <ItemTeam setModal={setModal} />
          <ItemTeam setModal={setModal} />
          <ItemTeam setModal={setModal} />
          <ItemTeam setModal={setModal} />
          <ItemTeam setModal={setModal} />
        </div>
      </section>
    </div>
  );
};

export default Corredores;
