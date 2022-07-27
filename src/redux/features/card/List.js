import { Box, Button, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import {  deleteTask, editTask } from "./cardSlice";
// import { deleteTask, editTask } from "../redux/todoSlice";
import ClearIcon from '@mui/icons-material/Clear';
import Aos from "aos";
import { useEffect } from "react";

const List = ({ id, label, sum, count, sumCount }) => {
  
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  const dispatch = useDispatch();
  return (
    // <div

    // >
      <div
      data-aos="fade-right"
           className="card-mijoz"
           style={{
             // width: "400px",
             // border: "2px solid gray",
             display: "flex",
             alignItems: "center",
            //  justifyContent: "space-between",
             marginTop: "10px",
             transition: '1s',
             "&:hover": {
               cursor: 'pointer',
               transform: 'scale(1.5)',
               backgroundColor: 'green',
               color: 'black'
             }
             // padding: "5px",
           }}
      >
      <h3 style={{marginRight: 18}}> {label} </h3>
     <h4> Narxi - {sum}  Amount - {count}   General Soum's - {sumCount} </h4>
     {/* </> */}
        <ClearIcon 
         onClick={() => dispatch(deleteTask(id))}
         sx={{
           marginTop: -3,
           marginLeft: 3,
           // marginY: 2,
           // fontSize: 30,
           color: 'red'
          }}
          />
          </div>
    // </div>
  );
};

export default List;
