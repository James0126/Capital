import React from "react";
import Button from "../components/Button";
import Cryptonics from "../images/partner-01.png";
import Sentnl from "../images/partner-02.png";
import Quantstamp from "../images/partner-03.png";
import Solidified from "../images/partner-04.png";
import s from "./Content3.module.scss";

const Content3 = () => (
  <article className={s.card}>
    <h1 className={s.title}>OUR PARTNERS</h1>
    <form className={s.partnerWrapper}>
      <Button
        style={s.partnerCard}
        image={Cryptonics}
        link="https://cryptonics.consulting/"
      />
      <Button style={s.partnerCard} image={Sentnl} link="https://sentnl.io/" />
      <Button
        style={s.partnerCard}
        image={Quantstamp}
        link="https://quantstamp.com/"
      />
      <Button
        style={s.partnerCard}
        image={Solidified}
        link="https://solidified.io/"
      />
    </form>
  </article>
);

export default Content3;
