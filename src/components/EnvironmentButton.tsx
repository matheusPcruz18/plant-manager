import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

interface TextProps {
  isActive: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
} : EnvironmentButtonProps){
  return(
    <RectButton style={[styles.container, active && styles.containerActive]}  {...rest} >
      <Text isActive={active}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shape,
    borderRadius: 12,
    marginRight: 5
  },
  containerActive: {
    backgroundColor: colors.green_light
  }
})

const Text = styled.Text`
  color: ${ (props : TextProps) => (
      props.isActive ? colors.green_dark : colors.heading
    ) 
  };
  font-family: ${ (props : TextProps) => (
      props.isActive ? fonts.heading : fonts.text
    )
  };
`;
