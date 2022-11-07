import "@fontsource/nunito";
import React, { useState, useEffect } from "react"
import "../home.css";
import Header from "../components/Header";
import CountryDescription from "../components/CountryDescription";
import Image from "../mainComponants/Image";
import { Link,useParams } from "react-router-dom";
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

const buttons = ["France", "Germany", "Netherlands"];

var currencyArr = [];
function DetailsPage() {
 

  const [countries, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(()=>{
    getCountry();
      },[])
    
     const getCountry=async() => {
      try{ const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const data = await res.json()
     await setCountry(data);
    //  {data.map((country,index) => 
    
    //     for( const key in country.currencies){
    //     currencyArr.push(country.currencies[key].name)
    // };
      // country.currencies.forEach(element => {
      //   currencyArr.push(element.name)
      // })
   
      //)}
     // console.log(currencyArr);
    }
       catch (error){
        console.error(error)
       }
      }

      // const [currencyValue, setCurrencies] = useState("");

      // const getCurrencies=() => {
       

      //    {countries.map((country,index) => 
    
      //     country.currencies.forEach(element => {
      //       currencyArr.push(element.name)
      //     })
       
      //   // let currency = currencyArr.join();
      //   // setCurrencies(currency);
      //     )}
      //     console.log(currencyArr);
      //   }
      //   useEffect(()=>{
      //     getCurrencies();
      //       });
          

  const linkStyle = {
    textDecoration: "none",
  };
  const buttonStyle = {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };

  return (
    <div className="detailsPage">
      <ThemeProvider theme={theme}>
        <Header text="Where in the world?" button="Dark Mode" />

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
        {countries.map((country) => 

        <MainBox sx={responsiveMainBox} >
          <div className="imgDiv">
            <Image value={country.flags.svg} alt={country.name.common} />
          </div>
          <div>
            <CountryDescription
              buttonsnames={buttons}
              countryName={country.name.common}
              nativeName={country.name.common}
              population={country.population.toLocaleString()}
              region={country.region}
              subRegion={country.subregion}
              capital={country.capital[0]}
              topLevelDomain={country.tld}
              currencies={country.tld}
              languages="Dutch, French, German"
            />
          </div>
        </MainBox>
          )}
      </ThemeProvider>
    </div>
  );
}

export default DetailsPage;
