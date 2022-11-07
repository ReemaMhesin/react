import React, { useState, useEffect } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from "@mui/material/styles";


 
  const Menuitem = styled(MenuItem)(() => ({
    color: "black",
    fontSize: "12px",
    width: "180px",
    fontWeight: "400",
  }));



export default function SelectComponent({ items, menuTopic,handleSelect}) {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    handleSelect(event.target.value);
     setAge(event.target.value);
    // console.log(event.target.value);

    // if(event.target.value === '') return
    // const countryname=event.target.value;
    
    // const res = await fetch(`https://restcountries.com/v3.1/region/${countryname.toLowerCase()}`)
    // const data = await res.json()
    // handleSelect(data);
  };


  const values = items;
  const listItems = values.map((item) => (
    <Menuitem value={item}>{item}</Menuitem>
  ));

  return (
    <FormControl  sx={{ width: "180px", height: "50px"}} >
      <InputLabel id="demo-select-small">Filter By</InputLabel>
      <Select sx={{ backgroundColor: "white"}}
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label={menuTopic}
        onChange={handleChange}
      >
        
        {listItems}
      </Select>
    </FormControl>
  );
}
