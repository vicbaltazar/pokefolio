"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  const links = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Serviços" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-5xl mx-auto h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase">
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 shadow-[0_0_16px_rgba(59,130,246,0.9)]" />
          <span>Pokefolio</span>
        </div>
        {/* Desktop nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex gap-6 text-sm text-slate-400"
        >
          {links.map((link) => (
            <a
            key={link.href}
            href={link.href}
            className="hover:text-slate-100 transition"
            >
              {link.label}
              </a>
            ))}
        </nav>

        {/* mobile button */}
        <button
          type="button"
          onClick={toggle}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-slate-200 hover:border-sky-400 hover:bg-slate-900/70 transition"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-0.5 w-4 rounded-full bg-slate-200 transition-transform ${
              open ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-slate-200 mt-1 transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-slate-200 mt-1 transition-transform ${
              open ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav
          aria-label="Navegação móvel" 
          className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-1 hover:text-sky-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
      
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="pt-12 pb-8 md:pt-16 md:pb-10 flex flex-col md:flex-row items-center gap-8 md:gap-10"
    >
      <div className="flex-1">
        <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">
          Desenvolvedora backend em formação
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-3">
          Vitória Baltazar
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-xl">
          Estudante de Ciência da Computação e desenvolvedora backend em formação,
          focada em Python, APIs REST e bancos de dados. Uso projetos temáticos com
          Pokémon, dinossauros e música para praticar lógica, organização de código e
          versionamento no GitHub.
        </p>
        <div className="flex flex-wrap gap-3 mt-6 mb-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary to-amber-500 text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.4)] hover:translate-y-[-1px] transition"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium border border-slate-600 text-slate-100 hover:border-primary hover:bg-white/5 transition"
          >
            Entrar em contato
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
          {["Python", "JavaScript", "SQL", "APIs REST"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-slate-700 bg-slate-950/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-3">
        <div className="relative h-56 w-56 rounded-full bg-gradient-to-tr from-sky-100 via-sky-400 to-sky-700 shadow-[0_28px_60px_rgba(15,23,42,0.9)] flex items-center justify-center overflow-hidden">
          <Image
            src="/garfield-pix.png"
            alt="Boton do Garfield"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <p className="text-xs text-slate-400">
          Backend dev em modo Pokédex
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 border-t border-slate-800/80">
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">Sobre mim</h2>
        <p className="text-sm text-slate-400">
          Quem é a dev por trás do Pokefolio
        </p>
      </header>
      <div className="grid md:grid-cols-[1.3fr,1fr] gap-6 text-sm text-slate-300">
        <div className="space-y-3">
          <p>
            Oi! Eu sou a Vitória, estudante de Ciência da Computação em Riberião Preto, com foco em desenvolvimento backend. Gosto
            de aprender construindo projetos temáticos, misturando Pokémon,
            dinossauros e música com Python, JavaScript e bancos de dados.
          </p>
          <p>
            Hoje meu objetivo é evoluir como desenvolvedora backend: APIs REST,
            persistência de dados e boas práticas de código, usando Git e
            GitHub para versionar tudo e deixar claro para recrutadores por
            onde estou caminhando.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="text-sm font-semibold mb-2">
              O que estou estudando
            </h3>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>Python para backend e automações</li>
              <li>JavaScript para interfaces simples e consumo de APIs</li>
              <li>SQL, SQLite e bancos de dados</li>
              <li>Boas práticas com Git e GitHub</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="text-sm font-semibold mb-2">Próximos passos</h3>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>Aprender frameworks backend</li>
              <li>Refinar portfólio com projetos mais completos</li>
              <li>
                Conquistar vaga de estágio/júnior em desenvolvimento backend
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-12 border-t border-slate-800/80 bg-slate-950/40 rounded-3xl my-6"
    >
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">Skills</h2>
        <p className="text-sm text-slate-400">
          Ferramentas que uso no dia a dia de estudo
        </p>
      </header>
      <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2 text-sm">
        <SkillGroup
          title="Backend"
          items={["Python", "APIs REST", "JSON"]}
        />
        <SkillGroup
          title="Front e Web"
          items={["HTML", "CSS", "JavaScript", "React (estudos)"]}
        />
        <SkillGroup
          title="Banco de Dados"
          items={["SQL", "SQLite", "MongoDB (estudos)"]}
        />
        <SkillGroup
          title="Ferramentas"
          items={["Git & GitHub", "VS Code", "Linux / Windows"]}
        />
      </div>
    </section>
  );
}
function Services() {
  return (
    <section
      id="services"
      className="py-12 border-t border-slate-800/80"
    >
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">O que eu faço</h2>
        <p className="text-sm text-slate-400">
          Como posso ajudar como desenvolvedora backend
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3 text-sm">
        <ServiceCard
          title="APIs e backend"
          items={[
            "Mini-APIs REST em Python",
            "Regras de negócio de sistemas",
            "Organização de código e funções",
          ]}
        />
        <ServiceCard
          title="Web e landing pages"
          items={[
            "Landing pages responsivas",
            "Estrutura semântica em HTML",
            "Estilização com CSS",
          ]}
        />
        <ServiceCard
          title="Dados e dashboards"
          items={[
            "Manipulação de dados em Python",
            "Modelagem simples em SQL",
            "Dashboards temáticos em Power BI",
          ]}
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <ul className="space-y-1 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}


function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <h3 className="text-sm font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 text-xs text-slate-300">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

type Project = {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
};

const projects: Project[] = [
  {
    tag: "Web · Frontend",
    title: "Landing-Page Mount",
    description:
      "Landing page temática de montanha, focada em layout responsivo, tipografia e uso de seções bem definidas para apresentar um serviço.",
    stack: ["HTML", "CSS", "Responsivo"],
    link: "https://github.com/vicbaltazar/mount-landing",
  },
  {
    tag: "Python · Dados",
    title: "PokedexDB",
    description:
      "Projeto para organizar dados de Pokémon em formato de banco de dados, praticando estruturação de informações e manipulação em Python.",
    stack: ["Python", "Dados", "Pokémon"],
    link: "https://github.com/vicbaltazar/pokedexdb",
  },
  {
    tag: "Python · Backend",
    title: "Sistema Bancário Pokémon",
    description:
      "Simulação de sistema bancário com tema Pokémon, incluindo operações de depósito, saque e extrato, focada em regras de negócio e funções bem organizadas.",
    stack: ["Python", "Regras de negócio", "Console"],
    link: "https://github.com/vicbaltazar/sistema-bancario-pokemon",
  },
  {
    tag: "Web · Landing Page",
    title: "Loja de Brinquedos",
    description:
      "Landing page para uma loja de brinquedos, publicada no GitHub Pages, com foco em layout colorido, seções claras e chamada para ação.",
    stack: ["HTML", "CSS", "GitHub Pages"],
    link: "https://vicbaltazar.github.io/landing-page-toys/",
  },
  {
    tag: "Dados · Visualização",
    title: "Power BI Pokémon",
    description:
      "Dashboard em Power BI usando dados de Pokémon, explorando visualizações para acompanhar estatísticas e comparar atributos entre diferentes espécies.",
    stack: ["Power BI", "Modelagem de dados", "Pokémon"],
    link: "https://github.com/vicbaltazar/powerbi-pokemon",
  },
];


function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-slate-800/80">
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">Projetos em destaque</h2>
        <p className="text-sm text-slate-400">
          Alguns projetos que criei para praticar backend, front e dados com temas que eu gosto.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4 shadow-lg hover:border-primary hover:-translate-y-1 hover:shadow-2xl transition cursor-pointer"
          >
            <span className="inline-flex text-[0.65rem] px-3 py-1 rounded-full bg-primary-soft text-amber-100 mb-3">
              {project.tag}
            </span>
            <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
            <p className="text-xs text-slate-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-[0.7rem] text-slate-300 mb-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full border border-slate-700 bg-slate-950/80"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              className="text-[0.75rem] text-primary hover:underline"
            >
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-12 border-t border-slate-800/80 mb-10"
    >
      <header className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">Contato</h2>
        <p className="text-sm text-slate-400">
          Vamos conversar sobre estágio, vaga júnior ou projetos?
        </p>
      </header>

      <div className="grid md:grid-cols-[1.1fr,1fr] gap-6 text-sm">
        <div className="space-y-3 text-slate-300">
          <p>
            Estou aberta a oportunidades em desenvolvimento backend e áreas
            relacionadas. Se você viu algo aqui que combinou com o que procura,
            pode me chamar pelos canais abaixo.
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <span>fernandesoliveiramarcia287@gmail.com</span>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href="https://github.com/vicbaltazar"
                target="_blank"
                className="text-primary hover:underline"
              >
                github.com/vicbaltazar
              </a>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/vit%C3%B3ria-baltazar-3944a72ab/"
                target="_blank"
                className="text-primary hover:underline"
              >
                /vitória-baltazar-3944a72ab
              </a>
            </li>
          </ul>
        </div>

        <form className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 space-y-3">
          <div className="space-y-1">
            <label className="text-xs text-slate-300" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs text-slate-300" htmlFor="message">
              Mensagem
            </label>
            <textarea
              id="message"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              rows={4}
              placeholder="Como posso ajudar?"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-medium bg-gradient-to-r from-primary to-amber-500 text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.4)] hover:translate-y-[-1px] transition"
          >
            Enviar mensagem
          </button>
          <p className="text-[0.7rem] text-slate-400">
            Formulário ilustrativo. Integração real pode ser feita com um
            backend ou serviço de email.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-4 text-center text-[0.7rem] text-slate-400">
      <p>© {new Date().getFullYear()} Vitória Baltazar · Pokefolio</p>
      <p>Construído com Next.js, TypeScript e Tailwind CSS</p>
    </footer>
  );
}
