import { Box, List } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Account from "../assets/images/account.png";
import Support from "../assets/images/support.png";
import Saving from "../assets/images/saving.png";
import Link from "next/link";
import { NextPage } from "next";
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AboutProps {
  photos: Photo[];
}

export default function About({ photos }: AboutProps) {
  const [photoData, setPhotoData] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);


  return (
    <Box>
      <Box sx={{ padding: "15px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Link style={{ textDecoration: "none" }} href={"/столы"}>
            <Box>
              <List>
                {photoData.slice(0, 1).map((value) => {
                  return (
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.thumbnailUrl}
                      alt=""
                    />
                  );
                })}
              </List>
              <Card>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <b>Столы</b>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} href={"/Кровати"}>
            <Box>
              <List>
                {photoData.slice(1, 2).map((value) => {
                  return (
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.thumbnailUrl}
                      alt=""
                    />
                  );
                })}
              </List>
              <Card sx={{ maxWidth: 200 }}>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <b>Кровати</b>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} href={"/Тумбы"}>
            <Box>
              <List>
                {photoData.slice(2, 3).map((value) => {
                  return (
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.thumbnailUrl}
                      alt=""
                    />
                  );
                })}
              </List>
              <Card sx={{ maxWidth: 200 }}>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <b>Тумбы</b>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} href={"/Шкафы"}>
            <Box>
              <List>
                {photoData.slice(3, 4).map((value) => {
                  return (
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.thumbnailUrl}
                      alt=""
                    />
                  );
                })}
              </List>
              <Card sx={{ maxWidth: 200 }}>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <b>Шкафы</b>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
          <Link style={{ textDecoration: "none" }} href={"/shoppingPage"}>
            <Box>
              <List>
                {photoData.slice(4, 5).map((value) => {
                  return (
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={value.thumbnailUrl}
                      alt=""
                    />
                  );
                })}
              </List>
              <Card sx={{ maxWidth: 200 }}>
                <CardContent>
                  <Typography sx={{ textAlign: "center" }}>
                    <b>Стулья</b>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};


