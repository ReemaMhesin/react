import "@fontsource/nunito";
import React, { useState, useEffect } from "react";
import "../home.css";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "typeface-cormorant";
import Header from "../components/Header";
import TextFeild from "../mainComponants/TextFeild";
import ListComponent from "../mainComponants/ListComponent";
import CountryCard from "../components/CountryCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SelectComponent from "../mainComponants/SelectComponent";

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
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Favorites",
];

var searchedFlag = "";
var filteredFlag = "";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [cards, setCards] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      await setCountries(data);
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  const switchMode = () => {
    setDarkMode((previous) => !previous);
  };

  const handleSelect = async (selectedItem) => {
    if (selectedItem === "") return;
    else if (selectedItem.toLowerCase() === "no filter") {
      await setCountries(cards);
    } else if (selectedItem.toLowerCase() === "favourites") {
      console.log(selectedItem.toLowerCase());
    } else {
      filteredFlag = selectedItem;
      await setCountries(
        cards.filter(
          (country) =>
            country.region.toLowerCase() === selectedItem.toLowerCase()
        )
      );
    }
  };

  const handleSearch = async (shearchedItem) => {
    searchedFlag = shearchedItem;
    console.log(shearchedItem);
    setCards([]);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${shearchedItem.toLowerCase()}`
    );
    const data = await res.json();
    setCards(data);
    console.log(data);

    if (filteredFlag === "") {
      await setCountries(cards);
    } else if (shearchedItem === "") {
      console.log(filteredFlag);
      getCountries();
      handleSelect(filteredFlag);
    } else {
      await setCountries(
        cards.filter(
          (country) =>
            country.region.toLowerCase() === filteredFlag.toLowerCase()
        )
      );
    }
  };

  const cardsStyle = {
    justifyContent: { xs: "center" },
  };

  return (
    <div className="homePage">
      <ThemeProvider theme={theme}>
        <Header
          text="Where in the world?"
          button="Dark Mode"
          onClick={switchMode}
          mode={darkMode}
        />

        <ArrangmentBox sx={responsiveDiv}>
          <div>
            <TextFeild
              placehoderValue="Search for a country..."
              handleSearch={handleSearch}
            />
          </div>
          <div>
            <SelectComponent
              items={menuItems}
              menuTopic="Filter by"
              handleSelect={handleSelect}
            />
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
              <ListComponent
                topic="Favorites"
                sx={{ sm: { height: "100vh", overflow: "scroll" } }}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Box sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
                <Grid container rowSpacing={9} columnSpacing={1}>
                  {countries.map((country) => (
                    <Grid item xs={12} md={6} lg={4}>
                      <CountryCard
                        style={cardsStyle}
                        countryName={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        flag={country.flags}
                      />{" "}
                    </Grid>
                  ))}
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
