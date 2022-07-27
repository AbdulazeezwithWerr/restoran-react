import React, { useState } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Collapse, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TableBarIcon from '@mui/icons-material/TableBar';
import CheckIcon from '@mui/icons-material/Check';

export default function HM({data, name, mijozOrni, b, b1}) {
  
  const [open, setOpen] = useState(false);
  console.log(mijozOrni);

    console.log(name.taomlar.map(item => {return item.turi}));
    const taomTuri = name.taomlar.map(item => {return item.turi})
    const taomTuriAll = taomTuri.length>1?[...taomTuri[0], ...taomTuri[1]]:[...taomTuri[0]]
    
    // console.log(data, name, )
    console.log(b[0].id, b1[0].buyurtma.id);

    const hodimArr = []

    for (let i = 0; i < taomTuriAll.length; i++) {
      for (let j = 0; j < data.length; j++) {
          if (taomTuriAll[i].id ===data[j].id) {
            hodimArr.push(data[j])
            // console.log(data[j].id, 'chiqdi');
              // console.log(hodimArr);
          }
          // else console.log('yoo');
          
      }
  }
  const hodimlarMijozlari = <Box 
  sx={{
    display: 'flex', 
    alignItems: 'center',
    justifyContent: "space-around",
    marginY: -3
  }}>
  <h2>  {mijozOrni} Mijoz </h2>
    <IconButton></IconButton>
    <CheckIcon/>
  </Box>




  return (
        <List
            sx={{
               width: 360, 
               bgcolor: 'black', 
               border: '1px solid orange', 
               borderRadius: 5,
               marginX: 'auto',
               marginY:3
              }}
            component="nav"
          >
            <ListItemButton onClick={(e) => (setOpen(!open))}>
              <ListItemIcon>
                <TableBarIcon sx={{fontSize:50, color: 'rgb(196, 113, 41)'}} />
              </ListItemIcon>
              <ListItemText primary={hodimlarMijozlari} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
             <ol>
            {hodimArr.length ? hodimArr.map((item) => (
              
             <li> {item.label} {item.count}-ta</li>
             )) : <h4>{mijozOrni}- NO ORDER </h4>}
              
              </ol>
                </ListItemButton>
              </List>
            </Collapse>
            
          </List>
  )
}
