import * as React from 'react';
import { styled } from "@mui/material/styles";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from "@mui/icons-material/Search";


const Formcontrol = styled(FormControl)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    height: "50px",
    width: "400px",
  }));
  
  const Outlinedinput = styled(OutlinedInput)(({ theme }) => ({
    backgroundColor: "white",
  }));
  
  const responsivePaper = {
    width: { xs: "100%", sm: "400px", md: "400px" },
    marginBottom: { xs: 5, md: 0 },
  };


export default function TextFeild({placehoderValue,handleSearch}) {
    const [returnValue, setValue] = React.useState('');

    const handleChange =async (event) => {
        setValue(event.target.value);
        handleSearch(event.target.value);
       console.log(event.target.value);
  
    //   if(event.target.value === '') return
    //   const eventValue=event.target.value;
    //   const res = await fetch(`https://restcountries.com/v3.1/name/${eventValue.toLowerCase()}`)
    //   const data = await res.json()
    //   handleSearch(event.target.value); 
    };
  


  return (

        <FormControl  sx={responsivePaper} >
          <InputLabel id="search">{placehoderValue}</InputLabel>
          <Outlinedinput
            labelId="search"
            id="search"
            value={returnValue}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
            
            label="Amount"
          />
        </FormControl>
    
  );
}
