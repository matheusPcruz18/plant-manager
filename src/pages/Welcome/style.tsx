import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import colors from '../../styles/colors';

const statusBar = StatusBar.currentHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: ${statusBar}px;
  padding-bottom: 20px;
`;

export const WelcomeTitle = styled.Text`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.heading};
`;

export const WelcomeImage = styled.Image`
  width: 282px;
  height: 274px;
`;

export const WelcomeSubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
  color: ${colors.heading};
  padding-left: 18px;
  padding-right: 18px;
`;