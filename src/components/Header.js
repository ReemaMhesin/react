import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import Label from "../mainComponants/Label";
import BasicButton from "../mainComponants/BasicButton";


const MyBox = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 7,
    paddingRight: 7,
    background: "white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  })
);

const responsiveBox = {
  paddingLeft: { xs: 0, md: 7 },
  paddingRight: { xs: 0, md: 7 },
};

const responsiveButton = {
  fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "12px" },
  fontWeight: { xs: "400", sm: "400", md: "400", lg: "400" },
  marginRight: 3,
};

export default function Header({ text, button,icon, onClick }) {
  return (
    <MyBox sx={responsiveBox}  draggable="false" className="theme">
      <Label value={text} />
      <BasicButton
        onClick={onClick}
        sx={responsiveButton}
        value={button}
        icon={icon}
      />
    </MyBox>
  );
}
