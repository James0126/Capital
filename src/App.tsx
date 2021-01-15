import React from "react";
import c from "classnames";
import kv from "./images/kv.png";
import UST from "./images/img-ust.png";
import Contact from "./images/img-contact.png";
import Terra from "./images/img-terra.png";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.app}>
      <div className={c(s.card, s.mainCard)}>
        <section className={s.mainInner}>
          <article className={s.mainText}>
            <h1 className={s.mainTitle}>
              Terraform
              <br />
              Capital
            </h1>
            <p className={c(s.info, s.mainInfo)}>
              We provide free access to launch capital
              <br />
              for new networks and projects.
              <br />
              Our aim is to increase the GDP
              <br />
              of the blockchain ecosystem, together.
            </p>
          </article>
          <img src={kv} alt="terra" className={s.mainImg} />
        </section>
      </div>
      <div>
        <section className={s.card}>
          <h1 className={c(s.subTitle, s.titles)}>HOW IT WORKS</h1>
          <section className={c(s.flex, s.flexList)}>
            <p className={c(s.info, s.subInfo)}>
              We help Founders get to market as quickly and <br />
              frictionlessly as possible.
            </p>
            <ul className={s.list}>
              <li>Every week, we identify the most promising projects</li>
              <li>We provide capital to cover launch and audit costs</li>
              <li>
                We ask that TerraUSD, the interchain stablecoin,
                <br /> be incorporated in some way
              </li>
              <li>We do not take any allocation of tokens before launch</li>
              <li>
                We provide ongoing support to Founders, and access
                <br /> to the Terra ecosystem
              </li>
            </ul>
          </section>
        </section>
      </div>
      <div className={c(s.flex, s.test)}>
        <section className={c(s.card, s.flexList)}>
          <article className={s.mainText}>
            <h1 className={s.subTitle}>HOW DO I APPLY?</h1>
            <p className={c(s.info, s.mainInfo)}>
              Applications are regularly reviewed,
              <br />
              and you can expect an answer from us
              <br />
              within 1-2 weeks of submission.
            </p>
          </article>
        </section>
        <form className={s.form}>
          <button className={s.applyButton}>Apply Now</button>
        </form>
      </div>
      <div className={s.card}>
        <h1 className={c(s.subTitle, s.titles)}>OUR PARTNERS</h1>
        <div className={s.partnerWrapper}>
          <div className={s.partnerCard}>Partners_01</div>
          <div className={s.partnerCard}>Partners_02</div>
          <div className={s.partnerCard}>Partners_03</div>
          <div className={s.partnerCard}>Partners_04</div>
          <div className={s.partnerCard}>Partners_05</div>
          <div className={s.partnerCard}>Partners_06</div>
          <div className={s.partnerCard}>Partners_07</div>
          <div className={s.partnerCard}>Partners_08</div>
        </div>
      </div>
      <div className={c(s.card, s.joinUs, s.flexList)}>
        <article>
          <h1 className={c(s.subTitle, s.titles)}>JOIN US</h1>
          <p className={c(s.info, s.subInfo)}>
            We’re on a mission to set money free.
          </p>
        </article>
        <div className={s.cardWrapper}>
          <div className={s.terraCard}>
            <div>
              <img src={Terra} alt="Terra" />
            </div>
          </div>
          <div className={s.ustCard}>
            <img src={UST} alt="UST" />
          </div>
          <div className={s.contactCard}>
            <img src={Contact} alt="Contact" />
          </div>
        </div>
      </div>
      <footer className={s.footer}>
        <span>Terraform Capital 2021</span>
        <form>
          <button>d</button>
          <button>t</button>
          <button>t</button>
          <button>g</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
