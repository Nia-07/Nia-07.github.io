import React from "react";
import Image from "next/image";
import style from "./Technologies.module.css";
import logoHTML from "../../public/stack/html.svg";
import logoCSS from "../../public/stack/css.svg";
import logoJS from "../../public/stack/javascript.svg";
import logoReact from "../../public/stack/react.svg";
import logoJava from "../../public/stack/java.svg";
import logoSpring from "../../public/stack/spring.svg";
import logoOracle from "../../public/stack/oracle.svg";
import logoAws from "../../public/stack/aws.svg";
import logoSalesforce from "../../public/stack/salesforce.svg";
import logoGit from "../../public/stack/github.svg";
import logoJenkins from "../../public/stack/jenkins.svg";
import logoTesting from "../../public/stack/testing.svg";
import tailwindcss from "../../public/stack/tailwindcss.svg";
export const Technologies = () => {
  const technologies = [
    { id: "1", name: "HTML", image: logoHTML },
    { id: "2", name: "CSS", image: logoCSS },
    { id: "3", name: "JavaScript", image: logoJS },
    { id: "4", name: "React", image: logoReact },
    { id: "5", name: "Java", image: logoJava },
    { id: "6", name: "SpringBoot", image: logoSpring },
    { id: "7", name: "Oracle", image: logoOracle },
    { id: "8", name: "AWS", image: logoAws },
    { id: "9", name: "Salesforce", image: logoSalesforce},
    { id: "10", name: "Git", image: logoGit },
    { id: "11", name: "Jenkins", image: logoJenkins },
    { /*id: "11", name: "Jest", image: logoJest */},
    { /*id: "12", name: "Firebase", image: logoFirebase*/ },
  {/* id: "13", name: "Testing", image: logoTesting */},
  ];

  const hiddenTech = (name) => {
    // return false;
    return ["Jest", "Firebase", "Testing"].includes(name);
  };

  return (
    <div className={style.technologies}>
      {technologies.map((technology) => (
        <figure
          key={technology.id}
          className={`${style.logo} ${
            hiddenTech(technology.name) ? ` ${style.opacity}` : ""
          }`}
        >
          <Image
            src={technology.image}
            alt={technology.name}
            title={technology.name}
          />
          <figcaption className={style.logoName}>{technology.name}</figcaption>
        </figure>
      ))}
    </div>
  );
};
