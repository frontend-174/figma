import { Box, Button, TextField } from "@mui/material";
import Login from "@/pages/loginPage";
import Image from "next/image";
import React, { FC } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";
import BasicExample from "./Dropdown";

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image
          src="/logo.svg"
          alt="Picture of the author"
          width={125}
          height={86}
        />
      <BasicExample/>
        <div>
          <TextField sx={{ width: "400px" }} label="Искать Товар" />
        </div>
        <div style={{ width: "168px", height: "27px" }}>
          <select
            style={{ border: "none" }}
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>+38093-717-29-29</option>
            <option value="1">+38093-717-29-29</option>
            <option value="2">+38093-717-29-29</option>
            <option value="3">+38093-717-29-29</option>
          </select>
        </div>
        <FavoriteBorderIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
        <ShoppingCartIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
        <Link href={"loginPage"}>
          <PermIdentityIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
        </Link>
      </Box>
    </>
  );
};

export default Header;
