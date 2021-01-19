import React from "react";
import Button from "../components/Button";
import s from "./Footer.module.scss";

const Footer = () => (
  <footer className={s.footer}>
    <span>Terraform Capital 2021</span>
    <form>
      <Button style={s.button} />
      <Button style={s.button} />
      <Button style={s.button} />
      <Button style={s.button} />
    </form>
  </footer>
);

export default Footer;
