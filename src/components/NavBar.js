    import React from "react";
    import { Navbar, useTheme } from "@nextui-org/react";
    import '../App.css'
    import logo from '../assets/img/jl.png'
    
    export default function NavBar() {
      const [variant, setVariant] = React.useState("underline-rounded");
      const [activeColor, setActiveColor] = React.useState("secondary");
    
      const {isDark} = useTheme();
    
      const variants = [
        "default",
        "highlight",
        "highlight-solid",
        "underline",
        "highlight-rounded",
        "highlight-solid-rounded",
        "underline-rounded",
      ];
    
      
      return (
          <Navbar  variant="sticky" id="NavBar">
            <Navbar.Brand>
            <img src={logo} id="jl2"/>
            </Navbar.Brand>
            <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
              <Navbar.Link href="#" isActive>Inicio</Navbar.Link>
              <Navbar.Link href="#" >Experiencia</Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
          </Navbar>
      )
    }
    
