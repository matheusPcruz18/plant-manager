import React from 'react';
import { TouchableOpacityProps, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest } : ButtonProps) {
  return(
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      {...rest}
    >
      <TextBtn>
        {title}
      </TextBtn>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  }
})

//STYLES
export const TextBtn = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  padding-bottom: 3px;
`;