import { Box, FormControl, Input, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { ReactComponent as Telegram } from "../assets/icons/tg.svg";
// import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
// import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";

// import { Link } from "react-router-dom";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
/>;

const Contact = () => {
  return (
    <div className="video">
      <img
        src="https://catherineasquithgallery.com/uploads/posts/2023-02/1676623092_catherineasquithgallery-com-p-fon-dlya-fotoshopa-zelenaya-trava-13.jpg"
        alt=""
      />
      {/* <Link href={"/"}>back</Link> */}
      <div className="overlay">
        <Link href={"/"}>back</Link>

        <div className="container">
          <h2>contact me</h2>
          <p className="h2-bottom">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.
          </p>

          <form>
            <input type="text" name="name" placeholder="your email" />
            <input type="email" name="email" placeholder="your email" />
            <input type="tel" name="phone" placeholder="your phone" />
            <input type="url" name="website" placeholder="your website" />
            <input type="text" name="subject" placeholder="subject" />
            <textarea placeholder="your message"></textarea>
            <button>
              <div>
                send
                <i className="fa fa-arrow-right"></i>
              </div>
            </button>
          </form>
          <div style={{ display: "flex" }}>
            <Image src={"/instagram.svg"} alt="logo" width={50} height={50} />
            <Image src={"/facebook.svg"} alt="logo" width={50} height={50} />
            <Image src={"/linkedin.svg"} alt="logo" width={50} height={50} />

            {/* <Instagram /> */}
            {/* <Facebook /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
