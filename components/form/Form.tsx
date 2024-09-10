import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ServiceOption {
  name: string;
  id: string;
}

interface FormSubmitSettings {
  form: string;
  button: string;
  success: string;
  error: string;
}

// class FormSubmit {
//   settings: FormSubmitSettings;
//   form: HTMLFormElement | null;
//   formButton: HTMLButtonElement | null;
//   url: string | null;

//   constructor(settings: FormSubmitSettings) {
//     this.settings = settings;
//     this.form = document.querySelector(settings.form);
//     this.formButton = document.querySelector(settings.button);
//     this.url = this.form ? this.form.getAttribute("action") : null;
//     this.sendForm = this.sendForm.bind(this);
//   }

//   displaySuccess() {
//     if (this.form) {
//       this.form.innerHTML = this.settings.success;
//     }
//   }

//   displayError() {
//     if (this.form) {
//       this.form.innerHTML = this.settings.error;
//     }
//   }

//   getFormObject() {
//     const formObject: { [key: string]: string } = {};
//     if (this.form) {
//       const fields = this.form.querySelectorAll<
//         HTMLInputElement | HTMLTextAreaElement
//       >("[name]");
//       fields.forEach((field) => {
//         formObject[field.getAttribute("name") as string] = field.value;
//       });
//     }
//     return formObject;
//   }

//   onSubmission(event: Event) {
//     event.preventDefault();
//     const target = event.target as HTMLButtonElement;
//     target.disabled = true;
//     target.innerText = "Enviando ...";
//   }

//   async sendForm(event: Event) {
//     try {
//       this.onSubmission(event);
//       if (this.url) {
//         await fetch(this.url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//           body: JSON.stringify(this.getFormObject()),
//         });
//       }
//       this.displaySuccess();
//     } catch (error) {
//       this.displayError();
//       throw new Error(String(error));
//     }
//   }

//   init() {
//     if (this.form && this.formButton) {
//       this.formButton.addEventListener("click", this.sendForm);
//     }
//     return this;
//   }
// }

