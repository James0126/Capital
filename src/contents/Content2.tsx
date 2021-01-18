import React from "react";
import s from "./Content2.module.scss";

const Content2 = () => (
  <div className={s.card}>
    <article className={s.inner}>
      <h1 className={s.title}>HOW DO I APPLY?</h1>
      <p className={s.info}>
        Applications are regularly reviewed,
        <br />
        and you can expect an answer from us
        <br />
        within 1-2 weeks of submission.
      </p>
    </article>
    <form className={s.form}>
      <button className={s.applyButton}>Apply Now</button>
    </form>
  </div>
);

export default Content2;
