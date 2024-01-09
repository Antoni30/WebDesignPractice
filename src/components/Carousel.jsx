import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousel({ children }) {
  const [curr, setCurr] = useState(0);
  const [sliders, setSliders] = useState(0)
  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - sliders : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - sliders ? 0 : curr + 1));
  const [tam, setTam] = useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      // Cambiar la lógica según tus necesidades
      const transformValue = windowWidth < 700 ?  16 :  33;
      const sliderTam = windowWidth < 700 ?  1 :  4;
      // Actualizar el estado con el nuevo valor
      setSliders(sliderTam);
      setTam(transformValue);
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [curr]);

  return (
    <div className="relative w-1/2 h-5/6 overflow-hidden tam-Container">
      <h1 className="text-center text-3xl">Galeria Animales </h1>
      <div
        className="flex w-[1800px] h-full justify-center items-center absolute transition-transform ease-out duration-500 cont-Gal"
        style={{ transform: `translateX(-${curr * tam}%) ` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex justify-between items-center ">
        <button onClick={prev} className="styleButtons">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="styleButtons">
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-1 right-0 left-0 ">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) =>
            i <  sliders? (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-slate-600 rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
