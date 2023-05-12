import '../App.css'
import { Table } from "@nextui-org/react";

export default function Informacion() {
  return (
    <Table
      color={'secondary'}
      aria-label="Example static collection table"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="single"
    >
      <Table.Header>
        <Table.Column>NOMBRE Y APELLIDO</Table.Column>
        <Table.Column>MAIL</Table.Column>
        <Table.Column>NUMERO DE TELEFONO</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Mario Alberto</Table.Cell>
          <Table.Cell>mario@gmail.com</Table.Cell>
          <Table.Cell>1140402020</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Juan Rodriguez</Table.Cell>
          <Table.Cell>jjpedro@yahoo.com</Table.Cell>
          <Table.Cell>1112341234</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Domingo Sanchez</Table.Cell>
          <Table.Cell>domingo@hotmail.com</Table.Cell>
          <Table.Cell>1122223344</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>William Messi</Table.Cell>
          <Table.Cell>willy@google.com</Table.Cell>
          <Table.Cell>1144556677</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
