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
  const [searchedValue, setsearchedValue] = useState("");
  const [filteredValue, setfilteredValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [cards, setCards] = useState([]);
  const [favoriteCards, setFavoriteCards] = useState([]);
  const [draggedName, setDargedName] = useState("");
  const [deletedByList, setDeletedByList] = useState("");
  
 
  // useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //             const res = searchedValue
  //               ? await fetch(
  //                   `https://restcountries.com/v3.1/name/${searchedValue.toLowerCase()}`
  //                 )
  //               : await fetch("https://restcountries.com/v3.1/all");
  //               res.ok?
  //               setCountries(await res.json())
  //               :setCountries([]);
  //             console.log(res);
  //           } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCountries();
  // }, [searchedValue]);





  //  useEffect(() => {
  //   const getCountries = async () => {
  //     try {
  //       const res = searchedValue
  //         ? await fetch(
  //             `https://restcountries.com/v3.1/name/${searchedValue.toLowerCase()}`
  //           )
  //         : await fetch("https://restcountries.com/v3.1/all")
  //               res.ok?
  //               setCountries(await res.json())
  //               :setCountries([]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getCountries();
    
  // }, [searchedValue]);

  // useEffect(() => {
  //  const getCountries = () => {
  //     if (countries.length === 0) {
  //       setCards([]);
  //     }else 
  //      setCards(
  //       filteredValue.toLowerCase() === "no filter" || filteredValue === ""
  //         ? countries
  //         : filteredValue.toLowerCase() === "favourites" 
  //         ?  searchedValue
  //         ? favoriteCards.map((item) => (
  //           countries.filter(
  //             (country) =>
  //               country.region.toLowerCase() === item.region.toLowerCase()
  //           )
  //         ))
  //         : favoriteCards
  //         : countries.filter(
  //             (country) =>
  //               country.region.toLowerCase() === filteredValue.toLowerCase()
  //           )
  //     );
  //     // setCards(
  //     //   filteredValue.toLowerCase() === "no filter" || filteredValue === "" 
  //     //     ? countries
  //     //     : countries.filter(
  //     //       (country) =>
  //     //         country.region.toLowerCase() === filteredValue.toLowerCase()
  //     //     )
  //     // );
  //   };
  //   getCountries();
  // }, [countries,filteredValue]);




  
  // useEffect(() => {
  //   const getCountries = () => {
  //     setCards(
  //       filteredValue.toLowerCase() === "no filter" || filteredValue === ""
  //         ? countries
  //         : filteredValue.toLowerCase() === "favourites" 
  //         ?  searchedValue
  //         ? favoriteCards.map((item) => (
  //           countries.filter(
  //             (country) =>
  //               country.region.toLowerCase() === item.region.toLowerCase()
  //           )
  //         ))
  //         : favoriteCards
  //         : countries.filter(
  //             (country) =>
  //               country.region.toLowerCase() === filteredValue.toLowerCase()
  //           )
  //     );
  //   };
  //   getCountries();
  // }, [countries,filteredValue]);





  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = searchedValue
          ? await fetch(
              `https://restcountries.com/v3.1/name/${searchedValue.toLowerCase()}`
            )
          : filteredValue.toLowerCase() === "favourites" 
          ? favoriteCards
          : await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
    
  }, [searchedValue,filteredValue.toLowerCase() === "favourites"]);

  useEffect(() => {
    const getCountries = () => {
      setCards(
        filteredValue.toLowerCase() === "no filter" || filteredValue === "" 
          ? countries
          : filteredValue.toLowerCase() === "favourites" 
          ? searchedValue
          ? countries.filter(
            (country) =>
              country.name.common.toLowerCase() === searchedValue.toLowerCase()
          )
          : countries
          : countries.filter(
            (country) =>
              country.region.toLowerCase() === filteredValue.toLowerCase()
          )
      );
    };
    getCountries();
  }, [countries,filteredValue]);





  const handleSelect = (selectedItem) => {
    setfilteredValue(selectedItem);
  };

  const handleSearch = (shearchedItem) => {
    setsearchedValue(shearchedItem);
  };

  const handleDrag = (draggedName) => {
    setDargedName(draggedName);
  };

  const handleDrop = () => {
    setFavoriteCards([...new Set( favoriteCards.concat(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase() === draggedName.toLowerCase()
      )
    ))]);
  };

  const handleAddToFavorite = (name) => {
    setFavoriteCards([...new Set( favoriteCards.concat(
      countries.filter(
        (country) =>
          country.name.common.toLowerCase() === name.toLowerCase()
      )
    ))]);
  };

  const handleDelete = (name) => {
    setFavoriteCards(
      favoriteCards.filter(
        (country) => country.name.common.toLowerCase() !== name.toLowerCase()
      )
    );
    setDeletedByList(name.trim());
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
              searchedValue={searchedValue}
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
                favoriteCards={favoriteCards}
                handleDrop={handleDrop}
                topic="Favorites"
                sx={{ sm: { height: "100vh", overflow: "scroll" } }}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Box sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
                <Grid container rowSpacing={9} columnSpacing={1}>
                  {cards.map((country, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                      <Link
                        to={`/DetailsPage/${country.cca2}`}
                        style={linkStyle}
                      >
                        <CountryCard
                          className="card"
                          handleDrag={handleDrag}
                          handleAddToFavorite={handleAddToFavorite}
                          handleDelete={handleDelete}
                          deletedByList={deletedByList}
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










// import "@fontsource/nunito";
// import React, { useState, useEffect, useRef } from "react";
// import "../home.css";
// import { styled } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { experimental_sx as sx } from "@mui/system";
// import "typeface-cormorant";
// import { Link } from "react-router-dom";
// import TextFeild from "../mainComponants/TextFeild";
// import ListComponent from "../mainComponants/ListComponent";
// import CountryCard from "../components/CountryCard";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import SelectComponent from "../mainComponants/SelectComponent";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Nunito", "sans-serif"].join(","),
//   },
// });

// const ArrangmentBox = styled(Box)(
//   sx({
//     display: "flex",
//     justifyContent: "space-between",
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 7,
//     paddingRight: 7,
//     marginLeft: 3,
//     marginRight: 3,
//   })
// );

// const responsiveDiv = {
//   flexDirection: { xs: "column", md: "row", lg: "row" },
//   paddingLeft: { xs: 0, md: 7 },
//   paddingRight: { xs: 0, md: 7 },
//   paddingTop: { xs: 3, md: 6 },
//   paddingBottom: { xs: 2, md: 6 },
// };

// const menuItems = [
//   "No Filter",
//   "Africa",
//   "Americas",
//   "Asia",
//   "Europe",
//   "Oceania",
//   "Favourites",
// ];

// function HomePage() {
//   const [searchedValue, setsearchedValue] = useState("");
//   const [filteredValue, setfilteredValue] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [cards, setCards] = useState([]);
//   const [favoriteImages, setFavoriteImages] = useState([]);
//   const [favoriteNames, setFavoriteNames] = useState([]);
//   const [deletedByList, setDeletedByList] = useState("");
//   const [favoriteCards, setFavoriteCards] = useState([]);
//   const [isNewDelete, setIsNewDelete] = useState(false);
//   const [isNewAdd, setIsNewAdd] = useState(false);
//   useEffect(() => {
//     const getCountries = async () => {
//       try {
//         const res = searchedValue
//           ? await fetch(
//               `https://restcountries.com/v3.1/name/${searchedValue.toLowerCase()}`
//             )
//           : await fetch("https://restcountries.com/v3.1/all");
//         const data = await res.json();
//         setCountries(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getCountries();
//   }, [searchedValue]);

//   useEffect(() => {
//     const getCountries = () => {
//       setCards(
//         filteredValue.toLowerCase() === "no filter" || filteredValue === ""
//           ? countries
//           : filteredValue.toLowerCase() === "favourites" 
//           ?  searchedValue
//           ? favoriteCards.filter(
//             (country) =>
//               country.name.common.toLowerCase() === searchedValue.trim()
//           )
//           : favoriteCards
//           : countries.filter(
//               (country) =>
//                 country.region.toLowerCase() === filteredValue.toLowerCase()
//             )
//       );
//     };
//     getCountries();
//   }, [countries,filteredValue]);



//   const handleSelect = (selectedItem) => {
//     setfilteredValue(selectedItem);
//   };

//   const handleSearch = (shearchedItem) => {
//     setsearchedValue(shearchedItem);
//   };

  
//   const handleAddToFavorite = (draggedName, draggedImg) => {
//     setFavoriteNames([...new Set(favoriteNames.concat(draggedName))]);
//     setFavoriteImages([...new Set(favoriteImages.concat(draggedImg))]);

//     setFavoriteCards([...new Set( favoriteCards.concat(
//       countries.filter(
//         (country) =>
//           country.name.common.toLowerCase() === draggedName.toLowerCase()
//       )
//     ))]);
//   };

//   const handleDelete = (name, img) => {
//     setFavoriteNames(
//       favoriteNames.filter((item) => item.toLowerCase() !== name.toLowerCase())
//     );
//     setFavoriteImages(favoriteImages.filter((item) => item.toLowerCase() !== img.toLowerCase()));
//     setFavoriteCards(
//       favoriteCards.filter(
//         (country) => country.name.common.toLowerCase() !== name.toLowerCase()
//       )
//     );
//     setDeletedByList(name.trim());
//     setIsNewDelete(!isNewDelete);
//   };

//   const handleFinishFavorite = () => {
//     setIsNewAdd(!isNewAdd);
//   };

//   const cardsStyle = {
//     justifyContent: { xs: "center" },
//   };

//   const linkStyle = {
//     textDecoration: "none",
//   };

//   return (
//     <div className="homePage" draggable="false">
//       <ThemeProvider theme={theme}>
//         <ArrangmentBox sx={responsiveDiv} className="Box">
//           <div>
//             <TextFeild
//               placehoderValue="Search for a country..."
//               handleSearch={handleSearch}
//               searchedValue={searchedValue}
//             />
//           </div>
//           <div>
//             <SelectComponent
//               items={menuItems}
//               menuTopic="Filter by"
//               handleSelect={handleSelect}
//             />
//           </div>
//         </ArrangmentBox>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: { xs: "center", md: "row", lg: "row" },
//             marginLeft: { xs: 7, md: 3, lg: 3 },
//             paddingLeft: { sm: 0, md: 7, lg: 7 },
//           }}
//         >
//           <Grid container columnSpacing={1} rowSpacing={2}>
//             <Grid item xs={0} md={3} lg={3}>
//               <ListComponent
//                 handleDelete={handleDelete}
//                 favoriteNames={favoriteNames}
//                 favoriteImages={favoriteImages}
//                 handleFinishFavorite={handleFinishFavorite}
//                 newDelete={isNewDelete}
//                 newAdd={isNewAdd}
//                 topic="Favorites"
//                 sx={{ sm: { height: "100vh", overflow: "scroll" } }}
//               />
//             </Grid>
//             <Grid item xs={12} md={9} lg={9}>
//               <Box sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
//                 <Grid container rowSpacing={9} columnSpacing={1}>
//                   {cards.map((country, index) => (
//                     <Grid item xs={12} md={6} lg={4} key={index}>
//                       <Link
//                         to={`/DetailsPage/${country.cca2}`}
//                         style={linkStyle}
//                       >
//                         <CountryCard
//                           className="card"
//                           handleAddToFavorite={handleAddToFavorite}
//                           handleFinishFavorite={handleFinishFavorite}
//                           handleDelete={handleDelete}
//                           deletedByList={deletedByList}
//                           style={cardsStyle}
//                           countryName={country.name.common}
//                           countryCode={country.cca2}
//                           population={country.population}
//                           region={country.region}
//                           capital={country.capital}
//                           flag={country.flags}
//                         />{" "}
//                       </Link>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default HomePage;














// import "@fontsource/nunito";
// import React, { useState, useEffect, useRef } from "react";
// import "../home.css";
// import { styled } from "@mui/material/styles";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { experimental_sx as sx } from "@mui/system";
// import "typeface-cormorant";
// import { Link } from "react-router-dom";
// import TextFeild from "../mainComponants/TextFeild";
// import ListComponent from "../mainComponants/ListComponent";
// import CountryCard from "../components/CountryCard";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import SelectComponent from "../mainComponants/SelectComponent";

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Nunito", "sans-serif"].join(","),
//   },
// });

// const ArrangmentBox = styled(Box)(
//   sx({
//     display: "flex",
//     justifyContent: "space-between",
//     paddingTop: 6,
//     paddingBottom: 6,
//     paddingLeft: 7,
//     paddingRight: 7,
//     marginLeft: 3,
//     marginRight: 3,
//   })
// );

// const responsiveDiv = {
//   flexDirection: { xs: "column", md: "row", lg: "row" },
//   paddingLeft: { xs: 0, md: 7 },
//   paddingRight: { xs: 0, md: 7 },
//   paddingTop: { xs: 3, md: 6 },
//   paddingBottom: { xs: 2, md: 6 },
// };

// const menuItems = [
//   "No Filter",
//   "Africa",
//   "Americas",
//   "Asia",
//   "Europe",
//   "Oceania",
//   "Favourites",
// ];

// function HomePage() {
//   const [searchedValue, setsearchedValue] = useState("");
//   const [filteredValue, setfilteredValue] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [cards, setCards] = useState([]);
//   const [favoriteImages, setFavoriteImages] = useState([]);
//   const [favoriteNames, setFavoriteNames] = useState([]);
//   const [draggedName, setDargedName] = useState("");
//   const [draggedImg, setDragedImg] = useState("");
//   const [deletedByList, setDeletedByList] = useState("");
//   const [favoriteCards, setFavoriteCards] = useState([]);
  
//   useEffect(() => {
//     const getCountries = async () => {
//       try {
//         const res = searchedValue
//           ? await fetch(
//               `https://restcountries.com/v3.1/name/${searchedValue.toLowerCase()}`
//             )
//           : await fetch("https://restcountries.com/v3.1/all");
//         const data = await res.json();
//         setCountries(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getCountries();
//   }, [searchedValue]);

//   useEffect(() => {
//     const getCountries = () => {
//       setCards(
//         filteredValue.toLowerCase() === "no filter" || filteredValue === ""
//           ? countries
//           : filteredValue.toLowerCase() === "favourites" 
//           ?  searchedValue
//           ? favoriteCards.filter(
//             (country) =>
//               country.name.common.toLowerCase() === searchedValue.trim()
//           )
//           : favoriteCards
//           : countries.filter(
//               (country) =>
//                 country.region.toLowerCase() === filteredValue.toLowerCase()
//             )
//       );
//     };
//     getCountries();
//   }, [countries,filteredValue]);



//   const handleSelect = (selectedItem) => {
//     setfilteredValue(selectedItem);
//   };

//   const handleSearch = (shearchedItem) => {
//     setsearchedValue(shearchedItem);
//   };

  
//   const handleDrag = (draggedName, draggedImg) => {
//     setDargedName(draggedName);
//     setDragedImg(draggedImg);
//     setFavoriteCards([...new Set( favoriteCards.concat(
//       countries.filter(
//         (country) =>
//           country.name.common.toLowerCase() === draggedName.toLowerCase()
//       )
//     ))]);
//   };
  
//   const handleDrop = () => {
//       setFavoriteNames([...new Set(favoriteNames.concat(draggedName))]);
//     setFavoriteImages([...new Set(favoriteImages.concat(draggedImg))]);
//   };

//   const handleAddToFavorite = (draggedName, draggedImg) => {
//     setFavoriteNames([...new Set(favoriteNames.concat(draggedName))]);
//    setFavoriteImages([...new Set(favoriteImages.concat(draggedImg))]);
//  };

//   const handleDelete = (name, img) => {
//     setFavoriteNames(
//       favoriteNames.filter((item) => item.toLowerCase() !== name.toLowerCase())
//     );
//     setFavoriteImages(favoriteImages.filter((item) => item.toLowerCase() !== img.toLowerCase()));
//     setDeletedByList(name.trim());
//   };

//   const cardsStyle = {
//     justifyContent: { xs: "center" },
//   };

//   const linkStyle = {
//     textDecoration: "none",
//   };

//   return (
//     <div className="homePage" draggable="false">
//       <ThemeProvider theme={theme}>
//         <ArrangmentBox sx={responsiveDiv} className="Box">
//           <div>
//             <TextFeild
//               placehoderValue="Search for a country..."
//               handleSearch={handleSearch}
//               searchedValue={searchedValue}
//             />
//           </div>
//           <div>
//             <SelectComponent
//               items={menuItems}
//               menuTopic="Filter by"
//               handleSelect={handleSelect}
//             />
//           </div>
//         </ArrangmentBox>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: { xs: "center", md: "row", lg: "row" },
//             marginLeft: { xs: 7, md: 3, lg: 3 },
//             paddingLeft: { sm: 0, md: 7, lg: 7 },
//           }}
//         >
//           <Grid container columnSpacing={1} rowSpacing={2}>
//             <Grid item xs={0} md={3} lg={3}>
//               <ListComponent
//                 handleDelete={handleDelete}
//                 handleDrop={handleDrop}
//                 favoriteNames={favoriteNames}
//                 favoriteImages={favoriteImages}
//                 topic="Favorites"
//                 sx={{ sm: { height: "100vh", overflow: "scroll" } }}
//               />
//             </Grid>
//             <Grid item xs={12} md={9} lg={9}>
//               <Box sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}>
//                 <Grid container rowSpacing={9} columnSpacing={1}>
//                   {cards.map((country, index) => (
//                     <Grid item xs={12} md={6} lg={4} key={index}>
//                       <Link
//                         to={`/DetailsPage/${country.cca2}`}
//                         style={linkStyle}
//                       >
//                         <CountryCard
//                           className="card"
//                           handleAddToFavorite={handleAddToFavorite}
//                           handleDrag={handleDrag}
//                           handleDelete={handleDelete}
//                           deletedByList={deletedByList}
//                           style={cardsStyle}
//                           countryName={country.name.common}
//                           countryCode={country.cca2}
//                           population={country.population}
//                           region={country.region}
//                           capital={country.capital}
//                           flag={country.flags}
//                         />{" "}
//                       </Link>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default HomePage;
