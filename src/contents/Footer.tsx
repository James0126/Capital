import React from "react";
import Discord from "../images/discord.png";
import Medium from "../images/medium.png";
import Twitter from "../images/twitter.png";
import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footer}>
    <span>Terraform Capital 2021</span>
    <form>
      <a href="https://medium.com/terraform-capital" target="_blank" rel="noreferrer">
        <img
          className={s.button}
          src={Medium}
          alt=""
        />
      </a>
      <a href="https://twitter.com/tfl_capital" target="_blank" rel="noreferrer">
        <img
          className={s.button}
          src={Twitter}
          alt=""
        />
      </a>
      <a>
        <img className={s.button} src={Discord} alt="" />
      </a>
    </form>
  </footer>
);

export default Footer;
