import React from "react";
import Cart from "../Cart/index";
import Products from "../Products/Index";
import style from './style.module.scss'

const Home = () => {
  return (
    <div className={style.home}>
      <Cart />
      <Products />
    </div>
  );
};

export default Home;