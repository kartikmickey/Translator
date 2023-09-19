import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/home"
import Aboutus from "./Pages/about"
import Contactus from "./Pages/contact"
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<Aboutus/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
