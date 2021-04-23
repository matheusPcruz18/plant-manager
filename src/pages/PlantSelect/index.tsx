import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, ActivityIndicator  } from 'react-native';
import { 
  Container,
  Heading,
  Title,
  Subtitle,
  EnvironmentArea,
  Plants
} from './style';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import { PlantProps } from '../../libs/storage';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { Load } from '../../components/Load';

import colors from '../../styles/colors';


interface EnvironmentProps{
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  
  const [page, setPage] = useState(1);
  const [isMoreToLoad, setIsMoreToLoad] = useState(false);

  const navigation = useNavigation();

  const handleEnvironmentSelect = (environment : string) => {
    setEnvironmentSelected(environment);

    if(environment === 'all'){
      return setFilteredPlants(plants);
    }else{
      const filtered = plants.filter(plant => (
        plant.environments.includes(environment)
      ))

      setFilteredPlants(filtered)
    }
  }

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if(!data)
      return setLoading(true);

    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    }else{
      setPlants(data);
      setFilteredPlants(data);
    }
    
    setLoading(false);
    setIsMoreToLoad(false);
  }

  const handleFetchMore = (distance : number) => {
    if(distance < 1)
      return;
    
    setIsMoreToLoad(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  const handlePlantSelect = (plant : PlantProps) => {
    navigation.navigate('PlantSave', { plant });
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments?_sort=title&order=asc');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }

    fetchEnvironment();

  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if(loading)
    return <Load />
  return(
    <Container>
      <Heading>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>Você quer colocar sua planta?</Subtitle>
      </Heading>

      <EnvironmentArea>
        <FlatList
          data={environments}
          keyExtractor={( item ) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelect(item.key)}
              key={item.key}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </EnvironmentArea>
      
      <Plants>
        <FlatList 
          data={filteredPlants}
          keyExtractor={( item ) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.plantsList}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => 
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            isMoreToLoad 
            ? <ActivityIndicator color={colors.green} />
            : <></>
          }
        />
      </Plants>
    
    </Container>
  )
}

const styles = StyleSheet.create({
  environmentList: {
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 32,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  plantsList: {
    
  }
})