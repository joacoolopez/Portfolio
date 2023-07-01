import '../App.css'
import { Table, Button, NavBar, Navbar } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import getProducts from '../controllers/recluiter.api';

export default function Informacion() {

  const [recluiter, setRecluiter] = useState([])
  const accessToken = sessionStorage.getItem('access-token')


  // useEffect(()=>{
  //   getProducts(accessToken, setRecluiter)
  // }, [setRecluiter, accessToken]
  // );

  const navigate = useNavigate();

  function eliminarToken(){
      sessionStorage.clear(accessToken)
      navigate("/signin")
  }
  
  useEffect(() => {
    const accessToken = sessionStorage.getItem('access-token');
    if (!accessToken) {
      // Si el token no está presente, redirige al usuario a la página de inicio de sesión
      navigate('/signin');
    } else {
      // Si el token está presente, realiza las operaciones necesarias
      getProducts(accessToken, setRecluiter);
    }
  }, [navigate]);

  return (
    <>
      <Navbar isBordered maxWidth="fluid">
        <Navbar.Content hideIn="xs" css={{ marginLeft: 'auto' }}>
          <Navbar.Item><Button color="secondary" auto onClick={eliminarToken}>Salir</Button></Navbar.Item>
        </Navbar.Content>
      </Navbar>
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
        <Table.Column>NOMBRE</Table.Column>
        <Table.Column>APELLIDO</Table.Column>
        <Table.Column>MAIL</Table.Column>
        <Table.Column>NUMERO DE TELEFONO</Table.Column>
        <Table.Column>COMENTARIO</Table.Column>
      </Table.Header>
      <Table.Body>
        {recluiter.map((recluiter, index) => {
          return (
            <Table.Row key={recluiter._id}>
              <Table.Cell>{recluiter.name}</Table.Cell>
              <Table.Cell>{recluiter.lastname}</Table.Cell>
              <Table.Cell>{recluiter.email}</Table.Cell>
              <Table.Cell>{recluiter.nrotelefono}</Table.Cell>
              <Table.Cell>{recluiter.comentario}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
    </>
  );
}
