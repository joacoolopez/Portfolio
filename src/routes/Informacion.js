import '../App.css'
import { Table } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import getProducts from '../controllers/recluiter.api';

export default function Informacion() {

  const [recluiter, setRecluiter] = useState([])
  const accessToken = sessionStorage.getItem('access-token')

  useEffect(()=>{
    getProducts(accessToken, setRecluiter)
  }, [setRecluiter, accessToken]
  );

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
        {recluiter.map((recluiter, index) => {
          return (
            <Table.Row key={recluiter._id}>
              <Table.Cell>{recluiter.name}</Table.Cell>
              <Table.Cell>{recluiter.lastname}</Table.Cell>
              <Table.Cell>{recluiter.email}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  );
}
