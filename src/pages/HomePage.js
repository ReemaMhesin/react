import "@fontsource/nunito";
import React, { useState, useEffect, useRef } from "react";
import "../home.css";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "typeface-cormorant";
import { Link } from "react-router-dom";
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
  "Favourites",
];

function HomePage() {
  const [searchedFlag, setsearchedFlag] = useState("");
  const [filteredFlag, setfilteredFlag] = useState("");
  const [countries, setCountries] = useState([]);
  const [cards, setCards] = useState([]);
  const [image, setImage] = useState([]);
  const [itemName, setName] = useState([]);
  const [draggedName, setDargedName] = useState("");
  const [draggedImg, setDragedImg] = useState("");
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCards(data);
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  useEffect(() => {
    const getSearchedCards = async () => {
      if (searchedFlag === "") {
        setfilteredFlag(filteredFlag);
      } else {
        try {
          // setCountries([]);
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${searchedFlag.toLowerCase()}`
          );
          const data = await res.json();
          setCountries(data);
        } catch (error) {
          console.error(error);
        }
        if (filteredFlag.toLowerCase() === "no filter" || filteredFlag === "") {
          setCards(countries);
        
        } else {
          setCards(
            countries.filter(
              (country) =>
                country.region.toLowerCase() === filteredFlag.toLowerCase()
            )
          );
        
        }
      }
    };
    getSearchedCards();
  }, [searchedFlag, filteredFlag]);

  useEffect(() => {
    const getCountries = async () => {
      if (searchedFlag === "") {
        if (filteredFlag.toLowerCase() === "no filter" || filteredFlag === "") {
          try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            setCards(data);
            setCountries(data);
          
          } catch (error) {
            console.error(error);
          }
        } else if (filteredFlag.toLowerCase() === "favourites") {
         
          setCards(favoriteCards);
        } else {
          setCards(
            countries.filter(
              (country) =>
                country.region.toLowerCase() === filteredFlag.toLowerCase()
            )
          );
        }
      }
    };
    getCountries();
  }, [filteredFlag, searchedFlag]);

  const handleSelect = (selectedItem) => {
    setfilteredFlag(selectedItem);
  };

  const handleSearch = (shearchedItem) => {
    setsearchedFlag(shearchedItem);
  };

  const handleAddToFavorite = (draggedName, draggedImg) => {
    setName(itemName.concat(draggedName));
    setImage(image.concat(draggedImg));

    setFavoriteCards(
      favoriteCards.concat(
        countries.filter(
          (country) =>
            country.name.common.toLowerCase() === draggedName.toLowerCase()
        )
      )
    );
  };

  const handleDrag = (draggedName, draggedImg) => {
    setDargedName(draggedName);
    setDragedImg(draggedImg);
  };
  const handleDrop = () => {
    setName(itemName.concat(draggedName));
    setImage(image.concat(draggedImg));

    setFavoriteCards(
      favoriteCards.concat(
        countries.filter(
          (country) =>
            country.name.common.toLowerCase() === draggedName.toLowerCase()
        )
      )
    );

    for (const item of document.querySelectorAll("#card")) {
      const content = item.firstElementChild.firstElementChild
        .getAttribute("alt")
        .toLowerCase();

      if (content.trim() === draggedName.trim()) {
        item.firstElementChild.querySelector("#icon").style.color =
          "rgb(237, 95, 30)";
      }
    }
  };
  const handleDelete = (name, img) => {

    for (const item of document.querySelectorAll("#card")) {
      const content = item.firstElementChild.firstElementChild
        .getAttribute("alt")
        .toLowerCase();
       
      if (content.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()) {
        item.firstElementChild.querySelector("#icon").style.color = "lightgray";
      }
    }

    setName(
      itemName.filter((item) => item.toLowerCase() !== name.toLowerCase())
    );
    setImage(image.filter((item) => item.toLowerCase() !== img.toLowerCase()));

    
      setFavoriteCards(
        favoriteCards.filter(
          (country) =>
            country.name.common.toLowerCase() !== name.toLowerCase()
        )
      
    );
  };


  const cardsStyle = {
    justifyContent: { xs: "center" },
  };

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="homePage" draggable="false">
      <ThemeProvider theme={theme}>
        <ArrangmentBox sx={responsiveDiv} className="Box">
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
                handleDelete={handleDelete}
                handleDrop={handleDrop}
                itemName={itemName}
                itemImg={image}
                deletedName={itemName}
                deletedImg={image}
                topic="Favorites"
                sx={{ sm: { height: "100vh", overflow: "scroll" } }}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Box sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
                <Grid container rowSpacing={9} columnSpacing={1}>
                  {cards.map((country, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <Link to={`/DetailsPage/${country.cca2}`} style={linkStyle}>
                      <CountryCard
                        className="card"
                        handleAddToFavorite={handleAddToFavorite}
                        handleDrag={handleDrag}
                        handleDelete={handleDelete}
                        style={cardsStyle}
                        countryName={country.name.common}
                        countryCode={country.cca2}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                        flag={country.flags}
                      />{" "}
                      </Link>
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
