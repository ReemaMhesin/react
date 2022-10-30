
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import af from '../images/af.svg';
import al from '../images/al.svg';
import ax from '../images/ax.svg';
import br from '../images/br.svg';
import de from '../images/de.svg';
import dz from '../images/dz.svg';
import is from '../images/is.svg';
import us from '../images/us.svg';
import mainFlag from '../images/Flag_of_Belgium.svg.png';
import BasicParagraph from '../mainComponants/BasicParagraph';

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
  
  
  function ActionAreaCard({flag,countryName,cardElements}) {
    return (
      
      <Card sx={{ maxWidth: 252 , boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',justifyContent:{xs:"center"},marginRight:0}}>
        <CardActionArea>
          <CardMedia
          component="img"
            height="160"
            image={flag}
            alt="green iguana" />
          <CardContent>
            <CountryName>
              {countryName}
            </CountryName>
            <Discription variant="body2" color="text.secondary">
            <BasicParagraph contents={cardElements}/>
           </Discription>
           
          </CardContent>
        </CardActionArea>
      </Card>
     
    );
  
  }
  export default ActionAreaCard;