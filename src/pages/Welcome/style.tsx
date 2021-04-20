import styled from 'styled-components/native';
import { StatusBar, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const statusBar = StatusBar.currentHeight;

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-top: ${statusBar}px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const WelcomeTitle = styled.Text`
  text-align: center;
  font-size: 28px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 34px;
  padding-top: 20px;
`;

export const WelcomeImage = styled.Image`
  height: ${Dimensions.get('window').width * 0.6}px;
`;

export const WelcomeSubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${fonts.text};
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  color: ${colors.heading};
`;

export const WelcomeBtn = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;