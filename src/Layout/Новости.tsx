import { Box, Button } from "@mui/material";
import { subtle } from "crypto";
import Image from "next/image";
import React, { FC } from "react";

const Yangi: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "45px",
        marginBottom: "75px",
      }}
    >
      <div
        style={{
          height: "376px",
          display: "flex",
          padding: "40px",
          background: "#F7F7F7",
          borderRadius: "10px",
        }}
      >
        <Box>
          <p style={{ fontSize: "18px", padding: "20px 0" }}>Коллекция</p>
          <h1 style={{ fontSize: "50px", padding: "20px 0" }}>
            Новый Стул <br /> Denim Green
          </h1>
          <Button
            sx={{ background: "#72BF44", marginTop: "20px" }}
            variant="contained"
          >
            Показать Все
          </Button>
        </Box>
        <Box>
          <img
            src={"/stul.png"}
            alt="stul"
            width={200}
            height={300}
            style={{ marginLeft: "100px" }}
          />
        </Box>
      </div>
      <div
        style={{
          height: "376px",
          display: "flex",
          padding: "40px",
          background: "#F7F7F7",
          borderRadius: "10px",
        }}
      >
        <Box>
          <p style={{ fontSize: "18px", padding: "20px 0" }}>Коллекция</p>
          <h1 style={{ fontSize: "50px", padding: "20px 0" }}>
            Кухонный стол <br />
            Eames DT-03
          </h1>
          <Button sx={{ marginTop: "20px" }} color="success" variant="outlined">
            Показать Все
          </Button>
        </Box>
        <Box>
          <img
            src={"/stol.png"}
            alt="stul"
            width={200}
            height={300}
            style={{ marginLeft: "50px" }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Yangi;
