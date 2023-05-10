
import python from '../assets/img/python3.png'
import java from '../assets/img/java.png'
import javascript from '../assets/img/javascript.png'
import html5 from '../assets/img/html5.png'
import css3 from '../assets/img/css3.png'
import { Card, Grid, Row, Text } from "@nextui-org/react";


export default function App() {


  return (
    <Grid.Container gap={2} justify="space-around">
 
        <Grid xs={6} sm={2}>
          <Card>
          <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          <Card.Footer>
            <Progress value={50} color="primary" />
          </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
          <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card >
            <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card>
          <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          </Card>
        </Grid>
        <Grid xs={6} sm={2}>
          <Card>
          <Card.Image css={{ p: 10 }} img src={html5}height={120}>
            </Card.Image>
          </Card>
        </Grid>
        

    </Grid.Container>
  );
}
