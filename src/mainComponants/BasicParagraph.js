import * as React from 'react';
import { styled } from '@mui/material/styles';


  const Value = styled('span')(() => ({
    color:'black',
    fontSize:'14px',
    fontWeight: '300',
    }));

export default function BasicParagraph({contents}) {
  return (
    <>
    {contents.map(({ topic, value }) => (
      <div key={topic}>{topic}:{' '}<Value>{value}</Value><br/></div>
    ))}
    </>
  );
}


