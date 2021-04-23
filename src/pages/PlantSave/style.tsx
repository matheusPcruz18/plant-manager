import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const PlantName = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 5px;
`;

export const PlantAbout = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  margin-top: 10px;
  color: ${colors.heading};
`;

export const Controller = styled.View`
  background-color: ${colors.white};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 15px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const WaterDropImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-family: ${fonts.text};
  text-align: justify;
  margin-left: 20px;
  color: ${colors.blue};
`;

export const AlertLabel = styled.Text`
  font-family: ${fonts.complement};
  font-size: 14px;
  text-align: center;
  margin-top: -25px;
  margin-bottom: 5px;
  color: ${colors.heading};
`;

export const AndroidTimePickerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 35px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 10px;
  background-color: ${colors.shape};
`;

export const TimePickerText = styled.Text`
  font-size: 21px;
  font-family: ${fonts.text};
  color: #5C6660;
  opacity: 0.8;
`;