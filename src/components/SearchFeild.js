import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "@fontsource/nunito";



const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    display: 'flex',
    alignItems: 'center',
    padding:'7px',
    height:'50px',
    [theme.breakpoints.up('sm')]: {
      width: '400px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: 'lightgray',
    paddingLeft:'10px',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      transition: theme.transitions.create('width'),
      width: '300px',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
  }));

  const responsivePaper = {
    width: { xs: "100%", sm: "400px", md: "400px" },
    marginBottom:{xs:5,md:0,},
  };

export default function SearchFeild({placehoderValue}) {
  return (
          <Search sx={responsivePaper}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={placehoderValue}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


  );
}
