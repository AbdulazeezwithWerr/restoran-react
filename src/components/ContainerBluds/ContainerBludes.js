import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { ImageListItemBar } from '@mui/material';
import { Link } from 'react-router-dom';
import './bludes.css';


export default function ContainerBludes({data}) {

  return (
      <Box sx={{ maxWidth: { xs: '100%', sm: '100%', }, 
      backgroundColor: "rgb(8, 15, 13) "
      }}>
        {data.map(item1 => {return item1.taomlar.map(item2 =>{return <>
         <h2 className='name'>{item2.nomi}</h2>
      <Tabs
      className='tabs'
      key={item2.id}
        value={0}
        indicatorColor="white"
        variant="scrollable"
        // scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >  { item2.turi.map(item => {
           return       <Box className='box' sx={{ marginX: 9, marginTop: 1}}>
         <div className='div'>
         <Link to={item.to}> <img
            className='img'
            src={item.img}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.sum}
            loading="lazy"
            // width='300px'
            // height='240px'
          /></Link>
          <ImageListItemBar
            title={item.title}
            subtitle={<div className='div-text'><span>Price :  {item.sum} sum</span> <h4>Name : {item.name}</h4></div>}
            position="below"
  
          />
         </div>
        </Box>})}
      </Tabs> </> })})}
    </Box>
  );
}
