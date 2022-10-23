import * as React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
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

const MyButton = styled(Button)(() => ({
    backgroundColor: 'white',
    padding:'5px',
    width: '7rem',
    boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    color:'black',
    fontSize: '12px',
    fontWeight:'300',
   }));


function BackButton() {
    return (
        <ThemeProvider theme={theme}>
        <MyButton   startIcon={<KeyboardBackspaceOutlinedIcon />} >Back</MyButton>
        </ThemeProvider>
        );
}

export default BackButton;