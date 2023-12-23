export default function Home() {
  const technologies = [
    "React",
    "React Native",
    "SCSS",
    "WordPress",
    "JavaScript",
    "TypeScript",
    "PHP",
  ];
  const TechList = () => (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {technologies.map((tech, index) => (
        <li key={index} className="mr-1.5 mt-2">
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
            {tech}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <main>
      <div className="grid w-10/12 mx-auto grid-cols-2 grid-rows-1  gap-2">
        <div className="col-span-1 p-3 flex flex-col justify-evenly h-full">
          <div className="w-4/5">
            <h1 className="text-5xl text-slate-200 font-bold pb-6">
              Fagner Aureliano
            </h1>
            <p className="text-slate-300 pb-1">Full Stack Web Developer</p>
            <p className="text-slate-300 ">
              Passionate about crafting exceptional and accessible digital
              experiences for the web.
            </p>
          </div>

          <div>
            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="  w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-slate-100 group-focus-visible:text-slate-100">
                      Projects
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className="ml-1  flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-400"
                  href="https://github.com/fagneraureliano"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-400"
                  href="https://twitter.com/bchiang7"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Twitter (opens in a new tab)"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-400"
                  href="https://www.linkedin.com/in/fagneraureliano/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="rightSide"
          className="mb-16 p-3 col-span-1  h-screen overflow-auto scroll-smooth focus:scroll-auto scrollbar-hide"
        >
          <div
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <p>About me</p>
            <p>
              Sou um profissional apaixonado por desafios na área de Tecnologia
              da Informação, dedicado a proporcionar soluções eficientes e
              inovadoras. Com experiência abrangente no desenvolvimento web,
              especializando-me em PHP, HTML, CSS e MySQL, destaco-me pela
              capacidade de criar soluções customizadas para atender às demandas
              específicas de cada projeto. Minha atuação também abrange a
              administração de infraestrutura, com expertise em configuração de
              sistemas SAP e WMS, administração de ambientes VMWare e gestão de
              sistemas mobile. Ao longo da minha carreira, tenho mantido um
              compromisso constante com a integridade e eficiência operacional
              dos recursos tecnológicos. Além das habilidades técnicas, minha
              abordagem proativa na resolução de problemas e a busca contínua
              por atualização e aprimoramento refletem meu comprometimento com a
              excelência profissional. Estou pronto para enfrentar novos
              desafios e contribuir significativamente para o sucesso de
              projetos e operações na área de TI.
            </p>
          </div>{" "}
          <div
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <p>Experience</p>

            <div className="grid grid-cols-2 grid-rows-1">
              <div className="col-span-1 w-1/2">
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="July to December 2017"
                >
                  July — Dec 2017
                </header>
              </div>

              <div className="col-span-1">
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <a
                      href="https://"
                      target="_blank"
                      rel="name project"
                      aria-label="Lead Engineer at Upstatement (opens in a new tab)"
                    >
                      <div>
                        <span>
                          Lead Engineer
                          <span className="inline-block">
                            Upstatement
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </a>

                    <div>
                      <div className="text-slate-500" aria-hidden="true">
                        Senior Engineer
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-500" aria-hidden="true">
                        Engineer
                      </div>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    Deliver high-quality, robust production code for a diverse
                    array of projects for clients including Harvard Business
                    School, Everytown for Gun Safety, Pratt Institute, Koala
                    Health, Vanderbilt University, The 19th News, and more.
                    Provide leadership within engineering department through
                    close collaboration, knowledge shares, and mentorship.
                  </p>
                </div>
              </div>
              <div className="col-span-2">

                  <TechList />
              </div>
            </div>
          </div>
          <div
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <p>Projects</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              a, non ducimus dolorum eveniet quas in explicabo necessitatibus
              nesciunt ab at nostrum quaerat iure similique consequatur nemo
              quisquam asperiores. Beatae?
            </p>
          </div>{" "}
        </div>
      </div>
    </main>
  );
}
