import logo from './assets/img/jl2.png';
import './App.css';
import NavBar from './components/NavBar';
import Texto from './components/TextoJL';
import { Text } from "@nextui-org/react";


function App() {
  return (
    <>
    <NavBar></NavBar>
    <section className='inicio' display='space-between'>
        <div>
          <Texto></Texto>
        </div>
        <img src={logo} id='jl' />
    </section>
    </>
  );
}

export default App;
