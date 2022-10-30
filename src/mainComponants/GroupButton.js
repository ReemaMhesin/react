import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import "@fontsource/nunito";
import "typeface-cormorant";
import Box from '@mui/material/Box';

const MyButton = styled(Button)(() => ({
    fontSize: '12px',
    color:'black',
    boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    width: '115px',
    padding:'5px',
    fontWeight: '300',
    textAlign:'center',
    marginRight:'7px',
   }));
  


export default function GroupButton({buttonsNames}) {
    const values = buttonsNames;
  const buttonItems = values.map((item) =>
  <div ><MyButton > {item}</MyButton></div>
  );
  return (
    <Box sx={{display: 'flex', flexDirection: 'row',marginTop: {xs:3,sm:0,},}}>
  {buttonItems}
      </Box>
  );
}
