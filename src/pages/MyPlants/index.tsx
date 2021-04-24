import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { 
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Plants,
  PlantTitle
} from './style';
import { loadPlant, PlantProps, removePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';

import waterDrop from '../../assets/waterdrop.png';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { Load } from '../../components/Load';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) => (
              oldData.filter((item) => item.id !== plant.id)
            ));
          }catch(error) {
            Alert.alert('Não foi possivel remover!')
          }
        }
      }
    ])
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}`
      );

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, [])

  if(loading)
    return <Load />
    
  return(
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterDrop} />

        <SpotlightText>{nextWatering}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantTitle>Próximas regadas</PlantTitle>

        <FlatList 
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => {handleRemove(item)}}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

      </Plants>

    </Container>
  )
}