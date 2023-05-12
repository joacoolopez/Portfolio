import logo from '../assets/img/jl2.png';
import '../App.css';
import Fortalezas from '../components/Fortalezas';
import NavBarMejorado from '../components/NavBarMejorado';
import Texto from '../components/TextoJL';
import Experiencia from '../components/Experiencia';
import Formacion from '../components/Formacion';
import Cards from '../components/Cards';
import SoftSkills from '../components/SoftSkills';
import Contacto from '../components/Contacto';
import { Text} from "@nextui-org/react";



function Index() {
  return (
    <>
     <NavBarMejorado className='navbar'></NavBarMejorado>
    
    <section className='i'></section>
    <section className='inicio' display='space-between'>
        <div>
          <Texto></Texto>
          <div className='botones'>
          </div>
        </div>
        <img src={logo} id='jl' />
    </section>
    <section className='segundaparte'>
      
      <Text h1 className='centrar principal'>Formacion</Text>
      <Text h2 className='centrar'>Experiencia</Text>
      <Experiencia></Experiencia>
      <Text h2 className='centrar'>Educacion</Text>
      <Formacion></Formacion>
    </section>
    <section className='AcercaDeMi'>
      <Text h1 className='centrar principal acerca'>Acerca de Mi</Text>
      <Text h2 className='centrar'>Tecnologias</Text>
      <Cards></Cards>
      <Text h2 className='centrar'>Soft-Skills</Text>
      <SoftSkills></SoftSkills>
      <Text h2 className='centrar'>Fortalezas</Text>
      <Fortalezas></Fortalezas>
    </section>
    <section className='Contacto principal'>
    <Text h1 className='centrar principal'>Contacto</Text>
    <Contacto></Contacto>
    </section>
    </>
  );
}
export default Index;