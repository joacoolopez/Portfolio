import { Collapse, Text, Badge } from "@nextui-org/react";

export default function Formacion() {
  return (
    <Collapse.Group>
      <Collapse title="Licenciatura en Gestion de IT - UADE">
        <Text h5>
            Agosto 2021 - Actualidad
        </Text>
        <Text>
        Durante mi paso en Danone me encuentro realizando tableros de Power BI y ayudando al equipo de Data to Insight a migrar todas las bases de datos que se encuentra On-Premise a la nube. Mas especificamente a Azure. Ademas, realizo tareas de ETL con Informatica Cloud y automatizacion con Stonebranch.
        </Text>
      </Collapse>
      <Collapse title="Bachiller Orientado en Ciencias Economicas - Colegio Eccleston de Temperley">
        <Text h5>
            Marzo 2015 - Diciembre 2020
        </Text>
        <Text>
        Durante mi paso en Danone me encuentro realizando tableros de Power BI y ayudando al equipo de Data to Insight a migrar todas las bases de datos que se encuentra On-Premise a la nube. Mas especificamente a Azure. Ademas, realizo tareas de ETL con Informatica Cloud y automatizacion con Stonebranch.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}
