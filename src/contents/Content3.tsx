import React from "react";
import s from "./Content3.module.scss";

const Content3 = () => (
  <article className={s.card}>
    <h1 className={s.title}>OUR PARTNERS</h1>
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
  </article>
);

export default Content3;
