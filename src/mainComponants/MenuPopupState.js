import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

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
  const IconWrapper = styled('div')(({ theme }) => ({
    color: 'black',
    fontSize:'10px',
  }));
  const Menuitem = styled(MenuItem)(() => ({
    color:'black',
    fontSize:'12px',
    width:'180px',
    fontWeight:'400',
    }));


export default function MenuPopupState({items,menuTopic}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const values = items;
  const listItems = values.map((item) =>
  <Menuitem onClick={handleClose}>{item}</Menuitem>
  );

  return (
    <div>
      <ButtonFilter sx={{ width: '180px', height:'50px'}}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       {menuTopic} 
        <IconWrapper>
              <KeyboardArrowDownOutlinedIcon />
            </IconWrapper>
      </ButtonFilter>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {listItems}
      </Menu>
    </div>
  );
}










  

// export default function MenuPopupState({items}) {
//   const values = items;
//   const listItems = values.map((item) =>
//   <Menuitem onClick={popupState.close}>{item}</Menuitem>
//   );
//   return (
//     <PopupState variant="popover" popupId="demo-popup-menu" >
//       {(popupState) => (
//         <React.Fragment>
//           <ButtonFilter variant="contained" {...bindTrigger(popupState)} sx={{ width: '180px', height:'50px'}}>
//           Filter by
//           <IconWrapper>
//               <KeyboardArrowDownOutlinedIcon />
//             </IconWrapper>
//           </ButtonFilter>
//           <Menu {...bindMenu(popupState)}>
//           {listItems}
//           </Menu>
//         </React.Fragment>
//       )}
//     </PopupState>
   
//   );
// }
