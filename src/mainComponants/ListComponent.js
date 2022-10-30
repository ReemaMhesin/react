import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { FixedSizeList } from "react-window";
import { styled } from "@mui/material/styles";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const ListHeader = styled(ListSubheader)(() => ({
  color: "black",
  fontSize: "20px",
}));

export default function ListComponent({ topic }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 650,
        maxWidth: 300,
        bgcolor: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: { sm: "fixed", md: "fixed", lg: "fixed" },
        display: { xs: "none", sm: "block", md: "block", lg: "block" },
      }}
    >
      <List
        sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListHeader component="div" id="nested-list-subheader">
            {topic}
          </ListHeader>
        }
      ></List>
      <FixedSizeList
        height={300}
        width={230}
        itemSize={46}
        itemCount={0}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
