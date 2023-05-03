import React from "react";
import Header from "./header";
import Nav from "./nav";
import TheTop from "./theTop";
import About from "./about";
import Ommabop from "./ommabop";
import { Box } from "@mui/material";
import Main from "./main";
import Новости from "./Новости";
import Carousel from "./carousel";
import Интересное from "./Интересное"
import Подпишитес from "./Подпишитес"
import Footer from "./footer";
import CatalogButton from "./CatalogButton";
import MyComponent from "./MyComponent";
const Obshi = () => {
  return (
    <div>
      <Box>
        <TheTop />
        <Header />
        <Nav />
        <Main />
        <About photos={[]} />
        <Ommabop photos={[]} />
        <Новости />
        <Carousel />
        <Интересное/>
        <Подпишитес/>
        <Footer/>
        {/* <CatalogButton href={""}/>
        <MyComponent/> */}
      </Box>
    </div>
  );
};

export default Obshi;
