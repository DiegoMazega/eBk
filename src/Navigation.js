import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DownloadScreen from './components/pages/Download';
import HomeScreen from './components/pages/Home';
import StoreScreen from './components/pages/Store';
import FavoritesScreen from './components/pages/Favorites';
import { Feather, FontAwesome5, EvilIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const icons = {
  Home:{
    lib: Feather,
    name: 'home'
  },
  Download:{
    lib: Feather,
    name: 'download'
  },
  Store:{
    lib: FontAwesome5,
    name: 'store'
  },
  Favorites:{
    lib: EvilIcons,
    name: 'like'
  }
}

export default function Navigation() {
  return (
    <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon: ({color, size})=>{
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color}/>;
        }
      })}
      tabBarOptions={{
        style:{
          backgroundColor: '#000',
        },
        activeTintColor: '#FCAF21',
        inactiveTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Inicio', 
        }}/>
      <Tab.Screen name="Download" component={DownloadScreen} options={{
        title: 'Download', 
        }}/>
      <Tab.Screen name="Store" component={StoreScreen} options={{
        title: 'Loja', 
        }}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
        title: 'Favoritos', 
        }}/>
    </Tab.Navigator>
  );
}
