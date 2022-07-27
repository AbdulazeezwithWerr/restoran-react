import { Button, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import './whoare.css';
import { Link } from 'react-router-dom';

export default function Whoare() {
  return (
    <>
    <div className='glavni-rol'>
      <div className='second-glavni'>
      <h1 className='h1-text-first'>Who are You?</h1>
      <div className='for-flex'>
      <div className='grid-flex'>
      <div className='div-text-container-2'>Cooker</div>
      <div className='div-text-container-4'>Barmen</div>
      <div className='div-text-container-1'>Manager</div>
      <div className='div-text-container-3'>Waiter</div>
      <div className='div-text-container-5'>Receptionan</div>
     </div>


     <div className='first-glavni'>
      <div className='for-button'>
    <Stack className='stack-button'  direction="column" spacing={5}>
     <Link to='/cooker1'>
     <Button variant="contained" endIcon={<SendIcon />}>
        Sign Up for Cooker
      </Button>
     </Link>
   <Link to='/barmen'>
   <Button variant="contained" endIcon={<SendIcon />}>
        Sign Up for Barmen
      </Button>
   </Link>
      <Link to='/manager'>
     <Button variant="contained" endIcon={<SendIcon />}>
        Sign Up for Manager
      </Button>
     </Link>
      <Link to='/client'>
      <Button variant="contained" endIcon={<SendIcon />}>
        Sign Up for Waiter
      </Button>
      </Link>
      
      <Button variant="contained" endIcon={<SendIcon />}>
        Sign Up for Recept
      </Button>

    </Stack>
    </div>
      </div>
      </div>



      </div>

     
       
      
    </div>
    </>
  )
}
