import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";

const Подпишитес: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        backgroundColor: "rgba(114, 191, 68, 1)",
        justifyContent: "space-evenly",
        padding: "35px 0",
      }}
    >
      <div>
        <h1 style={{ fontSize: "40px" }}>Подпишитесь на рассылку</h1>
        <p style={{ fontSize: "20px" }}>
          Узнавайте первыми о выгодных предложениях !
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Введите e-mail"
          style={{
            fontSize: "",
            width: "400px",
            padding: "8px",
            borderRadius: "5px",
            border: "none",
          }}
        />{" "}
        <br />
        <FormControlLabel
          style={{}}
          control={<Checkbox defaultChecked />}
          label="Нажимая на кнопку, вы принимаете условия "
        />
      </div>
      <div>
        <button
          style={{
            fontSize: "15px",
            padding: "5px",
            color: "white",
            background: "black",
            borderRadius: "5px",
          }}
        >
          Подписаться
        </button>
      </div>
    </div>
  );
};

export default Подпишитес;
