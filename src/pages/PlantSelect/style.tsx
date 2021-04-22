import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding-top: 8px;
`;

export const Heading = styled.View`
  padding-left: 25px;
  padding-right: 25px;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 20px;
  margin-top: 15px;
`;
export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  line-height: 20px;
`;

export const EnvironmentArea = styled.View`
  background-color: transparent;
`;

export const Plants = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;
`;