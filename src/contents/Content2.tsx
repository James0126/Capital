import React from "react";
import Button from "../components/Button";
import s from "./Content2.module.scss";

const Content2 = () => {
  const link =
    "https://docs.google.com/forms/d/e/1FAIpQLScmijwM1tfGlDH1Wil-xmtCOebtjOJELz4Q14TgbfmGMiW7UA/viewform";
  return (
    <div className={s.card}>
      <section className={s.inner}>
        <article className={s.text}>
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
          <Button style={s.applyButton} text="Apply Now" link={link} />
        </form>
      </section>
    </div>
  );
};

export default Content2;
