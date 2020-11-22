import React from 'react';
import { Text } from './styles';

export default function Description({ route }) {
    const { url, title, classification, age } = route.params;
    return (
        <Text>{title}</Text>
    )
}