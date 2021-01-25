import s from "./Content1.module.scss";

const Content1 = () => (
  <section className={s.card}>
    <h1 className={s.title}>HOW IT WORKS</h1>
    <section className={s.inner}>
      <p className={s.info}>
        We help Founders get to market as quickly and <br />
        frictionlessly as possible.
      </p>
      <ol className={s.list}>
        <li>Every week, we identify the most promising projects</li>
        <li>We provide capital to cover launch and audit costs</li>
        <li>
          We ask that <u>TerraUSD,</u> the interchain stablecoin, be
          incorporated in some way
        </li>
        <li>We do not take any allocation of tokens before launch</li>
        <li>
          We provide ongoing support to Founders, and access to the Terra
          ecosystem
        </li>
      </ol>
    </section>
  </section>
);

export default Content1;
