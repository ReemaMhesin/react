import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextWithLabel from "../mainComponants/TextWithLabel ";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect, useRef } from "react";

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

function CardComponent({
  flag,
  countryName,
  countryCode,
  population,
  region,
  capital,
  handleDrag,
  handleDelete,
  handleAddToFavorite,
}) {
  const cardsRef = useRef(null);

  const linkStyle = {
    textDecoration: "none",
    justifyContent: { xs: "center" },
  };

  // useEffect(() => {
  //   const star = handleStar.split("-");
  //   const name = star[0];

  //   for (const item of document.querySelectorAll("#card")) {
  //     const content = item.firstElementChild.firstElementChild
  //       .getAttribute("alt")
  //       .toLowerCase();

  //     if (content.trim() === name.trim()) {
  //       if (star[1] === "add") {
  //         item.firstElementChild.querySelector("#icon").style.color =
  //           "rgb(237, 95, 30)";
  //       } else if (star[1] === "delete") {
  //         item.firstElementChild.querySelector("#icon").style.color =
  //           "lightgray";
  //       }
  //     }
  //   }
  // }, [handleStar]);

  const dragStart = (e) => {
    const name = e.target.firstElementChild.firstElementChild
      .getAttribute("alt")
      .toLowerCase();
    const image = e.target.firstElementChild.firstElementChild
      .getAttribute("src")
      .toLowerCase();
    handleDrag(name, image);
  };

  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleFavorite = (e) => {
    e.preventDefault();
    const name =
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .getAttribute("alt")
        .toLowerCase();
    const image =
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .getAttribute("src")
        .toLowerCase();

    if (e.target.parentElement.style.color === "rgb(237, 95, 30)") {
      e.target.parentElement.style.color = "lightgray";
      handleDelete(name, image);
    } //if
    else {
      e.target.parentElement.style.color = "rgb(237, 95, 30)";
      handleAddToFavorite(name, image);
    } //else
  };

  return (
  
    <Card
      id="card"
      onDragStart={(e) => dragStart(e)}
      onDragEnd={overrideEventDefaults}
      draggable="true"
      sx={{
        maxWidth: 272,
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        justifyContent: { xs: "center" },
        marginRight: 0,
      }}
      className="theme"
    >

      <CardActionArea>
      
        <CardMedia
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          component="img"
          height="163"
          image={flag.svg}
          alt={countryName}
          draggable="false"
        />
         
          <CardContent>
            <CountryName ref={cardsRef} className="text">
              {countryName}
            </CountryName>
            <Discription
              variant="body2"
              color="text.secondary"
              className="text"
            >
              <div>
                {" "}
                <TextWithLabel
                  topic={"Population"}
                  value={population.toLocaleString()}
                />
              </div>
              <div>
                {" "}
                <TextWithLabel topic={"Region"} value={region} />
              </div>
              <div>
                {" "}
                <TextWithLabel topic={"Capital"} value={capital} />
              </div>
            </Discription>
          </CardContent>
      
        <IconButton
          sx={{  display: { xs: "flex", lg: "none" }, justifyContent: "right"}}
          component="label"
          onClick={handleFavorite}
        >
          <StarIcon id="icon" sx={{ color: "lightgray" }} />
        </IconButton>
      </CardActionArea>
    </Card>
   
  );
}
export default CardComponent;
