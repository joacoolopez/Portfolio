import logo from './assets/img/jl2.png';
import './App.css';
import NavBar from './components/NavBar';
import Texto from './components/TextoJL';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import { Text, Button } from "@nextui-org/react";


function App() {
  return (
    <>
    <NavBar></NavBar>
    <section className='inicio' display='space-between'>
        <div>
          <Texto></Texto>
          <div className='botones'>
            <Button auto color="gradient" rounded bordered className='boton'>
            Gradient
            </Button>
            <Button auto color="gradient" rounded bordered className='boton'>
            Gradient
            </Button>
          </div>
        </div>
        <img src={logo} id='jl' />
    </section>
    <section className='segundaparte'>
      <Text h1 className='centrar'>Experiencia</Text>
      <Experiencia></Experiencia>
      <Text h1 className='centrar'>Formacion</Text>
      <Formacion></Formacion>


    </section>
    </>
  );
}

export default App;
