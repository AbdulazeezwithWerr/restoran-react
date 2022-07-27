import { Select, Option, MenuItem, Box, IconButton, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { dates } from "../../dates";
import { addTask, decrement, increment,  updateValue, chekFunction } from "../../redux/features/card/cardSlice";
import List from "../../redux/features/card/List";

// import "aos/dist/aos.css";
import { useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import './select.css';

const Mijoz = ({name, data}) => {

  
  const value = useSelector((state) => state.todo.inputTaskValue);
  const count = useSelector((state) => state.todo.count)
  const arraySumCount = data.buyurtma.map((item, i) => {return item.sumCount})
  const umumiySumCount = arraySumCount.length>0? arraySumCount.reduce((x, y) => x+y):[]
  console.log(data);
  
  // useEffect(() => {
  //   console.log(name);
  //   AOS.init({ duration: 2000 });
  // }, []);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(updateValue(e.target.value));
  }
  return (
      <>
      <h3 data-aos="fade-right" className="h3-text">{name} - Waiter {data.orni} - Zakaz</h3>
         <div >
        {dates.map(item1 => {return item1.taomlar.map((item2, i) => {return<span className='card'>
       
     { <Select 
       value={value} key={i} 
       id='select'
       onChange={handleChange} 
       displayEmpty
       inputProps={{ 'aria-label': 'Without label' }}
       sx={{
        background: value ?'black' : 'rgb(15, 49, 37)',
        color: 'white',
        zIndex: 1,
          fontSize: 20,
         
          marginLeft: '6vw',
          paddingLeft: '5vw',
          textAlign: 'center',
          marginTop: '5vh'
       }}
       > 
       
       <MenuItem value=""
         sx={{
          fontSize:15
         }}
       >
            <em>{item2.nomi}</em>
          </MenuItem>

       {item2.turi.map((item3, index) => 
       {return <MenuItem
       value={item3.name}
       sx={{
        fontSize:15,
        padding: 1,
       }}
       key={index} >
        {item3.name}
        </MenuItem>})}
        </Select>}
         </span>}) })}

    </div>
    
    <BookmarkAddIcon
    sx={{
      background: 'none',
      margin: 2,
      color: 'white',
      "&:hover": {
        cursor: 'pointer',
        transform: 'scale(1.1)',
        backgroundColor: 'white',
        color: 'rgb(15, 49, 37)'
      }
    }}
    onClick={()=> dispatch(increment())}>
      <AddIcon/>
      </BookmarkAddIcon>
    <span style={{position: 'absolute', marginTop: '2vh', fontSize: '2rem', color: 'orange'}}>{count}</span> 
     <BookmarkRemoveIcon 
         sx={{
          background: 'none',
          color: 'white',
          margin: 2,
          marginTop: 3,
          "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'white',
            color: 'rgb(15, 49, 37)',
          }
        }}
     onClick={()=> dispatch(decrement())}><RemoveIcon/></BookmarkRemoveIcon>
     <div className="div-btn">
     <Button
     className="btn-first" 
     onClick={(e) => {
        dispatch(addTask(data.orni))
        }}
        sx={{
          
         
         
          
        }}
        >ADD
        </Button>
        <Button 
        className="btn-second"
        onClick={(e) => {
        dispatch(chekFunction(data.orni))
        console.log(data);
        }}
       
        
        >Check
        </Button>
     </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
          background: 'rgb(52, 121, 115, 0.1)',
           marginX: '28%',
           color: 'rgb(241, 246, 251)',
           borderRadius: 5,
           marginBottom: 5
           
          }}
          >
        {data.buyurtma.length ? (
          data.buyurtma.map((todo) => <List key={todo.orni} {...todo} />)
          ) 
          : (
            <h3
            data-aos="flip-up"
            >Select Dishes for Your Family...</h3>
        )}

      </Box> 
      <Link to={'/'+name+'-waiter'}> 
      <ArrowBackIosIcon
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        top: 100,
        left:25,
        color: 'white',
        fontSize: 30
      }}/>
       </Link>
      <Box
      sx={{  
        position: 'fixed', 
        zIndex: 1,
        bottom: 5,
        fontSize: '1.5rem',
        color: 'white',
        left:'5%',
        border: '1px solid rgb(52, 121, 115)',
        paddingX: '20px',
        marginLeft:'70vw'
        
      }}
      >
        <h4
        >Total Amount:  {umumiySumCount}
        </h4>
        </Box>
    </>
  );
};

export default Mijoz;

