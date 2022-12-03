import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextWithLabel from "../mainComponants/TextWithLabel ";
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
  handleDelete,
  handleDrag,
  handleAddToFavorite,
  deletedByList
}) {
  const favoriteName=countryName;
  const [isFavorite, setIsFavorite] =useState(false);
  const [byStar, setByStar] =useState(false);
  

  useEffect(() => {
    if(deletedByList.toLowerCase()===favoriteName.toLowerCase()) setIsFavorite(false);
    console.log(deletedByList,favoriteName);
  }, [deletedByList]);

  useEffect(() => {
    isFavorite? handleAddToFavorite(favoriteName):handleDelete(favoriteName);
  }, [byStar]);

  

  const dragStart = () => {
    handleDrag(favoriteName);
    setIsFavorite(true);
  };

  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    setByStar(!byStar);
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
          <CountryName  className="text">
            {countryName}
          </CountryName>
          <Discription variant="body2" color="text.secondary" className="text">
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
          sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "right",color: isFavorite ? 'rgb(237, 95, 30)' : 'lightgray'}}
          component="label"
          onClick={handleFavorite}
        >
          <StarIcon />
        </IconButton>
      </CardActionArea>
    </Card>
  );
}
export default CardComponent;






































// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import TextWithLabel from "../mainComponants/TextWithLabel ";
// import IconButton from "@mui/material/IconButton";
// import StarIcon from "@mui/icons-material/Star";
// import { useState, useEffect, useRef } from "react";

// const CountryName = styled("div")(({ theme }) => ({
//   color: "black",
//   fontSize: "17px",
//   fontWeight: "800",
//   paddingTop: "5px",
//   paddingBottom: "5px",
// }));

// const Discription = styled("p")(() => ({
//   color: "black",
//   fontSize: "14px",
//   fontWeight: "400",
//   lineHeight: "1.8",
// }));

// function CardComponent({
//   flag,
//   countryName,
//   countryCode,
//   population,
//   region,
//   capital,
//   handleDelete,
//   handleAddToFavorite,
//   handleFinishFavorite,
//   deletedByList
// }) {
//   const favoriteName=countryName;
//   const favoriteImg=flag.svg;
//   const [isFavorite, setIsFavorite] =useState(false);
  

//   useEffect(() => {
//     if(deletedByList.toLowerCase()===favoriteName.toLowerCase()) setIsFavorite(false);
//   }, [deletedByList]);

//   useEffect(() => {
//     isFavorite? handleAddToFavorite(favoriteName, favoriteImg):handleDelete(favoriteName, favoriteImg);
//   }, [isFavorite]);

  

//   const dragStart = () => {
//     setIsFavorite(true);
//   };

//   function overrideEventDefaults(event) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   const handleFavorite = (e) => {
//     e.preventDefault();
//     setIsFavorite(!isFavorite);
//     if(isFavorite) handleFinishFavorite();
//   };

//   return (
//     <Card
//       id="card"
//       onDragStart={(e) => dragStart(e)}
//       onDragEnd={overrideEventDefaults}
//       draggable="true"
//       sx={{
//         maxWidth: 272,
//         boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//         justifyContent: { xs: "center" },
//         marginRight: 0,
//       }}
//       className="theme"
//     >
//       <CardActionArea>
//         <CardMedia
//           sx={{
//             boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           }}
//           component="img"
//           height="163"
//           image={flag.svg}
//           alt={countryName}
//           draggable="false"
//         />

//         <CardContent>
//           <CountryName  className="text">
//             {countryName}
//           </CountryName>
//           <Discription variant="body2" color="text.secondary" className="text">
//             <div>
//               {" "}
//               <TextWithLabel
//                 topic={"Population"}
//                 value={population.toLocaleString()}
//               />
//             </div>
//             <div>
//               {" "}
//               <TextWithLabel topic={"Region"} value={region} />
//             </div>
//             <div>
//               {" "}
//               <TextWithLabel topic={"Capital"} value={capital} />
//             </div>
//           </Discription>
//         </CardContent>

//         <IconButton
//           sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "right",color: isFavorite ? 'rgb(237, 95, 30)' : 'lightgray'}}
//           component="label"
//           onClick={handleFavorite}
//         >
//           <StarIcon />
//         </IconButton>
//       </CardActionArea>
//     </Card>
//   );
// }
// export default CardComponent;
