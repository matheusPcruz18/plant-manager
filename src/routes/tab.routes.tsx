import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../styles/colors';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator 
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 65,
          justifyContent: 'center',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
      }}
    >
      <AppTab.Screen 
        name="NewPlant" 
        component={PlantSelect} 
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="add-circle-outline" 
              size={size} 
              color={color} 
            />
          ))
        }}
      />

      <AppTab.Screen 
        name="MyPlants" 
        component={MyPlants} 
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="format-list-bulleted" 
              size={size} 
              color={color} 
            />
          ))
        }}
      />

    </AppTab.Navigator>
  )
}

export default AuthRoutes;

