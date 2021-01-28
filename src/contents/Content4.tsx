import React from "react";
import UST from "../images/img-ust.png";
import Contact from "../images/img-contact.png";
import Terra from "../images/img-terra.png";
import ButtonImg from "../images/img-button.png";
import s from "./Content4.module.scss";

const Content4 = () => (
  <div className={s.card}>
    <div className={s.inner}>
      <article className={s.text}>
        <h1 className={s.title}>JOIN US</h1>
        <p className={s.info}>We’re on a mission to set money free.</p>
      </article>
      <div className={s.cardWrapper}>
        <a href="https://terra.money/" target="_blank" className={s.terraCard}>
          <img src={Terra} alt="Terra" className={s.img} />
          <section>
            <article>
              <span>Learn more about</span>
              <div className={s.cardtitle}>Terra</div>
            </article>
            <img src={ButtonImg} alt="" />
          </section>
        </a>
        <div className={s.subcardWrapper}>
          <a href="https://medium.com/terra-money/announcing-terrausd-ust-the-interchain-stablecoin-53eab0f8f0ac" target="_blank" className={s.subCard}>
            <img src={UST} alt="UST" className={s.img} />
            <section>
              <article>
                <span>Learn more about</span>
                <div className={s.cardtitle}>TerraUSD</div>
              </article>
              <img src={ButtonImg} alt="" />
            </section>
          </a>
          <a href="mailto:capital@terra.money" className={s.subCard}>
            <img src={Contact} alt="Contact" className={s.img} />
            <section>
              <article>
                <span>Questions?</span>
                <div className={s.cardtitle}>Contact us</div>
              </article>
              <img src={ButtonImg} alt="" />
            </section>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Content4;
