import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/avatar.png';

export function Header() {
  return (
    <Container>
      <GreetingArea>
        <Greeting>Olá,</Greeting>
        <UserName>Matheus</UserName>
      </GreetingArea>

      <Avatar source={userImg} />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
`;

const GreetingArea = styled.View``;

const Greeting = styled.Text`
  font-size: 32px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

const UserName = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 40px;
`;

const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;