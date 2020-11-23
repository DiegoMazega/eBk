import React from 'react';
import { Container, Text } from './styles'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Button, ImageBackground } from 'react-native';

export default function Favorites({ navigation }) {
    return (
        <ImageBackground source={{ uri: "https://super.abril.com.br/wp-content/uploads/2016/12/unglue-livros.jpg" }} style={{flex: 1}}>
            <Container>
                <Icon name="sad-cry" size={100} color="#F6BD56" />
                <Text>Sua Lista de Favoritos Esta Vázia...</Text>
                <Button title="Vamos Favoritar?!"
                    color="#F6BD56"
                    onPress={() => navigation.navigate('Store')}

                />
            </Container>
        </ImageBackground>
    );
}