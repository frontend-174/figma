import React, { useRef } from "react";
import { Container, Wrapper, Icon } from "./style";
import home1 from "../../public/carousel.png";
import home2 from "../../public/carousel.png";
import { NextPage } from "next";
import Image from "next/image";
const Carousel: NextPage = () => {
  const slider = useRef<any>("click");
  console.log(slider);
  function brightness(
    arg0: number
  ): import("csstype").Property.Filter | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <h1 style={{ padding: "20px", marginLeft: "30px" }}>Коллекии</h1>
      <Wrapper>
        <Container autoplay ref={slider}>
          <Image height={500} src={home1} alt="home1" />
          <Image height={500} src={home2} alt="home2" />
          <Image height={500} src={home1} alt="home1" />
          <Image height={500} src={home2} alt="home2" />
        </Container>
        <Icon.Left onClick={() => slider.current.prev()} />
        <Icon.Right onClick={() => slider.current.next()} />
      </Wrapper>
    </>
  );
};

export default Carousel;
