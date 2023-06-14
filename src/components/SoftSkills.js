import { Card, Grid, Text, Link } from "@nextui-org/react";
import idioma from '../assets/svg/idioma.svg'
import equipo from '../assets/svg/equipo.svg'
import handshake from '../assets/svg/handshake.svg'
import responsabilidad from '../assets/svg/responsabilidad.svg'
import '../App.css'


export default function SoftSkills() {
  return (
    <>
    <Grid.Container gap={2} justify="space-around">
        <Grid xs={12} md={5} justify='center'>
            <Card css={{ p: "$6", mw: "500px" }}  >
                <Card.Header>
                    <img
                    alt="nextui logo"
                    src={idioma}
                    width="34px"
                    height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
                            Ingles
                            </Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }} >
                    <Text css={{color: "white"}}>
                    Luego de varios años de aprendizaje he logrado contar con nivel de ingles B2 el cual continuo perfeccionando.
                    </Text>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={12} md={5} justify='center'>
            <Card css={{ p: "$6", mw: "500px" }}>
                <Card.Header>
                    <img
                    alt="nextui logo"
                    src={responsabilidad}
                    width="30px"
                    height="30px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
                            Responsabilidad
                            </Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text css={{color: "white"}}>
                    Uno de los aspectos en lo que mas me destaco es la responsabilidad de cumplir con lo asignado o propuesto.
                    </Text>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={12} md={5} justify='center'>
            <Card css={{ p: "$6", mw: "500px" }}>
                <Card.Header>
                    <img
                    alt="nextui logo"
                    src={handshake}
                    width="34px"
                    height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
                            Resolucion de Conflictos
                            </Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text css={{color: "white"}}>
                    Cuento con experiencia en resolver conflictos tanto intrapersonales como en el software.
                    </Text>
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={12} md={5} justify='center'>
            <Card css={{ p: "$6", mw: "500px" }}>
                <Card.Header>
                    <img
                    alt="nextui logo"
                    src={equipo}
                    width="34px"
                    height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                        <Grid xs={12}>
                            <Text h4 css={{ lineHeight: "$xs", color: "white" }}>
                            Trabajo en Equipo
                            </Text>
                        </Grid>
                    </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                    <Text css={{color: "white"}}>
                    Considero que trabajar en equipo es crucial para alcanzar mejores resultados y maximizar el talento individual. 
                    </Text>
                </Card.Body>
            </Card>
        </Grid>   
    </Grid.Container>
    </>    
  );
}
