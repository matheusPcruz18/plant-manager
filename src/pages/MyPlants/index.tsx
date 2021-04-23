import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { 
  Container,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  Plants,
  PlantTitle
} from './style';
import { useRoute } from '@react-navigation/core';
import { loadPlant, PlantProps, savePlant } from '../../libs/storage';
import { formatDistance } from 'date-fns/esm';
import { pt } from 'date-fns/locale';

import waterDrop from '../../assets/waterdrop.png';

import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

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
            />
          )}
          showsVerticalScrollIndicator={false}
        />

      </Plants>

    </Container>
  )
}