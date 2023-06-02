import React from 'react';
import Home from './screens/Home';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import Pokemons from './screens/Pokemons';
import Contact from './screens/Contact';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokémons"
          component={Pokemons}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="staro" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contatos"
          component={Contact}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="phone" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
