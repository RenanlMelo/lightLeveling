import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { log } from "console";

export const About = () => {
  interface Data {
    id: string;
    name: string;
    description: string;
  }

  const data: Data[] = [
    {
      id: "data1",
      name: "Quem Somos",
      description:
        "Na Leveling, transformamos ideias em soluções tecnológicas inovadoras. Nosso objetivo é oferecer uma experiência única e resultados que superam expectativas. Com uma equipe multidisciplinar e comprometida com o sucesso, nos inserimos no dia a dia dos nossos clientes para compreender suas dores, necessidades e desejos, entregando projetos personalizados e sob medida.",
    },
    {
      id: "data2",
      name: "O que fazemos",
      description:
        "Focados principa lmente no desenvolvimento de sites, atendemos às necessidades específicas dos nossos clientes, proporcionando a inserção no mundo digital e impulsionando seu crescimento e sucesso. Seja para criar um site do zero ou melhorar uma plataforma existente, estamos comprometidos em auxiliar na jornada de transformação da sua ideia.",
    },
  ];

  const [toggle, setToggle] = useState<Data>(data[0]);

  const handleClick = (itemId: string) => {
    const newItem = data.find((item) => item.id === itemId);
    if (newItem) {
      setToggle(newItem);
    }
    console.log(toggle);
    console.log(itemId);
  };

  return (
    <section
      id="sobre"
      className="flex flex-col justify-center items-center py-12"
    >
      <h2 className="text-[var(--text-dark)] text-[7vw] xl:text-[2.25vw] tracking-wide xl:mt-12">
        Sobre
      </h2>
      <div className="flex flex-col justify-center items-start px-[5vw] xl:px-[20vw] relative">
        <div className="flex gap-x-8 p-4 xl:p-8 w-full">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`aboutButton ${
                item.id === toggle.id
                  ? "w-full xl:w-auto before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-[75%] before:h-[2px] before:-translate-x-1/2 before:bg-[var(--black-05)]"
                  : "w-full xl:w-auto"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col justify-start items-start h-full bg-[var(--white-transparent)] p-8 xl:p-16 rounded-2xl">
          <AnimatePresence mode="wait">
            <div key={toggle.id}>
              <motion.h3
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-[var(--text-dark2)] text-[6vw] xl:text-[2vw] font-semibold p-6"
              >
                {toggle.name}
              </motion.h3>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="text-[4.5vw] xl:text-[calc(.6vw+8px)] leading-9 text-[var(--text-dark2)]"
              >
                {toggle.description}
              </motion.p>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
