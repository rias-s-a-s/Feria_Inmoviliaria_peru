import React from "react";
import {
  HiOutlineZoomIn,
  HiOutlineZoomOut,
  HiDocumentText,
  HiDocument,
} from "react-icons/hi";

function InclusionItem({ setOpen, open, setZoom, zoom, setContraste }) {
  return (
    <>
      {open && (
        // <div className=" bg-slate-800 bg-opacity-50 z-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-slate-800 bg-opacity-50 fixed z-[60] w-full h-full inset-0">
          <div className="sticky top-[12%] flex justify-center">
            <div className="bg-white rounded-lg shadow w-full sm:max-w-2xl lg:h-auto max-h-[800px] sm:max-h-[500px] lg:max-h-[600px] overflow-auto">
              <button
                type="button"
                title="Cerrar Inclusión"
                name="Cerrar Inclusión"
                onClick={() => setOpen(false)}
                className="flex mb-[-1.2rem] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto"
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-w-8 text-[#005335] hover:text-[#006F46]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                style={{ padding: "0 1rem 1rem 1rem" }}
                className="text-center"
              >
                <h3 className="mt-3 mb-4 mx-6 text-2xl text-[#005335] font-bold">
                  Aumentar o Disminuir Tamaño de la Fuente
                </h3>
                <span className="text-5xl flex place-content-evenly">
                  <HiOutlineZoomIn
                    title={"Aumentar Letra"}
                    className="cursor-pointer text-[#006F46]"
                    onClick={() => setZoom(zoom + 0.1)}
                  />
                  <HiOutlineZoomOut
                    title={"Disminuir Fuente"}
                    className="cursor-pointer text-[#006F46]"
                    onClick={() => setZoom(zoom - 0.1)}
                  />
                </span>

                <h3 className="mt-6 mb-4 mx-6 text-2xl text-[#005335] font-bold">
                  Escala de Grises
                </h3>
                <span className="text-5xl flex place-content-evenly">
                  <HiDocument
                    title={"Activar Escala de Grises"}
                    className="cursor-pointer text-[#006F46]"
                    onClick={() => setContraste(true)}
                  />
                  <HiDocumentText
                    title={"Desactivar Escala de Grises"}
                    className="cursor-pointer text-[#006F46]"
                    onClick={() => setContraste(false)}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InclusionItem;
