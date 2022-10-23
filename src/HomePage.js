import "@fontsource/nunito";
import * as React from 'react';
import './home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import "typeface-cormorant";
import {Link,} from "react-router-dom";
import TopBar from './components/TopBar';
import MenuPopupState from './components/MenuPopupState';
import SearchFeild from './components/SearchFeild';
import FavoritesLeftList from './components/FavoritesLeftList';


import af from './images/af.svg';
import al from './images/al.svg';
import ax from './images/ax.svg';
import br from './images/br.svg';
import de from './images/de.svg';
import dz from './images/dz.svg';
import is from './images/is.svg';
import us from './images/us.svg';
import mainFlag from './images/Flag_of_Belgium.svg.png';

import { Details } from "@mui/icons-material";
import DetailsPage from "./DetailsPage";


const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        'sans-serif',
      ].join(','),
      
   },
});


const CountryName = styled('div')(({ theme }) => ({
  color:'black',
  fontSize:'17px',
  fontWeight: '800',
  paddingTop:'5px',
  paddingBottom:'5px',
  }));
  const Discription = styled('p')(() => ({
    color:'black',
    fontSize:'14px',
    fontWeight: '400',
    lineHeight: '1.8',
    }));
    const Value = styled('span')(() => ({
      color:'black',
      fontSize:'14px',
      fontWeight: '300',
      }));



function ActionAreaCard({flag,countryName,population,region,capital}) {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 240 , boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',justifyContent:{xs:"center"}}}>
      <CardActionArea>
        <CardMedia
        component="img"
          height="155"
          image={flag}
          alt="green iguana" />
        <CardContent>
          <CountryName>
            {countryName}
          </CountryName>

          <Discription variant="body2" color="text.secondary">
            Population:{' '}<Value>{population}</Value><br/>
            Region:{' '}<Value> {region}</Value><br/>
            Capital:{' '}<Value>{capital}</Value><br/>
          </Discription>

        </CardContent>
      </CardActionArea>
    </Card>
    </ThemeProvider>
  );

}



function HomePage() {
    const linkStyle={
        textDecoration: 'none',
        justifyContent:{xs:'center'}
    };
    const cards={
        justifyContent:{xs:'center'}
    };
  return (
    <div className="homePage">

<div class="container-fluid shadow-sm shadow-offset-down-xs">
     <TopBar/>
</div> 

<div class="container">

  <div class=" d-flex flex-column flex-sm-row justify-content-sm-between py-5 ">
             <div ><SearchFeild/></div>

              <div class="mt-5 mt-sm-0"><MenuPopupState/></div>
    </div>

<div class="row ">

<div class="col-sm-3 col position-sm-fixed " >
    <FavoritesLeftList/>
    </div>

    <div class="col-sm-9 col-12 ">

    <div class="row g-5  px-sm-0">
       
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <Link style={linkStyle} to="/DetailsPage"><ActionAreaCard style={cards} countryName="Belgium" population="11,319,511" region="Europe" capital="Brussels" flag={mainFlag}/>  </Link>
        </div>
      
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="United States of America" population="323,947,000" region="Americas" capital="Washington.D.C" flag={us}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Brazil" population="206,135,893" region="Americas" capital="Brasilia" flag={br}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Iceland" population="334,300" region="Europe" capital="Reykjavik" flag={is}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Afghanistan" population="27,657,145" region="Asia" capital="Kabul" flag={af}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Aland Islands" population="28,875" region="Europe" capital="Mariehamn" flag={ax}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Albania" population="2,886,026" region="Europe" capital="Tirana" flag={al}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Algeria" population="40,400,000" region="Africa" capital="Algeria" flag={dz}/>
        </div>
        <div class="col-12  col-lg-4  col-md-4 col-sm-6 ">
        <ActionAreaCard countryName="Germany" population="B1,770,900" region="Europe" capital="Berlin" flag={de}/>        </div>
    </div>
    </div>
</div>
</div>


</div>
  );
}

 export default HomePage;
