import java from '../assets/svg/java.svg'
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function App() {


  return (
    <Grid.Container gap={2} justify="space-around">
 
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={6} sm={1}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <img src={java}height={120}></img>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>Java</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        

    </Grid.Container>
  );
}
