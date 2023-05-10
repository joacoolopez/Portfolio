import logo from './assets/img/jl2.png';
import './App.css';
//import NavBar from './components/NavBar';
import NavBarMejorado from './components/NavBarMejorado';
import Texto from './components/TextoJL';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Cards from './components/Cards';
import AcercaDeMi from './components/AcercaDeMi';
import SoftSkills from './components/SoftSkills';
import { Text, Button, Navbar} from "@nextui-org/react";
import {Link as LinkNextUI} from "@nextui-org/react"
import { Link, animateScroll } from "react-scroll";



function App() {
  return (
    <>


     <NavBarMejorado className='navbar'></NavBarMejorado>
    
    <section className='i'></section>
    <section className='inicio' display='space-between'>
        <div>
          <Texto></Texto>
          <div className='botones'>
            <Button auto color="gradient" rounded bordered className='boton'>
            <a>Gradient</a>
            </Button>
            <Button auto color="gradient" rounded bordered className='boton'>
            Gradient
            </Button>
          </div>
        </div>
        <img src={logo} id='jl' />
    </section>
    <section className='segundaparte'>
      
      <Text h1 className='centrar'>Experiencias</Text>
      <Experiencia></Experiencia>
      <Text h1 className='centrar'>Formacion</Text>
      <Formacion></Formacion>
    </section>
    <section className='AcercaDeMi'>
      <Text h1 className='centrar'>Acerca de Mi</Text>
      <AcercaDeMi></AcercaDeMi>
      <Text h2 className='centrar'>Tecnologias</Text>
      <Cards></Cards>
      <Text h2 className='centrar'>Soft-Skills  </Text>
      <SoftSkills></SoftSkills>
    </section>
    </>
  );
}

export default App;
