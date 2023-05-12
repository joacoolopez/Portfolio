import React from 'react';
//import { Button } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({
        particleCount: 550,
        spread: 180,

    });
  };

  return (
      <button className='b' color='#9750DD' onClick={handleConfetti}>Enviar</button>
  );
};

export default CustomButton;