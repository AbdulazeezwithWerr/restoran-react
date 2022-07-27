import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './waiers-afitsantlar.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


export default function AfitsantLar() {
    const name = useSelector((state) => state.todo.afitsantName);
    // console.log(name.map(i => {return i.mijozlar[2]}));
  return (
    <div>
        <Box>
            <h1 className='h1-text'>For Tico Bar's Waiter</h1>

            <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 4 }}>
                {name.map((item, index) => {return <StyledPaper
        sx={{
          my: 2,
          mx: 'auto',
          p: 3,
          backgroundColor: 'rgb(59, 152, 120)'
        }}
        key={index}
      > <Link to={'/'+item.name+'-afitsant'} sx={{color: 'black'}}> 
        <Grid container wrap="nowrap" spacing={2} className='grid-text'>
          <Grid item>
            {/* <Avatar>{item.name}</Avatar> */}
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap className='type-text'>{item.name} <ArrowRightIcon className='icon-arrow'/>  Tico Bar's Waiter</Typography>
          </Grid>
        </Grid>
      </Link>
      </StyledPaper>
      })}
    </Box>
    <Link to='/'> 
      <KeyboardArrowLeftIcon
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        top: 85,
        left:25,
        color: 'white',
        fontSize: 30
      }}/>
       </Link>


        </Box>
    </div>
  )
}
