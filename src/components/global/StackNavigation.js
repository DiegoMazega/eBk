import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DownloadScreen from '../pages/Download';
import HomeScreen from '../pages/Home';
import StoreScreen from '../pages/Store';
import FavoritesScreen from '../pages/Favorites';
import DescriptionScreen from '../organisms/Description';

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 5000,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.1,
        restSpeedThreshold: 0.1,
    },
};


const HomeStack = createStackNavigator();
const StoreStack = createStackNavigator();
const DownloadStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const DescriptionStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerTitleAlign: 'center',
        animationEnabled: true,
        headerStyle:{
          backgroundColor: '#000000',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </HomeStack.Navigator>
  );
}

export function DescriptionStackScreen() {
    return (
      <DescriptionStack.Navigator >
        <DescriptionStack.Screen name="Description" component={DescriptionScreen} options={{
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor: '#000000',
          },
          transitionSpec: {
            open: config,
            close: config,
          },
          headerTintColor: '#FFFFFF'
        }}/>
      </DescriptionStack.Navigator>
    );
  }

export function StoreStackScreen() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Loja" component={StoreScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTintColor: '#FFFFFF'
      }} />
      <StoreStack.Screen name="Description" component={DescriptionScreen} options={{
          headerTitleAlign: 'center',
          title: 'Loja',
          headerStyle:{
            backgroundColor: '#000000',
          },
          transitionSpec: {
            open: config,
            close: config,
          },
          headerTintColor: '#FFFFFF'
        }}/>
    </StoreStack.Navigator>
  );
}

export function DownloadStackScreen() {
  return (
    <DownloadStack.Navigator >
      <DownloadStack.Screen name="Download" component={DownloadScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </DownloadStack.Navigator>
  );
}

export function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator >
      <FavoritesStack.Screen name="Favoritos" component={FavoritesScreen} options={{
        headerTitleAlign: 'center',
        headerStyle:{
          backgroundColor: '#000000',
        },
        transitionSpec: {
          open: config,
          close: config,
        },
        headerTintColor: '#FFFFFF'
      }}/>
    </FavoritesStack.Navigator>
  );
}