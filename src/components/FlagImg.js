import * as React from 'react';
import mainFlag from '../images/Flag_of_Belgium.svg.png';
import { styled } from '@mui/material/styles';
import "@fontsource/nunito";

const Myimg = styled('img')(() => ({
    height:'100%',
    width:'100%',
    
   }));

function FlagImg() {
    return (
        <Myimg class="pe-sm-1 " src={mainFlag} alt="flag"/>
    );
}

export default FlagImg;