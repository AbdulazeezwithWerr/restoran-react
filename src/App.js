import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './appsecond.css';
import WhoAreU from './components/AboutUs/AboutUs';
import Bludes from './components/ContainerBluds/Bludes';
import Afitsant from './components/contener/Afitsant';
import AfitsantLar from './components/contener/AfitsantLar';
import CardOvqatlar from './components/contener/CardOvqatlar';
import ContenerAll from './components/contener/ContenerAll';
import Mijoz from './components/contener/Mijoz';
import SearchAppBar from './components/header/HeaderJs';
import { dates } from './dates';

function App() {

  const name = useSelector((state) => state.todo.afitsantName);
console.log(name);
  return (
    <BrowserRouter>
    <div className="App">
      <SearchAppBar />
    <Routes>
    {dates.map((item, i) => <Route key={i} path={item.to} element={<ContenerAll name = {item}/>}/>)}
    <Route path='/cardovqatlar' element={<CardOvqatlar/>}/>
    <Route path='/' element={<WhoAreU/>} />
    <Route path='/afitsant' element={<AfitsantLar/>}/>
    {name.map((item, index ) => {return <Route key={index} path={'/'+item.name+'-afitsant'} element={<Afitsant name={item.name} mijozlar={item.mijozlar} id={item.id}/>}/>})}
    {name.map((item, index) => {return  item.mijozlar.map(mijoz => {return <Route key={index} path={mijoz.orni?'/'+mijoz.orni+'mijoz':'/'+item.name+'-afitsant'} element={<Mijoz data={mijoz} name={item.name}/>}/>})})}
     <Route path='/blyudo' element={<Bludes />} />
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
