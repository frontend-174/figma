import { Box, Button } from "@mui/material";

import Link from "next/link";
import React, { FC } from "react";

const Nav:FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10px",
      }}
    >
      <Button sx={{ background: "#F8F8F8" }}>
        <Link
          style={{ textDecoration: "none", color: "rgba(56, 56, 56, 1)" }}
          href={"/"}
        >
          Харьков мебель
        </Link>
      </Button>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Про нас
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Мебель под заказ
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Шкафы купе
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Доставка і оплата
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Контакты
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Письмо директору
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Бренды
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: "rgba(56, 56, 56, 1)",
          fontSize: "17px",
        }}
        href={""}
      >
        Дизайн интерьера
      </Link>
    </Box>
  );
};

export default Nav;
