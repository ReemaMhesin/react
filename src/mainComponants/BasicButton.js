import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const MyButton = styled(Button)(() => ({
    color:'black',
    backgroundColor: 'white',
    padding:'5px',
    width: '7rem',
    fontSize: '12px',
    fontWeight:'400',
   }));
   
   
  

export default function BasicButton({value,icon}) {
  return (
    <MyButton startIcon={icon} >{value}</MyButton>
  );
}
