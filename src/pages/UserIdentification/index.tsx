import React, { useState } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { 
  Container,
  KeyboardAvoiding,
  Content,
  Form, 
  Emoji,
  Title,
  TextInput,
  Footer
} from './style';
import colors from '../../styles/colors';
//COMPONENTS
import { Button } from '../../components/Button';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const handleInputBlur = () => {
    if(name){
      setIsFocused(true);
    }else{
      setIsFocused(false);
    }
  }

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  }

  const handleSubmit = () => {
    navigation.navigate('Confirmation')
  }

  return(
    <Container>
      <KeyboardAvoiding
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
          
              <Emoji>
                { isFilled ? '😄' : '😃'}
              </Emoji>
              <Title>
                Como podemos {'\n'}
                chamar você?
              </Title>

              <TextInput
                style={ isFocused && {borderColor: colors.green} }
                placeholder="Digite um nome"
                onBlur={ handleInputBlur }
                onFocus={ handleInputFocus }
                onChangeText={ handleInputChange }
              />

              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
      
            </Form>
        
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  )
}