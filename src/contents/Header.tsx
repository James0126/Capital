import React from "react";
import ButtonImg from "../images/img-header-button.png";
import Button from "../components/Button";
import s from "./Header.module.scss";

const Header = () => (
  <header className={s.header}>
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
            of the blockchain ecosystem,&nbsp;
            <br className={s.mobile_br} />
            together.
          </p>
          <a href="https://medium.com/terra-money" target="_blank" rel="noreferrer">
            <div className={s.learn}>
              <span>Learn More</span>
              <Button image={ButtonImg} />
            </div>
          </a>
        </article>
      </section>
    </div>
  </header>
);

export default Header;
