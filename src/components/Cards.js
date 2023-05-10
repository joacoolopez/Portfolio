import python from '../assets/img/python3.png'
import java from '../assets/img/java.png'
import javascript from '../assets/img/javascript.png'
import html5 from '../assets/img/html5.png'
import css3 from '../assets/img/css3.png'
import database from '../assets/img/database.png'
import { Card, Grid, Row, Text, Progress } from "@nextui-org/react";


export default function App() {


  return (
    <Grid.Container gap={2} justify="space-around">
 
        <Grid xs={6} sm={2}>
          <Card>
            <Card.Body css={{ p: 10 }}>
              <Card.Image img src={java}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Body css={{ p: 10 }}>
              <Card.Image img src={python}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Body css={{ p: 10 }}>
              <Card.Image img src={javascript}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Body css={{ p: 10 }}>
              <Card.Image img src={html5}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Body css={{ p: 10 }}>
              <Card.Image img src={css3}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Body css={{ p: 10 }}>
              <Card.Image img src={database}height={120}></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        

    </Grid.Container>
  );
}
