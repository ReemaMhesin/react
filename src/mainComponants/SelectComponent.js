import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import "../home.css";

const Menuitem = styled(MenuItem)(() => ({
  color: "black",
  fontSize: "12px",
  width: "180px",
  fontWeight: "400",
}));

export default function SelectComponent({ items, menuTopic, handleSelect }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    handleSelect(event.target.value);
    setValue(event.target.value);
  };

  const values = items;
  const listItems = values.map((item) => (
    <Menuitem value={item} className="theme">{item}</Menuitem>
  ));

  return (
    <FormControl sx={{ width: "180px", height: "50px" }} draggable="false" className="theme">
      <InputLabel id="demo-select-small" className="theme">Filter By</InputLabel>
      <Select
        sx={{ backgroundColor: "white" }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={menuTopic}
        onChange={handleChange}
        className="theme"
      >
        {listItems}
      </Select>
    </FormControl>
  );
}
