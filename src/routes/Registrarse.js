import { Input, Grid, Button } from "@nextui-org/react";
import '../App.css'
import {useNavigate} from "react-router-dom"
import React, { useState } from 'react';
import register from "../controllers/register.api";

export default function Informacion() {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value);
      };

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
      };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name==='' || lastname==='' || email==='' || password===''){
            alert("Campo invalido")
        }else{
            let response = await register(name,lastname,email,password);
            if (response.estado){
            alert("Usuario creado exitosamente")
            navigate("/signin");
            } else {
            alert("No se pueden crear mas de un usuario")
            }
        }
      };
      
    return (
      <div className="signin">
        <form onSubmit={handleSubmit}>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} justify="center">
                <Input
                value={name}
                clearable
                color="secondary"
                type="text"
                label="Name"
                placeholder="Enter your name"
                onChange={handleNameChange}
                />
            </Grid>
            <Grid xs={12} justify="center">
                <Input
                value={lastname}
                clearable
                color="secondary"
                type="text"
                label="Last Name"
                placeholder="Enter your lastname"
                onChange={handleLastnameChange}
                />
            </Grid>
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
                <Button color="secondary" type="submit">Registrar</Button>
            </Grid>
        </Grid.Container>
        </form>
        
    </div>
    );
  }
  