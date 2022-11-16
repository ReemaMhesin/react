import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import "../home.css";

const MyButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "white",
  padding: "5px",
  width: "8rem",
  fontSize: "12px",
  fontWeight: "400",
}));

export default function BasicButton({ value, icon, onClick }) {
  const toggleTheme = () => {
    onClick((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <MyButton startIcon={icon} onClick={toggleTheme} className="theme">
      {value}
    </MyButton>
  );
}
