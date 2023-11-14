import React from "react";
import style from "./Menu.module.css";

export const Menu = () => {
  const options = [
    { id: "1", value: "Proyectos", anchor: "#project" },
    { id: "2", value: "Tecnologias", anchor: "#about" },
    { id: "3", value: "Contactame", anchor: "#contact" },
    {/* id: "3", value: "Sobre Mí", anchor: "#hero" */},
   
  ];

  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        {options.map((option) => (
          <li key={option.id}>
            <a className={style.link} href={option.anchor}>
              {option.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
