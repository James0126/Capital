import React from "react";
import UST from "../images/img-ust.png";
import Contact from "../images/img-contact.png";
import Terra from "../images/img-terra.png";
import s from "./Content4.module.scss";

const Content4 = () => (
  <div className={s.card}>
    <article>
      <h1 className={s.title}>JOIN US</h1>
      <p className={s.info}>We’re on a mission to set money free.</p>
    </article>
    <div className={s.cardWrapper}>
      <div className={s.terraCard}>
        <div>
          <img src={Terra} alt="Terra" className={s.img} />
        </div>
        <div>
          <article>
            <span>Learn more about</span>
            <h2>Terra</h2>
          </article>
          <form>
            <button>arrow</button>
          </form>
        </div>
      </div>
      <div className={s.subCard}>
        <div>
          <img src={UST} alt="UST" className={s.img} />
        </div>
        <div>
          <article>
            <span>Learn more about</span>
            <h2>TerraUSD</h2>
          </article>
          <form>
            <button>arrow</button>
          </form>
        </div>
      </div>
      <div className={s.subCard}>
        <div>
          <img src={Contact} alt="Contact" className={s.img} />
        </div>
        <div>
          <article>
            <span>Questions?</span>
            <h2>Contact us</h2>
          </article>
          <form>
            <button>arrow</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Content4;
