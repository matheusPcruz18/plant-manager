import React, { useState } from 'react';

import { 
  Container, 
  WelcomeTitle, 
  WelcomeImage, 
  WelcomeSubTitle,
} from './style';

import { Button } from '../../components/Button';

import wateringImg from '../../assets/watering.png';

export function Welcome() {
  return(
    <Container>
      <WelcomeTitle>
        Gerencie {'\n'}suas plantas de {'\n'} forma fácil
      </WelcomeTitle>

      <WelcomeImage source={wateringImg} />

      <WelcomeSubTitle>
        Não esqueça mais de regar suas {'\n'} plantas. 
        Nós cuidamos de lembrar você {'\n'} sempre que precisar.
      </WelcomeSubTitle>

      <Button title=">"/>
      
    </Container>
  )
}