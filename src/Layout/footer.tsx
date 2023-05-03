import Image from "next/image";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "35px 20px",
          background: "rgba(247, 247, 247, 1)",
          marginTop: "15px",
        }}
      >
        <div style={{ alignContent: "baselina" }}>
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={125}
            height={86}
          />
          <div>
            <LocalPhoneIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
            <span> +38093-717-29-29</span>
          </div>
          <div>
            <TextsmsIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
            <span>kharkivmebelinfo@gmail.com</span>
          </div>
          <div>
            <LocationOnIcon sx={{ color: "rgba(114, 191, 68, 1)" }} />
            <span>Харьков</span>
          </div>
          <Link href={"/login"}>
            <FacebookRoundedIcon sx={{ color: "black", marginRight: "15px" }} />
            <InstagramIcon
              sx={{ color: "rgba(114, 191, 68, 1)", marginRight: "15px" }}
            />
            <YouTubeIcon sx={{ color: "black", marginRight: "15px" }} />
            <TelegramIcon sx={{ color: "black" }} />
          </Link>
        </div>
        <div>
          <h3>Наш магазин</h3>
          <Link style={{ color: "black", textDecoration: "none" }} href={"#"}>
            О магазине <br />
            Наши вакансии <br />
            Контакты <br />
            Мебель в рассрочку <br />
            Бренды <br />
            Возврат товара <br />
            Сертификаты <br />
            Обзоры
          </Link>
        </div>
        <div>
          <h3>Сервис</h3>
          <Link style={{ color: "black", textDecoration: "none" }} href={"#"}>
            Ваши заказы <br />
            Доставка и оплата <br />
            Сборка мебели <br />
            Хочу в подарок <br />
            Список сравнения <br />
            Карта сайта
          </Link>
        </div>
        <div>
          <h3>Помощь</h3>
          <Link style={{ color: "black", textDecoration: "none" }} href={"#"}>
            Статьи <br />
            Вопрос ответ <br />
            Производители
          </Link>
        </div>
      </div>
      <hr style={{  }} />
      <div style={{ display: "flex", justifyContent: "space-around",  background: "rgba(247, 247, 247, 1)", }}>
        <span> ©"Kharkivmebel, 2005 - 2021.</span>
        <span>Created & Powered by </span>
      </div>
    </>
  );
};

export default Footer;
