import React from "react";
import Button from "../components/Button";
import Discord from "../images/discord.png";
import Medium from "../images/medium.png";
import Twitter from "../images/twitter.png";
import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footer}>
    <span>Terraform Capital 2021</span>
    <form>
      <Button
        style={s.button}
        image={Medium}
        link="https://medium.com/terraform-capital"
      />
      <Button
        style={s.button}
        image={Twitter}
        link="https://twitter.com/tfl_capital"
      />
      <Button style={s.button} image={Discord} />
    </form>
  </footer>
);

export default Footer;
