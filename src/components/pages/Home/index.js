import React from 'react';
import { Container, Text } from './styles'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Button, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ImageBackground source={{ uri: "https://super.abril.com.br/wp-content/uploads/2018/04/bibliotecas.png?w=1024" }} style={{flex: 1}}>
            <Container>
                <Icon name="book-reader" size={100} color="#F6BD56" />
                <Text>Olá! Seja Bem Vindo ao eBk. Gostaria de dar uma olhada em nossa loja?</Text>
                <Button title='Ir para a Loja'
                    color="#F6BD56"
                    onPress={() => navigation.navigate('Store')}
                />
            </Container>
        </ImageBackground>
    );
}