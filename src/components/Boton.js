import React from 'react';
import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Button as B} from '@mui/material'

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({
        particleCount: 550,
        spread: 180,

    });
  };

  return (
    <>
      <Button 
      color="secondary"
      onClick={handleConfetti}
      >
        Enviar
      </Button>
      <B>hola</B>
      </>
  );
};

export default CustomButton;