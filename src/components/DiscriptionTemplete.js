import * as React from "react";
import { styled } from "@mui/material/styles";
import "@fontsource/nunito";
import "typeface-cormorant";
import Box from "@mui/material/Box";
import GroupButton from "../mainComponants/GroupButton";
import BasicParagraph from "../mainComponants/BasicParagraph";

const CountryName = styled("div")(({ theme }) => ({
  color: "black",
  fontSize: "23px",
  fontWeight: "800",
  paddingBottom: "21px",
  paddingLeft: 0,
}));
const Discription = styled("div")(() => ({
  color: "black",
  fontSize: "16px",
  lineHeight: "2.2",
  fontWeight: "400",
}));

const Value = styled("span")(() => ({
  color: "black",
  fontSize: "16px",
  fontWeight: "300",
}));
const BorderCountries = styled("div")(() => ({
  color: "black",
  fontSize: "16px",
  fontWeight: "400",
  marginRight: "7px",
}));

function FlagDiscription({ buttonsnames, subParagraph1, subParagraph2 }) {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          marginLeft: { xs: 0, sm: 7 },
          paddingLeft: { xs: 0, sm: 7 },
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "left", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "flex-start", sm: "space-between" },
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  flexDirection: "column",
                  flexGrow: 2,
                  marginRight: { xs: 0, sm: 7 },
                  marginLeft: { xs: 3, sm: 0 },
                  marginTop: { xs: 5, sm: 0 },
                }}
              >
                <CountryName>Belgium</CountryName>

                <Discription sx={{ flexGrow: 2 }}>
                  <BasicParagraph contents={subParagraph1} />
                </Discription>
              </Box>
            </div>

            <div>
              <Discription
                sx={{
                  flexGrow: 2,
                  marginLeft: { xs: 3, sm: 7 },
                  marginTop: { xs: 3, sm: 0 },
                }}
              >
                <BasicParagraph contents={subParagraph2} />
              </Discription>
            </div>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: 5,
              marginLeft: { xs: 3, sm: 0 },
            }}
          >
            <BorderCountries>Border Countries:</BorderCountries>
            <GroupButton buttonsNames={buttonsnames} />
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default FlagDiscription;
