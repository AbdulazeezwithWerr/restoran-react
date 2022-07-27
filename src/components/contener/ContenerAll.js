
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import HodimlarMijozlari from './HodimlarMijozlari';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ListItemButton } from "@mui/material";


export default function ContenerAll({name}) {
;


    const buyurtmalar = useSelector((state) => state.todo.afitsantName);

    const buyurtma1 = buyurtmalar.map(item => {return item.mijozlar })
    const buyurtmaArr1 = [...buyurtma1[0],...buyurtma1[1],...buyurtma1[2],...buyurtma1[3],...buyurtma1[4],...buyurtma1[5],...buyurtma1[6],...buyurtma1[7]]
 


  return (
    <>
       <h2 data-aos="fade-right"> {name.name} </h2>
        <div  className='hodimlar-mijozlari'>
        {buyurtmaArr1.map((item, i )=> {return item.buyurtma.length? <div>
            <HodimlarMijozlari  data={item} name={name} mijozOrni={i+1} b1={buyurtmaArr1}/>
    </div>: ''    })}
</div>
    </>
  )
}