"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWheelchair } from "react-icons/fa";
import ItemMenu from "./ItemMenu";
import InclusionItem from "./InclusionItem";
import Link from "next/link";

const MenuPrincipal = ({ setZoom, zoom, setContraste }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className="sticky z-50 top-0 p-2 shadow-2xl md:flex md:items-center md:justify-around bg-[#0188c5] sm:bg-gradient-to-br sm:from-[#0188c5] sm:to-[#0188c5]"
      >
        <div className="flex justify-between items-center md:hidden">
          {/* Escudo Logo "inicio" */}
          <Link href="/">
            <div
              style={{ filter: "drop-shadow(0px 0px 6px #99C5B5)" }}
              className="cursor-pointer"
            >
              <Image
                title="Ir a inicio"
                src="/feria_logo.png"
                width={300}
                height={300}
                alt="Escudo Normal Superior Ibagué"
                className="object-contain"
              />
            </div>
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <div className="">
          <ul
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center z-[-1] md:z-auto md:static gap-2 absolute text-white font-semibold bg-[#003823] md:bg-transparent w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in  ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            <ItemMenu ruta="/Gestiones" setIsOpen={setIsOpen}>
              Gestiones
            </ItemMenu>
            <ItemMenu ruta="" setIsOpen={setIsOpen}>
              Noticias
            </ItemMenu>
            <ItemMenu ruta="" setIsOpen={setIsOpen}>
              Congreso e Investigación
            </ItemMenu>
            <ItemMenu rute="" setIsOpen={setIsOpen}>
              Contáctenos
            </ItemMenu>

            {/* Boton WebMaster */}
            {/* <li className="hidden lg:block">
              <a href="https://ensiibag.sistemasivhorsnet.com/portal/">
                <div className="w-48 h-16 flex flex-row gap-2 items-center justify-center cursor-pointer rounded-lg bg-[#005335] hover:bg-[#003823] p-3">
                  <p className="text-white pr-2 text-lg font-bold">WebMaster</p>
                  <Image
                    src="/Menu/iconoWebmaster.png"
                    width={50}
                    height={50}
                    alt="iconoWebmaster"
                    className="object-contain"
                  />
                </div>
              </a>
            </li> */}

            {/* Boton ley Transparencia */}
            {/* <li className="mx-auto">
              <a href={"/soporteYApoyo/LeyTransparencia"}>
                <div
                  className="w-48 h-16 flex flex-row gap-2 items-center justify-center cursor-pointer rounded-lg bg-[#005335] hover:bg-[#003823] p-3"
                  onClick={(e) => {
                    e.preventDefault();

                    setIsOpen(false);
                  }}
                >
                  <p className="text-white pr-2 text-lg font-bold">
                    Ley de Transparencia
                  </p>
                  <Image
                    src="/Menu/iconoLeyTransparencia.png"
                    width={50}
                    height={50}
                    alt="iconoLeyTransparencia"
                    className="object-contain"
                  />
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Boton de Inclusion */}
      <div
        title="Boton Inclusion"
        className="text-center hidden lg:w-12 lg:h-12 lg:flex lg:sticky z-50 lg:left-[100%] border border-white bg-[#0188c5] text-white place-content-center lg:top-[30%]"
      >
        <button aria-label="inclusion" onClick={() => setOpen(true)}>
          <FaWheelchair className="w-9 h-9" />
        </button>
        <InclusionItem
          setZoom={setZoom}
          zoom={zoom}
          setOpen={setOpen}
          open={open}
          setContraste={setContraste}
        />
      </div>
    </>
  );
};

export default MenuPrincipal;
