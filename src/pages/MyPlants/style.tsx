import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
  padding: 10px 30px;
`;

export const Spotlight = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 20px;
  background-color: ${colors.blue_light};
`;

export const SpotlightImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 10px 0;
`;