import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useAnimation } from "framer-motion";
import Image from "next/image";

type introductionProps = {
  sectionSize: number | null;
};

export const Introduction: React.FC<introductionProps> = ({ sectionSize }) => {
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 50 ? "#000000" : "transparent",
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  return (
    <>
      <section
        id="inicio"
        className="w-full grid grid-cols-2 justify-center items-center relative px-[10vw] py-[calc(10vh+20px)] bg-center bg-full bg-no-repeat"
      >
        <div className="h-full flex justify-center items-center md:items-start flex-col row-span-2 col-span-2 md:col-span-1 md:row-span-1">
          <h1 className="text-[calc(1.75vw+15px)] leading-[1] text-[var(--text-dark)] font-bold tracking-wider w-full text-center md:text-start flex flex-col">
            <strong className="font-bold text-[calc(2.75vw+15px)] gradiente">
              Eleve e impulsione, <br />
            </strong>
            o nível do seu negócio
          </h1>
          <h3 className="text-[calc(1vw+15px)] text-[var(--text-dark2)] mt-[calc(20px-2vh)] mb-[calc(60px-2vh)] w-full text-center md:text-start">
            Digitalizando empresas
          </h3>
          <Link
            smooth
            spy
            duration={1000}
            offset={
              sectionSize !== null
                ? -Math.round(window.innerHeight / 2 - sectionSize / 2)
                : 0
            }
            to={"servicos"}
            className="services_nav_button gap-x-2 relative flex h-[calc(2.75vh+5px)] md:h-[calc(5.5vh+10px)] w-[30vw] md:w-fit items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#f13f41] to-[var(--main-purpleVariant)] text-[var(--text-light)] shadow-[0_15px_30px_-12px_rgba(15,0,30,1)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:before:bg-[var(--main-purpleVariant)] before:duration-500 before:ease-out hover:shadow-[var(--main-purpleVariant)] hover:before:h-56 hover:before:w-56 hover:before:scale-105"
          >
            <div className="grid grid-cols-4 items-center justify-center gap-x-[calc(.6vw+2px)] px-[calc(1vw+4px)]">
              <p className="text-[calc(.2vw+15px)] z-10 col-span-3 col-start-1 text-center">
                Serviços
              </p>
              <svg
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1.6vw 1.2vh"
                fill="none"
                className="svg_logo w-[20px] h-[8px] translate-y-1/4 col-span-1 col-start-4 text-center"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L9.91628 6.14782"
                  stroke="#eee"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M10 6.14783L18.9163 1.00001"
                  stroke="#eee"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </Link>
        </div>
        <Image
          src="/logo_introduction.png"
          width={1000}
          height={1000}
          alt="Logo com efeito"
          className="lg:w-[100%] blur-sm md:blur-none -z-10 md:right-32 top-16 md:top-32 col-start-1 lg:col-start-2 absolute md:static "
        />
      </section>
    </>
  );
};
