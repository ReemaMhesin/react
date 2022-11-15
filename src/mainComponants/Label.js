import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "../home.css";

const Tobic = styled(Typography)(
  sx({
    fontSize: { xs: "19px", sm: "22px", md: "22px", lg: "22px" },
    fontWeight: { xs: "800", sm: "800", md: "800", lg: "800" },
    flexGrow: 1,
    marginLeft: 3,
  })
);

export default function Label({ value }) {
  return <Tobic className="theme">{value} </Tobic>;
}
