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
    <div className={s.app}>
      <header className={s.header}>
        <Header />
      </header>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Footer />
    </div>
  );
}

export default App;
