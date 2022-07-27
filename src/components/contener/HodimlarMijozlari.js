import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TableBarIcon from '@mui/icons-material/TableBar';
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, decrement, increment,  updateValue, chekFunction } from "../../redux/features/card/cardSlice";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';


export default function HodimlarMijozlari({data, name, mijozOrni, b, b1}) {
const dispatch=useDispatch()
  const [open, setOpen] = useState(false);
    const taomTuri = name.taomlar.map(item => {return item.turi})
    const taomTuriAll = taomTuri.length>1?[...taomTuri[0], ...taomTuri[1]]:[...taomTuri[0]]
    const dataArr  = data.buyurtma
    // console.log(b, b1, data);
    
    const hodimArr = []

    for (let i = 0; i < taomTuriAll.length; i++) {
      for (let j = 0; j < dataArr.length; j++) {
          if (taomTuriAll[i].id ===dataArr[j].id) {
            hodimArr.push(dataArr[j])
            console.log(data.buyurtma[j].id, 'chiqdi');
              // console.log(hodimArr);
          }
          else console.log('yoo');
          
      }
  }
    console.log(data.chek)
    console.log(data);
  const hodimlarMijozlari = <Box 
  sx={{
    display: 'flex', 
    alignItems: 'center',
    justifyContent: "space-around",
    marginY: -3
  }}>
  <h2>  {mijozOrni} - Client </h2>
   {data.chek===true ? <IconButton 
   sx={{ background: '',
   color: 'green',
  //  "&:hover": {
  //    cursor: 'pointer',
  //    transform: 'scale(1.1)',
  //    backgroundColor: 'rgb(39, 34, 34)',
  //    color: 'black',
  //  }
   
   }}
   >
     {/* <CheckIcon/> */}
   </IconButton>:
   <IconButton
   sx={{ 
    background: '',
    color:'black',
    // "&:hover": {
    //   cursor: 'pointer',
    //   transform: 'scale(1.1)',
    //   backgroundColor: 'r',
    //   color: 'black',
    // }
  }}
  >
     <NotificationImportantIcon/>
   </IconButton>
    }
  </Box>




  return (
        <List
            sx={{
               width: 360, 
               bgcolor: 'black', 
               border: '1px solid rgb(52, 121, 115)', 
               borderRadius: 5,
               marginX: 'auto',
               marginY:3,
               color: 'whitesmoke'
              }}
            component="nav"
          >
            <ListItemButton onClick={(e) => (setOpen(!open))}>
              <ListItemIcon>
                <TableBarIcon sx={{fontSize:50, color: 'rgb(15, 39, 30)'}} />
              </ListItemIcon>
              <ListItemText primary={hodimlarMijozlari} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
             <ol>
            {hodimArr.length ? hodimArr.map((item) => (
              
             <li> {item.label} {item.count}- times</li>
             )) : <h4>{mijozOrni}-no order </h4>}
              
              </ol>
                </ListItemButton>
              </List>
            </Collapse>
            
          </List>
  )
}
