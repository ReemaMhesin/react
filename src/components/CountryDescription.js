import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles";
import "@fontsource/nunito";
import "typeface-cormorant";
import Box from "@mui/material/Box";
import GroupButton from "../mainComponants/GroupButton";
import TextWithLabel from "../mainComponants/TextWithLabel ";

const CountryName = styled("div")(({ theme }) => ({
  color: "black",
  fontSize: "23px",
  fontWeight: "800",
  paddingBottom: "21px",
  paddingLeft: 0,
}));
const Discription = styled("div")(() => ({
  color: "black",
  fontSize: "16px",
  lineHeight: "2.2",
  fontWeight: "400",
}));

const BorderCountries = styled("div")(() => ({
  color: "black",
  fontSize: "16px",
  fontWeight: "400",
  marginRight: "7px",
}));

function CountryDescription({ buttonsnames,countryName, nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages  }) {
  // const [currencyValue, setCurrencies] = useState("");

  // const getCurrencies=() => {
  //   console.log({currencies});

  //   let currencyArr = [];
  //   for( const key in {currencies}){
  //       currencyArr.push({currencies}[key].name)
  //   }
   
  //   let currency = currencyArr.join(', ');
  //   setCurrencies(currency);
  //   }
  //   useEffect(()=>{
  //     getCurrencies();
  //       });
    
        
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          marginLeft: { xs: 0, sm: 7 },
          paddingLeft: { xs: 0, sm: 7 },
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "left", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "flex-start", sm: "space-between" },
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  flexDirection: "column",
                  flexGrow: 2,
                  marginRight: { xs: 0, sm: 7 },
                  marginLeft: { xs: 3, sm: 0 },
                  marginTop: { xs: 5, sm: 0 },
                }}
              >
                <CountryName>{countryName}</CountryName>

                <Discription sx={{ flexGrow: 2 }}>

                <div><TextWithLabel topic={"Native Name"} value={nativeName}  /></div>
                <div><TextWithLabel topic={"Population"} value={population}  /></div>
                <div> <TextWithLabel topic={"Region"} value={region}  /></div>
                <div> <TextWithLabel topic={"Sub Region"} value={subRegion}  /></div>
                <div> <TextWithLabel topic={"Capital"} value={capital}  /></div>
                </Discription>
              </Box>
            </div>

            <div>
              <Discription
                sx={{
                  flexGrow: 2,
                  marginLeft: { xs: 3, sm: 7 },
                  marginTop: { xs: 3, sm: 0 },
                }}
              >
               
               <div> <TextWithLabel topic={"Top Level Domain"} value={topLevelDomain}  /></div>
               <div>  <TextWithLabel topic={"Currencies"} value={currencies}  /></div>
               <div>  <TextWithLabel topic={"Languages"} value={languages}  /></div>
              </Discription>
            </div>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: 5,
              marginLeft: { xs: 3, sm: 0 },
            }}
          >
            <BorderCountries>Border Countries:</BorderCountries>
            <GroupButton buttonsNames={buttonsnames} />
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default CountryDescription;
