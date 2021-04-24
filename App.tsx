import React,{ useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import { 
  useFonts, 
  Jost_400Regular, 
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { PlantProps, StoragePlantProps } from './src/libs/storage';

import Routes from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    async function notifications() {
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log('########## NOTIFICAÇÕES AGENDADAS ##########');
      console.log(data);
    }

    notifications();

  } , [])

  if(!fontsLoaded){
    return <AppLoading />
  }


  return(
    <Routes />
  )
}