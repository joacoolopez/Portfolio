import logo from './assets/img/jl2.png';
import './App.css';
//import NavBar from './components/NavBar';
import NavBarMejorado from './components/NavBarMejorado';
import Texto from './components/TextoJL';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Cards from './components/Cards';
import SoftSkills from './components/SoftSkills';
import Contacto from './components/Contacto';
import Index from './routes/index'
import SignIn from './routes/SignIn';
import Informacion from './routes/Informacion';
import Registrarse from './routes/Registrarse';
import { Text, Button, Navbar, Input} from "@nextui-org/react";
import {Link as LinkNextUI} from "@nextui-org/react"
import { Link, animateScroll } from "react-scroll";
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes} from "react-router-dom"




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/informacion' element={<Informacion/>}></Route>
        <Route path='/registrarse' element={<Registrarse/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
