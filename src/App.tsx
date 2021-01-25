import React from "react";
import s from "./App.module.scss";
import Header from "./contents/Header";
import Content1 from "./contents/Content1";
import Content2 from "./contents/Content2";
import Content3 from "./contents/Content3";
import Content4 from "./contents/Content4";
import Footer from "./contents/Footer";

function App() {
  return (
    <section className={s.app}>
      <Header />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />
    </section>
  );
}

export default App;
