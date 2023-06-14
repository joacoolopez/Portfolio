import { Card, Text, Grid } from "@nextui-org/react";
import comunicativo from '../assets/svg/comunicativo.svg'
import objetivo from '../assets/svg/objetivo.svg'
import curioso from '../assets/svg/curioso.svg'

export default function Fortalezas() {
  return (

    <Grid.Container gap={2} justify="space-around">
      <Grid xs={12} md={4} justify="center">
      <Card isHoverable variant="bordered" css={{ mw: "500px" }} justify="space-around" className="cardFortalezas">
            <Grid.Container>
                <Grid xs={6} justify="center">
                    <Card.Body >
                        <Text h2 justify="center" className="centrar" css={{color: "white"}} >Curioso</Text>
                    </Card.Body>
                </Grid>
                <Grid xs={6} justify="center">
                    <Card.Image img src={curioso} css={{ mw: "70px" }}></Card.Image>
                </Grid>
            </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={12} md={4} justify="center">
      <Card isHoverable variant="bordered" css={{ mw: "500px" }} justify="space-around" className="cardFortalezas">
            <Grid.Container>
                <Grid xs={6} justify="center">
                    <Card.Body >
                        <Text h2 justify="center" className="centrar arreglo" css={{color: "white"}} >Objetivo</Text>
                    </Card.Body>
                </Grid>
                <Grid xs={6} justify="center">
                    <Card.Image img src={objetivo} css={{ mw: "70px" }}></Card.Image>
                </Grid>
            </Grid.Container>
        </Card>
      </Grid>
      <Grid xs={12} md={4} justify="center">
        <Card isHoverable variant="bordered" css={{ mw: "500px" }} justify="space-around" className="cardFortalezas">
            <Grid.Container>
                <Grid xs={6} justify="center">
                    <Card.Body >
                        <Text h2 justify="center" className="centrar arreglo" css={{color: "white"}}>Escucha</Text>
                    </Card.Body>
                </Grid>
                <Grid xs={6} justify="center">
                    <Card.Image img src={comunicativo} css={{ mw: "100px" }}></Card.Image>
                </Grid>
            </Grid.Container>
        </Card>
      </Grid>
    </Grid.Container>


    
  );
}