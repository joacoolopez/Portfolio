import { Collapse, Text, Badge } from "@nextui-org/react";

export default function Experiencia() {
  return (
    <Collapse.Group>
      <Collapse title="BI Trainee - Danone" expanded>
        <Text h5>
            Febrero 2023 - Actualidad
        </Text>
        <Text>
        Durante mi paso en Danone me encuentro realizando tableros de Power BI y ayudando al equipo de Data to Insight a migrar todas las bases de datos que se encuentra On-Premise a la nube. Mas especificamente a Azure. Ademas, realizo tareas de ETL con Informatica Cloud y automatizacion con Stonebranch.
        </Text>
      </Collapse>
      <Collapse title="Pasante IT - IPG MediaBrands">
        <Text h5>
            Septiembre 2022 - Febrero 2023
        </Text>
        <Text>
        Durante mi paso en Danone me encuentro realizando tableros de Power BI y ayudando al equipo de Data to Insight a migrar todas las bases de datos que se encuentra On-Premise a la nube. Mas especificamente a Azure. Ademas, realizo tareas de ETL con Informatica Cloud y automatizacion con Stonebranch.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}
