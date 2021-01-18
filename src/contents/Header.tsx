import React from "react";
import KV from "../images/kv.png";
import s from "./Header.module.scss";

const Header = () => (
  <div className={s.card}>
    <section className={s.inner}>
      <article className={s.text}>
        <h1 className={s.title}>
          Terraform
          <br />
          Capital
        </h1>
        <p className={s.info}>
          We provide free access to launch capital
          <br />
          for new networks and projects.
          <br />
          Our aim is to increase the GDP
          <br />
          of the blockchain ecosystem, together.
        </p>
        <div className={s.learn}>
          <span>Learn more</span>
          <button>arrow</button>
        </div>
      </article>
      <img src={KV} alt="terra" className={s.img} />
    </section>
  </div>
);

export default Header;
