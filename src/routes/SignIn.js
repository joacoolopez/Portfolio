import { Input, useInput, Grid, Button } from "@nextui-org/react";
import '../App.css'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes, Link} from "react-router-dom"

export default function SignIn() {
  return (
    <div className="signin">
        <Grid.Container gap={2} >
            <Grid xs={12} justify="center">
                <Input
                clearable
                color="secondary"
                type="text"
                label="Username"
                placeholder="Enter your username"
                />
            </Grid>
            <Grid xs={12}justify="center">
                <Input
                clearable
                color="secondary"
                type="password"
                label="Password"
                placeholder="Enter your password"
                />
            </Grid>
            <Grid xs={12}justify="center">
                <Link to={"/informacion"}>
                <Button color="secondary">Ingresar</Button>
                </Link>
                
            </Grid>
            
        </Grid.Container>
    </div>
    
  );
}
