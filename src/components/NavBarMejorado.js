import { Navbar, Text,  Avatar, Dropdown } from "@nextui-org/react";
import { Link } from "react-scroll";
import {Link as L} from "react-router-dom"
import '../App.css'
import github from '../assets/svg/linkedin.svg';

export default function NavBarMejorado() {

  return (
      <Navbar isBordered variant="sticky" maxWidth="fluid">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* logo */}
          <Text b color="inherit" hideIn="xs">
            
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
        
        
        <Link  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} smooth={true} offset={200} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Inicio</Text>
            </Navbar.Item>
        </Link>
        <Link  to='segundaparte' smooth={true} offset={-70} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Formacion</Text>
            </Navbar.Item>
        </Link>
        <Link  to='tecnologias' smooth={true} offset={-70} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Tecnologias</Text>
            </Navbar.Item>
        </Link>
        <Link  to='soft' smooth={true} offset={-70} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Soft-Skills</Text>
            </Navbar.Item>
        </Link>
        <Link  to='fort' smooth={true} offset={-70} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Fortalezas</Text>
            </Navbar.Item>
        </Link>
        <Link  to='Contacto' smooth={true} offset={200} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Contacto</Text>
            </Navbar.Item>
        </Link>
        
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
                <a href="https://www.linkedin.com/in/joaquinlopez2002/">
                <Avatar  
                  size="md"
                  src={github}
                />
                </a>
            </Navbar.Item>
            
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
            <Navbar.CollapseItem activeColor="secondary">
                <Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} smooth={true} offset={200} duration={500} block color="secondary" >Inicio</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='segundaparte' smooth={true} offset={-70} duration={500} block color="secondary" >Formacion</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='tecnologias' smooth={true} offset={-70} duration={500} block color="secondary" >Tecnologias</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='soft' smooth={true} offset={-70} duration={500} block color="secondary" >Soft-Skills</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='fort' smooth={true} offset={-70} duration={500} block color="secondary" >Fortalezas</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='Contacto' smooth={true} offset={200} duration={500} block color="secondary" >Contacto</Link>
            </Navbar.CollapseItem>

        </Navbar.Collapse>
      </Navbar>

  );
}
