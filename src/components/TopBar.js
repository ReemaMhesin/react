import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
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


const MyButton = styled(Button)(() => ({
   color:'black',
  }));

//   const TheTypography = styled(Typography)(() => ({
//     fontSize: '20px',
//    fontWeight: '800',
//    }));
 

 
   const responsiveTypography = {
     fontSize: { xs: "19px", sm: "22px", md: "22px", lg:"22px"},
     fontWeight: { xs: "800", sm: "800", md: "800", lg:"800"},
    };
  
 
    const responsiveButton = {
      fontSize: { xs: "10px", sm: "12px", md: "12px", lg:"12px"},
      fontWeight: { xs: "400", sm: "400", md: "400", lg:"400"},
   };

export default function TopBar() {
  return (
  <div class="container d-flex justify-content-between align-items-center py-3 ">
    <ThemeProvider theme={theme}>
        <Typography sx={responsiveTypography}>
          Where in the world?
          </Typography>
          <MyButton  startIcon={<DarkModeOutlinedIcon />} sx={responsiveButton}>Dark Mode</MyButton>
          </ThemeProvider>
  </div>
      
  );
}
