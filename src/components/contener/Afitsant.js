import {  Grid, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMijozlar, indexAfitsant } from '../../redux/features/card/cardSlice';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AfitsantMijoz from './AfitsantMijoz';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './waiters-second-mijoz.css'




export default function Afitsant({name, mijozlar, id}) {
    const dispatch = useDispatch()
    const iMijoz = useSelector((state) => state.todo.indexMijoz)
    console.log(mijozlar);
    
    const nMijoz = (e) => {
    dispatch(addMijozlar(id))
    dispatch(indexAfitsant(id))
}
  return (
    <Box sx={{
        paddingX: 30,
        paddingBottom: 10,
        fontFamily: 'fantasy'
        }}>
        <h1 className='h1-text' data-aos="fade-right">{name+  '  -  Afitsant'}</h1>
        <IconButton
                onClick={nMijoz}
                sx={{
                  position: 'fixed', 
                  color: 'white',
                  background: 'rgb(24, 70, 54)', 
                  zIndex: 1,
                  width: 60,
                  height: 60,
                  bottom: 60,
                  left: 1300,
                  "&:hover": {
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    transition:'1s',
                    color: 'rgb(24,70,54)',
                    backgroundColor: 'whitesmoke',
                  }
                  
                }}
                >    
              <PlaylistAddIcon 
                 data-aos="fade-down"
                />
            </IconButton>

        <Box sx={{ flexGrow: 1, marginTop: 10,  }}>
      <Grid container 
  spacing={{ xs: 2, md: 8 }} 
  columns={{ xs: 4, sm: 8, md: 12 }}
      >
  {mijozlar.map((item, index) => {return <Grid item xs={2} sm={4} md={4} key={index}>
    <AfitsantMijoz item={item} id={id} />
    </Grid>
})}
</Grid>
</Box>

<Link to={'/afitsant'}> 
      <KeyboardArrowLeftIcon
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        top: 80,
        left:35,
        color: 'white',
        fontSize: 30,
      }}/>
       </Link>
    </Box>
  )
}
