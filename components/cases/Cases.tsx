import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const casesData = [
  {
    name: "autosalesbrasil",
    image: "/autosalesbrasil_image.png",
    title: "Auto Sales Brasil",
    subtittle: "E-commerce institucional",
    description: "Website destinado a revenda de veículos",
    url: "https://autosalesbrasil.vercel.app/",
  },
  {
    name: "unilockpisos",
    image: "/unilockpisos_image.png",
    title: "Unilock Pisos",
    subtittle: "Site institucional",
    description:
      "Website institucional destinado a instalação de pisos intertravados",
    url: "https://unilockpisos.com.br",
  },
  {
    name: "pitows",
    image: "/emconstrucao.png",
    title: "Pitows Alfaiataria",
    subtittle: "E-commerce institucional",
    description: "...",
    url: "",
  },
];

export const Cases = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <>
      <section
        id="cases"
        className="w-full flex flex-col justify-center items-center xl:my-12 relative"
      >
        <h1 className="text-[var(--text-dark)] text-[7vw] xl:text-[2.25vw] font-bold tracking-wide pt-12 xl:mb-[calc(5vh+10px)]">
          Cases
        </h1>
        <div className="w-full flex flex-col gap-y-[5vh] xl:grid xl:grid-cols-3 justify-evenly items-center px-[5vw] xl:px-[10vw] gap-x-[5vw]">
          {casesData.map((project, index) => (
            <div
              onMouseEnter={() => setVisibleIndex(index)}
              onMouseLeave={() => setVisibleIndex(null)}
              className="flex flex-col justify-evenly font-sans bg-[var(--white-transparent)] relative rounded-lg overflow-hidden"
              key={index}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt="Imagem de fundo"
                  width={1600}
                  height={900}
                  className="duration-300 aspect-video"
                />
              </a>
              <div className="py-[2vh]">
                <h2 className="text-[6vw] xl:text-[calc(1.15vw+5px)] text-[var(--text-dark)] ml-[2.5vw] pb-[1vh] rounded-3xl w-fit">
                  {project.title}
                </h2>
                <p className="text-[5.5vw] xl:text-[calc(1vw+2px)] ml-[2vw] pb-[2.5vh] xl:pb-[5vh] text-[var(--text-dark2)] w-fit text-start">
                  {project.subtittle}
                </p>
                <p className="text-[5vw] xl:text-[calc(.8vw+2px)] text-[var(--text-dark2)] mx-[2vw]">
                  {project.description}
                </p>
                <span className="w-(calc(100%-2vw)) h-[calc(4vh+10px)] flex justify-end items-center mx-[2vw] py-[2vh] overflow-hidden relative">
                  <AnimatePresence>
                    {visibleIndex === index && (
                      <motion.a
                        href={`${project.url}`}
                        id="saibaMais"
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        exit={{ x: 100 }}
                        transition={{ duration: 0.5 }}
                        className={`hover:decoration-[var(--text-dark2)] decoration-transparent underline-offset-2 underline px-3 py-2 duration-75 ease-linear text-[1vw] whitespace-nowrap mb-4 text-[var(--text-dark)] ${
                          visibleIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {/* Saiba mais */}
                      </motion.a>
                    )}
                  </AnimatePresence>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
