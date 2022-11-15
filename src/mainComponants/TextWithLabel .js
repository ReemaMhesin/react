import * as React from "react";
import { styled } from "@mui/material/styles";
import "../home.css";

const Value = styled("span")(() => ({
  fontSize: "14px",
  fontWeight: "300",
}));

export default function TextWithLabel({ topic, value }) {
  return (
    <div className="text">
      {topic}: <Value>{value}</Value>
    </div>
  );
}
