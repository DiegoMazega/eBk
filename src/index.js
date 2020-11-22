import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Navigation from './components/global/Navigation';


export default function App() {
    return ( 
        <>
            <StatusBar 
                barStyle="light-content"
                backgroundColor= "#000000"
            />
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </>
    );
}