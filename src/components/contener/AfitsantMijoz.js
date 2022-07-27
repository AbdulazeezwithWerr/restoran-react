import { Button, Grid, IconButton, ListItemIcon, NoSsr, Paper, ThemeProvider } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addMijozlar, indexAfitsant, deleteMijoz } from '../../redux/features/card/cardSlice';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ClearIcon from '@mui/icons-material/Clear';




export default function AfitsantMijoz({item, id}) {
    const dispatch = useDispatch()

    const iMijoz = useSelector((state) => state.todo.indexMijoz)

    console.log(iMijoz);

    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#000',
        color: 'rgb(15, 49, 37)',
        border: '1px solid white',
         display: 'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
        fontFamily: 'monospace',
        boxShadow: '20px, 20px, 20px rgb(15, 49, 37)',
        padding: theme.spacing(1),
        textAlign: 'space-between',
        borderRadius: 5,
        transition: '0.5s'
          
       }
        
    ));

  return (
 <>
  {/* {mijozlar.map((item, index) => {return <Grid item xs={2} sm={4} md={4} key={index}> */}
      <Item>
      <h2>  {item.orni+' - Client'} </h2>
      <Box>
       <Link to={'/'+item.orni+'mijoz'}> 
       <IconButton
        sx={{
          color: 'rgb(15, 49, 37)',
          background: 'none', 
          transition: '1s',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1)',
            backgroundColor: 'rgb(36, 85, 81)',
            color: 'black'
          }
        }}>
        <ArrowForwardIosOutlinedIcon/>
        </IconButton>
        </Link>
        <IconButton
          onClick={(e) => dispatch(deleteMijoz(item.orni))}
        sx={{
          color: 'red',
          background: 'none', 
          transition: '1s',
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1)',
            backgroundColor: 'red',
            color: 'black'
          }
        }}
        >
        <ClearIcon />
        </IconButton>
        </Box>
        </Item>
        </>
  )
}








