import { Collapse, Text, Badge } from "@nextui-org/react";

export default function Formacion() {
  return (
    <Collapse.Group>
      <Collapse title="Licenciatura en Gestion de IT - UADE" expanded>
        <Text h5>
            Agosto 2021 - Actualidad
        </Text>
        <Text>
          Me encuentro estudiando la Lic. en Gestion de Tecnologia de Informacion en la Universidad Argentina de la Empresa donde tengo materias tanto de programacion como administrativas. Actualmente tengo 14 materias aprobadas como Paradigma Orientado a Objetos, Programacion 2, Sistemas de Informacion 2 y Gestion de Personas en Empresas Tecnologicas.
        </Text>
      </Collapse>
      <Collapse title="Bachiller Orientado en Ciencias Economicas - Colegio Eccleston de Temperley">
        <Text h5>
            Marzo 2015 - Diciembre 2020
        </Text>
        <Text>
        En mi paso por la secundaria me destacaba en matematica y economia empresarial. Mi mayor interes siempre fueron las materias de computacion y de marketing.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}
