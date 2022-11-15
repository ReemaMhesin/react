import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "../home.css";

import { useState, useEffect } from "react";

const ListHeader = styled(ListSubheader)(() => ({
  color: "black",
  fontSize: "20px",
}));

export default function ListComponent({
  topic,
  itemName,
  itemImg,
  handleDelete,
  handleDrop,
}) {
  const [listItemName, setitemName] = useState([]);
  const [listItemImg, setItemImg] = useState([]);

  useEffect(() => {
    const newNameList = itemName;
    setitemName(newNameList);
    const newImgList = itemImg;
    setItemImg(newImgList);
  }, [itemName, itemImg]);

  function overrideEventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function drop(event) {
    event.preventDefault();
    event.stopPropagation();
    handleDrop();
  }

  const handledelete = (e) => {
    const name =
      e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild
        .getAttribute("alt")
        .toLowerCase();
    const image =
      e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild
        .getAttribute("src")
        .toLowerCase();
    handleDelete(name, image);

    //e.target.parentElement.parentElement.parentElement.remove();
  };

  return (
    <Box
      onDrop={drop}
      onDragEnter={overrideEventDefaults}
      onDragLeave={overrideEventDefaults}
      onDragOver={overrideEventDefaults}
      draggable="false"
      sx={{
        width: "100%",
        height: 650,
        maxWidth: 300,
        bgcolor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: { sm: "fixed", md: "fixed", lg: "fixed" },
        display: { xs: "none", sm: "block", md: "block", lg: "block" },
      }}
      className="theme"
    >
      <List
        sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListHeader
            component="div"
            id="nested-list-subheader"
            className="theme"
          >
            {topic}
          </ListHeader>
        }
        className="theme"
      >
        {listItemName.map((name, index) => (
          <ListItem
            key={name}
            component="div"
            disablePadding
            secondaryAction={
              <IconButton
                color="primary"
                component="label"
                onClick={handledelete}
              >
                <HighlightOffIcon />
              </IconButton>
            }
            className="theme"
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{ height: "25px", width: "40px" }}
                  variant="rounded"
                  alt={`${name}`}
                  src={`${listItemImg[index]}`}
                />
              </ListItemAvatar>
              <ListItemText id={name} primary={` ${name}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

