import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "@fontsource/nunito";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import "typeface-cormorant";

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
    fontSize:'23px',
    fontWeight: '800',
    paddingBottom:'21px',
    }));
    const Discription = styled('p')(() => ({
      color:'black',
      fontSize:'16px',
      lineHeight: '2.2',
      fontWeight: '400',
      }));
      const Value = styled('span')(() => ({
        color:'black',
        fontSize:'16px',
        fontWeight: '300',
        }));
        const BorderCountries = styled('div')(() => ({
            color:'black',
            fontSize:'16px',
            fontWeight: '400',
            }));

            const MyButton = styled(Button)(() => ({
                fontSize: '12px',
                color:'black',
                boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                padding:'5px',
                fontWeight: '300',
               }));

function FlagDiscription() {
    return (
        <ThemeProvider theme={theme}>
<div>
<div class="row align-items-center">
<div class="col-12 col-sm-6  mt-2 mt-sm-0 ps-sm-5 ">
  <div>
  <CountryName>Belgium</CountryName>
  <Discription>
    Native Name:{' '}<Value>België</Value><br/>
    Population:{' '}<Value>11,319,511</Value><br/>
    Region:{' '}<Value>Europe</Value><br/>
    Sub Region:{' '}<Value>Western Europe</Value><br/>
    Capital:{' '}<Value>Brussels</Value>
  </Discription>
</div>
</div>

<div class="col-12 col-sm-6  mt-3 mt-sm-0 ps-sm-2 ">
 <Discription>
  Top Level Domain:{' '}<Value>be</Value><br/>
  Currencies:{' '}<Value>Euro</Value><br/>
  Languages:{' '}<Value>Dutch, French, German</Value>
 </Discription>
</div>
</div>

<div class="row mt-4 ">
<div class="ps-sm-5  d-flex align-items-sm-center flex-column flex-sm-row  ">
  <BorderCountries class="mb-2 mb-sm-0 me-0 me-sm-3 ">Border Countries:</BorderCountries>
  <div class="d-flex align-items-center flex-row ms-sm-2 justify-content-center">
  <div class=" m-1 text-center shadow-sm shadow-intensity-lg"><MyButton > France</MyButton></div>
  <div class=" m-1 text-center shadow-sm shadow-intensity-lg"><MyButton > Germany</MyButton></div>
  <div class="m-1 text-center shadow-sm shadow-intensity-lg"><MyButton> Netherlands</MyButton></div>
</div>
</div>
</div> 
</div>
</ThemeProvider>
);
}

export default FlagDiscription;















 