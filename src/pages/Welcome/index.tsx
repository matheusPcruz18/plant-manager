import React from 'react';
import { 
  Container,
  Wrapper,
  WelcomeTitle, 
  WelcomeImage, 
  WelcomeSubTitle,
  WelcomeBtn
} from './style';
import { useNavigation } from '@react-navigation/core';
//ICONS
import { Feather } from '@expo/vector-icons';
//ASSETS
import wateringImg from '../../assets/watering.png';


export function Welcome() {
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('UserIdentification')
  }

  return(
    <Container>
      <Wrapper>
        <WelcomeTitle>
          Gerencie{'\n'}suas plantas de{'\n'} forma fácil
        </WelcomeTitle>

        <WelcomeImage 
          source={wateringImg}
          resizeMode="contain"
        />

        <WelcomeSubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </WelcomeSubTitle>

        <WelcomeBtn activeOpacity={0.6} onPress={handleStart}>
            <Feather 
              name="chevron-right"
              style={{fontSize: 30, color: '#fff'}}
            />
        </WelcomeBtn>
      </Wrapper>
    </Container>
  )
}