export const Form = () => {
  const servicesOptions: ServiceOption[] = [
    { name: "Blog", id: "blog" },
    { name: "Cartão de Visita Digital", id: "cartao de visita digital" },
    { name: "Loja Virtual", id: "loja virtual" },
    { name: "Página Estática", id: "pagina estatica" },
    { name: "Outros", id: "outros" },
  ];

  const [openSelect, setOpenSelect] = useState(false);
  const [selectText, setSelectText] = useState("Selecione o serviço desejado");
  const [outros, setOutros] = useState("");

  // useEffect(() => {
  //   const formSubmit = new FormSubmit({
  //     form: "[data-form]",
  //     button: "[data-button]",
  //     success: "<h1 id='success'>Pedido enviado!</h1>",
  //     error: "<h1 id='error'>Não foi possível enviar seu pedido.</h1>",
  //   });
  //   formSubmit.init();
  // }, []);

  const var_randomTime = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const buttonSubmit: HTMLElement | null =
      document.getElementById("buttonSubmit");
    if (buttonSubmit) {
      buttonSubmit.classList.add("loading");
      buttonSubmit.innerText = "";
    }
    setTimeout(() => {
      if (buttonSubmit) {
        buttonSubmit.classList.remove("loading");
      }

      const formElement: HTMLElement | null =
        document.getElementById("insideForm");

      const message: HTMLElement | null = document.getElementById("loaded");

      const formTitle: HTMLElement | null = document.getElementById("title");

      if (formElement && message && formTitle) {
        formElement.style.visibility = "hidden";
        formElement.style.pointerEvents = "none";

        formTitle.style.visibility = "hidden";
        formTitle.style.pointerEvents = "none";

        message.style.display = "block";
      }
    }, var_randomTime);
  };

  return (
    <>
      <AnimatePresence>
        <motion.section
          id="form"
          className="flex justify-center items-center flex-col h-fit py-12 xl:py-24 relative"
        >
          <div className="w-full xl:w-[75%] rounded-2xl py-10 backdrop-blur-lg relative">
            <div id="loaded">
              <span>Seu pedido foi enviado com sucesso!</span>
            </div>
            <div className="flex flex-col xl:flex-row justify-between items-center gap-x-[10%] px-[5vw] ">
              <h2
                id="title"
                className="text-[var(--text-dark2)] text-[7vw] xl:text-[calc(1.5vw+5px)] xl:text-center pb-20 font-semibold"
              >
                Entre em contato conosco agora mesmo!
              </h2>
              <form
                id="insideForm"
                method="POST"
                data-form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/ajax/renanlaramelo@gmail.com"
                className="h-full w-full flex flex-col justify-start items-center gap-y-[calc(3vh-10px)] bg-[var(--white-transparent)] py-[5vh] rounded-xl shadow-2xl"
              >
                <input
                  type="text"
                  required
                  name="Nome"
                  placeholder="Nome"
                  className="w-[calc(100%-80px)] px-4 py-2 bg-[var(--text-dark2)] text-[var(--text-light2)] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--form-inputColor)] focus:text-[var(--text-light)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
                />
                <input
                  type="email"
                  required
                  name="Email"
                  placeholder="E-mail"
                  className="w-[calc(100%-80px)] px-4 py-2 bg-[var(--text-dark2)] text-[var(--text-light2)] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--form-inputColor)] focus:text-[var(--text-light)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
                />
                <div className="z-30 w-[calc(100%-80px)] bg-[var(--text-dark2)]  rounded-md text-lg relative">
                  <h4
                    onClick={() => setOpenSelect(!openSelect)}
                    className={`z-20 cursor-pointer px-4 py-2 rounded-md duration-300 text-[var(--form-selectText)] shadow-[0_4px_10px_rgba(0,0,0,1)] hover:bg-[var(--form-inputColor)] hover:shadow-[0_4px_10px_rgba(94,0,218,.55)] ${
                      openSelect
                        ? "bg-[url(/close_menu.png)]"
                        : "bg-[url(/open_menu.png)]"
                    } bg-no-repeat bg-[98%_55%]`}
                  >
                    {selectText}
                  </h4>
                  <AnimatePresence>
                    {openSelect && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        className=" -z-20 flex flex-col rounded-b-md w-full bg-[var(--text-dark2)] overflow-hidden rounded-md"
                      >
                        {servicesOptions.map((service, index) => (
                          <motion.span
                            key={index}
                            onClick={() => {
                              setSelectText(service.name);
                              setOpenSelect(!openSelect);
                              setOutros(service.name);
                            }}
                            className={`px-4 py-2 duration-300 hover:bg-[var(--form-inputColor)] text-[var(--form-selectText)] hover:text-[var(--text-light)] cursor-pointer rounded-md ${
                              selectText === service.name
                                ? "bg-[var(--input-inputSelectedColor)]"
                                : "bg-transparent"
                            } `}
                          >
                            {service.name}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="hidden"
                  name="Serviço"
                  value={selectText}
                  readOnly
                />
                <AnimatePresence>
                  {outros === "Outros" && (
                    <motion.input
                      initial={{ width: 0, height: 0 }}
                      animate={{ width: "calc(100% - 80px)", height: "auto" }}
                      exit={{ width: 0, height: 0 }}
                      type="text"
                      name="Serviço diferente"
                      required
                      placeholder="Serviço desejado"
                      className="w-[calc(100%-80px)] px-4 py-2 bg-[var(--text-dark2)] text-[var(--text-light)] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--form-inputColor)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
                    />
                  )}
                </AnimatePresence>
                <textarea
                  name="Descrição"
                  placeholder="Descrição"
                  className="w-[calc(100%-80px)] px-4 py-2 min-h-[150px] bg-[var(--text-dark2)] resize-none text-[var(--text-light2)] rounded-lg text-lg outline-none duration-300 shadow-[0_4px_10px_rgba(0,0,0,1)] focus:bg-[var(--form-inputColor)] focus:text-[var(text-light)] focus:shadow-[0_4px_10px_rgba(94,0,218,.55)]"
                ></textarea>
                <button
                  id="buttonSubmit"
                  type="submit"
                  value="Enviar"
                  data-button
                  className="w-[calc(100%-80px)] xl:w-[10vw] px-4 py-2 shadow-[0_4px_10px_rgba(94,0,218,.55)] bg-[var(--form-inputColor)] text-[var(--text-light)] rounded-lg text-lg hover:bg-[#303030] duration-300 hover:shadow-[0_4px_10px_rgba(250,250,250,.5)] hover:border-[#aaa] border border-transparent"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
};
