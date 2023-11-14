import Head from "next/head";
import { Header, Hero, About, Projects, Contact, Footer } from "../components";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Tania Katherine Rocha Hueso</title>
        <meta
          name="description"
          content="Portafolio y web personal de Tania Katherine Rocha Hueso"
        />
        <link rel="icon" href="/fav.ico" />
        {/* open graph */}
        <meta
          property="og:title"
          content="Portafolio y web personal de Tania Katherine Rocha Hueso"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content=""
        />
        <meta
          property="og:image"
          content=""
        />
        <meta
          property="og:description"
          content="Apasionada por la creación productos a traves de codigos."
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: [
       /* {
          id: "10",
          name: "Landing Page Ricardo",
          thumbnail: "/projects/landingpageRicardo.webp",
          linkRepo: "https://github.com/DavidMarioLC/LandingPage-Ricardo",
          linkDemo: "https://landing-page-ricardo.vercel.app/",
          description:
            "Roberto es un Developer que le encanta implementar diseños que inspiran y atraen a las personas.",
          technologies: ["React", "Tailwindcss", "Next"],
        },
        {
          id: "9",
          name: "Healthy Store",
          thumbnail: "/projects/healthstore.webp",
          linkRepo:
            "https://github.com/DavidMarioLC/webApplication-healthy-store",
          linkDemo: "https://web-application-healthy-store.vercel.app",
          description: "Compra todo lo que quieras en esta tiendita saludable.",
          technologies: ["React", "TypeScript", "Next"],
        },
        {
          id: "8",
          name: "Dashboard Cursos",
          thumbnail: "/projects/dashboard.webp",
          linkRepo: "https://github.com/DavidMarioLC/WebApplication-Dashboard",
          linkDemo: "https://web-application-dashboard.vercel.app/cursos",
          description:
            "Dashboard donde podras eliminar,editar y actualizar tus propios cursos.",
          technologies: ["React", "TypeScript"],
        },
        {
          id: "7",
          name: "Github Clone",
          thumbnail: "/projects/github.webp",
          linkRepo: "https://github.com/DavidMarioLC/WebApplication-Github",
          linkDemo: "https://web-application-github.vercel.app",
          description:
            "Maneja los repositorios de tus proyectos como todo un profesional.",
          technologies: ["React", "TypeScript"],
        },
        {
          id: "6",
          name: "Block Master",
          thumbnail: "/projects/blockmaster.webp",
          linkRepo:
            "https://github.com/DavidMarioLC/WebApplication-BlockMaster",
          linkDemo: "https://web-application-block-master.vercel.app/",
          description:
            "Plataforma de peliculas que nos permite buscar peliculas y filtrarlas segun sus valoraciones.",
          technologies: ["React", "Redux"],
        },
        {
         id: "5",
          name: "Landing Page Calel",
          thumbnail: "/projects/calel.webp",
          linkRepo: "https://github.com/DavidMarioLC/LandingPage-Calel",
          linkDemo: "https://davidmariolc.github.io/LandingPage-Calel/",
          description:
            "Landing page sobre una aplicación que nos permite  programar reuniones efectivas.",
          technologies: ["React", "Sass"],
        },*/
        {
          id: "4",
          name: "Proyecto 1",
          thumbnail: "/projects/proyecto1.webp",
          linkRepo:
            "https://github.com/Nia-07/Game_CuestionDelHambre/tree/master",
          linkDemo:
            "https://www.greenfoot.org/scenarios/27702",
          description: "Juego realizado con Java Y GreenFoot.",
          technologies: ["Java"],
        },
        {
          id: "3",
          name: "Proyecto 2",
          thumbnail: "/projects/inprogress.webp",
          linkRepo: "",
          linkDemo: "",
          description:
            "En proceso de construcción",
            technologies: [],
        },
        {
          id: "2",
          name: "Proyecto 3",
          thumbnail: "/projects/inprogress.webp",
          linkRepo: "",
          linkDemo: "",
          description: "En proceso de construcción",
          technologies: [],
        },
        {
          id: "1",
          name: "Proyecto 4",
          thumbnail: "/projects/inprogress.webp",
          linkRepo: "",
          linkDemo: "",
          description:
            "En proceso de construcción",
            technologies: [],
        },
      ],
    },
  };
}
