import * as React from "react";
import { styled } from "@mui/material/styles";

const Value = styled("span")(() => ({
  color: "black",
  fontSize: "14px",
  fontWeight: "300",
}));

export default function TextWithLabel({ topic,value }) {
  return (
    <>
       {topic}: <Value>{value}</Value>
    </>
  );
}
