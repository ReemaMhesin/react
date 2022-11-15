import "@fontsource/nunito";
import React, { useState, useEffect } from "react";
import "../home.css";
import CountryDescription from "../components/CountryDescription";
import Image from "../mainComponants/Image";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { experimental_sx as sx } from "@mui/system";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "typeface-cormorant";
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

function DetailsPage() {

  const [country, setCountry] = useState([]);
  const { code } = useParams();
  const [currencyValue, setCurrencies] = useState("");
  const [languagesValue, setLanguages] = useState("");
  const [borderValue, setBorders] = useState([]);

  useEffect(() => {
    getCountry();
   
  }, []);

  const getCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
       setCountry(data);

    const currencies = data[0].currencies;
    let currencyArr = []
    for( const key in currencies){
        currencyArr.push(currencies[key].name)
    }
    setCurrencies(currencyArr.join(', '));

    const languages = data[0].languages;
    let languagesArr = []
    for( const key in languages){
        languagesArr.push(languages[key])
    }
    setLanguages(languagesArr.join(', '));

    setBorders(data[0].borders.slice(0,3));
    } catch (error) {
      console.error(error);
    }
  };

  
  


  const linkStyle = {
    textDecoration: "none",
  };
  const buttonStyle = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div className="detailsPage">
      <ThemeProvider theme={theme}>
        <ArrangmentBox sx={responsiveBox}>
          <Link style={linkStyle} to="/">
            <div style={buttonStyle}>
              {" "}
              <BasicButton
                value="Back"
                icon={<KeyboardBackspaceOutlinedIcon />}
              />
            </div>
          </Link>
        </ArrangmentBox>
        {country.map((country) => (
          <MainBox sx={responsiveMainBox}>
            <div className="imgDiv">
              <Image value={country.flags.svg} alt={country.name.common} />
            </div>
            <div>
              <CountryDescription
                buttonsnames={borderValue}
                countryName={country.name.common}
                nativeName={country.name.common}
                population={country.population.toLocaleString()}
                region={country.region}
                subRegion={country.subregion}
                capital={country.capital[0]}
                topLevelDomain={country.tld}
                currencies={currencyValue}
                languages={languagesValue}
              />
            </div>
          </MainBox>
        ))}
      </ThemeProvider>
    </div>
  );
}

export default DetailsPage;
