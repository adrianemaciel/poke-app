import React from 'react';
import Home from './screens/Home';
import Pokemons from './screens/Pokemons';
import Details from './screens/DetailsPokemons';
import Contact from './screens/Contact';
import Icon from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
          component={PokemonsRoute}
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

function PokemonsRoute() {
  return (
    <Stack.Navigator initialRouteName="pokemons">
      <Stack.Screen
        options={{headerShown: false}}
        name="pokemons"
        component={Pokemons}
      />
      <Stack.Screen
        name="details"
        component={Details}
        options={{headerTitle: 'Detalhes'}}
      />
    </Stack.Navigator>
  );
}

export default App;
