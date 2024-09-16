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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const [activeItem, setActiveItem] = useState("home");

  const menuItems = [
    { name: "Início", id: "inicio", offset: headerHeight ?? 0 },
    { name: "Serviços", id: "servicos", offset: sectionSize ?? 0 },
    { name: "Cases", id: "cases", offset: headerHeight ?? 0 },
    { name: "Sobre", id: "sobre", offset: headerHeight ?? 0 },
  ];

  const mobileMenuItems = [
    { name: "Início", id: "inicio" },
    { name: "Serviços", id: "servicos" },
    { name: "Cases", id: "cases" },
    { name: "Sobre", id: "sobre" },
    { name: "Contato", id: "form" },
  ];

  return (
    <>
      <div>
        <AnimatePresence>
          <motion.header
            ref={headerRef}
            id="header"
            className="fixed xl:absolute grid grid-cols-3 justify-between items-center px-[2vw] xl:px-[calc(3.5vw+10px)] w-full z-40 backdrop-blur-lg"
            initial={{ backgroundColor: "transparent" }}
            animate={controls}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="#000"
              onClick={handleToggle}
              className="absolute right-6"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
            {isOpen && (
              <nav className="absolute bg-[#eee] w-4/5 h-[100vh] right-0 top-0 flex flex-col p-10">
                <svg
                  onClick={handleToggle}
                  width="30"
                  height="30"
                  viewBox="0 0 130 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-4 right-4"
                >
                  <path
                    d="M9.13855 120.861L120.861 9.13846"
                    stroke="black"
                    strokeWidth="17"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.13855 9.13843L120.861 120.861"
                    stroke="black"
                    strokeWidth="17"
                    strokeLinecap="round"
                  />
                </svg>
                {mobileMenuItems.map((item) => (
                  <Link
                    smooth
                    spy
                    duration={1000}
                    to={item.id}
                    key={item.id}
                    className="text-[5vw]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
            <Image
              src="/logo_purple.png"
              alt="Logo"
              width={300}
              height={300}
              className="w-[calc(40vw+20px)] xl:w-[calc(12vw+20px)] cursor-pointer"
              onClick={scrollTop}
            />
            <nav className="w-fit flex justify-center items-end text-center translate-y-1">
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

            <Link
              smooth
              spy
              duration={1000}
              to={"form"}
              className="hidden w-1/3 services_nav_button relative text-[1vw] justify-self-end gap-x-2 px-6 py-2 md:w-fit xl:flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-tr from-[#f13f41] to-[var(--main-purpleVariant)] text-[var(--text-light)] shadow-[0_10px_20px_-12px_rgba(15,0,30,.5)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full hover:before:bg-[var(--main-purpleVariant)] before:duration-500 before:ease-out hover:shadow-[var(--main-purpleVariant)] hover:before:h-56 hover:before:w-56 hover:before:scale-105"
            >
              <p className="z-10">Contato</p>
            </Link>
          </motion.header>
        </AnimatePresence>
      </div>
    </>
  );
};
