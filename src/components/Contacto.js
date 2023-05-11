import { Input, Grid } from "@nextui-org/react";
import Boton from "./Boton"
import Button from 'react-bootstrap/Button';

export default function Contacto() {
  return (
    <Grid.Container gap={4} justify="center">
      <Grid xs={12} justify='center'>
        <Input 
          shadow={false} 
          labelPlaceholder="Nombre" 
          status="secondary"
          width="300px"
          
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Input 
          shadow={false} 
          labelPlaceholder="Apellido" 
          status="secondary"
          width="300px"
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Input 
          shadow={false} 
          labelPlaceholder="Numero de Contacto" 
          status="secondary"
          width="300px"
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Boton></Boton>
      </Grid>
    </Grid.Container>
  );
}
