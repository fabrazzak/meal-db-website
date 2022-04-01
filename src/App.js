import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Foods from './Components/Foods/Foods';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import FoodDetails from './Components/FoodDetails/FoodDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='foods' element={<Foods></Foods>}></Route>
        <Route path='foods/:foodsId' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
