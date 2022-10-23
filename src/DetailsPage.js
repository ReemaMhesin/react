import "@fontsource/nunito";
import * as React from 'react';
import './App.css';
import './home.css';
import TopBar from './components/TopBar';
import FlagDiscription from './components/FlagDiscription';
import FlagImg from './components/FlagImg';
import BackButton from './components/BackButton';
import {Link,} from "react-router-dom";
import { Details } from "@mui/icons-material";
import HomePage from "./HomePage";
import styled from 'styled-components';


function DetailsPage() {
const linkStyle={
    textDecoration: 'none'
};

  return (
    <div className="reema">
      
      <div class="container-fluid shadow-sm shadow-offset-down-xs">
     <TopBar/>
</div> 


<div class="container">
  <div class=" py-5">
  <Link style={linkStyle} to="/HomePage"><BackButton/></Link>
  </div>

  <div class="row align-items-sm-center gy-5 pb-5">
    <div class="col-sm-6 col">
      <div className="imgDiv"><FlagImg/></div>
    </div>

    <div class="col-sm-6 col ">
    <FlagDiscription/>

    </div>
  </div>
</div>

     </div>
  );
}

 export default DetailsPage;