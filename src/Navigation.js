import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </HomeStack.Navigator>
  );
}

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Loja" component={StoreScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF'
      }} />
    </StoreStack.Navigator>
  );
}

const DownloadStack = createStackNavigator();

function DownloadStackScreen() {
  return (
    <DownloadStack.Navigator >
      <DownloadStack.Screen name="Download" component={DownloadScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </DownloadStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator >
      <FavoritesStack.Screen name="Favoritos" component={FavoritesScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </FavoritesStack.Navigator>
  );
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
        tabBarAccessibilityLabel: 'true' 
      }}/>
    </Tab.Navigator>
  );
}
