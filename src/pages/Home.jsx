import React, { Fragment } from "react";
import ChoseUs from "../components/chose-us/ChoseUs";
import Download from "../components/download-section/Download";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import MenuPack from "../components/menu-pack/MenuPack";
import PopularMenu from "../components/popular-menu/PopularMenu";
import Testimonials from "../components/testimonials/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChoseUs />
      <MenuPack />
      <Testimonials />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default Home;
