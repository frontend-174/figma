
import React, { FC } from "react";

import { Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Link from "next/link";

const TheTop:FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "46px",
          color: "white",
          background: "#72BF44",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocalShippingIcon sx={{ marginRight: "15px" }} />
        <span>Доставка и сборка по Харькову бесплатно! </span>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "40px",
          background: "rgba(245, 245, 245, 1)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: "15px",
        }}
      >
        <div style={{ width: "60%" }}>
          <span>kharkivmebel - интернет-магазин качественной мебели</span>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {/* <Link href={"/login"}> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon
              sx={{ color: "rgba(114, 191, 68, 1)", marginRight: "10px" }}
            />
            <span>Харьков</span>
          </div>
          {/* </Link> */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextsmsIcon
              sx={{ color: "rgba(114, 191, 68, 1)", marginRight: "10px" }}
            />
            <Link style={{textDecoration:"none",color:"black"}} href={"/contactPage"}>kharkivmebelinfo@gmail.com</Link>
          </div>
        </div>  
      </Box>
   
    </>
  );
};

export default TheTop;
