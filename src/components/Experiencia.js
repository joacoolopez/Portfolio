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
        En el trascurso de los 6 meses en MediaBrands estuve realiando diversas tareas. Al principio pase por el area de testing de aplicaciones internas de la empresa y relevamiento de requerimientos del negocio. Luego me dedique mas a la correccion de errores y mejoras de las aplicaciones con C# y Visual Basic. Tambien, en mis tiempos libres me gustaba ayudar al equipo de soporte tecnico.
        </Text>
      </Collapse>
    </Collapse.Group>
  );
}
