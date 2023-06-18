import { Input, useInput, Grid, Button } from "@nextui-org/react";
import '../App.css'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes, Link, useNavigate} from "react-router-dom"
import React, { useState } from 'react';
import login from "../controllers/login.api";



export default function SignIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
      };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
    let response = await login(username,password);
    console.log(response)
    sessionStorage.setItem("access-token",response.token);
    navigate("/informacion")
      };


  return (
    <div className="signin">
        <form onSubmit={handleSubmit}>

        
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} justify="center">
                <Input
                value={username}
                clearable
                color="secondary"
                type="text"
                label="Username"
                placeholder="Enter your username"
                onChange={handleUsernameChange}
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
            
        </Grid.Container>
        </form>
    </div>
    
  );
}
