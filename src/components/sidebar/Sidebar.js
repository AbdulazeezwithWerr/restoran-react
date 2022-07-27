import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { dates } from '../../dates';
import { Link } from 'react-router-dom';
import './sidebar.css';


export default function Sidebar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment >  
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick({
                vertical: 'top',
                horizontal: 'left',
              })}
          >
            <MenuIcon />
          </IconButton>
    </React.Fragment>
  );
  const aa = (
    <React.Fragment>  
          <h1 className='glavni-for-sidbar'>Tico Bar</h1>
        <Divider variant="inset" component=""  />

      {dates.map((item, i) => {return <> 
      <List key={i}>
       <Link to={item.to}>  
        <p className='p-text'>{item.name}</p>
       
      </Link>
      <Divider variant="inset" component="li" sx={{color: '#ffab40'}} />
    </List></>})}


    <List>
    <Link to='/afitsant'>
        <p className='p-text'>Waiter</p>
      </Link>

      <Divider variant="inset" component="li" sx={{color: '#ffab40'}} />

      <Link to='admin'>
      <p className='p-text'>Manager</p>

      </Link>
        <Divider variant="inset" component="li" sx={{color: '#ffab40'}} />
    
    </List>


    </React.Fragment>
  );
  return (
    
    
    <Box>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={aa}
        key={vertical + horizontal}
      />
    </Box>
  );
}
