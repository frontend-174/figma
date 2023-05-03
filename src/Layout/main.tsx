import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import styles from "../styles/Home.module.css";
import Header from "./header";
import Nav from "./nav";
import TheTop from "./theTop";
import About from "./about";
import Ommabop from "./ommabop";
import Image from "next/image";
import ResponsiveDialog from "./OpenModal";
const Main: FC = () => {
  return (
    <>
      <Box>
        <div className={styles.container}>
          {/* <Image src={"/background1.jpg"} width={1520} height={500} alt="" /> */}
          <div className={styles.position}>
            <h1 style={{ fontSize: "60px" }}>
              {" "}
              Финальная <br /> распродажа
            </h1>
            <p style={{ fontSize: "22px", marginTop: "15px" }}>
              Только 30 моделей можно <br /> забрать домой со скидкой до <br />{" "}
              45%
            </p>
            <div style={{ marginTop: "50px" }}>
              <ResponsiveDialog />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Main;
