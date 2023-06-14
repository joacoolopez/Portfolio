import { Container, Text } from "@nextui-org/react";
import '../App.css'

export default function Texto() {
  const  descripcion = "Soy un estudiante de Sistemas que busca seguir adquiriendo experiencia en el rubro informático,"
  const descripcion2 =  "con muchas ganas de aprender y superarme."

  return (
    <>
    
    <div className="texto">
            <Text
            className="texto"
            h1
            css={{
            color: "black",
            marginRight: "10px"
            }}
            weight={"light"}
            >
                Hola! Soy
            </Text>
            
            <Text
            className="texto"
            h1
            size={60}
            css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold">
            Joaquin Lopez
            </Text>
    </div>
    <Text h3>Estudiante de Gestion de IT</Text>
    <Text size="$md">{descripcion}</Text>
    <Text>{descripcion2}</Text>
    </>
  );
}
