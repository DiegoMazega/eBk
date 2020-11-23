import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome5, EvilIcons } from '@expo/vector-icons';
import { HomeStackScreen, StoreStackScreen, DownloadStackScreen, FavoritesStackScreen } from './StackNavigation';

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
        labelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          width: 70,
        },
      }}
      backBehavior="history"
      initialRouteName = "Store"
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{
        title: 'Inicio',
        }}/>
      <Tab.Screen name="Favorites" component={FavoritesStackScreen} options={{
        title: 'Favoritos', 
      }}/>
      <Tab.Screen name="Store" component={StoreStackScreen} options={{
        title: 'Loja', 
      }}/>
      <Tab.Screen name="Download" component={DownloadStackScreen} options={{
        title: 'Download',
        tabBarAccessibilityLabel: 'true', 
      }}/>
    </Tab.Navigator>
  );
}
