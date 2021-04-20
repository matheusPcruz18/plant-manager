import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  text-align: center;
  line-height: 32px;
  font-size: 23px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 50px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  margin-top: 15px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 40px;
  padding-left: 60px;
  padding-right: 60px;
`;