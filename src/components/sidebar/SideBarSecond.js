import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleButtonGroup } from '@mui/material';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { dates } from '../../dates';


export default function SidebarSecond(props) {

  const [alignment, setAlignment] = React.useState('web');
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  
  const handleChange = (
    
    newAlignment,
  ) => {
    setAlignment(newAlignment);
  };



  const [state, setState] = React.useState({
    left: false,
  });



  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  
  const list = (anchor) => (
  
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 313,backgroundColor: 'black'   
    }}
      role="presentation"
    >
    {/* <img src={Image} className="image-tico" />  */}
      <p className='p-text'>Tico bar</p>
<hr/>
     <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >  
    <div>
    <Link to='/afitsant' className='link-text'><p className='p-text-for-router'>Waiter</p></Link>
    <Link to='/breackfast' className='link-text'><p className='p-text-for-router'>Breackfast</p></Link>
    <Link to='/deserts' className='link-text'><p className='p-text-for-router'>Deserts</p></Link>
    <Link to='/drinks' className='link-text'><p className='p-text-for-router'>Drinks</p></Link>
    <Link to='/rolls' className='link-text'><p className='p-text-for-router'>Rolls</p></Link>
    <Link to='/salet' className='link-text'><p className='p-text-for-router'>Salet</p></Link>
    </div>

    </ToggleButtonGroup>
    </Box>
  );
  return (
    <React.Fragment key="left">
        <IconButton
        onClick={toggleDrawer("left", true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
          <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
         
        </React.Fragment>
        
  );
}
