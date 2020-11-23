import React from 'react';
import { Container, Text } from './style'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Button, ImageBackground } from 'react-native';

export default function Download({navigation}){
    return(
        <ImageBackground source={{ uri: "https://dhwwtar19mmjy.cloudfront.net/lightpdf/wp-content/uploads/2020/04/download-books-pdf-1.jpg" }} style={{flex: 1}}>
        <Container>
            <Icon name="download" size={100} color="#F6BD56" />
            <Text>Você Ainda não Possui Nenhum Livro Baixado :'(</Text>
            <Text>Que Tal ir na Nossa Loja Para Começar a Leitura?!</Text>
            <Button title='Ao Infinito e Além :D'
                color="#F6BD56"
                onPress={()=> navigation.navigate('Store')}
            />
        </Container>
        </ImageBackground>
    );
}