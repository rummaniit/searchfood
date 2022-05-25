import logo from './logo.svg';
import './App.css';
import Restaurent from './components/Restaurent/Restaurent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <div className="App">
      {/* <Restaurent></Restaurent> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Restaurent></Restaurent>}></Route>
          <Route path='/food/:foodid' element={<FoodDetails></FoodDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
