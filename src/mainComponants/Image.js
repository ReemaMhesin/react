import * as React from "react";
import mainFlag from "../images/Flag_of_Belgium.svg.png";
import { styled } from "@mui/material/styles";
import "@fontsource/nunito";
import "../home.css";

const Myimg = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));

function Image({ value }) {
  return <Myimg src={value} alt="flag" />;
}

export default Image;
