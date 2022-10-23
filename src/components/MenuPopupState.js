import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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

const ButtonFilter = styled(Button)(() => ({
  color:'black',
  fontSize:'12px',
  fontWeight:'400',
  boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  backgroundColor: 'white',
  width:'180px',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  }));

  // const MenuFilter = styled(Menu)(() => ({
  //   color:'black',
  //   // fontSize:'12px',
  //   // boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  //   // width:'180px',
  //   }));

    const Menuitem = styled(MenuItem)(() => ({
      color:'black',
      fontSize:'12px',
      width:'180px',
      fontWeight:'400',
      }));

      const IconWrapper = styled('div')(({ theme }) => ({
        color: 'black',
        fontSize:'10px',
       // height: '100%',
      }));

      

export default function MenuPopupState() {
  return (
    <ThemeProvider theme={theme}>
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <ButtonFilter variant="contained" {...bindTrigger(popupState)} sx={{ width: '180px', height:'50px'}}>
          Filter by
          <IconWrapper>
              <KeyboardArrowDownOutlinedIcon />
            </IconWrapper>
          </ButtonFilter>
          <Menu {...bindMenu(popupState)}>
            <Menuitem onClick={popupState.close}>No Filter</Menuitem>
            <Menuitem onClick={popupState.close}>Africa</Menuitem>
            <Menuitem onClick={popupState.close}>America</Menuitem>
            <Menuitem onClick={popupState.close}>Asia</Menuitem>
            <Menuitem onClick={popupState.close}>Europe</Menuitem>
            <Menuitem onClick={popupState.close}>Oceania</Menuitem>
            <Menuitem onClick={popupState.close}>Favorites</Menuitem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
   </ThemeProvider>
  );
}
