import {Textarea, Input, Grid } from "@nextui-org/react";
import Boton from "./Boton"
import React, { useState } from 'react';
import sendMail from "../controllers/sendMail.api";


export default function Contacto() {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
    };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (name==='' || lastname==='' || email==='' || phone==='' || comment===''){
          alert("Campo invalido")
      }else{
          let response = await sendMail(name,lastname,email,phone,comment);
          console.log(response);
          alert("Se envio el formulario existosamente")
          setName("")
          setLastname("")
          setEmail("")
          setPhone("")
          setComment("")
          }
      }
    


  return (
    <form onSubmit={handleSubmit}>
    <Grid.Container gap={4} justify="center">
      
      <Grid xs={12} justify='center'>
        <Input
          value={name}
          shadow={false} 
          labelPlaceholder="Nombre" 
          status="secondary"
          width="300px"
          onChange={handleNameChange}
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Input 
          value={lastname}
          shadow={false} 
          labelPlaceholder="Apellido" 
          status="secondary"
          width="300px"
          onChange={handleLastnameChange}
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Input 
          value={email}
          shadow={false} 
          labelPlaceholder="Email" 
          status="secondary"
          width="300px"
          onChange={handleEmailChange}
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Input 
          value={phone}
          shadow={false} 
          labelPlaceholder="Numero de Contacto" 
          status="secondary"
          width="300px"
          onChange={handlePhoneChange}
        />
      </Grid>
      <Grid xs={12} justify='center'>
        <Textarea
          value={comment}
          shadow={false} 
          labelPlaceholder="Comentario"
          status="secondary"
          width="300px"
          onChange={handleCommentChange}
          />
      </Grid>
      <Grid xs={12} justify='center'>
        <Boton></Boton>
      </Grid>
      
    </Grid.Container>
    </form>
  );
}
