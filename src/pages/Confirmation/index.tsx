import React from 'react';
import { Platform } from 'react-native';
import { 
  Container,
  Content,
  Emoji,
  Title,
  SubTitle,
  Footer
} from './style';

import { Button } from '../../components/Button';

import colors from '../../styles/colors';

export function Confirmation() {
  return(
    <Container>
        <Content>
        
            <Emoji>
              😊
            </Emoji>
            <Title>
              Prontinho
            </Title>
            <SubTitle>
              Agora vamos começar a cuidar das 
              suas plantinhas com muito cuidado.
            </SubTitle>

          <Footer>
            <Button title="Começar" />
          </Footer>
          
        </Content>
    </Container>
  )
}