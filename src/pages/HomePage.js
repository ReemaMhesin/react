import "@fontsource/nunito";
import * as React from "react";
import "../home.css";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "typeface-cormorant";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import MenuPopupState from "../mainComponants/MenuPopupState";
import SearchFeild from "../components/SearchFeild";
import ListComponent from "../mainComponants/ListComponent";
import ActionAreaCard from "../components/ActionAreaCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import af from "../images/af.svg";
import al from "../images/al.svg";
import ax from "../images/ax.svg";
import br from "../images/br.svg";
import de from "../images/de.svg";
import dz from "../images/dz.svg";
import is from "../images/is.svg";
import us from "../images/us.svg";
import mainFlag from "../images/Flag_of_Belgium.svg.png";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

const ArrangmentBox = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    marginLeft: 3,
    marginRight: 3,
  })
);

const responsiveDiv = {
  flexDirection: { xs: "column", md: "row", lg: "row" },
  paddingLeft: { xs: 0, md: 7 },
  paddingRight: { xs: 0, md: 7 },
  paddingTop: { xs: 3, md: 6 },
  paddingBottom: { xs: 2, md: 6 },
};

const menuItems = [
  "No Filter",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
  "Favorites",
];
const cardElement1 = [
  { topic: "Population", value: "11,319,511" },
  { topic: "Region", value: "Europe" },
  { topic: "Capital", value: "Brussels" },
];
const cardElement2 = [
  { topic: "Population", value: "323,947,000" },
  { topic: "Region", value: "Americas" },
  { topic: "Capital", value: "Washington.D.C" },
];
const cardElement3 = [
  { topic: "Population", value: "206,135,893" },
  { topic: "Region", value: "Americas" },
  { topic: "Capital", value: "Brasilia" },
];
const cardElement4 = [
  { topic: "Population", value: "334,300" },
  { topic: "Region", value: "Europe" },
  { topic: "Capital", value: "Reykjavik" },
];
const cardElement5 = [
  { topic: "Population", value: "27,657,145" },
  { topic: "Region", value: "Asia" },
  { topic: "Capital", value: "Kabul" },
];
const cardElement6 = [
  { topic: "Population", value: "28,875" },
  { topic: "Region", value: "Europe" },
  { topic: "Capital", value: "Mariehamn" },
];
const cardElement7 = [
  { topic: "Population", value: "2,886,026" },
  { topic: "Region", value: "Europe" },
  { topic: "Capital", value: "Tirana" },
];
const cardElement8 = [
  { topic: "Population", value: "40,400,000" },
  { topic: "Region", value: "Africa" },
  { topic: "Capital", value: "Algeria" },
];
const cardElement9 = [
  { topic: "Population", value: "B1,770,900" },
  { topic: "Region", value: "Europe" },
  { topic: "Capital", value: "Berlin" },
];

function HomePage() {
  const linkStyle = {
    textDecoration: "none",
    justifyContent: { xs: "center" },
  };
  const cards = {
    justifyContent: { xs: "center" },
  };
  return (
    <div className="homePage">
      <ThemeProvider theme={theme}>
        <TopBar text="Where in the world?" button="Dark Mode" />

        <ArrangmentBox sx={responsiveDiv}>
          <div>
            <SearchFeild placehoderValue="Search for a country..." />
          </div>
          <div>
            <MenuPopupState items={menuItems} menuTopic="Filter by" />
          </div>
        </ArrangmentBox>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "row", lg: "row" },
            marginLeft: { xs: 7, md: 3, lg: 3 },
            paddingLeft: { sm: 0, md: 7, lg: 7 },
          }}
        >
          <Grid container columnSpacing={1} rowSpacing={2}>
            <Grid item xs={0} md={3} lg={3}>
              <ListComponent topic="Favorites" />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Box sx={{ flexGrow: 1 ,height:'100vh',overflow:'scroll'}}>
                <Grid container rowSpacing={9} columnSpacing={1}>
                  <Grid item xs={12} md={6} lg={4}>
                    <Link style={linkStyle} to="/DetailsPage">
                      <ActionAreaCard
                        style={cards}
                        countryName="Belgium"
                        cardElements={cardElement1}
                        flag={mainFlag}
                      />{" "}
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="United States of America"
                      cardElements={cardElement2}
                      flag={us}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Brazil"
                      cardElements={cardElement3}
                      flag={br}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Iceland"
                      cardElements={cardElement4}
                      flag={is}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Afghanistan"
                      cardElements={cardElement5}
                      flag={af}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Aland Islands"
                      cardElements={cardElement6}
                      flag={ax}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Albania"
                      cardElements={cardElement7}
                      flag={al}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Algeria"
                      cardElements={cardElement8}
                      flag={dz}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <ActionAreaCard
                      countryName="Germany"
                      cardElements={cardElement9}
                      flag={de}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default HomePage;
