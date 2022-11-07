import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextWithLabel from "../mainComponants/TextWithLabel ";
import { Link } from "react-router-dom";

const CountryName = styled("div")(({ theme }) => ({
  color: "black",
  fontSize: "17px",
  fontWeight: "800",
  paddingTop: "5px",
  paddingBottom: "5px",
}));

const Discription = styled("p")(() => ({
  color: "black",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.8",
}));

function CardComponent({ flag, countryName, population,region,capital }) {
  const linkStyle = {
    textDecoration: "none",
    justifyContent: { xs: "center" },
  };
  
  return (
    <Link to={`/${countryName}`} style={linkStyle}>
    <Card
      sx={{
        maxWidth: 272,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        justifyContent: { xs: "center" },
        marginRight: 0,
      }}
    >
      <CardActionArea>
        <CardMedia
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
          component="img"
          height="163"
          image={flag.svg}
          alt="green iguana"
        />
        <CardContent>
          <CountryName>{countryName}</CountryName>
          <Discription variant="body2" color="text.secondary">
           <div> <TextWithLabel topic={"Population"} value={population.toLocaleString()}  /></div>
           <div>  <TextWithLabel topic={"Region"} value={region}  /></div>
           <div> <TextWithLabel topic={"Capital"} value={capital}  /></div>
          </Discription>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
export default CardComponent;
