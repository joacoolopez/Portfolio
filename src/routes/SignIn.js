import { Input, Grid, Button } from "@nextui-org/react";
import '../App.css'
import {Link, useNavigate} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import login from "../controllers/login.api";
import countUser from "../controllers/countUser.api";



export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      countUser(setIsLoggedIn)
    }, [setIsLoggedIn]
    );

    


    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await login(email,password);
        console.log(response);
        if (response.estado){
          sessionStorage.setItem("access-token",response.token);
          navigate("/informacion");
        }else{
          alert("Contrasena incorrecta")
        }
      };
      



  return (
    <div className="signin">
        <form onSubmit={handleSubmit}>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} justify="center">
                <Input
                value={email}
                clearable
                color="secondary"
                type="text"
                label="Email"
                placeholder="Enter your email"
                onChange={handleEmailChange}
                />
            </Grid>
            <Grid xs={12}justify="center">
                <Input
                value={password}
                clearable
                color="secondary"
                type="password"
                label="Password"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                />
            </Grid>
            <Grid xs={12}justify="center">
                <Button color="secondary" type="submit">Ingresar</Button>
            </Grid>
            <Grid xs={12}justify="center">
                {isLoggedIn && (
                <Link to="/register">
                  <Button color="secondary">Registrar</Button>
                </Link>
                
                )}  

            </Grid>
        </Grid.Container>
        </form>
        
    </div>
    
  );
}
