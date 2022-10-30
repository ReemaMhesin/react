import "@fontsource/nunito";
import * as React from "react";
import "../home.css";
import TopBar from "../components/TopBar";
import DiscriptionTemplete from "../components/DiscriptionTemplete";
import Image from "../mainComponants/Image";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { experimental_sx as sx } from "@mui/system";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "typeface-cormorant";
import mainFlag from "../images/Flag_of_Belgium.svg.png";
import BasicButton from "../mainComponants/BasicButton";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

const ArrangmentBox = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "left",
    paddingTop: 6,
    paddingBottom: 6,
  })
);

const MainBox = styled(Box)(
  sx({
    display: "flex",
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: "center",
    width: "100%",
  })
);

const responsiveBox = {
  paddingLeft: { xs: 0, md: 7 },
  marginLeft: { xs: 2, md: 3 },
};
const responsiveMainBox = {
  flexDirection: { xs: "column", md: "row", lg: "row" },
  paddingLeft: { xs: 0, md: 7 },
  paddingRight: { xs: 0, md: 7 },
  marginLeft: { xs: 0, md: 3 },
};

const buttons = ["France", "Germany", "Netherlands"];
const subParagraph1 = [
  { topic: "Native Name", value: "België" },
  { topic: "Population", value: "11,319,511" },
  { topic: "Region", value: "Europe" },
  { topic: "Sub Region", value: "Western Europe" },
  { topic: "Capital", value: "Brussels" },
];
const subParagraph2 = [
  { topic: "Top Level Domain", value: "be" },
  { topic: "Currencies", value: "Euro" },
  { topic: "Languages", value: "Dutch, French, German" },
];

function DetailsPage() {
  const linkStyle = {
    textDecoration: "none",
  };
  const buttonStyle = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div className="detailsPage">
      <ThemeProvider theme={theme}>
        <TopBar text="Where in the world?" button="Dark Mode" />

        <ArrangmentBox sx={responsiveBox}>
          <Link style={linkStyle} to="/">
            <div style={linkStyle}>
              {" "}
              <BasicButton
                value="Back"
                icon={<KeyboardBackspaceOutlinedIcon />}
              />
            </div>
          </Link>
        </ArrangmentBox>

        <MainBox sx={responsiveMainBox}>
          <div className="imgDiv">
            <Image value={mainFlag} />
          </div>
          <div>
            <DiscriptionTemplete
              buttonsnames={buttons}
              subParagraph1={subParagraph1}
              subParagraph2={subParagraph2}
            />
          </div>
        </MainBox>
      </ThemeProvider>
    </div>
  );
}

export default DetailsPage;
