import React, { useState } from 'react';
import { 
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  WaterDropImage,
  TipText,
  AlertLabel,
  AndroidTimePickerButton,
  TimePickerText
} from './style';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';
import { SvgFromUri } from 'react-native-svg';
import { Alert, Platform } from 'react-native';
import { PlantProps, savePlant } from '../../libs/storage';

import waterDrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;
  const navigation = useNavigation();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora futura! ⏰')
    }

    if(dateTime){
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenAndroidTimePicker() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try{
      await savePlant({
        ...plant,
      dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado! :D',
        icon: 'hug',
        nextScreen: 'MyPlants'
      });

    }catch{
      Alert.alert('Não foi possivel salvar sua plantinha! 🙁')
    }
  }

  return(
    <Container>
      <PlantInfo>
        <SvgFromUri 
          uri={plant.photo} 
          height={150} 
          width={150} 
        />

        <PlantName>{plant.name}</PlantName>

        <PlantAbout>
          {plant.about}
        </PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <WaterDropImage source={waterDrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>

        {
          showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              onChange={handleChangeTime}
            />
          )
        }

        {
          Platform.OS === 'android' && (
            <AndroidTimePickerButton
              onPress={handleOpenAndroidTimePicker}
            >
              <TimePickerText>
                Mudar {format(selectedDateTime, 'HH:mm')}
              </TimePickerText>
            </AndroidTimePickerButton>
          )
        }

        <Button title="Cadastrar planta" onPress={handleSave} />
      </Controller>
    </Container>
  )
}