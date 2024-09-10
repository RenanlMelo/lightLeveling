import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import Image from "next/image";

type headerProps = {
  sectionSize: number | null;
};

export const Header: React.FC<headerProps> = ({ sectionSize }) => {
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
      backgroundColor: scrollY > 50 ? "#ffffff80" : "transparent",
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight);
      }
    };

    getHeaderHeight();

    window.addEventListener("resize", getHeaderHeight);

    return () => {
      window.removeEventListener("resize", getHeaderHeight);
    };
  }, []);

  const [activeItem, setActiveItem] = useState("home");
  const menuItems = [
    { name: "Início", id: "inicio", offset: headerHeight ?? 0 },
    { name: "Serviços", id: "servicos", offset: sectionSize ?? 0 },
    { name: "Cases", id: "cases", offset: headerHeight ?? 0 },
    { name: "Sobre", id: "sobre", offset: headerHeight ?? 0 },
  ];

  return (
    <>
      <div>
        <AnimatePresence>
          <motion.header
            ref={headerRef}
            id="header"
            className="fixed grid grid-cols-2 justify-center items-center px-[2vw] xl:px-[calc(3.5vw+10px)] w-full z-40 backdrop-blur-lg"
            initial={{ backgroundColor: "transparent" }}
            animate={controls}
          >
            <Image
              src="/logo_purple.png"
              alt="Logo"
              width={300}
              height={300}
              className="w-[calc(40vw+20px)] xl:w-[calc(12vw+20px)] cursor-pointer"
              onClick={scrollTop}
            />
            <nav className="w-full flex justify-end items-end text-center translate-y-1">
              <ul className="text-[calc(.75vw+3px)] uppercase font-semibold text-[var(--text-dark)] hidden xl:flex gap-x-6">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${activeItem === item.id ? "active" : ""}`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    <Link
                      className="transition cursor-pointer duration-100 after:block after:h-[2px] rounded-full after:bg-gradient-to-tr after:from-[var(--main-purple)] after:to-[var(--secondary-red)] after:w-full after:scale-x-0 after:hover:scale-x-110 after:transition after:duration-300 after:origin-center after:translate-y-px"
                      activeClass="active"
                      smooth
                      spy
                      onClick={() => {
                        console.log(sectionSize), console.log(item.offset);
                      }}
                      duration={800}
                      offset={
                        sectionSize !== null &&
                        headerHeight !== null &&
                        item.offset === sectionSize
                          ? -Math.round(
                              window.innerHeight / 2 - sectionSize / 2
                            )
                          : -item.offset
                      }
                      to={`${item.id}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.header>
        </AnimatePresence>
      </div>
    </>
  );
};
