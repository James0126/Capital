import React from "react";
import UST from "../images/img-ust.png";
import Contact from "../images/img-contact.png";
import Terra from "../images/img-terra.png";
import ButtonImg from "../images/img-button.png";
import Button from "../components/Button";
import s from "./Content4.module.scss";

const Content4 = () => (
  <div className={s.card}>
    <article className={s.text}>
      <h1 className={s.title}>JOIN US</h1>
      <p className={s.info}>We’re on a mission to set money free.</p>
    </article>
    <div className={s.cardWrapper}>
      <div className={s.terraCard}>
        <img src={Terra} alt="Terra" className={s.img} />
        <section>
          <article>
            <span>Learn more about</span>
            <h2>Terra</h2>
          </article>
          <form>
            <Button image={ButtonImg} />
          </form>
        </section>
      </div>
      <div className={s.subCard}>
        <img src={UST} alt="UST" className={s.img} />
        <section>
          <article>
            <span>Learn more about</span>
            <h2>TerraUSD</h2>
          </article>
          <form>
            <Button image={ButtonImg} />
          </form>
        </section>
      </div>
      <div className={s.subCard}>
        <img src={Contact} alt="Contact" className={s.img} />
        <section>
          <article>
            <span>Questions?</span>
            <h2>Contact us</h2>
          </article>
          <form>
            <Button image={ButtonImg} />
          </form>
        </section>
      </div>
    </div>
  </div>
);

export default Content4;
