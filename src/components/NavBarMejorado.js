import { Navbar, Text,  Avatar, Dropdown } from "@nextui-org/react";
import { Link } from "react-scroll";
import '../App.css'

export default function NavBarMejorado() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


  return (
      <Navbar isBordered variant="sticky">
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
            ACME
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
        <Link  to='segundaparte' smooth={true} offset={200} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Experiencia</Text>
            </Navbar.Item>
        </Link>
        <Link  to='segundaparte' smooth={true} offset={200} duration={500} color="text">
            <Navbar.Item block color="secondary">
            <Text size="$md" className="navv"> Acerca de mi</Text>
            </Navbar.Item>
        </Link>
        <Link  to='segundaparte' smooth={true} offset={200} duration={500} color="text">
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
        </Navbar.Content>
        <Navbar.Collapse>
            <Navbar.CollapseItem activeColor="secondary">
                <Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} smooth={true} offset={200} duration={500} block color="secondary" >Inicio</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='segundaparte' smooth={true} offset={200} duration={500} block color="secondary" >Experiencia</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='segundaparte' smooth={true} offset={200} duration={500} block color="secondary" >Acerca de mi</Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem activeColor="secondary">
                <Link to='segundaparte' smooth={true} offset={200} duration={500} block color="secondary" >Contacto</Link>
            </Navbar.CollapseItem>

        </Navbar.Collapse>
      </Navbar>

  );
}
